import { add } from '../foo'
import { describe, it, expect } from 'vitest'

describe('add', () => {
	
	it('add' , () => {
		expect(add(1, 2)).toBe(3)
	})

})