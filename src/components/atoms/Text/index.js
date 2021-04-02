import styled from 'styled-components/native';

const BaseText = styled.Text`
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`;

//#region Titles
export const Title = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Bold';
`;
//#endregion

//#region Inputs Texts
export const InputSectionLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: white;
  font-family: 'Montserrat-SemiBold';
  /* font-family: 'Montserrat-Regular'; */
`;

export const InputLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.White};
  /* padding-left: ${({ theme }) => theme.metrics.px(2)}px; */
  font-family: 'Montserrat-SemiBold';
`;
//#endregion

//#region Card Texts
export const CardTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Bold';
`;

export const CardDescription = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Regular';
`;

export const CardHightLightText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Bold';
`;
//#endregion

//#region Details Texts
export const DetailTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Bold';
`;

export const DetailSubTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-SemiBold';
`;

export const DetailText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Regular';
`;

export const DetailSectionTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: ${({ theme }) => theme.colors.White};
  font-family: 'Montserrat-Bold';
`;
//#endregion

//#region Button Texts
export const ButtonText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 600;
`;
//#endregion
