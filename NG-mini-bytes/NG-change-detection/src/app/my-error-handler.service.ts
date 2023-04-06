import { ErrorHandler, Injectable } from '@angular/core';

export class MyErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log(error);
  }


}
