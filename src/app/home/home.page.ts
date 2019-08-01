import { Component } from '@angular/core';
import { AlertController, IonGrid } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
coffee:string='';
prices:number=0;
added:string='';
addedP:number=0;
  constructor(public alertController: AlertController) {}
  yourPrices(price: number){
    this.prices=this.prices+price;
  }
  yourCoffee(cup:string){
    this.coffee=this.coffee+cup+', ';
  }
// added item to ur coffee
  addedItem(add:string){
    this.added=this.added+add+', ';
  }
  openForm() {
    document.getElementById("myForm").style.display = "block";
    this.x=document.getElementById("tempGrid");
     this.x.style.display = "block";
         
  }
  
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  cancel() {
        this.coffee='';
        this.prices=0;
        this.added='';
      }
      printContents:any;
      originalContents:any;
      x:any;
  print(){
          this.x=document.getElementById("tempGrid");
          if (this.x.style.display === "none") {
           this.x.style.display = "block";
          } else {
            this.x.style.display = "none";
          }
          window.print();
          this.coffee='';
          this.prices=0;
          this.added='';
   }
   grid:any;
  removeGrid(gridState){
this.grid=document.getElementById("tempGrid");
// this.grid.
  }
}
