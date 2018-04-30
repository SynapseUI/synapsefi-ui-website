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

const StylePage = styled.div`
  padding: var(--height-header) 0 0 var(--width-sidebar);
  /* background-color: red; */
  margin: 48px 72px;
`;

const PageHeaderWrapper = styled.div`${props => props['isHome'] && css`display: none;`};`;

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
    <StylePage>
      <PageHeaderWrapper isHome={location.pathname === '/'}>
        <PageHeader title={location.pathname} />
      </PageHeaderWrapper>
      {children()}
    </StylePage>
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
