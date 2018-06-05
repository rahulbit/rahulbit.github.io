import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameofthronesService {

  public singleViewBook;
  public baseUrl = "https://anapioficeandfire.com/api";


  constructor(public http: HttpClient) {
    console.log("service is called");
  }

  public getBooks(): any {
    let myResponse = this.http.get(this.baseUrl + '/books?page=1&pageSize=10');
    console.log(myResponse);
    return myResponse;
  }
  public getHouses(): any {
    let myResponse1 = this.http.get(this.baseUrl + '/houses?page=1&pageSize=10');
    console.log(myResponse1);
    return myResponse1;

  }
  public getcharacters(pageno): any {
    let myResponse2 = this.http.get(this.baseUrl + '/characters' + '?page=' + pageno + '&pageSize=10');
    console.log(myResponse2);
    return myResponse2;
  }

  public getSingleBookView(bookId): any {
    let myResponse3 = this.http.get(this.baseUrl + '/books/' + bookId);
    console.log(myResponse3);
    return myResponse3;
  }

  public getSingleCharacterView(characterId) {
    let myResponse4 = this.http.get(this.baseUrl + '/characters/' + characterId);
    console.log(myResponse4);
    return myResponse4;
  }

  public getSingleHouseView(houseId) {
    let myResponse5 = this.http.get(this.baseUrl + '/houses/' + houseId);
    console.log(myResponse5);
    return myResponse5;
  }
}
