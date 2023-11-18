import React from 'react';
import department from "../img/department.svg";

const DepartmentCard = ({ departmentName, departmentId, isChecked, onCheckboxChange }) => {
  return (
    <div className='p-5 border border-[#CCCCCC] rounded-md text-center w-40 relative'>
      <input
        type="checkbox"
        className="absolute top-2 right-2 cursor-pointer"
        checked={isChecked}
        onChange={() => onCheckboxChange(departmentId)}
      />
      <img src={department} alt="" className='mx-auto'/>
      <p className='text-sm font-semibold pt-4'>{departmentName}</p>
    </div>
  );
};

export default DepartmentCard;
