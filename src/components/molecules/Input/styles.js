import styled from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(48)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  background-color: ${({ theme }) => theme.colors.BackgroundLight};
  color: ${({ theme }) => theme.colors.Grey};
  padding-left: ${({ theme }) => theme.metrics.px(12)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
`;
