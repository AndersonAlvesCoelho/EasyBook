import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

interface ViewStepProps {
  size: number;
  color: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? '#333' : '#fff')};
`;

export const SectionHeader = styled.View`
  margin-top: 32px;
  padding: 32px 24px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleHeader = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;

export const SectionSteps = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
`;

export const ViewStep = styled.View<ViewStepProps>`
  background-color: ${props => props.color};
  width: ${props => `${props.size}px`};
  height: 6px;
  border-radius: 60px;
`;
