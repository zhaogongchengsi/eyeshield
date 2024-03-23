import { Provide, Rule, Job as PJob } from "./provide";
import { Job, RecurrenceRule, scheduleJob } from 'node-schedule'

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
	protected jobCallback(job: PJob) {
		return async () => {
			console.log(job)
		}
	}
	// 监听
	async listen() {
		const schedules = await this.provide.getAllSchedules()
		for (const schedule of schedules) {
			const rule = this.createRecurrenceRule(schedule.rule);
			const id = schedule.job.id;
			const job = scheduleJob(rule, this.jobCallback(schedule.job))
			this.pool.set(id, job);
		}
	}
}