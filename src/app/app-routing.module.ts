import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsViewComponent } from './carts-view/carts-view.component';
import { DetailsComponent } from './details/details.component';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  { path :"app-cartsview",

  component : CartsViewComponent,
},

  { path :"app-Productlist",

  component : ProductlistComponent,
},

  { path :"app-login",

  component : LoginComponent,
},
{ path :"app-register",
component : RegisterComponent,
},
{ path :"details/:id",
component :DetailsComponent,
},

{ path :"**",
component : NotfoundComponent,
},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
