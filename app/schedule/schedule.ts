import { Storage, Rule, Job as PJob } from "./storage/storage";
import { Job, RecurrenceRule, scheduleJob } from 'node-schedule'
import { existsSync } from 'fs'

export class Schedule {
	private storage: Storage
	private pool: Map<string | number, Job>
	constructor(storage: Storage) {
		this.storage = storage;
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
	
	runJob(script: string, ...args: any[]) {
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
		const schedules = await this.storage.getAllSchedules()
		for (const schedule of schedules) {
			const rule = this.createRecurrenceRule(schedule);
			const job = scheduleJob(rule, this.runJob(schedule.script))
			this.pool.set(schedule.id, job);
		}
	}
}