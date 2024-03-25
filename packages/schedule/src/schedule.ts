import { Provide, Rule, Job as PJob } from "./provides/provide";
import { Job, RecurrenceRule, scheduleJob } from 'node-schedule'
import { existsSync } from 'fs'

export class Schedule {
	private provide: Provide
	private pool: Map<string | number, Job>
	constructor(provide: Provide) {
		this.provide = provide;
		this.pool = new Map()
	}

	private createRecurrenceRule(rule: Rule) {
		return new RecurrenceRule(
			rule.year,
			rule.month,
			rule.date,
			rule.dayOfWeek,
			rule.hour,
			rule.minute,
			rule.second,
			rule.tz,
		)
	}
	
	runJob(job: PJob, ...args: any[]) {
		const { script } = job;
		return async () => {
			if (!existsSync(script) || ['.js'].some((ext) => !script.endsWith(ext))) {
				throw new Error('The path does not exist, or the file is not a JavaScript')
			}
			const module = await import(script)
			if (!module || typeof module.default !== 'function') {
				throw new Error('Invalid working script')
			}
			return module?.default(...args)
		}
	}

	async listen() {
		const schedules = await this.provide.getAllSchedules()
		for (const schedule of schedules) {
			const rule = this.createRecurrenceRule(schedule.rule);
			const id = schedule.job.id;
			const job = scheduleJob(rule, this.runJob(schedule.job))
			this.pool.set(id, job);
		}
	}
}