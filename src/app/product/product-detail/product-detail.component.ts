import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/prodcuct';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product :any;
  public subcription ?: Subscription;
  public subcriptionParams ?: Subscription;
  constructor(
    public productService:ProductserviceService,
    public routerService: Router,
    public activateRouterService: ActivatedRoute

  ) { }


  ngOnInit(): void {
    this.product= new Product();
    this.loadData();
  }

  loadData(){
    this.activateRouterService.params.subscribe((data: Params) =>{
     let id= data['id'];
     this.subcription = this.productService.getProductById(id).subscribe((courses: Product) =>{
      this.product= courses;
     });
    });
  }

  editProduct(){
      this.subcription = this.productService.updateProduct(this.product).subscribe((data:Product) =>{
        this.routerService.navigate(['product']);
      })

  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
    if(this.subcriptionParams){
      this.subcriptionParams.unsubscribe();
    }
  }
}

