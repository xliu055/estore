import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UserService } from './user.service';
import { SessionService } from './session.service';
import { ProductService } from './product.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products/:category',      component: ProductsComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UserService, SessionService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
