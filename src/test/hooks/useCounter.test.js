/** @format */

// import { act } from 'react-dom/test-utils';
import { testHook } from './testHook';
import useCounter from '../../hooks/useCounter';

let incrementCounter;
beforeEach(() => {
	testHook(() => {
		incrementCounter = useCounter();
	});
});

describe('useCounter', () => {
	test('should have two onClick function', () => {
		console.log('TEST: ', incrementCounter);
		expect(incrementCounter).toBeInstanceOf(Function);
		// expect(decrementCounter).toBeInstanceOf(Function);
	});

	// test('should have initial value', () => {
	//   expect(count).toBe(0);
	// });
});
