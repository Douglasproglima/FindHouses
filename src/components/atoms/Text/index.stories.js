import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {
  Title,
  CardTitle,
  CardDescription,
  CardHightLightText,
  DetailTitle,
  DetailSubTitle,
  DetailText,
  DetailSectionTitle,
  InputTitle,
} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BackgroundDark};
`;

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

//#region Stories Titles
stories.add('Title', () => {
  const value = text('Title', 'Encontre aqui seu imóvel');

  return <Title>{value}</Title>;
});
//#endregion

//#region Stories Inputs Texts
stories.add('InputTitle', () => {
  const value = text('InputTitle', 'Localização');

  return <InputTitle>{value}</InputTitle>;
});
//#endregion

//#region Stories Cards Texts
stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Loren Inpsul Dolor');

  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text(
    'CardDescription',
    '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  );

  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'U$ 1.375/mo');

  return <CardHightLightText>{value}</CardHightLightText>;
});
//#endregion

//#region Stories Texts Details Texts
stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Loren Inpsul Dolor');

  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'U$ 1.375/mo');

  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', '6391 Elgin St. Celina, Delaware 10299');

  return <DetailText>{value}</DetailText>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Detalhes');

  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});
//#endregion
