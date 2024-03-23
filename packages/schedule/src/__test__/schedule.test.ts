import { expect, describe, it } from 'vitest'
import { Schedule } from '..'
import Memory from '../provides/memory'
import { join } from 'path'

describe('Schedule', () => {

	const getScript = (name: string) => {
		return join(__dirname, 'scripts', name)
	}

	it('create Schedule', () => {
		const schedule = new Schedule(new Memory())
		expect(schedule).toBeDefined()
		expect(schedule).toBeInstanceOf(Schedule)
	})

	it('Should return a function', () => {
		const schedule = new Schedule(new Memory())
		expect(schedule.runJob).toBeInstanceOf(Function)
	})

	it('The default exported function will run by default', async () => {
		const schedule = new Schedule(new Memory())
		const jobScript = schedule.runJob({
			id: 0,
			script: getScript('default.js')
		})
		expect(await jobScript()).toBe(100)
	})

	it('No export function will report an error', async () => {
		const schedule = new Schedule(new Memory())
		const jobScript = schedule.runJob({
			id: 0,
			script: getScript('err.js')
		})
		await expect(() => jobScript()).rejects.toThrowError('Invalid working script')
	})

	it('If it is not a js script or the path does not exist, an error will be reported.', async () => {
		const schedule = new Schedule(new Memory())
		const jobScript = schedule.runJob({
			id: 0,
			script: './asdasd/asd'
		})
		await expect(() => jobScript()).rejects.toThrowError('The path does not exist, or the file is not a JavaScript')
	})

	it('Parameters can be passed', async () => {
		const schedule = new Schedule(new Memory())
		const jobScript = schedule.runJob({
			id: 0,
			script: getScript('add.js')
		}, 1, 2)

		expect(await jobScript()).toBe(3)
	})
})