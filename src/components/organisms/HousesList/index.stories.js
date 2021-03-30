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
      address: {
        property_id: '12345',
        line: 'Minha Casa',
        neighborhood_name: 'Savassi',
        state: 'BH',
        photos: [
          {
            href: IMAGE_URL,
          },
        ],
        community: {
          price_max: 500,
        },
      },
    },
  ];

  return <HousesList data={mockArray} />;
});
