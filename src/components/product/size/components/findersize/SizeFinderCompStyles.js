import React from 'react';
import styled from 'styled-components';
import InputGroupSetText from './components/input/InputGroupSetText';
import RadioComp from './components/radiocomp/RadioComp';

export const Container = styled.section`
  background: var(--color-primary-white);

  @media all and (min-width: 1024px) {
    width: 768px;
    height: 390px;
    padding: 1em 3em 0;
  }
`

export const HeaderGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin: 0 0 0 0
`


export const HeaderRed = styled.h5`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 2rem;
  color: var(--color-primary-red);
  margin: 0;
  padding: 0;
`

export const CloseGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: var(--ft-semi-pro);
  color: var(--primary-grey);
  cursor: pointer;
`


export const CrossIcons = styled.img`
  height: 18px;
  width: 19px;
`


export const FormGroup = styled.form`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 8px;
  grid-column-row: 8px;
  width: auto;
  margin: 1.5em 0 0 0;
`

export const FormSubGroup = styled.div`
  width: auto;
  grid-area: 2 / 1 / -1 / -1;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin: 1em 0 0 0;
`


const RadioCompGender = ({ className, labelProps }) => (
  <RadioComp className={className} labelProps={labelProps} />
);
export const RadioCompGenderStyled = styled(RadioCompGender)`
  grid-area: 1 / 1 / 2 / 4;
  background: blue;
`;


const InputGroupSetTextHeight = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextHeightStyled = styled(InputGroupSetTextHeight)`
  grid-area: 2 / 1 / 3 / 2;
`

const InputGroupSetTextWeight = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextWeightStyled = styled(InputGroupSetTextWeight)`
  grid-area: 3 / 1 / -1 / 2;
`


const InputGroupSetTextChest = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextChestStyled = styled(InputGroupSetTextChest)`

`

const InputGroupSetTextLegs = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextLegsStyled = styled(InputGroupSetTextLegs)`

`

const InputGroupSetTextShoulder = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextShoulderStyled = styled(InputGroupSetTextShoulder)`

`

const InputGroupSetTextArms = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextArmsStyled = styled(InputGroupSetTextArms)`

`