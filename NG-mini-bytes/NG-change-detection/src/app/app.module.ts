import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { HeaderComponent } from './header/header.component';
import { MyErrorHandlerService } from './my-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    CartBadgeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MyErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
