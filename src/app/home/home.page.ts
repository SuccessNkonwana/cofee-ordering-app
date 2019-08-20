import { Component } from '@angular/core';
import { AlertController, IonGrid } from '@ionic/angular';
import { Router } from '@angular/router';
// import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// coffee:string='';
// coffeeA:string='';
CUPP_cup:string='';
AMER_cup:string='';
MAC_cup:string='';
MOC_cup:string='';
LAT_cup:string='';
ESP_cup:string='';

prices:number=0;
added:string='';
addedP:number=0;
CUPP=false;
AMER=false;
MAC=false;
MOC=false;
LAT=false;
ESP=false;
CUPPprice:number=0;
AMERprice:number=0;
MACprice:number=0;
MOCprice:number=0;
LATprice:number=0;
ESPprice:number=0;
CHOCprice:number=7;
CREprice:number=4;
  constructor(public alertController: AlertController, public route:Router) {}
  yourPrices(price: number){
    this.prices=this.prices;
  }
 

  // --------------Cuppacino---------------------
  
  // choosing Cuppacino
  yourCuppacino(cup:string){
    this.CUPP=true;
    this.CUPP_cup=cup;
  }
//  Cuppacino price
CuppacinoPrice(price: number){
  this.CUPP=true;
  this.CUPPprice=price;
}
// adding Cuppacino
Cuppacino:number=1;
CuppacinoAdd(cup:number){
  this.Cuppacino=this.Cuppacino+cup;
  if(this.Cuppacino>5){
    this.Cuppacino=5;
  }
}
// subtruct cuppacino
CuppacinoSub(cup:number){
  this.Cuppacino=this.Cuppacino-cup;
  if(this.Cuppacino<0){
    this.Cuppacino=0;
  }
}
 // --------------Cuppacino---------------------

 // --------------Americano---------------------
  
// choosing Americano
yourAmericano(cup:string){
  this.AMER=true;
  this.AMER_cup=cup;
}
//  Americano price
AmericanoPrice(price: number){
  this.AMER=true;
  this.AMERprice=price;
}

// adding Americano
Americano:number=1;
AmericanoAdd(cup:number){
  this.Americano=this.Americano+cup;
  if(this.Americano>5){
    this.Americano=5;
  }
}
// subtruct Americano
AmericanoSub(cup:number){
  this.Americano=this.Americano-cup;
  if(this.Americano<0){
    this.Americano=0;
  }
}
 // --------------Americano---------------------
 // --------------Macchiato---------------------
  
//choosing Macchiato 
yourMacchiato(cup:string){
  this.MAC=true;
  this.MAC_cup=cup;
}
//  Macchiato price
MacchiatoPrice(price: number){
  this.MAC=true;
  this.MACprice=price;
}
// adding Macchiato
Macchiato:number=1;
MacchiatoAdd(cup:number){
  this.Macchiato=this.Macchiato+cup;
  if(this.Macchiato>5){
    this.Macchiato=5;
  }
}
// subtruct Macchiato
MacchiatoSub(cup:number){
  this.Macchiato=this.Macchiato-cup;
  if(this.Macchiato<0){
    this.Macchiato=0;
  }
}
 // --------------Macchiato---------------------
 // --------------Espresso---------------------
  
//choosing espresso coffee
yourEspresso(cup:string){
  this.ESP=true;
  this.ESP_cup=cup;
}
//  Espresso price
EspressoPrice(price: number){
  this.ESP=true;
  this.ESPprice=price;
}
// adding Espresso
Espresso:number=1;
EspressoAdd(cup:number){
  this.Espresso=this.Espresso+cup;
  if(this.Espresso>5){
    this.Espresso=5;
  }
}
// subtruct Espresso
EspressoSub(cup:number){
  this.Espresso=this.Espresso-cup;
  if(this.Espresso<0){
    this.Espresso=0;
  }
}
 // --------------Espresso---------------------
// --------------Mocha---------------------
//choosing mocha coffee
yourMocha(cup:string){
  this.MOC=true;
  this.MOC_cup=cup;
}
//  Mocha price
MochaPrice(price: number){
  this.MOC=true;
  this.MOCprice=price;
}
// adding Mocha
Mocha:number=1;
MochaAdd(cup:number){
  this.Mocha=this.Mocha+cup;
  if(this.Mocha>5){
    this.Mocha=5;
  }
}
// subtruct Mocha
MochaSub(cup:number){
  this.Mocha=this.Mocha-cup;
  if(this.Mocha<0){
    this.Mocha=0;
  }
}
 // --------------Mocha---------------------
// --------------Latte---------------------
//choosing Latte coffee
yourLatte(cup:string){
  this.LAT=true;
  this.LAT_cup=cup;
}
//  Latte price
LattePrice(price: number){
  this.LAT=true;
  this.LATprice=price;
}
// adding Latte
Latte:number=1;
LatteAdd(cup:number){
  this.Latte=this.Latte+cup;
  if(this.Latte>5){
    this.Latte=5;
  }
}
// subtruct Latte
LatteSub(cup:number){
  this.Latte=this.Latte-cup;
  if(this.Latte<0){
    this.Latte=0;
  }
}
 // --------------Latte---------------------
 // --------------Cream---------------------

// adding Cream
Cream:number=0;
CreamAdd(cup:number){
  this.Cream=this.Cream+cup;
  if(this.Cream>5){
    this.Cream=5;
  }
}
// subtruct Cream
CreamSub(cup:number){
  this.Cream=this.Cream-cup;
  if(this.Cream<0){
    this.Cream=0;
  }
}
//  Cream price
CreamPrice(price: number){
  this.CREprice=4;
}
 // --------------Cream---------------------

 // --------------Chocolate---------------------

// adding Chocolate
Chocolate:number=0;
ChocolateAdd(cup:number){
  this.Chocolate=this.Chocolate+cup;
  if(this.Chocolate>5){
    this.Chocolate=5;
  }
}
// subtruct Chocolate
ChocolateSub(cup:number){
  this.Chocolate=this.Chocolate-cup;
  if(this.Chocolate<0){
    this.Chocolate=0;
  }
}
//  Chocolate price
ChocolatePrice(){
  this.CHOCprice=7;
}
 // --------------Chocolate---------------------
  openForm() {
    document.getElementById("myForm").style.display = "block";
    this.x=document.getElementById("tempGrid");
     this.x.style.display = "block";
         
  }
  openOrder() {
    document.getElementById("myOrder").style.display = "block";
    this.x=document.getElementById("tempGrid2");
     this.x.style.display = "block";
         
  }
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  closeForm2() {
    document.getElementById("myOrder").style.display = "none";
  }
  cancel() {
        // this.coffee='';
        this.prices=0;
        this.added='';
      }
      printContents:any;
      originalContents:any;
      x:any;
  print(){
          this.x=document.getElementById("tempGrid2");
          // this.x=document.getElementById("tempGrid3");
          if (this.x.style.display === "none") {
           this.x.style.display = "block";
          } else {
            this.x.style.display = "none";
          }
          window.print();
         
   }
   removeCuppucino(){
    this.x=document.getElementById("tempGrid");
    if (this.x.style.display === "none") {
     this.x.style.display = "block";
    } else {
      this.x.style.display = "none";
    }
    window.print();
    // this.coffee='';
    this.prices=0;
    this.added='';
}

}
