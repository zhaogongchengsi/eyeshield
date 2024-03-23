import { RecurrenceSegment, Timezone } from "node-schedule";

export type ID = string | number

export interface Job {
	id: ID
	script: string;
}

export interface Rule {
	id?: ID;
	year?: RecurrenceSegment,
	month?: RecurrenceSegment,
	date?: RecurrenceSegment,
	dayOfWeek?: RecurrenceSegment,
	hour?: RecurrenceSegment,
	minute?: RecurrenceSegment,
	second?: RecurrenceSegment,
	tz?: Timezone,
}

export interface Schedule {
	id: ID;
	rule: Rule;
	job: Job;
}

export interface Provide {
	getAllSchedules(): Promise<Schedule[]>;
	// getSchedule(id: ID): Promise<Schedule>;
	createSchedule(schedule: Schedule): Promise<Schedule>;
	// updateSchedule(schedule: Schedule): Promise<Schedule>;
	// deleteSchedule(id: ID): Promise<void>;
	// deleteAllSchedules(): Promise<void>;

	// 执行持久化
	persist(): Promise<void>;
}
