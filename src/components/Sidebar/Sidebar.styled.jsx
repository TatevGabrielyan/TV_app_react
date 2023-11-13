import styled from "styled-components";
import { Menu } from "antd";

export const Icons = styled("img")`
  width: 20px;
`;

export const User = styled("img")`
  width: 50px;
`;

export const IconElement = styled("div")`
  width: 35px;
  height: 35px;
  justify-content: center;
`;

export const SidebarMenu = styled(Menu)`
  background-color: #040404;
  margin-top: 60px;

  .ant-menu-item {
    padding-left: 15px;
  }
  .ant-menu-item:nth-child(2) {
    margin-top: 25px;
  }
  .ant-menu-item-active {
    background-color: #3b486d !important;
  }
  .ant-menu-item-selected {
    background-color: ${({ collapsed }) =>
      !collapsed ? "#3B486D" : "#040404"};

    & > ${IconElement} {
      border-radius: 50%;
      background-color: #3b486d;
    }
  }
  .ant-menu-title-content {
    color: white;
    font-size: 25px;
    text-align: start;
    padding-left: 20px;
  }
`;

export const SidebarContainer = styled("div")`
  transition:
    width 0.3s ease,
    background-color 0.3s ease,
    opacity 0.3s ease;
  width: ${({ collapsed }) => (collapsed ? "80px" : "256px")};
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ collapsed }) => (collapsed ? "#040404" : "#040404")};
  position: relative;
`;

export const SidebarText = styled("div")`
  margin-top: auto;
  color: #858688;
  text-transform: uppercase;
  text-align: start;
  padding: 28px;
  font-family: "Tajawal", sans-serif;
  h4 {
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
  }
  h4:hover {
    background-color: #3b486d;
    border-radius: 5px;
  }
`;

export const Sidebar = styled("div")`
  width: 256px;
  height: 100%;
  position: fixed;
`;
