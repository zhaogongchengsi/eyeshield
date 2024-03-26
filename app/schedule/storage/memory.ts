import { Storage, Rule, Schedule, ScheduleInfo } from "./storage";

class Memory implements Storage {
	private loop: Map<string | number, Schedule> = new Map();
	private id: number = 0;
	constructor() { }
	async getAllSchedules(): Promise<Schedule[]> {
		return Array.from(this.loop.values())
	}
	async createSchedule(info: ScheduleInfo, rule: Rule, script: string): Promise<Schedule> {
		const id = this.id = this.id + 1
		const schedule: Schedule = {
			id: String(id),
			...rule,
			script,
			...info
		}
		this.loop.set(schedule.id, schedule)
		return schedule
	}
	persist(): Promise<void> {
		return Promise.resolve()
	}
}

export default Memory