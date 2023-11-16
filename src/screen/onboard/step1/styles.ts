import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const Section = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  gap: 14px;
  margin-top: 32px;
`;

export const Title = styled.Text<ThemeProps>`
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => (theme !== 'dark' ? '#292B38' : '#FFF')};
`;

export const Text = styled.Text<ThemeProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
  text-align: center;
`;
