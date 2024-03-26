import { RecurrenceSegment, Timezone } from "node-schedule";

export type ID = string

export interface Job {
	script: string;
}

export interface Rule {
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
	name: string;
	description?: string | null;
	active?: boolean;
	script: string;
	id: string;
	year?: RecurrenceSegment,
	month?: RecurrenceSegment,
	date?: RecurrenceSegment,
	dayOfWeek?: RecurrenceSegment,
	hour?: RecurrenceSegment,
	minute?: RecurrenceSegment,
	second?: RecurrenceSegment,
	tz?: Timezone,
}

export interface ScheduleInfo {
	name: string;
	description?: string;
	active?: boolean;
}

export interface Storage {
	getAllSchedules(): Promise<Schedule[]>;
	// getSchedule(id: ID): Promise<Schedule>;
	createSchedule(info: ScheduleInfo,rule: Rule, script:string): Promise<Schedule>;
	// updateSchedule(schedule: Schedule): Promise<Schedule>;
	// deleteSchedule(id: ID): Promise<void>;
	// deleteAllSchedules(): Promise<void>;

	// 执行持久化
	persist(): Promise<void>;
}
