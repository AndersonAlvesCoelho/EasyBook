// IMPORTS
import { useQuery } from 'react-query';

// SERVICES
import { useThemeMode } from '../../../context/ThemeContext';
import { useBooks } from '../../../hook/Books';
import { useBooksContext } from '../../../context/BooksContext';

//  COMPONENTS
import { FlatList, TouchableOpacity } from 'react-native';

// STYLES COMPONENTS
import * as Styles from './styles';

export default function CardRecommended() {
  const { theme } = useThemeMode();

  const { recommendedBook } = useBooksContext();
  const { navigate } = useBooks();

  return (
    <Styles.Container>
      <Styles.Section>
        <Styles.Title theme={theme}>Recommanded for you</Styles.Title>

        <FlatList
          horizontal={true}
          data={recommendedBook}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} onPress={() => navigate('AboutBook', { id: item.id })}>
              <Styles.ImageBook source={{ uri: item.thumbnail }} />
            </TouchableOpacity>
          )}
        />
        <Styles.SectionSteps>
          {Array.from({ length: 3 }).map((_, index) => (
            <Styles.ViewStep key={index} color={index === 1 ? '#de7773' : '#9D9D9D'} />
          ))}
        </Styles.SectionSteps>
      </Styles.Section>
    </Styles.Container>
  );
}
