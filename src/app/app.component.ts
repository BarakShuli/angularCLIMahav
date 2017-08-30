import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import {INCREMENT} from './actions';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(){
  }

  ngOnInit() {
    $(".nav a").on("click", function(){
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });
  }
}
