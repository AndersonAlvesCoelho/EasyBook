import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const SectionHeader = styled.View`
  padding: 32px 24px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleHeader = styled.Text<ThemeProps>`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => (theme !== 'dark' ? '#292B38' : '#FFF')};
`;

export const SectionSteps = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
`;
