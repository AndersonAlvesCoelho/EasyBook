import styled from 'styled-components/native';

interface ThemeProps {
  theme: 'light' | 'dark';
}

export const SliderMovie = styled.FlatList`
  padding-left: 28px;
  height: 264px;
`;

export const SectionMovie = styled.View`
  flex-direction: column;
  width: 127px;
  gap: 20px;
  margin-right: 20px;
`;

export const Name = styled.Text<ThemeProps>`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;

export const Genre = styled.Text<ThemeProps>`
  font-size: 16px;
  font-weight: 300;
  color: ${({theme}) => (theme !== 'dark' ? '#06070D' : '#FFF')};
`;

export const MovieImage = styled.Image`
  width: 127px;
  height: 196px;
  border-radius: 8px;
  
`;
