// IMPORTS

// SERVICES
import { useThemeMode } from '../../../context/ThemeContext';
import { useBooks } from '../../../hook/Books';
import { useBooksContext } from '../../../context/BooksContext';
import { limitText } from '../../../utils';

//  COMPONENTS
import { TouchableOpacity } from 'react-native';

// STYLES COMPONENTS
import * as Styles from './styles';

export default function CardWeek() {
  const { theme } = useThemeMode();

  const { navigate } = useBooks();
  const { bookOfDay } = useBooksContext();

  return (
    <Styles.Container>
      <Styles.Card theme={theme}>
        <Styles.ImageBook source={{ uri: bookOfDay?.volumeInfo?.imageLinks?.thumbnail }} />
        <Styles.Section>
          <Styles.Title theme={theme}>{bookOfDay?.volumeInfo?.title}</Styles.Title>
          <Styles.Text theme={theme}>{limitText(bookOfDay?.volumeInfo?.description || '', 200)}</Styles.Text>

          <Styles.SectionBtn>
            <Styles.Btn>
              <Styles.BtnText>Grab Now</Styles.BtnText>
            </Styles.Btn>
            <TouchableOpacity onPress={() => navigate('AboutBook', { id: bookOfDay?.id || '' })}>
              <Styles.Link theme={theme}>Learn More</Styles.Link>
            </TouchableOpacity>
          </Styles.SectionBtn>
        </Styles.Section>
      </Styles.Card>
    </Styles.Container>
  );
}
