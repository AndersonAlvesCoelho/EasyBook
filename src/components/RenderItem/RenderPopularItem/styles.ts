import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

interface ViewStepProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-bottom: 16px;
`;
export const Card = styled.View<ThemeProps>`
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => (theme !== 'dark' ? '#FFF' : '#4D506C')};
  border-radius: 15px;
`;
export const Section = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 44px;
`;
export const SectionDetails = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
`;
export const ImageBook = styled.Image`
  width: 90px;
  height: 130px;
  margin-right: 16px;
`;
export const SectionDetailInfo = styled.View`
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text<ThemeProps>`
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
`;
export const Subtitle = styled.Text<ThemeProps>`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
`;

export const SectionPublisher = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const PublisherText = styled.Text<ThemeProps>`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
`;
export const Publisher = styled.Text<ThemeProps>`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
`;

export const SectionBtn = styled.View`
  flex: 1;
  flex-direction: column;
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
