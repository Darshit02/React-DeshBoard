import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import {
  Navbar,
  Footer,
  Sidebar,
  TheamSettings,
  LineChart,
} from "./components";
import {
  Ecommerce,
  Order,
  Calender,
  Employee,
  Stacked,
  Pyramid,
  Customer,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  colorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const { activeMenu,themeSettings,setThemeSettings,currentColor,currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="setting" position="TopCenter">
              <button
                type="button"
                onClick={()=> setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-daek-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <TheamSettings/>}
          <Routes>
            {/* Dashbord */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            {/* pages */}
            <Route path="/orders" element={<Order />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/customers" element={<Customer />} />
            {/* APP */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calender/>} />
            <Route path="/color-picker" element={<ColorPicker />} />
            {/* charts */}
            <Route path="/line" element={<LineChart />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pi" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<colorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
        </div>
     </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
