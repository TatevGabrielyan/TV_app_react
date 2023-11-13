import styled from 'styled-components';
import { Layout, Col } from 'antd';


export const LayoutContent = styled(Layout)`
    min-height: 100vh; 
`;

export const SidebarColumn = styled(Col)`
    z-index: 10; 
    background-color: #040404;
`;

export const LayoutColumn = styled(Col)`
    opacity: ${props => props.opacity};
`;