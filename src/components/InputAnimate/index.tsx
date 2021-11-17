import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import Icon, { IIconType } from '../Icon';

import { Container, Label, Input } from './styles';

interface IInputAnimateProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  padding?: string;
  margin?: string;
  onlyWhite?: boolean;
  autoFocus?: boolean;
  icon?: IIconType;
  min?: string;
}

const InputAnimate: React.FC<IInputAnimateProps> = ({label, padding, margin, onlyWhite, autoFocus, icon, ...rest}) => {

  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    autoFocus && inputEl.current?.focus();
  }, [autoFocus])

  return (
    <Container padding={padding} margin={margin}>
      {icon && <Icon icon={icon} />}
      <Input {...rest} onlyWhite={onlyWhite} defaultValue="" autoComplete="off" ref={inputEl} />
      <Label onlyWhite={onlyWhite}>{label}</Label>
    </Container>
  );
}

export default InputAnimate;
