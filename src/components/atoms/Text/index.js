import styled from 'styled-components/native';

//#region Titles
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: bold;
`;
//#endregion

//#region Inputs Texts
export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;
//#endregion

//#region Card Texts
export const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: bold;
`;

export const CardDescription = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: ${({ theme }) => theme.colors.White};
`;

export const CardHightLightText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;
//#endregion

//#region Details Texts
export const DetailTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: bold;
`;

export const DetailSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;

export const DetailSectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;
//#endregion

//#region Button Texts
export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;
//#endregion
