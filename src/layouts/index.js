import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal, css } from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Header from '../layouts/components/Header';
import Sidebar from '../layouts/components/Sidebar';
import PageHeader from '../layouts/components/PageHeader';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Styles Import ------------------------------------
// -----------------------------------------------------------------------------------------
import '../styles/baseStyle';
import '../styles/sass/main.scss';

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
  margin-top: var(--height-header);
  margin-right: var(--min-content-left-and-right-margin);

  margin-left: calc(var(--width-sidebar) + var(--min-content-left-and-right-margin));
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
    <Header />
    <Sidebar />
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
