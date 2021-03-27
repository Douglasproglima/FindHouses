import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Input } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Input', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

//#region Stories Buttons
stories.add('Standard', () => {
  const placeholder = text('Placeholder', 'Digite o endereço');
  const label = text('Label', 'Localização');

  return <Input placeholder={placeholder} label={label} />;
});
//#endregion
