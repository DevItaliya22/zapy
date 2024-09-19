"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
function Component() {
    const router = useRouter();

    useEffect(()=>{
        router.push("/workflows")
    },[router])
  return (
    <div className='flex justify-center items-center h-screen'>Redirect User to Workflow</div>
  )
}

export default Component