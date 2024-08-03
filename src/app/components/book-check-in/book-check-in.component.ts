import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-check-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-check-in.component.html',
  styleUrls: ['./book-check-in.component.css']
})
export class BookCheckInComponent implements OnInit {
  book: Book | undefined;
  actualReturnDate: Date = new Date();
  penalty: number = 0;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe(book => {
      this.book = book;
      if (book && book.returnDate) {
        this.penalty = this.calculatePenalty(new Date(book.returnDate), this.actualReturnDate);
      }
    });
  }

  calculatePenalty(returnDate: Date, actualReturnDate: Date): number {
    if(actualReturnDate.getTime() <= returnDate.getTime()){
      return 0;
    }
    const diffTime = Math.abs(actualReturnDate.getTime() - returnDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const lateDays = diffDays - 15;
    return lateDays > 0 ? lateDays * 5 : 0;
  }

  checkIn(): void {
    if (this.book) {
      this.book.isCheckedOut = false;
      this.book.actualReturnDate = this.actualReturnDate;
      this.book.borrowerName = '';
      this.book.borrowerMobile = '';
      this.book.borrowerNationalID = '';
      this.book.checkedOutDate = undefined;
      this.book.returnDate = undefined;

      this.bookService.updateBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
