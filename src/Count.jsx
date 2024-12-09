import React, { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)

    function increase() {
        setCount(count+1)
        //alert(count);
    }
    function decrease() {
        setCount(count-1)
    }

    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </>
    )
}