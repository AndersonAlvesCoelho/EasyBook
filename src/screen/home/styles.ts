import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.Text<ThemeProps>`
  font-size: 20px;
  font-weight: 800;
  padding-left: 28px;
  color: ${({ theme }) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;


export const FlatListHeader = styled.View`
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
`;