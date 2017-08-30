import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import {IAppState, RootReducer} from './store';
import { AngularCesiumModule } from 'angular-cesium';
import { RouterModule } from '@angular/router';
import { CesiumComponent } from './cesium/cesium.component';
import { HomeComponent } from './home/home.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ChatWSComponent } from './chatWS/chatWS.component';
import { RestAPIComponent } from './restAPI/restAPI.component';
import { SemanticComponent } from './semantic/semantic.component';


@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent,
    HomeComponent,
    BootstrapComponent,
    ChatWSComponent,
    RestAPIComponent,
    SemanticComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AngularCesiumModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"cesium",
        component: CesiumComponent
      },
      {
        path:"restApi",
        component: RestAPIComponent
      },
      {
        path:"chatWS",
        component: ChatWSComponent
      },
      {
        path:"bootstrap",
        component: BootstrapComponent
      },
      {
        path:"semantic",
        component: SemanticComponent
      }
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(RootReducer, {counter:0});
  }
}
