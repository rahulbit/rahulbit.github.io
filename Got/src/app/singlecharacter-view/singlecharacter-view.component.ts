import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../gameofthrones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlecharacter-view',
  templateUrl: './singlecharacter-view.component.html',
  styleUrls: ['./singlecharacter-view.component.css'],
  providers: [Location]
})
export class SinglecharacterViewComponent implements OnInit {


  public singleViewCharacter;

  constructor(private _route: ActivatedRoute, private router: Router, public got: GameofthronesService, public location: Location) {

  }

  ngOnInit() {

    let myId = this._route.snapshot.paramMap.get('characterId');
    console.log(myId);

    this.singleViewCharacter = this.got.getSingleCharacterView(myId).subscribe(

      data => {
        console.log(data);
        this.singleViewCharacter = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    console.log(this.singleViewCharacter);


  }

  public goBack(): any {
    this.location.back();
  }

}
