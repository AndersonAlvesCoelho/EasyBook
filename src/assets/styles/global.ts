import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const ContainerSafeAreaView = styled.SafeAreaView<ThemeProps>`
  flex: 1;
  background-color: ${({theme}) => (theme.mode === 'dark' ? '#333' : '#fff')};
`;

export const ErrorText = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;
