import React from 'react';

import Icon from '../Icon';

import { Container, Label } from './styles';

interface ISelectInputProps {
  showLabel?: boolean;
  showPlaceholder?: boolean;
  labelText?: string;
  placeHolder?: string;
  options: {
    value: string | number;
    label: string | number;
  }[],
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  selected?: string;
  defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({options, onChange, defaultValue, showLabel, showPlaceholder, labelText, placeHolder, selected}) => {
  return(
    <Container showPlaceholder={showPlaceholder}>
      <select onChange={onChange} defaultValue={defaultValue}>
        {showLabel && <option className="default" defaultValue={labelText} value="" key="777777">{placeHolder ? placeHolder : labelText}...</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value} selected={selected === option.label}>{option.label}</option>
        ))}
      </select>
      <Icon icon="icon-icon-big-arrow" color="#9098a9" size="12px" />
      <Label showLabel={showLabel}>{labelText}</Label>
    </Container>
  );
}

export default SelectInput;
