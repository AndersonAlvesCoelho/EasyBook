import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

interface ImageBookProps {
  height: number;
}
export const Section = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
export const SectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  gap: 14px;
`;
export const Title = styled.Text<ThemeProps>`
  font-size: 28px;
  font-weight: 300;
  color: ${({ theme }) => (theme !== 'dark' ? '#171B36' : '#FFF')};
`;
export const ImageBook = styled.Image<ImageBookProps>`
  width: 100%;
  height: ${props => `${props.height}px`};
`;
export const SectionText = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  gap: 8px;
`;
export const SubTitle = styled.Text<ThemeProps>`
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
export const Btn = styled.TouchableOpacity`
  padding: 18px 64px;
  background-color: #de7773;
  border-radius: 11px;
`;
export const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  text-align: center;
`;
