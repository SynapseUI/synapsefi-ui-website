import React from 'react';
import styled from 'styled-components';

import _ from 'lodash';
import { Accordion } from 'synapsefi-ui';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import SubMenu from './sidebarMenu/SubMenu';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data Import ----------------------------------------
// -----------------------------------------------------------------------------------------

import {
  SECTION_TEXT,
  SUB_SECTIONS,
  SUB_SECTION_TEXT,
  SUB_SECTION_LINK,
} from '../../../helpers/dataForSidebar';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------

const SectionText = styled.div`
  padding: var(--padding-sidebar-section);
  cursor: pointer;
`;

const StyledAccordion = styled(Accordion)`
  border-top: none;
`;

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showContent: false };
  }

  toggleShowContent = () => {
    console.log('?');
    this.setState(prevState => ({ showContent: !prevState.showContent }));
  };

  render() {
    const { showContent } = this.state;
    const { sectionVal } = this.props;

    return (
      <StyledAccordion
        onClick={this.toggleShowContent}
        showContent={showContent}
        header={
          <SectionText className="font-sidebar font-sidebar--section">
            {sectionVal[SECTION_TEXT]}
          </SectionText>
        }
      >
        <SubMenu subSections={sectionVal[SUB_SECTIONS]} />
      </StyledAccordion>
    );
  }
}

export default SideBarMenu;
