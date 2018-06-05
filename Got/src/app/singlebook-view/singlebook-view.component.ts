import { Component, OnInit } from '@angular/core';


import { GameofthronesService } from '../gameofthrones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlebook-view',
  templateUrl: './singlebook-view.component.html',
  styleUrls: ['./singlebook-view.component.css'],
  providers: [Location]
})
export class SinglebookViewComponent implements OnInit {




  public singleViewBook;

  constructor(private _route: ActivatedRoute, private router: Router, public got: GameofthronesService, public location: Location) {

  }

  ngOnInit() {

    let myBookId = this._route.snapshot.paramMap.get('bookId');
    console.log(myBookId);

    this.singleViewBook = this.got.getSingleBookView(myBookId).subscribe(

      data => {
        console.log(data);

        this.singleViewBook = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.singleViewBook);


  }

  public goBack(): any {

    this.location.back();
  }






}
