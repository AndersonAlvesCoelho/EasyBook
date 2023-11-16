import {ActivityIndicator} from 'react-native';

// STYLES COMPONENTS
import {MovieImage, Name, SectionMovie, SliderMovie} from './style';
import {ErrorText} from '../../assets/styles/global';

export default function Slider({isLoading, error, data, status}) {
  if (isLoading)
    return (
      <ActivityIndicator
        size={'large'}
        color={'#000'}
        style={{marginTop: 20}}
      />
    );

  if (error) return <ErrorText>ErrorText</ErrorText>;

  const RenderListMovie = ({item, index}) => {
    return (
      <SectionMovie key={index}>
        <MovieImage
          source={{
            uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
          }}
        />
        <Name>{item.title}</Name>
      </SectionMovie>
    );
  };

  return (
    <SliderMovie
      horizontal
      data={data}
      renderItem={RenderListMovie}
      keyExtractor={item => item.id.toString()}
    />
  );
}
