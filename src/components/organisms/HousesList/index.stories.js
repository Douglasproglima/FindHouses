import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { HouseCard } from '../../molecules/HouseCard/';
import { HousesList } from './';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BackgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;
const stories = storiesOf('HousesList', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const mockArray = [
    {
      property_id: '123456',
      address: {
        line: 'Casa extra grande',
        state: 'SC',
        neighborhood_name: 'Hamburgo',
      },
      community: {
        price_max: 1200,
      },
      photos: [
        {
          href: IMAGE_URL,
        },
      ],
    },
    {
      property_id: '456789',
      address: {
        line: 'Casa de Luxo',
        state: 'SP',
        neighborhood_name: 'Alphaville',
      },
      community: {
        price_max: 2900,
      },
      photos: [
        {
          href: IMAGE_URL,
        },
      ],
    },
  ];

  return (
    <HousesList
      data={mockArray}
      //renderItem={() => <HouseCard />}
      //KeyExtractor={mockArray => mockArray.property_id}
    />
  );
});
