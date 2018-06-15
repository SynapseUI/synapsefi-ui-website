import React from 'react';
import styled from 'styled-components';

const SectionText = styled.div`padding: var(--padding-sidebar-section);`;

class SideBarMenu extends React.Component {
  constructor(props){
    super(props);

    this.state = { showContent: true };
  }

  render(){
    return(
      <div key={sectionKey}>
        <SectionText
          className="font-sidebar font-sidebar--section"
          onClick={() => this.setState({ showContent: !this.state.showContent })}>
          {sectionVal[SECTION_TEXT]}
        </SectionText>
        {renderSubsections(sectionVal[SUB_SECTIONS])}
      </div>
    )
  }
}