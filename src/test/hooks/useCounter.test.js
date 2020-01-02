import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../hooks/useCounter.js';

it('Should have initial value of 0', () => {
    const { result: { current } } = renderHook(() => useCounter());
    
  expect(current.count).toEqual(0);
});