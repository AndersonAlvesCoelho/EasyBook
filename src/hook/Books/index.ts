import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useBooksContext } from '../../context/BooksContext';
import { IVolumeInfoProps } from '../../services/model/book.model';

export function useBooks() {
  const { navigate } = useNavigation();
  const { data } = useBooksContext();

  function viewBookDetails(id: string): IVolumeInfoProps | null | undefined {
    const findBookById = data?.items.find(item => item.id === id) ?? null;
    const bookDetails = findBookById?.volumeInfo;
    return bookDetails;
  }

  return { viewBookDetails, navigate };
}
