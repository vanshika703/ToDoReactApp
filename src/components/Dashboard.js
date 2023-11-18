import React from "react";
import SearchBar from "./Search";
import trash from "../img/trash-2.svg";
import edit from "../img/edit-2.svg";
import DepartmentCard from "./DepartmentCard";

const Dashboard = () => {
  return (
    <div>
      <div className="p-6 px-12 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className=" text-3xl font-medium">Deparments</h1>
          <div className="flex justify-center items-center gap-6">
            <SearchBar />
            <button className="bg-[#0F2C64] text-white py-1 px-2 rounded">
              Create Department
            </button>
            <img src={trash} alt="" />
            <img src={edit} alt="" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap p-10">
        <DepartmentCard />
      </div>
    </div>
  );
};

export default Dashboard;
