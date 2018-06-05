import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../gameofthrones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlehouse-view',
  templateUrl: './singlehouse-view.component.html',
  styleUrls: ['./singlehouse-view.component.css'],
  providers: [Location]
})
export class SinglehouseViewComponent implements OnInit {

  public singleHouseView;

  constructor(private route: ActivatedRoute, private router: Router, public got: GameofthronesService, public location: Location) { }

  ngOnInit() {

    let myId = this.route.snapshot.paramMap.get('houseId');
    console.log(myId);
    this.singleHouseView = this.got.getSingleHouseView(myId).subscribe(
      data => {
        console.log(data);
        this.singleHouseView = data;
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMesage);
      }
    )
  }

  public goBack(): any {
    this.location.back();
  }

}
