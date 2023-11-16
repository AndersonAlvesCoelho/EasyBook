// IMPORTS

// SERVICES

//  COMPONENTS
import Header from '../../components/Header';
import { CardRecommended, CardWeek } from '../../components/Cards';

// STYLES COMPONENTS
import * as Styles from './styles';
import { FlatList, ScrollView, View } from 'react-native';
import { useBooksContext } from '../../context/BooksContext';
import RenderPopularItem from '../../components/RenderItem/RenderPopularItem';

export default function HomeScreen() {
  const { popularBooks } = useBooksContext();

  return (
    <Styles.Container>
      <Header screen="Home" title="Book of the week" theme="light" />

      <FlatList
        data={popularBooks}
        ListHeaderComponent={() => (
          <Styles.FlatListHeader>
            <CardWeek />
            <CardRecommended />

            <Styles.Title>Popular books</Styles.Title>
          </Styles.FlatListHeader>
        )}
        renderItem={({ item, index }) => <RenderPopularItem item={item} index={index} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </Styles.Container>
  );
}
