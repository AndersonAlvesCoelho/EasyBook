import httpRequest from '../httpRequest';
import { IBookVolumesProps } from '../model/book.model';

export const getBooksRepository = async (): Promise<IBookVolumesProps> => {
  const response = await httpRequest.get<IBookVolumesProps>('volumes?q=quilting').then(res => res);
  return response.data;
};
