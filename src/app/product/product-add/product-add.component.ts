import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/prodcuct';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit , OnDestroy {

  public product :any;
  public subscrition ?: Subscription;

  
  constructor(
    public productService: ProductserviceService,
    public routers: Router
  ) {
   
   }

  ngOnInit(): void {
    this.product= new Product();
  }

  addProduct(){
    this.subscrition = this.productService.addProduct(this.product).subscribe(data =>{
      if(data && data.id){
        this.routers.navigate(['product']);

      }
    })
  }


  ngOnDestroy(){
    if(this.subscrition){
      this.subscrition.unsubscribe();
    }

  }
}
