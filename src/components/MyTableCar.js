import React, { useState }  from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
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

const Button = styled.button`
  background-color: #E9C656;
  border: none;
  color: black;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: auto;
  padding-bottom: 75%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const ExpandButton = styled.button`
  background-color: #E9C656;
  border: none;
  color: black;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 14px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 16px;
  &:after {
    content: "\\25BC";
    display: block;
    font-size: 16px;
    line-height: 0;
    margin-top: 4px;
  }
`;

const ExpandedRow = styled.tr`
  display: none;
  &.show {
    display: table-row;
  }
`;

const ExpandedData = styled.td`
  padding: 8px;
  text-align: left;
  white-space: pre-wrap;
`;

const Modal = styled.div`
  width: 80%;
  height: 80%;
  padding: 20px;
`;

const PopupWrapper = styled(Popup)`
  all: unset;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Button1 = styled.button`
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 24px;
  padding: 20px;
  border: ${(props) =>
    props.isSelected ? '3px solid yellow' : 'none'}; // add yellow border if isSelected prop is true
  border-radius: 10px;
  margin: 0 10px;
`;

const Price = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  background-color: #3D5AFE;
  color: #fff;
  font-size: 24px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
`;

function MyTableCar(props) {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (price) => {
    setSelectedButton(price);
  };

  const handleConfirmClick = () => {
    console.log(`Selected Price: ${selectedButton}`);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableData></TableData>
              <TableData>Once</TableData>
              <TableData>Vip</TableData>
              <TableData>Total</TableData>
            </TableRow>
          </TableHead>
          <tbody>
            {props.data.map((row, index) => (
              <TableRow key={index}>
                <TableData><ImageWrapper><Image src={`/${row.photo}`} alt={props.title} /></ImageWrapper></TableData>
                <TableData>
                  {row.once}<br/>
                  <PopupWrapper
                  trigger={<Button>Enter Now</Button>}
                  modal
                  closeOnDocumentClick={false}
                >
                  {close => (
                    <div >
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div >
                        <h2>Welcome to GFG!!!</h2>
                        <ButtonWrapper>
                        <Button1
                          color="#FC5185"
                          isSelected={selectedButton === '$10'} // set isSelected prop to true if selectedButton is '$10'
                          onClick={() => handleButtonClick('$10')}
                        >
                          <Price>$10</Price>
                          <br />
                          Basic
                        </Button1>
                        <Button1
                          color="#43A047"
                          isSelected={selectedButton === '$25'} // set isSelected prop to true if selectedButton is '$25'
                          onClick={() => handleButtonClick('$25')}
                        >
                          <Price>$25</Price>
                          <br />
                          Pro
                        </Button1>
                        <Button1
                          color="#3D5AFE"
                          isSelected={selectedButton === '$50'} // set isSelected prop to true if selectedButton is '$50'
                          onClick={() => handleButtonClick('$50')}
                        >
                          <Price>$50</Price>
                          <br />
                          Premium
                        </Button1>
                        <Button1
                          color="#FBBF24"
                          isSelected={selectedButton === '$100'} // set isSelected prop to true if selectedButton is '$100'
                          onClick={() => handleButtonClick('$100')}
                        >
                          <Price>$100</Price>
                          <br />
                          Ultimate
                        </Button1>
                      </ButtonWrapper>
                      <ConfirmButton onClick={handleConfirmClick}>Confirm</ConfirmButton>
                      </div>
                    </div>
                  )}
                  </PopupWrapper>
                  
                </TableData>
                <TableData>{row.vip}</TableData>
                <TableData>{row.total}</TableData>
              </TableRow>
           
              
            ))}
          </tbody>
        </Table>
        <ExpandButton onClick={() => console.log('Expand button clicked')} />
    </TableWrapper>
  </div>
  );
}

export default MyTableCar;
