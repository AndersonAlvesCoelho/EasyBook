// IMPORTS
import { useRoute } from '@react-navigation/native';

// SERVICES
import { useBooks } from '../../hook/Books';
import { limitText } from '../../utils';

//  COMPONENTS
import Header from '../../components/Header';
import { IconStar } from '../../components/icons';

// STYLES COMPONENTS
import * as Styles from './styles';
import { ScrollView } from 'react-native';

export default function AboutBookScreen() {
  const route = useRoute();

  const params = route?.params;
  const { viewBookDetails } = useBooks();
  const aboutBook = viewBookDetails(params?.id);

  return (
    <ScrollView>
      <Styles.Container>
        <Styles.Header>
          <Header theme="dark" title="Book of the week" screen="AboutBook" />
          <Styles.SectionHeader>
            <Styles.ImageBook source={{ uri: aboutBook?.imageLinks?.thumbnail }} />

            <Styles.SectionDetailInfo>
              <Styles.Title color="#FFF">{aboutBook?.title} </Styles.Title>
              <Styles.Text numberOfLines={50} ellipsizeMode="middle">
                {limitText(aboutBook?.description || '', 200)}
              </Styles.Text>

              <Styles.SectionRate>
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStar key={index} strokeWidth={1} fill="#E7B53F" color="#000" size={24} />
                ))}
                <Styles.Rate>(5.0)</Styles.Rate>
              </Styles.SectionRate>
            </Styles.SectionDetailInfo>
          </Styles.SectionHeader>

          <Styles.CardAuthor>
            <Styles.SectionAuthor>
              <Styles.ImageAuthor
                source={{ uri: 'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png' }}
              />
              <Styles.SectionAuthorInfo>
                <Styles.Text>Author</Styles.Text>
                <Styles.Author>{aboutBook?.authors[0]}</Styles.Author>
                <Styles.Text>{aboutBook?.categories[0]}</Styles.Text>
              </Styles.SectionAuthorInfo>
            </Styles.SectionAuthor>

            <IconStar strokeWidth={1} fill="#C4C4C4" color="#C4C4C4" size={24} />
          </Styles.CardAuthor>
        </Styles.Header>

        <Styles.Section>
          <Styles.Title color="#4D506C">About The Book </Styles.Title>
          <Styles.TextDescription>{aboutBook?.description}</Styles.TextDescription>
        </Styles.Section>
      </Styles.Container>
    </ScrollView>
  );
}
