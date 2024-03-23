import { expect, describe, it } from 'vitest'
import Memory from '../provides/memory'

describe('Memory', () => {
	it('should be able to create a memory schedule', async () => {
		const memory = new Memory()
		expect(memory).toBeDefined()
	})

	it('should be able to create a schedule', async () => {
		const memory = new Memory()
		expect(await memory.createSchedule({ minute: 1 }, 'test')).toBeDefined()
		const schedules = await memory.getAllSchedules()
		expect(schedules).toBeDefined()
		expect(schedules).toHaveLength(1)
		expect(schedules[0].job.script).toBe('test')
		expect(schedules[0].id).toBe(1)
		expect(schedules[0].job.id).toBe(1)
	})

	it('should not fail when performing persistent storage', async () => {
		const memory = new Memory()
		expect(await memory.createSchedule({ minute: 1 }, 'test')).toBeDefined()
		expect(await memory.persist()).toBeUndefined()
	})
})