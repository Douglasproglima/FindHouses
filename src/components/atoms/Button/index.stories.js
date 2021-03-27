import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Button', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

//#region Stories Buttons
stories.add('Standard', () => {
  const value = text('ButtonText', 'Aplicar');
  return <Button text={value} />;
});
//#endregion
