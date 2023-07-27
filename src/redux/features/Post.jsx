"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from '../services/postSliece'


const Post = () => {
  const[amount,setAmaunt]=useState('')
  const addvalue = Number(amount) || 0;
  const dispatch = useDispatch()
    const count = useSelector((state)=>state.counts.count)
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <p>count : {count}</p>
      <div>
        <input type="text" value={amount} onChange={(e)=>setAmaunt(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(addvalue))}>add amount</button>
      </div>
    </div>
  )
}

export default Post