import styled from "styled-components";
import ReactPlayer from "react-player";

export const TrendingNow = styled("div")`
  overflow: hidden;
`;

export const Image = styled("img")`
  width: 100%;
  height: auto;
  object-fit: none;
`;

export const Header = styled("h3")`
  color: #f1f1f1;
  padding-left: 25px;
  font-size: 32px;
  margin-bottom: -10px;
`;
export const ReactPlayerContainer = styled(ReactPlayer)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
