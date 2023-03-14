import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'

export default function 
() {
  return (
    <>
        <FieldsWrapper>
        <CheckboxStyle>
        <h5>Fields</h5>
             <Checkbox/>
        </CheckboxStyle>
        <CheckboxStyle>
        <h5>Language</h5>
             <Checkbox/>
        </CheckboxStyle>
        </FieldsWrapper>
    </>
  )
}

const FieldsWrapper = styled.div`
    display: flex;
    align-item: center;
    margin: 5px;
    margin-left: 40px;
    padding: 5px;
`

const CheckboxStyle = styled.div`
margin-left: inherit;
width: 25%;
`