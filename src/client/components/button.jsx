// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  label: string,
  handleClick: Function,
}

const ButtonExampleButton = ({ label, handleClick }: Props) =>
  <Button onClick={handleClick}>{label}</Button>;


export default ButtonExampleButton;
