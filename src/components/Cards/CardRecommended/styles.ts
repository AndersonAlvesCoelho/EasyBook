import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

interface ViewStepProps {
  color: string;
}

export const Container = styled.View`
  padding: 0 20px;
`;
export const Card = styled.View<ThemeProps>`
  width: 100%;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => (theme !== 'dark' ? '#FFF' : '#4D506C')};
  border-radius: 15px;
`;
export const Section = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
export const Title = styled.Text<ThemeProps>`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;


export const ImageBook = styled.Image`
  width: 90px;
  height: 130px;
  margin-right: 16px;
`;
export const SectionBtn = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const SectionSteps = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const ViewStep = styled.View<ViewStepProps>`
  background-color: ${props => props.color};
  width: 6px;
  height: 6px;
  border-radius: 60px;
`;
