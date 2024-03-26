import { expect, describe, it } from 'vitest'
import { Schedule } from '..'
import { join } from 'path'
import Sqlite from '../storage/sqlite'

describe('Schedule', () => {

	const getScript = (name: string) => {
		return join(__dirname, 'scripts', name)
	}

	it('create Schedule', () => {
		const schedule = new Schedule(new Sqlite())
		expect(schedule).toBeDefined()
		expect(schedule).toBeInstanceOf(Schedule)
	})

	it('Should return a function', () => {
		const schedule = new Schedule(new Sqlite())
		expect(schedule.runJob).toBeInstanceOf(Function)
	})

	it('The default exported function will run by default', async () => {
		const schedule = new Schedule(new Sqlite())
		const jobScript = schedule.runJob(getScript('default.js'))
		expect(await jobScript()).toBe(100)
	})

	it('No export function will report an error', async () => {
		const schedule = new Schedule(new Sqlite())
		const jobScript = schedule.runJob(getScript('err.js'))
		await expect(() => jobScript()).rejects.toThrowError('Invalid working script')
	})

	it('If it is not a js script or the path does not exist, an error will be reported.', async () => {
		const schedule = new Schedule(new Sqlite())
		const jobScript = schedule.runJob('./asdasd/asd')
		await expect(() => jobScript()).rejects.toThrowError('The path does not exist, or the file is not a JavaScript')
	})

	it('Parameters can be passed', async () => {
		const schedule = new Schedule(new Sqlite())
		const jobScript = schedule.runJob(getScript('add.js'), 1, 2)
		expect(await jobScript()).toBe(3)
	})
})