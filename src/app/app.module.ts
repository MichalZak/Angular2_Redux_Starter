import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
const createLogger = require('redux-logger');

//actions
import { CounterActions } from './actions/counter.actions';
import { SearchActions } from './actions/search.actions';

//components
import { CounterInfo } from './components/counter-info.component';
import { Counter } from './components/counter.component';
import { Search } from './components/search.component';


interface IAppState { /* ... */ };

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgReduxModule 
  ],
  declarations: [
    AppComponent,
    CounterInfo,
    Counter,
    Search,
  ],
  bootstrap: [ AppComponent ],
  providers: [
      CounterActions,
      SearchActions,
  ]

})
export class AppModule { 
}
