import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-check-out',
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule],
  templateUrl: './book-check-out.component.html',
  styleUrl: './book-check-out.component.css'
})


export class BookCheckOutComponent implements OnInit {
  book: Book | undefined;
  borrowerName = '';
  borrowerMobile = '';
  borrowerNationalID = '';
  returnDate: Date;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) {
    const checkoutDate = new Date();
    this.returnDate = this.calculateReturnDate(checkoutDate, 15);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe(book => {
      this.book = book;
    });
  }

  calculateReturnDate(startDate: Date, businessDays: number): Date {
    const endDate = new Date(startDate);
    let daysRemaining = businessDays;

    while (daysRemaining > 0) {
      endDate.setDate(endDate.getDate() + 1);
      if (endDate.getDay() !== 0 && endDate.getDay() !== 6) { // Exclude weekends
        daysRemaining--;
      }
    }

    return endDate;
  }

  checkOut(): void {
    if (this.book) {
      this.book.isCheckedOut = true;
      this.book.borrowerName = this.borrowerName;
      this.book.borrowerMobile = this.borrowerMobile;
      this.book.borrowerNationalID = this.borrowerNationalID;
      this.book.checkedOutDate = new Date();
      this.book.returnDate = this.returnDate;
      
      this.bookService.updateBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
