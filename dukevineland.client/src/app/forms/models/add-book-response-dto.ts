import { IReadBook } from '../../shared/models/books/iread-book';

export interface IAddBookResponseDto {

  newItem: IReadBook | null;

  errorCode: number;
  failReason: string;
  userId: string;
}
