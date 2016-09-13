import { Component } from '@angular/core';
import '../../public/css/styles.css';

import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from './store/index';
const createLogger = require('redux-logger');



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {},
      [ createLogger() ],
      [ ...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }


}
