import { expect, describe, it } from 'vitest'
import { Provide, Schedule } from '..'
import { Schedule as PSchedule } from '../provides/provide'


describe('Schedule', () => {
	class MockProvide implements Provide {
		async getAllSchedules(): Promise<PSchedule[]> {
			throw new Error('Method not implemented.')
		}
		async createSchedule(schedule: PSchedule): Promise<PSchedule> {
			throw new Error('Method not implemented.')
		}
		persist(): Promise<void> {
			throw new Error('Method not implemented.')
		}
	}

	it('create Schedule', () => {
		const schedule = new Schedule(new MockProvide())
		expect(schedule).toBeDefined()
		expect(schedule).toBeInstanceOf(Schedule)
	})
})