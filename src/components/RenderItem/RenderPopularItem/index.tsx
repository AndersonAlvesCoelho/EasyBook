// IMPORTS
import { useQuery } from 'react-query';

// SERVICES
import { useThemeMode } from '../../../context/ThemeContext';
import { PopularBooksProps } from '../../../context/BooksContext';
import { useBooks } from '../../../hook/Books';

//  COMPONENTS
import { FlatList, TouchableOpacity } from 'react-native';

// STYLES COMPONENTS
import * as Styles from './styles';

interface RenderPopularItemProps {
  item: PopularBooksProps;
  index: number;
}

export default function RenderPopularItem({ item, index }: RenderPopularItemProps) {
  const { theme } = useThemeMode();

  const { id, imageLinks, title, subtitle, publisher } = item;
  const { navigate } = useBooks();

  return (
    <Styles.Container key={index}>
      <Styles.Card theme={theme}>
        <Styles.Section>
          <Styles.SectionDetails>
            <Styles.ImageBook source={{ uri: imageLinks?.thumbnail }} />
            <Styles.SectionDetailInfo>
              <Styles.Title>{title}</Styles.Title>
              <Styles.Subtitle>{subtitle || '-'}</Styles.Subtitle>
              <Styles.SectionPublisher>
                <Styles.Publisher>Publisher | </Styles.Publisher>
                <Styles.PublisherText>{publisher}</Styles.PublisherText>
              </Styles.SectionPublisher>
            </Styles.SectionDetailInfo>
          </Styles.SectionDetails>

          <Styles.SectionBtn>
            <Styles.Btn>
              <Styles.BtnText>Grab Now</Styles.BtnText>
            </Styles.Btn>
            <TouchableOpacity onPress={() => navigate('AboutBook', { id: id || '' })}>
              <Styles.Link theme={theme}>Learn More</Styles.Link>
            </TouchableOpacity>
          </Styles.SectionBtn>
        </Styles.Section>
      </Styles.Card>
    </Styles.Container>
  );
}
