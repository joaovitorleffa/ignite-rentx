import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = styled.View`
  margin-top: 42px;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const Footer = styled.View`
  flex: 0.8;
  align-items: center;
  justify-content: center;
`;
