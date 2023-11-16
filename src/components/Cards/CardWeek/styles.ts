import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
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
export const ImageBook = styled.Image`
  width: 90px;
  height: 130px;
`;
export const Section = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
export const Title = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
`;
export const Text = styled.Text<ThemeProps>`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: ${({ theme }) => (theme !== 'dark' ? '#9091A0' : '#FFF')};
`;
export const SectionBtn = styled.View`
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;
export const Btn = styled.TouchableOpacity`
  padding: 6px 21px;
  background-color: #de7773;
  border-radius: 11px;
`;
export const BtnText = styled.Text`
  font-size: 10px;
  font-weight: 800;
  color: #fff;
  text-align: center;
`;
export const Link = styled.Text<ThemeProps>`
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
  text-align: center;
`;
