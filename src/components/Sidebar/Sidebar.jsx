import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCollapsed, selectCollapsed } from "../../store/ducks/homePageSlice";
import HomePageImages from "../../constants/images";
import * as Styled from "./Sidebar.styled";

const {
  searchIcon,
  homeIcon,
  TVShowsIcon,
  moviesIcon,
  GenresIcon,
  watchLaterIcon,
  user,
} = HomePageImages;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// adding icons and labels for sidebar
const items = [
  getItem(
    "Daniel",
    "0",
    <Styled.IconElement>
      {" "}
      <Styled.User src={user} alt="Search" />
    </Styled.IconElement>,
  ),
  getItem(
    "Search",
    "1",
    <Styled.IconElement>
      {" "}
      <Styled.Icons src={searchIcon} alt="Search" />
    </Styled.IconElement>,
  ),
  getItem(
    "Home",
    "2",
    <Styled.IconElement>
      {" "}
      <Styled.Icons src={homeIcon} alt="Home" />
    </Styled.IconElement>,
  ),
  getItem(
    "TV Shows",
    "3",
    <Styled.IconElement>
      {" "}
      <Styled.Icons src={TVShowsIcon} alt="TV Shows" />
    </Styled.IconElement>,
  ),
  getItem(
    "Movies",
    "4",
    <Styled.IconElement>
      {" "}
      <Styled.Icons src={moviesIcon} alt="Movies" />
    </Styled.IconElement>,
  ),
  getItem(
    "Genres",
    "5",
    <Styled.IconElement>
      {" "}
      <Styled.Icons src={GenresIcon} alt="Genres" />
    </Styled.IconElement>,
  ),
  getItem(
    "Watch Later",
    "6",
    <Styled.IconElement>
      {" "}
      <Styled.Icons src={watchLaterIcon} alt="Watch Later" />
    </Styled.IconElement>,
  ),
];

const Sidebar = () => {
  const collapsed = useSelector(selectCollapsed);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    if (collapsed) {
      dispatch(setCollapsed(false));
    }
  };

  const handleMouseLeave = () => {
    if (!collapsed) {
      dispatch(setCollapsed(true));
    }
  };

  return (
    <Styled.Sidebar>
      <Styled.SidebarContainer
        collapsed={collapsed}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Styled.SidebarMenu
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
        {!collapsed && (
          <Styled.SidebarText>
            <h4>Language</h4>
            <h4>Get help</h4>
            <h4>Exit</h4>
          </Styled.SidebarText>
        )}
      </Styled.SidebarContainer>
    </Styled.Sidebar>
  );
};
export default Sidebar;
