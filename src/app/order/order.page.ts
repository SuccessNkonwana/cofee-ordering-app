import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  CUPP_cup:string='';
  AMER_cup:string='';
  MAC_cup:string='';
  MOC_cup:string='';
  LAT_cup:string='';
  ESP_cup:string='';
  CUPP=false;
AMER=false;
  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(data=>{
      console.log(data);
      this.AMER_cup=data.AMER_cup;
      this.CUPP_cup=data.CUPP_cup;
      this.ESP_cup=data.ESP_cup;
      this.LAT_cup=data.LAT_cup;
      this.MAC_cup=data.LAT_cup;
      this.MOC_cup=data.MOC_cup;
    });
    }

}
