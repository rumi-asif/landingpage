import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ecdfee;
`;


const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin-bottom: 5px;
  margin-right: 40px;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:checked {
    border-color: #0070f3;
    background-color: #812990;
  }

  &:checked:before {
    content: '✓';
    display: block;
    font-size: 16px;
    color: #fff;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export default function Checkbox({ label, checked = false, onChange }) {
  const [isChecked, setIsChecked] = useState({checked: false, id: 0});

  const data = [{name: "test1", id: 1}, {name: "test2"}, {name: "test3"}, {name: "test4"}];


  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    setIsChecked ({checked: isChecked, id: index })
  };

  return (
    <>
    {data.map((value, index)=>
    <Container key={index}>
    <CheckboxWrapper>
      <CheckboxInput checked={isChecked.checked && isChecked.id===index} onChange={(event)=>handleCheckboxChange(event, index)} id={index.id} />
      <CheckboxLabel htmlFor={label}>{value.name}</CheckboxLabel>
    </CheckboxWrapper>
    </Container>
    )}
    </> 
    
  );
}
