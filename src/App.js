import "./App.css";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex font-poppins">
      <div className="w-1/6 bg-[#0F2C64]">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <Admin />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
