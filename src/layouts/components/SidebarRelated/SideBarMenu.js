import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import _ from 'lodash';

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
  margin-top: 1.5rem;
  margin-left: 1.5rem;
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
    if (this.state.showContent){
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
    }

    return null;
  };

  render(){
    const { sectionVal, sectionKey } = this.props;

    return(
      <div >
        <SectionText
          className="font-sidebar font-sidebar--section"
          onClick={() => this.setState({ showContent: !this.state.showContent })}>
          {sectionVal[SECTION_TEXT]}
        </SectionText>
        {this.renderSubsections(sectionVal[SUB_SECTIONS])}
      </div>
    )
  }
}

export default SideBarMenu;