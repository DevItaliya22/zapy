import React from 'react'
import WorkflowButton from "./_components/WorkFlowButton"
import Workflows from './_components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col relative justify-between">
      <div>
      </div>
      <div className='p-3 flex'>
        <h1 className='text-[2vw]'>Create workflow : &nbsp;</h1>
        
        <div><WorkflowButton  /></div>
      </div>
      <Workflows />
    </div>
  )
}

export default Page