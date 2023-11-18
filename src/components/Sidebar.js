import dashboardimg from "../img/dashboard.svg"

const Sidebar = () => {
  const adminItems = [
    { logo: dashboardimg, title: "Dashboard" },
    { logo: dashboardimg, title: "Lawyers" },
    { logo: dashboardimg, title: "Total Users" },
    { logo: dashboardimg, title: "Cases" },
    { logo: dashboardimg, title: "Deparments" },
    { logo: dashboardimg, title: "Notification" },
    { logo: dashboardimg, title: "Meetings" },
    { logo: dashboardimg, title: "Bookings" },
    { logo: dashboardimg, title: "Services" },
    { logo: dashboardimg, title: "Banners" },
    { logo: dashboardimg, title: "All Files" },
    { logo: dashboardimg, title: "To-Do List" },
    { logo: dashboardimg, title: "Permissions" },
    { logo: dashboardimg, title: "Messages" },
  ];

  return (
    <div className="sidebar text-white min-h-[100vh] text-center">
      <h2 className="text-[36px] p-10 pb-5">Admin</h2>
      <ul className="flex flex-col justify-between items-start h-[80vh] pl-10">
        {adminItems.map((item, index) => (
          <li key={index} className="flex gap-4 justify-center items-center">
            <img src={item.logo} alt={`${item.title} Logo`} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
