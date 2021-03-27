import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { IconButton } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('IconButton', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

//#region Stories Icons Buttons
stories.add('Standard', () => {
  const value = text('icon', 'filter');
  return <IconButton iconName={value} />;
});

stories.add('Transparent', () => {
  const value = text('icon', 'filter');
  return <IconButton iconName={value} transparent />;
});
//#endregion
