import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customerFunc, icon, color, dotColor }) => (
  <TooltipComponent position="BottomCenter" content={title}>
    <button
      type="button "
      onClick={customerFunc}
      style={{ color }}
      className="relative test-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        style={{ background: dotColor }}/
      >
        {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const { activeMenu, setActiveMenu, isClick, setIsClick, handleClick,screenSize,setScreenSize } =
    useStateContext();
    useEffect(()=>{
      const handleResize = () => setScreenSize(window.innerWidth)
      window.addEventListener('resize',handleResize);
      handleResize()
      return ()=> window.removeEventListener('resize',handleResize)
    },[])
    useEffect(()=>{
      if(screenSize <= 900){
        setActiveMenu(false)
      }
      else{
        setActiveMenu(true)
      }
    },[screenSize])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customerFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customerFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customerFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customerFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => "UserProfile"}
          >
            {" "}
            <img src={avatar} className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
            </p>
            {""}
            <p className="text-gray-400 font-bold ml-1 text-14">Darshit</p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>
        {isClick.cart && <Cart />}
        {isClick.chat && <Chat />}
        {isClick.notification && <Notification />}
        {isClick.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
