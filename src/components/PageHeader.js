import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  border-bottom: 1px solid var(--color-warm-light);
  margin-bottom: 4rem;
`;

const PageHeader = props => {
  return (
    <div>
      <Header>{props.title}</Header>
    </div>
  );
};

export default PageHeader;
