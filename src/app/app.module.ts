import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContacComponent } from './componet/contac/contac.component';
import { HomeComponent } from './componet/home/home.component';
import { NotfoundComponent } from './componet/notfound/notfound.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './service/productservice.service';

const appRouter: Routes=[

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'

  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
    {
      path:'home',
      component: HomeComponent
    },
    
    {
      path:'contact',
      component: ContacComponent
    },
    {
      path:'**',
      component: NotfoundComponent
    }
    
    
   

]


@NgModule({
  declarations: [
    AppComponent,
    ContacComponent,
    HomeComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
 
    RouterModule.forRoot(appRouter,{
      preloadingStrategy:PreloadAllModules
    }),
    FormsModule
  ],
  providers: [ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
