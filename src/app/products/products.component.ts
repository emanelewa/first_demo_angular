import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( private shared:IProduct) { }
  hisName:string = "mohamed"
  myImg:string="../../assets/images/apple_dark.png"
  offerText:string = "We offer an explicit discount of:"
  percentageOffer:string = "50%"
  discount:any= DiscountOffers
  StoreName:String = "T shirt"
  StoreLogo:string="../../assets/images/apple_dark.png"
  ClientName:String = "Ahmed Hany"
  IsPurshased:boolean = true
  ngOnInit(): void {
  }

}
