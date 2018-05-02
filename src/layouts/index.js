import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal, css } from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import PageHeader from '../components/PageHeader';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Styles Import ------------------------------------
// -----------------------------------------------------------------------------------------
import './styles/main.scss';
import './styles/baseStyle';
import { relative } from 'path';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const PositionSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--width-sidebar);
  min-height: 100vh;
`;

const RemoveSidebarAndHeaderSpace = styled.div`
  margin-left: var(--width-sidebar);
  margin-top: var(--height-header);
  /* display: grid; */
  /* justify-content: center; */
`;

const Content = styled.div`
  max-width: 1024px;
  margin: 12.5rem auto;
`;

const Layout = ({ children, data, location }) => (
  <div style={{ position: 'relative' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar siteTitle={data.site.siteMetadata.title} />
    <Header siteTitle={data.site.siteMetadata.title} />
    <RemoveSidebarAndHeaderSpace>
      <Content>
        {location.pathname !== '/' && <PageHeader pathname={location.pathname} />}
        {children()}
      </Content>
    </RemoveSidebarAndHeaderSpace>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
