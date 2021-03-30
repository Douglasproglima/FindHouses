import styled, { css } from 'styled-components/native';

//export const ScreenContainer = styled.SafeAreaView`
export const ScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundDark};
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.wp(100)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const TitleContainer = styled.View`
  width: 65%;
`;

export const LoaderContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.metrics.px(48)}px;
  `}
`;

export const Loader = styled.ActivityIndicator`
  ${({ theme }) => css`
    margin-bottom: ${theme.metrics.px(12)}px;
  `}
`;
