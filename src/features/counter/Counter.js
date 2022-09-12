//rafce

import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementByAmount} from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <div >
                    <input
                        aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={e => setIncrementAmount(e.target.value)}/>
                    <button
                        onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                        Add Amount
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter