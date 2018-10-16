import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LamparaPage } from '../lampara/lampara';
import { SmartphonePage } from '../smartphone/smartphone';
import { TelevisionPage } from '../television/television';
import { BocinaPage } from '../bocina/bocina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  Lampara= LamparaPage;
  Smartphone = SmartphonePage;
  tv=TelevisionPage;
  bocina=BocinaPage;


  constructor(public navCtrl: NavController) {

  }

  
    clickLAM(){

    this.navCtrl.push(this.Lampara);

    }

    clickSMART(){

      this.navCtrl.push(this.Smartphone);
  
      }

      clicktv(){

        this.navCtrl.push(this.tv);
    
        }

        clickBOC(){

          this.navCtrl.push(this.bocina);
      
          }



    
 


}
