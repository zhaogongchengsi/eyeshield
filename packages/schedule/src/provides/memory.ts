import { Provide, Rule, Schedule } from "./provide";

class Memory implements Provide {
	private loop: Map<string | number, Schedule> = new Map();
	private id: number = 0;
	private jobId: number = 0;
	constructor() { }
	async getAllSchedules(): Promise<Schedule[]> {
		return Array.from(this.loop.values())
	}
	async createSchedule(rule: Rule, script: string): Promise<Schedule> {
		const id = this.id = this.id + 1
		const jid = this.jobId = this.jobId + 1
		const schedule: Schedule = {
			id: id,
			rule,
			job: {
				id: jid,
				script
			}
		}
		this.loop.set(schedule.id, schedule)
		return schedule
	}
	persist(): Promise<void> {
		return Promise.resolve()
	}
}

export default Memory