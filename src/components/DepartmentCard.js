import React from 'react'
import department from "../img/department.svg"

const DepartmentCard = () => {
  return (
    <div className='p-5 border border-[#CCCCCC] rounded-md text-center'>
        <img src={department} alt="" className='mx-auto'/>
        <p className='text-sm font-semibold pt-4'>Department name</p>
    </div>
  )
}

export default DepartmentCard