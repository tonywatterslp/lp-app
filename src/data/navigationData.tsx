import { SvgIcon } from "@mui/material";

// Import SVG icons
import LearningExperiencesIcon from "../assets/icons/LearningExperiencesIcon.svg";
import ResourcesIcon from "../assets/icons/ResourcesIcon.svg";
import PlaylistsIcon from "../assets/icons/PlaylistsIcon.svg";
import SkillsIcon from "../assets/icons/SkillsIcon.svg";
import UsersIcon from "../assets/icons/UsersIcon.svg";
import GroupsIcon from "../assets/icons/GroupsIcon.svg";
import EventsIcon from "../assets/icons/EventsIcon.svg";
import SettingsIcon from "../assets/icons/SettingsIcon.svg";
import SupportIcon from "../assets/icons/SupportIcon.svg";
import GoToLearnerDashboardIcon from "../assets/icons/GoToLearnerDashboardIcon.svg";
import OrganisationListIcon from "../assets/icons/OrganisationListIcon.svg";
import LogoutIcon from "../assets/icons/LogoutIcon.svg";
import GoToAdminDashboardIcon from "../assets/icons/GoToAdminDashboardIcon.svg";
import HomeIcon from "../assets/icons/HomeIcon.svg";
import DiscoverIcon from "../assets/icons/DiscoverIcon.svg";
import MyTeamSkillsIcon from "../assets/icons/MyTeamSkillsIcon.svg";
import ToolsIcon from "../assets/icons/ToolsIcon.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";

const ICON_SIZE = 28; // Define a constant for the icon size

// Admin menu items
export const adminNavItems = [
  {
    label: "AdminDashboard",
    path: "/admin-dashboard",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <HomeIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Learning Experiences",
    path: "/learning-experiences",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <LearningExperiencesIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Resources",
    path: "/resources",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <ResourcesIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Events",
    path: "/events",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <EventsIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Playlists",
    path: "/playlists",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <PlaylistsIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Users",
    path: "/users",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Groups",
    path: "/groups",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <GroupsIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Settings",
    path: "/settings",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <SettingsIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Tools",
    path: "/tools",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <ToolsIcon />
      </SvgIcon>
    ),
  },
];

export const adminSecondaryNavItems = [
  {
    label: "Support",
    path: "/support",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <SupportIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Learner Dashboard",
    path: "/learner-dashboard",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <GoToLearnerDashboardIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Organisation List",
    path: "/organisation-list",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <OrganisationListIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Logout",
    path: "/logout",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <LogoutIcon />
      </SvgIcon>
    ),
  },
];

// Learner menu items
export const learnerNavItems = [
  {
    label: "Search",
    path: "/search",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <SearchIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <HomeIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Discover",
    path: "/discover",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <DiscoverIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Events",
    path: "/events",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <EventsIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Skills Builder",
    path: "/skills-builder",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <SkillsIcon />
      </SvgIcon>
    ),
  },
  {
    label: "My Team Skills",
    path: "/team-skills",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <MyTeamSkillsIcon />
      </SvgIcon>
    ),
  },
];

export const learnerSecondaryNavItems = [
  {
    label: "Support",
    path: "/support",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <SupportIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Admin",
    path: "/learning-experiences",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <GoToAdminDashboardIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Organisation List",
    path: "/organisation-list",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <OrganisationListIcon />
      </SvgIcon>
    ),
  },
  {
    label: "Logout",
    path: "/logout",
    icon: (
      <SvgIcon
        sx={{
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}
      >
        <LogoutIcon />
      </SvgIcon>
    ),
  },
];
