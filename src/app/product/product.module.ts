import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';

const appRout: Routes=[

 
    {
      path:'',
      component: ProductComponent,
      children:[
        {
          path:'',
          component: ProductListComponent,
          
        },
        
        {
          path:':id/detail',
          component: ProductDetailComponent
        },
        {
          path:'add',
          component: ProductAddComponent
        }
        

      ]
    },
    
    


]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRout)
  ]
})
export class ProductModule { }
