import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HouseCard } from './index';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HouseCard', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

//#region Stories Buttons
stories.add('Standard', () => {
  const imgSource = text('ImageSource', { uri: IMAGE_URL });
  const title = text('Title', 'Barraco dos sonhos');
  const description = text(
    'Description',
    'Rua Dona Florinda, 71 - Vila do Chaves',
  );
  //const price = number('Price', 350.0);
  const price = text('Price', 'R$1.600,00');

  return (
    <HouseCard
      imgSource={imgSource}
      title={title}
      description={description}
      price={price}
    />
  );
});
//#endregion
