import SearchBar from "./Search";
import trash from "../img/trash-2.svg";
import edit from "../img/edit-2.svg";
import DepartmentCard from "./DepartmentCard";
import { useState, useEffect } from "react";
import AddPopup from "./AddPopup";

const Dashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, departments);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleCheckboxChange = (departmentId) => {
    const updatedSelection = [...selectedDepartments];
    const index = updatedSelection.indexOf(departmentId);

    if (index === -1) {
      updatedSelection.push(departmentId);
    } else {
      updatedSelection.splice(index, 1);
    }

    setSelectedDepartments(updatedSelection);
  };

  const handleDeleteSelectedDepartments = async () => {
    try {
      const authToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGZlMTc4MjMyMzIwNmVmMjViOWJiOSIsImlhdCI6MTcwMDI4NDA2MywiZXhwIjoxNzAwNTQzMjYzfQ.rSQ0blzVCB5LfqJDagQW78YUkfsb7Cmt2bf97Fetems";

      for (const departmentId of selectedDepartments) {
        const response = await fetch(
          `https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/department/${departmentId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (!response.ok) {
          setError(`Failed to delete department with ID: ${departmentId}`);
          return;
        }
      }

      setDepartments((prevDepartments) =>
        prevDepartments.filter(
          (department) => !selectedDepartments.includes(department._id)
        )
      );
      setSelectedDepartments([]);
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const authToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGZlMTc4MjMyMzIwNmVmMjViOWJiOSIsImlhdCI6MTcwMDI4NDA2MywiZXhwIjoxNzAwNTQzMjYzfQ.rSQ0blzVCB5LfqJDagQW78YUkfsb7Cmt2bf97Fetems";

        const response = await fetch(
          "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/department",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setDepartments(data.data);
        } else {
          setError("Failed to fetch departments");
        }
      } catch (error) {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [isPopupVisible]);

  return (
    <div>
      <div className="p-6 px-12 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className=" text-3xl font-medium">Departments</h1>
          <div className="flex justify-center items-center gap-6">
            <SearchBar />
            <button
              className="bg-[#0F2C64] text-white py-1 px-2 rounded"
              onClick={handleOpenPopup}
            >
              Create Department
            </button>
            <img
              src={trash}
              alt=""
              onClick={handleDeleteSelectedDepartments}
              className="cursor-pointer"
            />
            <img src={edit} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-10 gap-10">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {departments.map((department) => (
          <DepartmentCard
            key={department._id}
            departmentName={department.name}
            departmentId={department._id}
            isChecked={selectedDepartments.includes(department._id)}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      {isPopupVisible && <AddPopup setIsPopupVisible={setIsPopupVisible}/>}
    </div>
  );
};

export default Dashboard;
