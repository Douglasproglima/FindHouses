import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.wp(86)}px;
  height: ${({ theme }) => theme.metrics.px(240)}px;
  margin-top: ${({ theme }) => theme.metrics.px(20)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BackgroundLight};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardImg = styled.Image`
  width: 100%;
  height: 70%;
`;

export const TextContainer = styled.View`
  display: flex;
  height: 30%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-vertical: ${({ theme }) => theme.metrics.px(12)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(14)}px;
`;

export const TextContainerLeft = styled.View`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextContainerRight = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
