import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-restAPI',
  templateUrl: './restAPI.component.html',
  styleUrls: ['./restAPI.component.css']
})
export class RestAPIComponent implements OnInit {
  
  public someText:string = "";
  title = 'Test Tour of Heroes';
  
  constructor(private http: Http) {}

  ngOnInit() {
  }

  doRestHttpCall(event:any){
    this.http.get("http://localhost:1337/restTest", {})
    .subscribe(response => {
      console.log(response.json());
      this.someText = response.json();
    });
  }

  testForTest(a:number, b:number){
    return a < b;
  }

}
