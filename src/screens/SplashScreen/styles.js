import styled from 'styled-components/native';

export const SectionView = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
`;

export const SectionImage = styled.Image`
  height: 200px;
  width: 200px;
`;
