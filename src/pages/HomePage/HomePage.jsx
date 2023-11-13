import React from "react";
import { useSelector } from "react-redux";
import { Layout, Row } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideos";
import { selectCollapsed } from "../../store/ducks/homePageSlice";
import * as Styled from "./HomePage.styled";
const { Content } = Layout;

const HomePage = () => {
  const collapsed = useSelector(selectCollapsed);

  return (
    <Styled.LayoutContent>
      <Row>
        <Styled.SidebarColumn xs={24} sm={24} md={2} lg={1} xl={1}>
          <Sidebar />
        </Styled.SidebarColumn>
        <Styled.LayoutColumn
          xs={24}
          sm={24}
          md={22}
          lg={23}
          xl={23}
          opacity={collapsed ? 1 : 0.8} //adding opacity to the background when the sidebar is open
        >
          <Content>
            <FeaturedVideo />
          </Content>
        </Styled.LayoutColumn>
      </Row>
    </Styled.LayoutContent>
  );
};

export default HomePage;
