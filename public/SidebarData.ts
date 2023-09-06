import { MdOutlineDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const icons = [MdOutlineDashboard, TbReportSearch, RiTeamLine, ImStatsDots];

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/me/dashboard",
    icon: icons[0],
    iconSize: 24,
  },
  {
    title: "Courses",
    path: "/me/courses",
    icon: icons[1],
    iconSize: 24,
  },
  {
    title: "Todo",
    path: "/me/teams",
    icon: icons[2],
    iconSize: 26,
  },
  {
    title: "Eventory",
    path: "/me/eventory",
    icon: icons[3],
    iconSize: 22,
  },
];
