import React from 'react'
import department from "../img/department.svg"

const DepartmentCard = ({departmentName}) => {
  return (
    <div className='p-5 border border-[#CCCCCC] rounded-md text-center w-40'>
        <img src={department} alt="" className='mx-auto'/>
        <p className='text-sm font-semibold pt-4'>{departmentName}</p>
    </div>
  )
}

export default DepartmentCard