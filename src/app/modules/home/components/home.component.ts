import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { PageChangeEvent, GridDataResult } from "@progress/kendo-angular-grid";
import {
  SortDescriptor,
} from "@progress/kendo-data-query";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variable declaration
  public pageSize = 15;
  public gridView: GridDataResult;
  productData: any = [];
  isLoading: boolean;
  public skip = 0;
  orderByKey = "";
  dirKey = "asc";
  public currentPage = 1;
  public pagelimtit = 100;
  gridData: any = [];

  //sorting kendo data
  public allowUnsort = true;
  public sort: SortDescriptor[] = [
    {
      field: "",
      dir: "asc",
    },
  ];





  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this.productList();
  }

  // get product list
  productList() {
    let limit=this.pagelimtit
    // let getbody = {
    //   page: this.currentPage,

    //   sort: "DESC",
    //   sort_field: "agency_id",
    //   fields: [
    //     {
    //       field: "string",
    //       operator: "contains or matches",
    //       value: "string"
    //     }
    //   ]
    // }
    this.isLoading = true
    this._homeService.getProductList(limit).subscribe((res) => {
      console.log("PDOTUCT RESPONSE => ", res)
      this.gridData = res['products'];
      // this.gridView = {
      //   data: res,
      //   total: res['total'],
      // };

    }, error => {
      this.isLoading = false
    }, () => {
      this.isLoading = false
    })



    // this._homeService.getProductList().subscribe((res) => {
    //   console.log("RES => ", res)
    // })
  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;

    if (event.skip == 0) {
      this.skip = event.skip;
      this.currentPage = 1;
    } else {
      this.skip = event.skip;
      const PageNo = event.skip / event.take + 1;
      this.currentPage = PageNo;
    }
    this.productList();
  }


}
