import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = (props) => {
  return (
    <div className='h-[90vh]  py-10 flex gap-20 items-center px-18'>
      <LeftContent/>
      <RightContent users={props.users}/> 
    </div>
  )
}

export default Page1Content