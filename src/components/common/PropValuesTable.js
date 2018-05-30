import React from 'react';
import styled from 'styled-components';
import { Table, RadioGroup } from 'synapsefi-ui';

const Main = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-bottom: 16px;
`;

const THead = styled.thead`
  border-top: none;
`;

const TRow = styled.tr`
  td:last-of-type {
    white-space: pre-wrap;
  }
`;

class PropValuesTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggleTable: true
    }

    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  renderHeader(){
    return (
      <THead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </THead>
    )
  }

  renderBody(){
    const { propValues } = this.props;

    return (
      <tbody>
        {
          propValues.map((item, idx) => {
            return (
              <TRow key={idx}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
              </TRow>
            )
          })
        }
      </tbody>
    )

  }

  render(){
    if (typeof this.props.propValues === 'undefined'){
      return null;
    }

    return(
      <Main>
        {this.props.toggleTable && <Table>
          {this.renderHeader()}
          {this.renderBody()}
        </Table>}
      </Main>
    )
  }
}

export default PropValuesTable;