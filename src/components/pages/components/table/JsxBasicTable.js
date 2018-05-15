import React from 'react';
import faker from 'faker';
import { Table } from 'synapsefi-ui';
import { range } from 'lodash';

const renderTBody = () => (
  <tbody>
    {range(5).map(num => {
      return (
        <tr key={num}>
          <td>{faker.name.firstName()}</td>
          <td>{faker.name.lastName()}</td>
          <td>{faker.internet.email()}</td>
        </tr>
      );
    })}
  </tbody>
);

const JsxBasicTable = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {renderTBody()}
      </Table>
    </div>
  );
};

export default JsxBasicTable;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import faker from 'faker';
import { Table } from 'synapsefi-ui';
import { range } from 'lodash';

const renderTBody = () => (
  <tbody>
    {range(5).map(num => {
      return (
        <tr key={num}>
          <td>{faker.name.firstName()}</td>
          <td>{faker.name.lastName()}</td>
          <td>{faker.internet.email()}</td>
        </tr>
      );
    })}
  </tbody>
);

const JsxBasicTable = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {renderTBody()}
      </Table>
    </div>
  );
};

export default JsxBasicTable;
`;
