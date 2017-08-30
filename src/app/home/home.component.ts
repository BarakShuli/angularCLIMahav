import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import {INCREMENT} from '../actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter = 0;
  constructor(private ngRedux:NgRedux<IAppState>){
  }

  ngOnInit() {
  }

  doIncrement(){
    console.log("asdasdsa")
    this.ngRedux.dispatch({type:INCREMENT});
    this.counter = this.ngRedux.getState().counter;
  } 

}
