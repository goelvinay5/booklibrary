export interface Book {
    id: number;
    title: string;
    isbn: string;
    publishYear: number;
    coverPrice: number;
    isCheckedOut: boolean;
    borrowerName?: string;
    borrowerMobile?: string;
    borrowerNationalID?: string;
    checkedOutDate?: Date;
    returnDate?: Date;
    actualReturnDate?: Date;
  }
  