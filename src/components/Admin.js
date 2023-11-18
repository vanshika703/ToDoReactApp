import SearchBar from "./Search";
import img from "../img/dashboard.svg";
import userimg from "../img/user.svg";
import settings from "../img/settings.svg";
import history from "../img/history.svg";
import filter from "../img/filterimg.svg";


const Admin = () => {
  return (
    <div className="flex justify-between items-center p-5 mt-2 shadow-md">
      <div className="flex justify-center items-center gap-4">
        <img src={userimg} alt="" className="w-16 h-16" />
        <div>
          <p className="text-base font-semibold">Mr Admin</p>
          <p className="text-[#808080] text-sm">Lorem Ipsum</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <SearchBar />
        <img src={settings} alt="" className="p-2 bg-[#E6EEFF] rounded-lg"/>
        <img src={history} alt="" />

        <img src={filter} alt="" />
      </div>
    </div>
  );
};

export default Admin;
