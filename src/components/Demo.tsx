import React, { useState } from 'react'

export const Demo: React.FunctionComponent = () => {
    const [count, setCount] = useState<number>(0)

    return <div className="flex w-[300px] justify-between">
        <div onClick={()=> setCount(count + 1)}>加法</div>
        <div>{count}</div>
        <div onClick={()=> setCount(count - 1)}>減法</div>
    </div>
}