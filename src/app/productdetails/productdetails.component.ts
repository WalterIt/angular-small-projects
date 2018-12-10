import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  /**
   * you have to create list as a new subject using @Input decorator to fetch the data from parents component.
   *  Now subscribe the observable to get product's details and store in the fulldetails variable. Using fulldetails
   *  bind the data in productdetails.component.html.
   */
  @Input() list : Subject<any>;
  fulldetails : any[];

  constructor() { }

  ngOnInit() {

    this.list.subscribe(
      det => {
        console.log(det);
        this.fulldetails = det;
        $("#productinfoModal").modal('show');
      },
      error => {
        console.log(error);
      }
    )
  }

}
