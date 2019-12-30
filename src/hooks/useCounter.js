import React, { useState, useCallback } from 'react'

export const useCounter=( )=> {
    const [count, setCount] = useState(0)
    const incrementCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        if (count > 0) {
            setCount(count - 1)
        }
    }, [count])
    return { count, incrementCounter, decrementCounter }
}