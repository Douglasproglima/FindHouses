import styled from 'styled-components/native';

export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
`;

export const SectionImage = styled.Image`
  height: 200px;
  width: 200px;
`;
