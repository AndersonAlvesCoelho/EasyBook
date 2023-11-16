// IMPORTS
import { ReactNode, createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getBooksRepository } from '../services/repositories/books';
import { IBookVolumesProps, IVolumeInfoProps } from '../services/model/book.model';
import { generateRandomNumber } from '../utils';

interface RecommendedBookProps {
  id: string;
  thumbnail: string;
}
interface BookOfDayProps {
  id: string;
  volumeInfo: IVolumeInfoProps;
}
export interface PopularBooksProps extends IVolumeInfoProps {
  id: string;
}

interface BooksContextContextProps {
  bookOfDay: BookOfDayProps | null;
  popularBooks: PopularBooksProps[];
  recommendedBook: RecommendedBookProps[];
  isLoading: boolean;
  data: IBookVolumesProps | undefined;
}

const BooksContext = createContext<BooksContextContextProps>({
  bookOfDay: null,
  data: undefined,
  popularBooks: [],
  recommendedBook: [],
  isLoading: false,
});

interface Props {
  children: ReactNode;
}

function BooksContextProvider({ children }: Props) {
  const [bookOfDay, setBookOfDay] = useState<BookOfDayProps | null>(null);
  const [popularBooks, setPopularBooks] = useState<PopularBooksProps[]>([]);
  const [recommendedBook, setRecommendedBook] = useState<RecommendedBookProps[]>([]);

  const { isLoading, data } = useQuery({
    queryKey: ['getBooksRepository'],
    queryFn: getBooksRepository,
    onError: errors => {
      console.error('errors', errors?.response?.data);
    },
    onSuccess: data => {
      const { items, totalItems } = data;
      const resBookOfDay = {
        id: items[0]?.id,
        volumeInfo: items[0]?.volumeInfo,
      };

      let count = 0;
      let position = 0;

      let recommended = [];
      for (const item of items) {
        const thumbnail = items[position + 1]?.volumeInfo?.imageLinks?.thumbnail;
        if (thumbnail) {
          recommended.push({ id: items[position + 1]?.id, thumbnail });
          count += 1;
        }
        position += 1;
        if (count === 10) break;
      }

      count = 0
      let popular = [];
      while (count !== 10) {
        position = generateRandomNumber(0, totalItems);
        const thumbnail = items[position]?.volumeInfo?.imageLinks?.thumbnail;
        const volumeInfo = items[position]?.volumeInfo;
        if (thumbnail) {
          popular.push({ ...volumeInfo, id: items[position].id });
          count += 1;
        }
      }

      setPopularBooks(popular);
      setRecommendedBook(recommended);
      setBookOfDay(resBookOfDay);
    },
  });

  return (
    <BooksContext.Provider value={{ bookOfDay, recommendedBook, popularBooks, data, isLoading }}>
      {children}
    </BooksContext.Provider>
  );
}

const useBooksContext = () => useContext(BooksContext);

export { BooksContextProvider, useBooksContext };
