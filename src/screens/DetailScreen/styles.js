import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.metrics.px(48)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const BottomScreenContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 48,
  },
})`
  width: 100%;
  height: ${({ theme }) => theme.metrics.hp(65)}px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-top-right-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-top-left-radius: ${({ theme }) => theme.metrics.px(24)}px;
  position: absolute;
  bottom: 0;
`;

export const FeaturesContainer = styled.View`
  width: 100%;
  /* height: 100%; */
  /* height: ${({ theme }) => theme.metrics.px(80)}px; */
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.metrics.hp(12)}px;
`;
