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

const Title = styled.h1`
  margin: 32px 0px;
`;

class PropValuesTable extends React.Component {
  constructor(props){
    super(props);

    this.renderTitle = this.renderTitle.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  renderTitle(){
    if(this.props.propValues.title){
      return <Title>{this.props.propValues.title}</Title>
    }

    return null;
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
          propValues.data.map((item, idx) => {
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
    if (typeof this.props.propValues === 'undefined' || !this.props.toggleTable){
      return null;
    }

    return(
      <Main>
        {this.renderTitle(this.props.propValues.title)}

        <Table>
          {this.renderHeader()}
          {this.renderBody()}
        </Table>
      </Main>
    )
  }
}

export default PropValuesTable;