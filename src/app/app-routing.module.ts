import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'index/:myParameter', component: IndexComponent },
{path:'cart', component :CartComponent},
{path:'checkout', component :CheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

