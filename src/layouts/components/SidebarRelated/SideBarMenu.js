import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import _ from 'lodash';
import { Accordion } from 'synapsefi-ui';

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

const SubSectionWrapper = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-gap: 1rem;
`;

const SubSectionText = styled.div`
  padding: var(--padding-sidebar-sub-section);
  margin: var(--margin-sidebar-sub-section);

  &:hover {
    color: var(--color-teal);
  }
`;

class SideBarMenu extends React.Component {
  constructor(props){
    super(props);

    this.state = { showContent: true };

    this.renderSubsections = this.renderSubsections.bind(this);
  }

  renderSubsections = subSections => {    
    return (
      <SubSectionWrapper>
        {_.map(subSections, (subSectionVal, subSectionKey) => {
          return (
            <Link to={subSectionVal[SUB_SECTION_LINK]} key={subSectionKey}>
              <SubSectionText className="font-sidebar font-sidebar--sub-section">
                {subSectionVal[SUB_SECTION_TEXT]}
              </SubSectionText>
            </Link>
          );
        })}
      </SubSectionWrapper>
    );
  };

  render(){
    const { sectionVal, sectionKey } = this.props;

    return(
      <div >
        <Accordion header={
          <SectionText className="font-sidebar font-sidebar--section">
            {sectionVal[SECTION_TEXT]}
          </SectionText>
        }>
          {this.renderSubsections(sectionVal[SUB_SECTIONS])}
        </Accordion>
      </div>
    )
  }
}

export default SideBarMenu;