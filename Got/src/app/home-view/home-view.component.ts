import { Component, OnInit } from '@angular/core';

import { GameofthronesService } from '../gameofthrones.service';



@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public allbooks = [];
  public allhouse = [];
  public allcharacter = [];
  public charactersize = 50;


  constructor(public got: GameofthronesService) {
    console.log("home-view component is called");
  }

  ngOnInit() {


    this.allbooks = this.got.getBooks().subscribe(

      data => {
        console.log(data);
        this.allbooks = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      })


    console.log(this.allbooks);


    this.allhouse = this.got.getHouses().subscribe(

      data => {
        console.log(data);
        this.allhouse = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      })


    console.log(this.allhouse);

    for (let i = 0; i < this.charactersize; i++) {
      this.allcharacter = this.got.getcharacters([i]).subscribe(
        data => {
          console.log(data);
          this.allcharacter = data;
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage);
        })
    }

    console.log(this.allcharacter);


  }




}
