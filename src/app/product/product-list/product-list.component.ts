import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/prodcuct';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  subcription ?: Subscription;
  product: Product[]=[];
  constructor(public productService: ProductserviceService) { }



  ngOnInit(): void {
    this.getAllProduct();
      
  }
  getAllProduct(){
    this.subcription= this.productService.getAllProduct().subscribe(data =>{
      this.product = data;
   
    })
  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }
  onDeleteProduct(id: any){
    this.subcription= this.productService.deleteProduct(id).subscribe(data=>{
      this.updateDataAfterDelete(id);

    });
  }
  updateDataAfterDelete(id: any){
    for (let index = 0; index < this.product.length; index++) {
      if(this.product[index].id ==id){
        this.product.splice(1,index);
        break;
      }
      
    }
  }




}
