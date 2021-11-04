import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "خانه",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "ثبت نام",
    path: "/register",
    icon: <FaIcons.FaUserPlus/>,
    cName: "nav-text",
  },
  {
    title: "ورود",
    path: "/login",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "لیست کاربران",
    path: "/users",
    icon: <FaIcons.FaListAlt />,
    cName: "nav-text",
  },
  {
    title: "گزارش",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
 

  {
    title: "پشتیبانی",
    path: "/ContactUs",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "درباره ما",
    path: "/about",
    icon: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },

];
