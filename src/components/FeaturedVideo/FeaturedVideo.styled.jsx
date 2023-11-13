import styled from "styled-components";
import { Button } from "antd";

export const CategoryName = styled("h3")`
  color: #858688;
  text-transform: uppercase;
  font-size: 24px;
`;

export const Details = styled("span")`
  color: #f1f1f1;
  font-weight: 500;
  padding-right: 15px;
  font-size: 30px;
`;

export const DetailsContainer = styled("div")`
  margin: 8px 0;
`;

export const FeatureInfo = styled("p")`
  color: #f1f1f1;
  width: 40%;
  font-size: 32px;
  margin: 0;
`;
export const PlayButton = styled(Button)`
  border-radius: 40px;
  width: 200px;
  margin: 8px 8px 8px 0;
  color: #0c0c0c;
  font-weight: bold;
  height: 45px;
  cursor: pointer;
  font-size: 25px;
  z-index: ${(props) => props.zindex};

  @media (max-width: 768px) {
    z-index: ${(props) =>
      props.zindex && props.zindex > 0 ? 0 : props.zindex};
  }
`;

export const MoreInforButton = styled(Button)`
  border-radius: 40px;
  width: 200px;
  margin: 8px 8px 8px 0;
  color: #f1f1f1;
  font-weight: bold;
  background-color: #2727f5;
  border: 1px solid #2727f5;
  height: 45px;
  cursor: pointer;
  font-size: 25px;
`;

export const Features = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-position: center top;
  height: 100vh;
  text-align: start;
  padding-left: 30px;
  padding-top: 80px;
  transition: background-image 0.5s ease 0s;
  background-repeat: no-repeat;
  background-color: black;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 100%;
`;
