import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableData = styled.td`
  padding: 8px;
  text-align: left;
`;

function MyTableCar(props) {
  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableData>Name</TableData>
            <TableData>Age</TableData>
            <TableData>Occupation</TableData>
          </TableRow>
        </TableHead>
        <tbody>
          {props.data.map((row, index) => (
            <TableRow key={index}>
              <TableData>{row.name}</TableData>
              <TableData>{row.age}</TableData>
              <TableData>{row.occupation}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default MyTableCar;