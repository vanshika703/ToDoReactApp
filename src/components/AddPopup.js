import React, { useState } from "react";

const Popup = ({ setIsPopupVisible }) => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentType, setDepartmentType] = useState("");
  const [departmentCategory, setDepartmentCategory] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSaveChanges = async () => {
    if (!departmentName) {
      setError("Department Name is required.");
      return;
    }

    setError(null);

    setLoading(true);

    const requestData = {
      name: departmentName,
      type: departmentType,
      category: departmentCategory,
      additionalInfo: additionalInfo,
    };

    const apiUrl =
      "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/createDepartment";

    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGZlMTc4MjMyMzIwNmVmMjViOWJiOSIsImlhdCI6MTcwMDI4NDA2MywiZXhwIjoxNzAwNTQzMjYzfQ.rSQ0blzVCB5LfqJDagQW78YUkfsb7Cmt2bf97Fetems";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log("Department added successfully");
        setDepartmentName(""); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
      handleClosePopup();
    }
  };

  return (
    <div className="fixed bg-gray-500 top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-1/3 bg-white mx-auto my-auto rounded-md p-8 relative">
        <button
          onClick={handleClosePopup}
          className="absolute top-2 right-2 text-[#CACACA] text-lg"
        >
          X
        </button>
        <p className="text-xl font-medium">Edit view</p>
        <p className="text-sm font-medium text-[#646464]">
          Customize and change/add Services
        </p>

        <div className="flex flex-col mt-5">
          <label className="text-sm font-medium" id="name">
            Department Name
          </label>

          <input
            type="text"
            id="name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            className="border border-[#CACACA] w-full p-1 rounded-md"
            required
          />
        </div>
        <div className="flex items-center gap-4 justify-between  mt-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Department Type</label>

            <input
              type="text"
              value={departmentType}
              onChange={(e) => setDepartmentType(e.target.value)}
              className="border border-[#CACACA] w-full p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Department Category</label>

            <input
              type="text"
              value={departmentCategory}
              onChange={(e) => setDepartmentCategory(e.target.value)}
              className="border border-[#CACACA] w-full p-1 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-sm font-medium">
            Additional Department Information
          </label>

          <input
            type="text"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border border-[#CACACA] w-full p-1 rounded-md py-8"
          />
        </div>
        <div className="mt-5 flex gap-5 justify-end items-center">
          <button
            onClick={handleClosePopup}
            className="text-[#CACACA] border border-[#CACACA] rounded px-3 py-1 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            className="text-white bg-[#0F2C64] border border-[#0F2C64] rounded px-2 py-1 text-sm"
            disabled={loading}
          >
            {loading ? "Adding..." : "Save Changes"}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Popup;
