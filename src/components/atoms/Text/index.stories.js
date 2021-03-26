import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Title } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
`;

const stories = storiesOf('Text', module);

stories.add('Title', () => {
  const value = text('Title', 'Exemplo de Title');

  return (
    <Wrapper>
      <Title>{value}</Title>
    </Wrapper>
  );
});
