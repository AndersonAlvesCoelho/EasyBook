import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

interface TextProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.View`
  background-color: #171b36;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-bottom: 32px;
`;

export const SectionHeader = styled.View`
  width: 80%;
  align-items: center;
  flex-direction: row;
  padding: 32px;
  gap: 16px;
`;

export const ImageBook = styled.Image`
  width: 90px;
  height: 130px;
`;

export const SectionRate = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Rate = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: #fff;
`;

export const SectionDetailInfo = styled.View`
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.Text<TextProps>`
  font-size: 14px;
  font-weight: 800;
  color: ${({ color }) => color};
`;

export const Text = styled.Text<ThemeProps>`
  font-size: 10px;
  font-weight: 500;
  color: #9091a0;
`;

export const CardAuthor = styled.View`
  position: absolute;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;

  bottom: -50px;
  left: 50px;
`;

export const SectionAuthor = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
export const SectionAuthorInfo = styled.View`
  flex-direction: column;
`;

export const ImageAuthor = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 90px;
`;

export const Author = styled.Text<ThemeProps>`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => (theme !== 'dark' ? '#4D506C' : '#FFF')};
`;

export const Section = styled.View`
  margin-top: 32px;
  flex-direction: column;
  padding: 32px;
  gap: 16px;
`;

export const TextDescription = styled.Text<ThemeProps>`
  font-size: 10px;
  font-weight: 500;
  color: #9091a0;
  line-height: 20px;
`;