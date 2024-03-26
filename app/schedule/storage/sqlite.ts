import { PrismaClient, Schedule as PrismaSchedule } from "@prisma/client";
import { Storage, Rule, Schedule, ScheduleInfo } from "./storage";
import { prismaClient } from "../../database";
import { RecurrenceSegment } from "node-schedule";
import { outputFile } from 'fs-extra'
import { join } from 'path'

export default class Sqlite implements Storage {
	private prismaSingleton: PrismaClient;
	private scriptsDir: string;
	constructor(scriptPath: string, dbFile: string) {
		this.scriptsDir = scriptPath
		this.prismaSingleton = prismaClient(dbFile);
	}

	private async createScript (name: string, content: string) {
		return await outputFile(join(this.scriptsDir, name), content)
	}

	private formatSchedule(schedule: PrismaSchedule): Schedule {
		return {
			script: join(this.scriptsDir, schedule.script!),
			name: schedule.name,
			id: schedule.id,
			description: schedule.description,
			active: schedule.active,
			year: schedule.year ? schedule.year : undefined,
			month: schedule.month ? schedule.month : undefined,
			date: schedule.date ? schedule.date : undefined,
			hour: schedule.hour ? schedule.hour : undefined,
			dayOfWeek: schedule.dayOfWeek ? schedule.dayOfWeek : undefined,
			minute: schedule.minute ? schedule.minute : undefined,
			second: schedule.second ? schedule.second : undefined,
			tz: schedule.tz ? schedule.tz : undefined,
		}
	}

	async createSchedule(info: ScheduleInfo,rule: Rule, script: string): Promise<Schedule> {
		const scriptName = `${info.name}-${Date.now()}.js`
		await this.createScript(scriptName, script)
		const transform = (value?: RecurrenceSegment) => {
			return value ? value.toString() : undefined
		}
		const schedule: PrismaSchedule = await this.prismaSingleton.schedule.create({
			data: {
				name: info.name,
				description: info.description,
				active: info.active || true,
				year: transform(rule.year),
				month: transform(rule.month),
				date: transform(rule.date),
				hour: transform(rule.hour),
				dayOfWeek: transform(rule.dayOfWeek),
				minute: transform(rule.minute),
				second: transform(rule.second),
				tz: transform(rule.tz),
				script: scriptName
			}
		})
		return this.formatSchedule(schedule)
	}
	persist(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	async getAllSchedules(): Promise<Schedule[]> {
		const schedules = await this.prismaSingleton.schedule.findMany()
		return schedules.map(schedule => this.formatSchedule(schedule))
	}
}