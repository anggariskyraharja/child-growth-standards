import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  num1: number;
  gender: string = 'boys';
  ideal: string ='-';
  satuan: string = 'kg';
  totalmonth: number;
  sd1: number;
  sd2: number;
  sd3: number;
  sd4: number;
  sd5: number;
  sd6: number;
  sd7: number;
  
  checkgender(event){
    this.gender = event.target.value;
    this.sd1 = null;
    this.ideal = '-';
  }
  checksatuan(event){
    this.satuan = event.target.value;
    this.sd1 = null;
    this.ideal = '-';
  }

  clear(){
    this.num1 = null;
    this.ideal = '-';
    this.totalmonth = null;
    this.sd1 = null;
  }

  calculate(){
    if (this.num1 == null){
      this.presentAlert();
      this.ideal = '-';
      this.totalmonth = null;
      this.sd1 = null;
    }else{
      if (this.num1 < 65 || this.num1 > 120){
        this.presentAlert2();
        this.num1 = null;
        this.ideal = '-';
        this.totalmonth = null;
        this.sd1 = null;
      } else {
      var height1 = Math.floor(this.num1);
      var height2 = this.num1 - height1;
      if (height2 < 0.5){
        this.totalmonth = height1;
      } else {
        this.totalmonth = height1 + 0.5;
      }
      this.calculate2();
    }
    }
  }

  calculate2(){
    if (this.gender == 'boys'){
      if (this.totalmonth == 65){this.sd1 = 5.9; this.sd2 = 6.3; this.sd3 = 6.9; this.sd4 = 7.4; this.sd5 = 8.1; this.sd6 = 8.8; this.sd7 = 9.6;}
      else if (this.totalmonth == 65.5){this.sd1 = 6.0; this.sd2 = 6.4; this.sd3 = 7.0; this.sd4 = 7.6; this.sd5 = 8.2; this.sd6 = 8.9; this.sd7 = 9.8;}
      else if (this.totalmonth == 66){this.sd1 = 6.1; this.sd2 = 6.5; this.sd3 = 7.1; this.sd4 = 7.7; this.sd5 = 8.3; this.sd6 = 9.1; this.sd7 = 9.9;}
      else if (this.totalmonth == 66.5){this.sd1 = 6.1; this.sd2 = 6.6; this.sd3 = 7.2; this.sd4 = 7.8; this.sd5 = 8.5; this.sd6 = 9.2; this.sd7 = 10.1;}
      else if (this.totalmonth == 67){this.sd1 = 6.2; this.sd2 = 6.7; this.sd3 = 7.3; this.sd4 = 7.9; this.sd5 = 8.6; this.sd6 = 9.4; this.sd7 = 10.2;}
      else if (this.totalmonth == 67.5){this.sd1 = 6.3; this.sd2 = 6.8; this.sd3 = 7.4; this.sd4 = 8.0; this.sd5 = 8.7; this.sd6 = 9.5; this.sd7 = 10.4;}
      else if (this.totalmonth == 68){this.sd1 = 6.4; this.sd2 = 6.9; this.sd3 = 7.5; this.sd4 = 8.1; this.sd5 = 8.8; this.sd6 = 9.6; this.sd7 = 10.5;}
      else if (this.totalmonth == 68.5){this.sd1 = 6.5; this.sd2 = 7.0; this.sd3 = 7.6; this.sd4 = 8.2; this.sd5 = 9.0; this.sd6 = 9.8; this.sd7 = 10.7;}
      else if (this.totalmonth == 69){this.sd1 = 6.6; this.sd2 = 7.1; this.sd3 = 7.7; this.sd4 = 8.4; this.sd5 = 9.1; this.sd6 = 9.9; this.sd7 = 10.8;}
      else if (this.totalmonth == 69.5){this.sd1 = 6.7; this.sd2 = 7.2; this.sd3 = 7.8; this.sd4 = 8.5; this.sd5 = 9.2; this.sd6 = 10.0; this.sd7 = 11.0;}
      else if (this.totalmonth == 70){this.sd1 = 6.8; this.sd2 = 7.3; this.sd3 = 7.9; this.sd4 = 8.6; this.sd5 = 9.3; this.sd6 = 10.2; this.sd7 = 11.1;}
      else if (this.totalmonth == 70.5){this.sd1 = 6.9; this.sd2 = 7.4; this.sd3 = 8.0; this.sd4 = 8.7; this.sd5 = 9.5; this.sd6 = 10.3; this.sd7 = 11.3;}
      else if (this.totalmonth == 71){this.sd1 = 6.9; this.sd2 = 7.5; this.sd3 = 8.1; this.sd4 = 8.8; this.sd5 = 9.6; this.sd6 = 10.4; this.sd7 = 11.4;}
      else if (this.totalmonth == 71.5){this.sd1 = 7.0; this.sd2 = 7.6; this.sd3 = 8.2; this.sd4 = 8.9; this.sd5 = 9.7; this.sd6 = 10.6; this.sd7 = 11.6;}
      else if (this.totalmonth == 72){this.sd1 = 7.1; this.sd2 = 7.7; this.sd3 = 8.3; this.sd4 = 9.0; this.sd5 = 9.8; this.sd6 = 10.7; this.sd7 = 11.7;}
      else if (this.totalmonth == 72.5){this.sd1 = 7.2; this.sd2 = 7.8; this.sd3 = 8.4; this.sd4 = 9.1; this.sd5 = 9.9; this.sd6 = 10.8; this.sd7 = 11.8;}
      else if (this.totalmonth == 73){this.sd1 = 7.3; this.sd2 = 7.9; this.sd3 = 8.5; this.sd4 = 9.2; this.sd5 = 10.0; this.sd6 = 11.0; this.sd7 = 12.0;}
      else if (this.totalmonth == 73.5){this.sd1 = 7.4; this.sd2 = 7.9; this.sd3 = 8.6; this.sd4 = 9.3; this.sd5 = 10.2; this.sd6 = 11.1; this.sd7 = 12.1;}
      else if (this.totalmonth == 74){this.sd1 = 7.4; this.sd2 = 8.0; this.sd3 = 8.7; this.sd4 = 9.4; this.sd5 = 10.3; this.sd6 = 11.2; this.sd7 = 12.2;}
      else if (this.totalmonth == 74.5){this.sd1 = 7.5; this.sd2 = 8.1; this.sd3 = 8.8; this.sd4 = 9.5; this.sd5 = 10.4; this.sd6 = 11.3; this.sd7 = 12.4;}
      else if (this.totalmonth == 75){this.sd1 = 7.6; this.sd2 = 8.2; this.sd3 = 8.9; this.sd4 = 9.6; this.sd5 = 10.5; this.sd6 = 11.4; this.sd7 = 12.5;}
      else if (this.totalmonth == 75.5){this.sd1 = 7.7; this.sd2 = 8.3; this.sd3 = 9.0; this.sd4 = 9.7; this.sd5 = 10.6; this.sd6 = 11.6; this.sd7 = 12.6;}
      else if (this.totalmonth == 76){this.sd1 = 7.7; this.sd2 = 8.4; this.sd3 = 9.1; this.sd4 = 9.8; this.sd5 = 10.7; this.sd6 = 11.7; this.sd7 = 12.8;}
      else if (this.totalmonth == 76.5){this.sd1 = 7.8; this.sd2 = 8.5; this.sd3 = 9.2; this.sd4 = 9.9; this.sd5 = 10.8; this.sd6 = 11.8; this.sd7 = 12.9;}
      else if (this.totalmonth == 77){this.sd1 = 7.9; this.sd2 = 8.5; this.sd3 = 9.2; this.sd4 = 10.0; this.sd5 = 10.9; this.sd6 = 11.9; this.sd7 = 13.0;}
      else if (this.totalmonth == 77.5){this.sd1 = 8.0; this.sd2 = 8.6; this.sd3 = 9.3; this.sd4 = 10.1; this.sd5 = 11.0; this.sd6 = 12.0; this.sd7 = 13.1;}
      else if (this.totalmonth == 78){this.sd1 = 8.0; this.sd2 = 8.7; this.sd3 = 9.4; this.sd4 = 10.2; this.sd5 = 11.1; this.sd6 = 12.1; this.sd7 = 13.3;}
      else if (this.totalmonth == 78.5){this.sd1 = 8.1; this.sd2 = 8.8; this.sd3 = 9.5; this.sd4 = 10.3; this.sd5 = 11.2; this.sd6 = 12.2; this.sd7 = 13.4;}
      else if (this.totalmonth == 79){this.sd1 = 8.2; this.sd2 = 8.8; this.sd3 = 9.6; this.sd4 = 10.4; this.sd5 = 11.3; this.sd6 = 12.3; this.sd7 = 13.5;}
      else if (this.totalmonth == 79.5){this.sd1 = 8.3; this.sd2 = 8.9; this.sd3 = 9.7; this.sd4 = 10.5; this.sd5 = 11.4; this.sd6 = 12.4; this.sd7 = 13.6;}
      else if (this.totalmonth == 80){this.sd1 = 8.3; this.sd2 = 9.0; this.sd3 = 9.7; this.sd4 = 10.6; this.sd5 = 11.5; this.sd6 = 12.6; this.sd7 = 13.7;}
      else if (this.totalmonth == 80.5){this.sd1 = 8.4; this.sd2 = 9.1; this.sd3 = 9.8; this.sd4 = 10.7; this.sd5 = 11.6; this.sd6 = 12.7; this.sd7 = 13.8;}
      else if (this.totalmonth == 81){this.sd1 = 8.5; this.sd2 = 9.2; this.sd3 = 9.9; this.sd4 = 10.8; this.sd5 = 11.7; this.sd6 = 12.8; this.sd7 = 14.0;}
      else if (this.totalmonth == 81.5){this.sd1 = 8.6; this.sd2 = 9.3; this.sd3 = 10.0; this.sd4 = 10.9; this.sd5 = 11.8; this.sd6 = 12.9; this.sd7 = 14.1;}
      else if (this.totalmonth == 82){this.sd1 = 8.7; this.sd2 = 9.3; this.sd3 = 10.1; this.sd4 = 11.0; this.sd5 = 11.9; this.sd6 = 13.0; this.sd7 = 14.2;}
      else if (this.totalmonth == 82.5){this.sd1 = 8.7; this.sd2 = 9.4; this.sd3 = 10.2; this.sd4 = 11.1; this.sd5 = 12.1; this.sd6 = 13.1; this.sd7 = 14.4;}
      else if (this.totalmonth == 83){this.sd1 = 8.8; this.sd2 = 9.5; this.sd3 = 10.3; this.sd4 = 11.2; this.sd5 = 12.2; this.sd6 = 13.3; this.sd7 = 14.5;}
      else if (this.totalmonth == 83.5){this.sd1 = 8.9; this.sd2 = 9.6; this.sd3 = 10.4; this.sd4 = 11.3; this.sd5 = 12.3; this.sd6 = 13.4; this.sd7 = 14.6;}
      else if (this.totalmonth == 84){this.sd1 = 9.0; this.sd2 = 9.7; this.sd3 = 10.5; this.sd4 = 11.4; this.sd5 = 12.4; this.sd6 = 13.5; this.sd7 = 14.8;}
      else if (this.totalmonth == 84.5){this.sd1 = 9.1; this.sd2 = 9.9; this.sd3 = 10.7; this.sd4 = 11.5; this.sd5 = 12.5; this.sd6 = 13.7; this.sd7 = 14.9;}
      else if (this.totalmonth == 85){this.sd1 = 9.2; this.sd2 = 10.0; this.sd3 = 10.8; this.sd4 = 11.7; this.sd5 = 12.7; this.sd6 = 13.8; this.sd7 = 15.1;}
      else if (this.totalmonth == 85.5){this.sd1 = 9.3; this.sd2 = 10.1; this.sd3 = 10.9; this.sd4 = 11.8; this.sd5 = 12.8; this.sd6 = 13.9; this.sd7 = 15.2;}
      else if (this.totalmonth == 86){this.sd1 = 9.4; this.sd2 = 10.2; this.sd3 = 11.0; this.sd4 = 11.9; this.sd5 = 12.9; this.sd6 = 14.1; this.sd7 = 15.4;}
      else if (this.totalmonth == 86.5){this.sd1 = 9.5; this.sd2 = 10.3; this.sd3 = 11.1; this.sd4 = 12.0; this.sd5 = 13.1; this.sd6 = 14.2; this.sd7 = 15.5;}
      else if (this.totalmonth == 87){this.sd1 = 9.6; this.sd2 = 10.4; this.sd3 = 11.2; this.sd4 = 12.2; this.sd5 = 13.2; this.sd6 = 14.4; this.sd7 = 15.7;}
      else if (this.totalmonth == 87.5){this.sd1 = 9.7; this.sd2 = 10.5; this.sd3 = 11.3; this.sd4 = 12.3; this.sd5 = 13.3; this.sd6 = 14.5; this.sd7 = 15.8;}
      else if (this.totalmonth == 88){this.sd1 = 9.8; this.sd2 = 10.6; this.sd3 = 11.5; this.sd4 = 12.4; this.sd5 = 13.5; this.sd6 = 14.7; this.sd7 = 16.0;}
      else if (this.totalmonth == 88.5){this.sd1 = 9.9; this.sd2 = 10.7; this.sd3 = 11.6; this.sd4 = 12.5; this.sd5 = 13.6; this.sd6 = 14.8; this.sd7 = 16.1;}
      else if (this.totalmonth == 89){this.sd1 = 10.0; this.sd2 = 10.8; this.sd3 = 11.7; this.sd4 = 12.6; this.sd5 = 13.7; this.sd6 = 14.9; this.sd7 = 16.3;}
      else if (this.totalmonth == 89.5){this.sd1 = 10.1; this.sd2 = 10.9; this.sd3 = 11.8; this.sd4 = 12.8; this.sd5 = 13.9; this.sd6 = 15.1; this.sd7 = 16.4;}
      else if (this.totalmonth == 90){this.sd1 = 10.2; this.sd2 = 11.0; this.sd3 = 11.9; this.sd4 = 12.9; this.sd5 = 14.0; this.sd6 = 15.2; this.sd7 = 16.6;}
      else if (this.totalmonth == 90.5){this.sd1 = 10.3; this.sd2 = 11.1; this.sd3 = 12.0; this.sd4 = 13.0; this.sd5 = 14.1; this.sd6 = 15.3; this.sd7 = 16.7;}
      else if (this.totalmonth == 91){this.sd1 = 10.4; this.sd2 = 11.2; this.sd3 = 12.1; this.sd4 = 13.1; this.sd5 = 14.2; this.sd6 = 15.5; this.sd7 = 16.9;}
      else if (this.totalmonth == 91.5){this.sd1 = 10.5; this.sd2 = 11.3; this.sd3 = 12.2; this.sd4 = 13.2; this.sd5 = 14.4; this.sd6 = 15.6; this.sd7 = 17.0;}
      else if (this.totalmonth == 92){this.sd1 = 10.6; this.sd2 = 11.4; this.sd3 = 12.3; this.sd4 = 13.4; this.sd5 = 14.5; this.sd6 = 15.8; this.sd7 = 17.2;}
      else if (this.totalmonth == 92.5){this.sd1 = 10.7; this.sd2 = 11.5; this.sd3 = 12.4; this.sd4 = 13.5; this.sd5 = 14.6; this.sd6 = 15.9; this.sd7 = 17.3;}
      else if (this.totalmonth == 93){this.sd1 = 10.8; this.sd2 = 11.6; this.sd3 = 12.6; this.sd4 = 13.6; this.sd5 = 14.7; this.sd6 = 16.0; this.sd7 = 17.5;}
      else if (this.totalmonth == 93.5){this.sd1 = 10.9; this.sd2 = 11.7; this.sd3 = 12.7; this.sd4 = 13.7; this.sd5 = 14.9; this.sd6 = 16.2; this.sd7 = 17.6;}
      else if (this.totalmonth == 94){this.sd1 = 11.0; this.sd2 = 11.8; this.sd3 = 12.8; this.sd4 = 13.8; this.sd5 = 15.0; this.sd6 = 16.3; this.sd7 = 17.8;}
      else if (this.totalmonth == 94.5){this.sd1 = 11.1; this.sd2 = 11.9; this.sd3 = 12.9; this.sd4 = 13.9; this.sd5 = 15.1; this.sd6 = 16.5; this.sd7 = 17.9;}
      else if (this.totalmonth == 95){this.sd1 = 11.1; this.sd2 = 12.0; this.sd3 = 13.0; this.sd4 = 14.1; this.sd5 = 15.3; this.sd6 = 16.6; this.sd7 = 18.1;}
      else if (this.totalmonth == 95.5){this.sd1 = 11.2; this.sd2 = 12.1; this.sd3 = 13.1; this.sd4 = 14.2; this.sd5 = 15.4; this.sd6 = 16.7; this.sd7 = 18.3;}
      else if (this.totalmonth == 96){this.sd1 = 11.3; this.sd2 = 12.2; this.sd3 = 13.2; this.sd4 = 14.3; this.sd5 = 15.5; this.sd6 = 16.9; this.sd7 = 18.4;}
      else if (this.totalmonth == 96.5){this.sd1 = 11.4; this.sd2 = 12.3; this.sd3 = 13.3; this.sd4 = 14.4; this.sd5 = 15.7; this.sd6 = 17.0; this.sd7 = 18.6;}
      else if (this.totalmonth == 97){this.sd1 = 11.5; this.sd2 = 12.4; this.sd3 = 13.4; this.sd4 = 14.6; this.sd5 = 15.8; this.sd6 = 17.2; this.sd7 = 18.8;}
      else if (this.totalmonth == 97.5){this.sd1 = 11.6; this.sd2 = 12.5; this.sd3 = 13.6; this.sd4 = 14.7; this.sd5 = 15.9; this.sd6 = 17.4; this.sd7 = 18.9;}
      else if (this.totalmonth == 98){this.sd1 = 11.7; this.sd2 = 12.6; this.sd3 = 13.7; this.sd4 = 14.8; this.sd5 = 16.1; this.sd6 = 17.5; this.sd7 = 19.1;}
      else if (this.totalmonth == 98.5){this.sd1 = 11.8; this.sd2 = 12.8; this.sd3 = 13.8; this.sd4 = 14.9; this.sd5 = 16.2; this.sd6 = 17.7; this.sd7 = 19.3;}
      else if (this.totalmonth == 99){this.sd1 = 11.9; this.sd2 = 12.9; this.sd3 = 13.9; this.sd4 = 15.1; this.sd5 = 16.4; this.sd6 = 17.9; this.sd7 = 19.5;}
      else if (this.totalmonth == 99.5){this.sd1 = 12.0; this.sd2 = 13.0; this.sd3 = 14.0; this.sd4 = 15.2; this.sd5 = 16.5; this.sd6 = 18.0; this.sd7 = 19.7;}
      else if (this.totalmonth == 100){this.sd1 = 12.1; this.sd2 = 13.1; this.sd3 = 14.2; this.sd4 = 15.4; this.sd5 = 16.7; this.sd6 = 18.2; this.sd7 = 19.9;}
      else if (this.totalmonth == 100.5){this.sd1 = 12.2; this.sd2 = 13.2; this.sd3 = 14.3; this.sd4 = 15.5; this.sd5 = 16.9; this.sd6 = 18.4; this.sd7 = 20.1;}
      else if (this.totalmonth == 101){this.sd1 = 12.3; this.sd2 = 13.3; this.sd3 = 14.4; this.sd4 = 15.6; this.sd5 = 17.0; this.sd6 = 18.5; this.sd7 = 20.3;}
      else if (this.totalmonth == 101.5){this.sd1 = 12.4; this.sd2 = 13.4; this.sd3 = 14.5; this.sd4 = 15.8; this.sd5 = 17.2; this.sd6 = 18.7; this.sd7 = 20.5;}
      else if (this.totalmonth == 102){this.sd1 = 12.5; this.sd2 = 13.6; this.sd3 = 14.7; this.sd4 = 15.9; this.sd5 = 17.3; this.sd6 = 18.9; this.sd7 = 20.7;}
      else if (this.totalmonth == 102.5){this.sd1 = 12.6; this.sd2 = 13.7; this.sd3 = 14.8; this.sd4 = 16.1; this.sd5 = 17.5; this.sd6 = 19.1; this.sd7 = 20.9;}
      else if (this.totalmonth == 103){this.sd1 = 12.8; this.sd2 = 13.8; this.sd3 = 14.9; this.sd4 = 16.2; this.sd5 = 17.7; this.sd6 = 19.3; this.sd7 = 21.1;}
      else if (this.totalmonth == 103.5){this.sd1 = 12.9; this.sd2 = 13.9; this.sd3 = 15.1; this.sd4 = 16.4; this.sd5 = 17.8; this.sd6 = 19.5; this.sd7 = 21.3;}
      else if (this.totalmonth == 104){this.sd1 = 13.0; this.sd2 = 14.0; this.sd3 = 15.2; this.sd4 = 16.5; this.sd5 = 18.0; this.sd6 = 19.7; this.sd7 = 21.6;}
      else if (this.totalmonth == 104.5){this.sd1 = 13.1; this.sd2 = 14.2; this.sd3 = 15.4; this.sd4 = 16.7; this.sd5 = 18.2; this.sd6 = 19.9; this.sd7 = 21.8;}
      else if (this.totalmonth == 105){this.sd1 = 13.2; this.sd2 = 14.3; this.sd3 = 15.5; this.sd4 = 16.8; this.sd5 = 18.4; this.sd6 = 20.1; this.sd7 = 22.0;}
      else if (this.totalmonth == 105.5){this.sd1 = 13.3; this.sd2 = 14.4; this.sd3 = 15.6; this.sd4 = 17.0; this.sd5 = 18.5; this.sd6 = 20.3; this.sd7 = 22.2;}
      else if (this.totalmonth == 106){this.sd1 = 13.4; this.sd2 = 14.5; this.sd3 = 15.8; this.sd4 = 17.2; this.sd5 = 18.7; this.sd6 = 20.5; this.sd7 = 22.5;}
      else if (this.totalmonth == 106.5){this.sd1 = 13.5; this.sd2 = 14.7; this.sd3 = 15.9; this.sd4 = 17.3; this.sd5 = 18.9; this.sd6 = 20.7; this.sd7 = 22.7;}
      else if (this.totalmonth == 107){this.sd1 = 13.7; this.sd2 = 14.8; this.sd3 = 16.1; this.sd4 = 17.5; this.sd5 = 19.1; this.sd6 = 20.9; this.sd7 = 22.9;}
      else if (this.totalmonth == 107.5){this.sd1 = 13.8; this.sd2 = 14.9; this.sd3 = 16.2; this.sd4 = 17.7; this.sd5 = 19.3; this.sd6 = 21.1; this.sd7 = 23.2;}
      else if (this.totalmonth == 108){this.sd1 = 13.9; this.sd2 = 15.1; this.sd3 = 16.4; this.sd4 = 17.8; this.sd5 = 19.5; this.sd6 = 21.3; this.sd7 = 23.4;}
      else if (this.totalmonth == 108.5){this.sd1 = 14.0; this.sd2 = 15.2; this.sd3 = 16.5; this.sd4 = 18.0; this.sd5 = 19.7; this.sd6 = 21.5; this.sd7 = 23.7;}
      else if (this.totalmonth == 109){this.sd1 = 14.1; this.sd2 = 15.3; this.sd3 = 16.7; this.sd4 = 18.2; this.sd5 = 19.8; this.sd6 = 21.8; this.sd7 = 23.9;}
      else if (this.totalmonth == 109.5){this.sd1 = 14.3; this.sd2 = 15.5; this.sd3 = 16.8; this.sd4 = 18.3; this.sd5 = 20.0; this.sd6 = 22.0; this.sd7 = 24.2;}
      else if (this.totalmonth == 110){this.sd1 = 14.4; this.sd2 = 15.6; this.sd3 = 17.0; this.sd4 = 18.5; this.sd5 = 20.2; this.sd6 = 22.2; this.sd7 = 24.4;}
      else if (this.totalmonth == 110.5){this.sd1 = 14.5; this.sd2 = 15.8; this.sd3 = 17.1; this.sd4 = 18.7; this.sd5 = 20.4; this.sd6 = 22.4; this.sd7 = 24.7;}
      else if (this.totalmonth == 111){this.sd1 = 14.6; this.sd2 = 15.9; this.sd3 = 17.3; this.sd4 = 18.9; this.sd5 = 20.7; this.sd6 = 22.7; this.sd7 = 25.0;}
      else if (this.totalmonth == 111.5){this.sd1 = 14.8; this.sd2 = 16.0; this.sd3 = 17.5; this.sd4 = 19.1; this.sd5 = 20.9; this.sd6 = 22.9; this.sd7 = 25.2;}
      else if (this.totalmonth == 112){this.sd1 = 14.9; this.sd2 = 16.2; this.sd3 = 17.6; this.sd4 = 19.2; this.sd5 = 21.1; this.sd6 = 23.1; this.sd7 = 25.5;}
      else if (this.totalmonth == 112.5){this.sd1 = 15.0; this.sd2 = 16.3; this.sd3 = 17.8; this.sd4 = 19.4; this.sd5 = 21.3; this.sd6 = 23.4; this.sd7 = 25.8;}
      else if (this.totalmonth == 113){this.sd1 = 15.2; this.sd2 = 16.5; this.sd3 = 18.0; this.sd4 = 19.6; this.sd5 = 21.5; this.sd6 = 23.6; this.sd7 = 26.0;}
      else if (this.totalmonth == 113.5){this.sd1 = 15.3; this.sd2 = 16.6; this.sd3 = 18.1; this.sd4 = 19.8; this.sd5 = 21.7; this.sd6 = 23.9; this.sd7 = 26.3;}
      else if (this.totalmonth == 114){this.sd1 = 15.4; this.sd2 = 16.8; this.sd3 = 18.3; this.sd4 = 20.0; this.sd5 = 21.9; this.sd6 = 24.1; this.sd7 = 26.6;}
      else if (this.totalmonth == 114.5){this.sd1 = 15.6; this.sd2 = 16.9; this.sd3 = 18.5; this.sd4 = 20.2; this.sd5 = 22.1; this.sd6 = 24.4; this.sd7 = 26.9;}
      else if (this.totalmonth == 115){this.sd1 = 15.7; this.sd2 = 17.1; this.sd3 = 18.6; this.sd4 = 20.4; this.sd5 = 22.4; this.sd6 = 24.6; this.sd7 = 27.2;}
      else if (this.totalmonth == 115.5){this.sd1 = 15.8; this.sd2 = 17.2; this.sd3 = 18.8; this.sd4 = 20.6; this.sd5 = 22.6; this.sd6 = 24.9; this.sd7 = 27.5;}
      else if (this.totalmonth == 116){this.sd1 = 16.0; this.sd2 = 17.4; this.sd3 = 19.0; this.sd4 = 20.8; this.sd5 = 22.8; this.sd6 = 25.1; this.sd7 = 27.8;}
      else if (this.totalmonth == 116.5){this.sd1 = 16.1; this.sd2 = 17.5; this.sd3 = 19.2; this.sd4 = 21.0; this.sd5 = 23.0; this.sd6 = 25.4; this.sd7 = 28.0;}
      else if (this.totalmonth == 117){this.sd1 = 16.2; this.sd2 = 17.7; this.sd3 = 19.3; this.sd4 = 21.2; this.sd5 = 23.3; this.sd6 = 25.6; this.sd7 = 28.3;}
      else if (this.totalmonth == 117.5){this.sd1 = 16.4; this.sd2 = 17.9; this.sd3 = 19.5; this.sd4 = 21.4; this.sd5 = 23.5; this.sd6 = 25.9; this.sd7 = 28.6;}
      else if (this.totalmonth == 118){this.sd1 = 16.5; this.sd2 = 18.0; this.sd3 = 19.7; this.sd4 = 21.6; this.sd5 = 23.7; this.sd6 = 26.1; this.sd7 = 28.9;}
      else if (this.totalmonth == 118.5){this.sd1 = 16.7; this.sd2 = 18.2; this.sd3 = 19.9; this.sd4 = 21.8; this.sd5 = 23.9; this.sd6 = 26.4; this.sd7 = 29.2;}
      else if (this.totalmonth == 119){this.sd1 = 16.8; this.sd2 = 18.3; this.sd3 = 20.0; this.sd4 = 22.0; this.sd5 = 24.1; this.sd6 = 26.6; this.sd7 = 29.5;}
      else if (this.totalmonth == 119.5){this.sd1 = 16.9; this.sd2 = 18.5; this.sd3 = 20.2; this.sd4 = 22.2; this.sd5 = 24.4; this.sd6 = 26.9; this.sd7 = 29.8;}
      else if (this.totalmonth == 120){this.sd1 = 17.1; this.sd2 = 18.6; this.sd3 = 20.4; this.sd4 = 22.4; this.sd5 = 24.6; this.sd6 = 27.2; this.sd7 = 30.1;}
    } else if (this.gender == 'girls'){
      if (this.totalmonth == 65){this.sd1 = 5.6; this.sd2 = 6.1; this.sd3 = 6.6; this.sd4 = 7.2; this.sd5 = 7.9; this.sd6 = 8.7; this.sd7 = 9.7;}
      else if (this.totalmonth == 65.5){this.sd1 = 5.7; this.sd2 = 6.2; this.sd3 = 6.7; this.sd4 = 7.4; this.sd5 = 8.1; this.sd6 = 8.9; this.sd7 = 9.8;}
      else if (this.totalmonth == 66){this.sd1 = 5.8; this.sd2 = 6.3; this.sd3 = 6.8; this.sd4 = 7.5; this.sd5 = 8.2; this.sd6 = 9.0; this.sd7 = 10.0;}
      else if (this.totalmonth == 66.5){this.sd1 = 5.8; this.sd2 = 6.4; this.sd3 = 6.9; this.sd4 = 7.6; this.sd5 = 8.3; this.sd6 = 9.1; this.sd7 = 10.1;}
      else if (this.totalmonth == 67){this.sd1 = 5.9; this.sd2 = 6.4; this.sd3 = 7.0; this.sd4 = 7.7; this.sd5 = 8.4; this.sd6 = 9.3; this.sd7 = 10.2;}
      else if (this.totalmonth == 67.5){this.sd1 = 6.0; this.sd2 = 6.5; this.sd3 = 7.1; this.sd4 = 7.8; this.sd5 = 8.5; this.sd6 = 9.4; this.sd7 = 10.4;}
      else if (this.totalmonth == 68){this.sd1 = 6.1; this.sd2 = 6.6; this.sd3 = 7.2; this.sd4 = 7.9; this.sd5 = 8.7; this.sd6 = 9.5; this.sd7 = 10.5;}
      else if (this.totalmonth == 68.5){this.sd1 = 6.2; this.sd2 = 6.7; this.sd3 = 7.3; this.sd4 = 8.0; this.sd5 = 8.8; this.sd6 = 9.7; this.sd7 = 10.7;}
      else if (this.totalmonth == 69){this.sd1 = 6.3; this.sd2 = 6.8; this.sd3 = 7.4; this.sd4 = 8.1; this.sd5 = 8.9; this.sd6 = 9.8; this.sd7 = 10.8;}
      else if (this.totalmonth == 69.5){this.sd1 = 6.3; this.sd2 = 6.9; this.sd3 = 7.5; this.sd4 = 8.2; this.sd5 = 9.0; this.sd6 = 9.9; this.sd7 = 10.9;}
      else if (this.totalmonth == 70){this.sd1 = 6.4; this.sd2 = 7.0; this.sd3 = 7.6; this.sd4 = 8.3; this.sd5 = 9.1; this.sd6 = 10.0; this.sd7 = 11.1;}
      else if (this.totalmonth == 70.5){this.sd1 = 6.5; this.sd2 = 7.1; this.sd3 = 7.7; this.sd4 = 8.4; this.sd5 = 9.2; this.sd6 = 10.1; this.sd7 = 11.2;}
      else if (this.totalmonth == 71){this.sd1 = 6.6; this.sd2 = 7.1; this.sd3 = 7.8; this.sd4 = 8.5; this.sd5 = 9.3; this.sd6 = 10.3; this.sd7 = 11.3;}
      else if (this.totalmonth == 71.5){this.sd1 = 6.7; this.sd2 = 7.2; this.sd3 = 7.9; this.sd4 = 8.6; this.sd5 = 9.4; this.sd6 = 10.4; this.sd7 = 11.5;}
      else if (this.totalmonth == 72){this.sd1 = 6.7; this.sd2 = 7.3; this.sd3 = 8.0; this.sd4 = 8.7; this.sd5 = 9.5; this.sd6 = 10.5; this.sd7 = 11.6;}
      else if (this.totalmonth == 72.5){this.sd1 = 6.8; this.sd2 = 7.4; this.sd3 = 8.1; this.sd4 = 8.8; this.sd5 = 9.7; this.sd6 = 10.6; this.sd7 = 11.7;}
      else if (this.totalmonth == 73){this.sd1 = 6.9; this.sd2 = 7.5; this.sd3 = 8.1; this.sd4 = 8.9; this.sd5 = 9.8; this.sd6 = 10.7; this.sd7 = 11.8;}
      else if (this.totalmonth == 73.5){this.sd1 = 7.0; this.sd2 = 7.6; this.sd3 = 8.2; this.sd4 = 9.0; this.sd5 = 9.9; this.sd6 = 10.8; this.sd7 = 12.0;}
      else if (this.totalmonth == 74){this.sd1 = 7.0; this.sd2 = 7.6; this.sd3 = 8.3; this.sd4 = 9.1; this.sd5 = 10.0; this.sd6 = 11.0; this.sd7 = 12.1;}
      else if (this.totalmonth == 74.5){this.sd1 = 7.1; this.sd2 = 7.7; this.sd3 = 8.4; this.sd4 = 9.2; this.sd5 = 10.1; this.sd6 = 11.1; this.sd7 = 12.2;}
      else if (this.totalmonth == 75){this.sd1 = 7.2; this.sd2 = 7.8; this.sd3 = 8.5; this.sd4 = 9.3; this.sd5 = 10.2; this.sd6 = 11.2; this.sd7 = 12.3;}
      else if (this.totalmonth == 75.5){this.sd1 = 7.2; this.sd2 = 7.9; this.sd3 = 8.6; this.sd4 = 9.4; this.sd5 = 10.3; this.sd6 = 11.3; this.sd7 = 12.5;}
      else if (this.totalmonth == 76){this.sd1 = 7.3; this.sd2 = 8.0; this.sd3 = 8.7; this.sd4 = 9.5; this.sd5 = 10.4; this.sd6 = 11.4; this.sd7 = 12.6;}
      else if (this.totalmonth == 76.5){this.sd1 = 7.4; this.sd2 = 8.0; this.sd3 = 8.7; this.sd4 = 9.6; this.sd5 = 10.5; this.sd6 = 11.5; this.sd7 = 12.7;}
      else if (this.totalmonth == 77){this.sd1 = 7.5; this.sd2 = 8.1; this.sd3 = 8.8; this.sd4 = 9.6; this.sd5 = 10.6; this.sd6 = 11.6; this.sd7 = 12.8;}
      else if (this.totalmonth == 77.5){this.sd1 = 7.5; this.sd2 = 8.2; this.sd3 = 8.9; this.sd4 = 9.7; this.sd5 = 10.7; this.sd6 = 11.7; this.sd7 = 12.9;}
      else if (this.totalmonth == 78){this.sd1 = 7.6; this.sd2 = 8.3; this.sd3 = 9.0; this.sd4 = 9.8; this.sd5 = 10.8; this.sd6 = 11.8; this.sd7 = 13.1;}
      else if (this.totalmonth == 78.5){this.sd1 = 7.7; this.sd2 = 8.4; this.sd3 = 9.1; this.sd4 = 9.9; this.sd5 = 10.9; this.sd6 = 12.0; this.sd7 = 13.2;}
      else if (this.totalmonth == 79){this.sd1 = 7.8; this.sd2 = 8.4; this.sd3 = 9.2; this.sd4 = 10.0; this.sd5 = 11.0; this.sd6 = 12.1; this.sd7 = 13.3;}
      else if (this.totalmonth == 79.5){this.sd1 = 7.8; this.sd2 = 8.5; this.sd3 = 9.3; this.sd4 = 10.1; this.sd5 = 11.1; this.sd6 = 12.2; this.sd7 = 13.4;}
      else if (this.totalmonth == 80){this.sd1 = 7.9; this.sd2 = 8.6; this.sd3 = 9.4; this.sd4 = 10.2; this.sd5 = 11.2; this.sd6 = 12.3; this.sd7 = 13.6;}
      else if (this.totalmonth == 80.5){this.sd1 = 8.0; this.sd2 = 8.7; this.sd3 = 9.5; this.sd4 = 10.3; this.sd5 = 11.3; this.sd6 = 12.4; this.sd7 = 13.7;}
      else if (this.totalmonth == 81){this.sd1 = 8.1; this.sd2 = 8.8; this.sd3 = 9.6; this.sd4 = 10.4; this.sd5 = 11.4; this.sd6 = 12.6; this.sd7 = 13.9;}
      else if (this.totalmonth == 81.5){this.sd1 = 8.2; this.sd2 = 8.9; this.sd3 = 9.7; this.sd4 = 10.6; this.sd5 = 11.6; this.sd6 = 12.7; this.sd7 = 14.0;}
      else if (this.totalmonth == 82){this.sd1 = 8.3; this.sd2 = 9.0; this.sd3 = 9.8; this.sd4 = 10.7; this.sd5 = 11.7; this.sd6 = 12.8; this.sd7 = 14.1;}
      else if (this.totalmonth == 82.5){this.sd1 = 8.4; this.sd2 = 9.1; this.sd3 = 9.9; this.sd4 = 10.8; this.sd5 = 11.8; this.sd6 = 13.0; this.sd7 = 14.3;}
      else if (this.totalmonth == 83){this.sd1 = 8.5; this.sd2 = 9.2; this.sd3 = 10.0; this.sd4 = 10.9; this.sd5 = 11.9; this.sd6 = 13.1; this.sd7 = 14.5;}
      else if (this.totalmonth == 83.5){this.sd1 = 8.5; this.sd2 = 9.3; this.sd3 = 10.1; this.sd4 = 11.0; this.sd5 = 12.1; this.sd6 = 13.3; this.sd7 = 14.6;}
      else if (this.totalmonth == 84){this.sd1 = 8.6; this.sd2 = 9.4; this.sd3 = 10.2; this.sd4 = 11.1; this.sd5 = 12.2; this.sd6 = 13.4; this.sd7 = 14.8;}
      else if (this.totalmonth == 84.5){this.sd1 = 8.7; this.sd2 = 9.5; this.sd3 = 10.3; this.sd4 = 11.3; this.sd5 = 12.3; this.sd6 = 13.5; this.sd7 = 14.9;}
      else if (this.totalmonth == 85){this.sd1 = 8.8; this.sd2 = 9.6; this.sd3 = 10.4; this.sd4 = 11.4; this.sd5 = 12.5; this.sd6 = 13.7; this.sd7 = 15.1;}
      else if (this.totalmonth == 85.5){this.sd1 = 8.9; this.sd2 = 9.7; this.sd3 = 10.6; this.sd4 = 11.5; this.sd5 = 12.6; this.sd6 = 13.8; this.sd7 = 15.3;}
      else if (this.totalmonth == 86){this.sd1 = 9.0; this.sd2 = 9.8; this.sd3 = 10.7; this.sd4 = 11.6; this.sd5 = 12.7; this.sd6 = 14.0; this.sd7 = 15.4;}
      else if (this.totalmonth == 86.5){this.sd1 = 9.1; this.sd2 = 9.9; this.sd3 = 10.8; this.sd4 = 11.8; this.sd5 = 12.9; this.sd6 = 14.2; this.sd7 = 15.6;}
      else if (this.totalmonth == 87){this.sd1 = 9.2; this.sd2 = 10.0; this.sd3 = 10.9; this.sd4 = 11.9; this.sd5 = 13.0; this.sd6 = 14.3; this.sd7 = 15.8;}
      else if (this.totalmonth == 87.5){this.sd1 = 9.3; this.sd2 = 10.1; this.sd3 = 11.0; this.sd4 = 12.0; this.sd5 = 13.2; this.sd6 = 14.5; this.sd7 = 15.9;}
      else if (this.totalmonth == 88){this.sd1 = 9.4; this.sd2 = 10.2; this.sd3 = 11.1; this.sd4 = 12.1; this.sd5 = 13.3; this.sd6 = 14.6; this.sd7 = 16.1;}
      else if (this.totalmonth == 88.5){this.sd1 = 9.5; this.sd2 = 10.3; this.sd3 = 11.2; this.sd4 = 12.3; this.sd5 = 13.4; this.sd6 = 14.8; this.sd7 = 16.3;}
      else if (this.totalmonth == 89){this.sd1 = 9.6; this.sd2 = 10.4; this.sd3 = 11.4; this.sd4 = 12.4; this.sd5 = 13.6; this.sd6 = 14.9; this.sd7 = 16.4;}
      else if (this.totalmonth == 89.5){this.sd1 = 9.7; this.sd2 = 10.5; this.sd3 = 11.5; this.sd4 = 12.5; this.sd5 = 13.7; this.sd6 = 15.1; this.sd7 = 16.6;}
      else if (this.totalmonth == 90){this.sd1 = 9.8; this.sd2 = 10.6; this.sd3 = 11.6; this.sd4 = 12.6; this.sd5 = 13.8; this.sd6 = 15.2; this.sd7 = 16.8;}
      else if (this.totalmonth == 90.5){this.sd1 = 9.9; this.sd2 = 10.7; this.sd3 = 11.7; this.sd4 = 12.8; this.sd5 = 14.0; this.sd6 = 15.4; this.sd7 = 16.9;}
      else if (this.totalmonth == 91){this.sd1 = 10.0; this.sd2 = 10.9; this.sd3 = 11.8; this.sd4 = 12.9; this.sd5 = 14.1; this.sd6 = 15.5; this.sd7 = 17.1;}
      else if (this.totalmonth == 91.5){this.sd1 = 10.1; this.sd2 = 11.0; this.sd3 = 11.9; this.sd4 = 13.0; this.sd5 = 14.3; this.sd6 = 15.7; this.sd7 = 17.3;}
      else if (this.totalmonth == 92){this.sd1 = 10.2; this.sd2 = 11.1; this.sd3 = 12.0; this.sd4 = 13.1; this.sd5 = 14.4; this.sd6 = 15.8; this.sd7 = 17.4;}
      else if (this.totalmonth == 92.5){this.sd1 = 10.3; this.sd2 = 11.2; this.sd3 = 12.1; this.sd4 = 13.3; this.sd5 = 14.5; this.sd6 = 16.0; this.sd7 = 17.6;}
      else if (this.totalmonth == 93){this.sd1 = 10.4; this.sd2 = 11.3; this.sd3 = 12.3; this.sd4 = 13.4; this.sd5 = 14.7; this.sd6 = 16.1; this.sd7 = 17.8;}
      else if (this.totalmonth == 93.5){this.sd1 = 10.5; this.sd2 = 11.4; this.sd3 = 12.4; this.sd4 = 13.5; this.sd5 = 14.8; this.sd6 = 16.3; this.sd7 = 17.9;}
      else if (this.totalmonth == 94){this.sd1 = 10.6; this.sd2 = 11.5; this.sd3 = 12.5; this.sd4 = 13.6; this.sd5 = 14.9; this.sd6 = 16.4; this.sd7 = 18.1;}
      else if (this.totalmonth == 94.5){this.sd1 = 10.7; this.sd2 = 11.6; this.sd3 = 12.6; this.sd4 = 13.8; this.sd5 = 15.1; this.sd6 = 16.6; this.sd7 = 18.3;}
      else if (this.totalmonth == 95){this.sd1 = 10.8; this.sd2 = 11.7; this.sd3 = 12.7; this.sd4 = 13.9; this.sd5 = 15.2; this.sd6 = 16.7; this.sd7 = 18.5;}
      else if (this.totalmonth == 95.5){this.sd1 = 10.8; this.sd2 = 11.8; this.sd3 = 12.8; this.sd4 = 14.0; this.sd5 = 15.4; this.sd6 = 16.9; this.sd7 = 18.6;}
      else if (this.totalmonth == 96){this.sd1 = 10.9; this.sd2 = 11.9; this.sd3 = 12.9; this.sd4 = 14.1; this.sd5 = 15.5; this.sd6 = 17.0; this.sd7 = 18.8;}
      else if (this.totalmonth == 96.5){this.sd1 = 11.0; this.sd2 = 12.0; this.sd3 = 13.1; this.sd4 = 14.3; this.sd5 = 15.6; this.sd6 = 17.2; this.sd7 = 19.0;}
      else if (this.totalmonth == 97){this.sd1 = 11.1; this.sd2 = 12.1; this.sd3 = 13.2; this.sd4 = 14.4; this.sd5 = 15.8; this.sd6 = 17.4; this.sd7 = 19.2;}
      else if (this.totalmonth == 97.5){this.sd1 = 11.2; this.sd2 = 12.2; this.sd3 = 13.3; this.sd4 = 14.5; this.sd5 = 15.9; this.sd6 = 17.5; this.sd7 = 19.3;}
      else if (this.totalmonth == 98){this.sd1 = 11.3; this.sd2 = 12.3; this.sd3 = 13.4; this.sd4 = 14.7; this.sd5 = 16.1; this.sd6 = 17.7; this.sd7 = 19.5;}
      else if (this.totalmonth == 98.5){this.sd1 = 11.4; this.sd2 = 12.4; this.sd3 = 13.5; this.sd4 = 14.8; this.sd5 = 16.2; this.sd6 = 17.9; this.sd7 = 19.7;}
      else if (this.totalmonth == 99){this.sd1 = 11.5; this.sd2 = 12.5; this.sd3 = 13.7; this.sd4 = 14.9; this.sd5 = 16.4; this.sd6 = 18.0; this.sd7 = 19.9;}
      else if (this.totalmonth == 99.5){this.sd1 = 11.6; this.sd2 = 12.7; this.sd3 = 13.8; this.sd4 = 15.1; this.sd5 = 16.5; this.sd6 = 18.2; this.sd7 = 20.1;}
      else if (this.totalmonth == 100){this.sd1 = 11.7; this.sd2 = 12.8; this.sd3 = 13.9; this.sd4 = 15.2; this.sd5 = 16.7; this.sd6 = 18.4; this.sd7 = 20.3;}
      else if (this.totalmonth == 100.5){this.sd1 = 11.9; this.sd2 = 12.9; this.sd3 = 14.1; this.sd4 = 15.4; this.sd5 = 16.9; this.sd6 = 18.6; this.sd7 = 20.5;}
      else if (this.totalmonth == 101){this.sd1 = 12.0; this.sd2 = 13.0; this.sd3 = 14.2; this.sd4 = 15.5; this.sd5 = 17.0; this.sd6 = 18.7; this.sd7 = 20.7;}
      else if (this.totalmonth == 101.5){this.sd1 = 12.1; this.sd2 = 13.1; this.sd3 = 14.3; this.sd4 = 15.7; this.sd5 = 17.2; this.sd6 = 18.9; this.sd7 = 20.9;}
      else if (this.totalmonth == 102){this.sd1 = 12.2; this.sd2 = 13.3; this.sd3 = 14.5; this.sd4 = 15.8; this.sd5 = 17.4; this.sd6 = 19.1; this.sd7 = 21.1;}
      else if (this.totalmonth == 102.5){this.sd1 = 12.3; this.sd2 = 13.4; this.sd3 = 14.6; this.sd4 = 16.0; this.sd5 = 17.5; this.sd6 = 19.3; this.sd7 = 21.4;}
      else if (this.totalmonth == 103){this.sd1 = 12.4; this.sd2 = 13.5; this.sd3 = 14.7; this.sd4 = 16.1; this.sd5 = 17.7; this.sd6 = 19.5; this.sd7 = 21.6;}
      else if (this.totalmonth == 103.5){this.sd1 = 12.5; this.sd2 = 13.6; this.sd3 = 14.9; this.sd4 = 16.3; this.sd5 = 17.9; this.sd6 = 19.7; this.sd7 = 21.8;}
      else if (this.totalmonth == 104){this.sd1 = 12.6; this.sd2 = 13.8; this.sd3 = 15.0; this.sd4 = 16.4; this.sd5 = 18.1; this.sd6 = 19.9; this.sd7 = 22.0;}
      else if (this.totalmonth == 104.5){this.sd1 = 12.8; this.sd2 = 13.9; this.sd3 = 15.2; this.sd4 = 16.6; this.sd5 = 18.2; this.sd6 = 20.1; this.sd7 = 22.3;}
      else if (this.totalmonth == 105){this.sd1 = 12.9; this.sd2 = 14.0; this.sd3 = 15.3; this.sd4 = 16.8; this.sd5 = 18.4; this.sd6 = 20.3; this.sd7 = 22.5;}
      else if (this.totalmonth == 105.5){this.sd1 = 13.0; this.sd2 = 14.2; this.sd3 = 15.5; this.sd4 = 16.9; this.sd5 = 18.6; this.sd6 = 20.5; this.sd7 = 22.7;}
      else if (this.totalmonth == 106){this.sd1 = 13.1; this.sd2 = 14.3; this.sd3 = 15.6; this.sd4 = 17.1; this.sd5 = 18.8; this.sd6 = 20.8; this.sd7 = 23.0;}
      else if (this.totalmonth == 106.5){this.sd1 = 13.3; this.sd2 = 14.5; this.sd3 = 15.8; this.sd4 = 17.3; this.sd5 = 19.0; this.sd6 = 21.0; this.sd7 = 23.2;}
      else if (this.totalmonth == 107){this.sd1 = 13.4; this.sd2 = 14.6; this.sd3 = 15.9; this.sd4 = 17.5; this.sd5 = 19.2; this.sd6 = 21.2; this.sd7 = 23.5;}
      else if (this.totalmonth == 107.5){this.sd1 = 13.5; this.sd2 = 14.7; this.sd3 = 16.1; this.sd4 = 17.7; this.sd5 = 19.4; this.sd6 = 21.4; this.sd7 = 23.7;}
      else if (this.totalmonth == 108){this.sd1 = 13.7; this.sd2 = 14.9; this.sd3 = 16.3; this.sd4 = 17.8; this.sd5 = 19.6; this.sd6 = 21.7; this.sd7 = 24.0;}
      else if (this.totalmonth == 108.5){this.sd1 = 13.8; this.sd2 = 15.0; this.sd3 = 16.4; this.sd4 = 18.0; this.sd5 = 19.8; this.sd6 = 21.9; this.sd7 = 24.3;}
      else if (this.totalmonth == 109){this.sd1 = 13.9; this.sd2 = 15.2; this.sd3 = 16.6; this.sd4 = 18.2; this.sd5 = 20.0; this.sd6 = 22.1; this.sd7 = 24.5;}
      else if (this.totalmonth == 109.5){this.sd1 = 14.1; this.sd2 = 15.4; this.sd3 = 16.8; this.sd4 = 18.4; this.sd5 = 20.3; this.sd6 = 22.4; this.sd7 = 24.8;}
      else if (this.totalmonth == 110){this.sd1 = 14.2; this.sd2 = 15.5; this.sd3 = 17.0; this.sd4 = 18.6; this.sd5 = 20.5; this.sd6 = 22.6; this.sd7 = 25.1;}
      else if (this.totalmonth == 110.5){this.sd1 = 14.4; this.sd2 = 15.7; this.sd3 = 17.1; this.sd4 = 18.8; this.sd5 = 20.7; this.sd6 = 22.9; this.sd7 = 25.4;}
      else if (this.totalmonth == 111){this.sd1 = 14.5; this.sd2 = 15.8; this.sd3 = 17.3; this.sd4 = 19.0; this.sd5 = 20.9; this.sd6 = 23.1; this.sd7 = 25.7;}
      else if (this.totalmonth == 111.5){this.sd1 = 14.7; this.sd2 = 16.0; this.sd3 = 17.5; this.sd4 = 19.2; this.sd5 = 21.2; this.sd6 = 23.4; this.sd7 = 26.0;}
      else if (this.totalmonth == 112){this.sd1 = 14.8; this.sd2 = 16.2; this.sd3 = 17.7; this.sd4 = 19.4; this.sd5 = 21.4; this.sd6 = 23.6; this.sd7 = 26.2;}
      else if (this.totalmonth == 112.5){this.sd1 = 15.0; this.sd2 = 16.3; this.sd3 = 17.9; this.sd4 = 19.6; this.sd5 = 21.6; this.sd6 = 23.9; this.sd7 = 26.5;}
      else if (this.totalmonth == 113){this.sd1 = 15.1; this.sd2 = 16.5; this.sd3 = 18.0; this.sd4 = 19.8; this.sd5 = 21.8; this.sd6 = 24.2; this.sd7 = 26.8;}
      else if (this.totalmonth == 113.5){this.sd1 = 15.3; this.sd2 = 16.7; this.sd3 = 18.2; this.sd4 = 20.0; this.sd5 = 22.1; this.sd6 = 24.4; this.sd7 = 27.1;}
      else if (this.totalmonth == 114){this.sd1 = 15.4; this.sd2 = 16.8; this.sd3 = 18.4; this.sd4 = 20.2; this.sd5 = 22.3; this.sd6 = 24.7; this.sd7 = 27.4;}
      else if (this.totalmonth == 114.5){this.sd1 = 15.6; this.sd2 = 17.0; this.sd3 = 18.6; this.sd4 = 20.5; this.sd5 = 22.6; this.sd6 = 25.0; this.sd7 = 27.8;}
      else if (this.totalmonth == 115){this.sd1 = 15.7; this.sd2 = 17.2; this.sd3 = 18.8; this.sd4 = 20.7; this.sd5 = 22.8; this.sd6 = 25.2; this.sd7 = 28.1;}
      else if (this.totalmonth == 115.5){this.sd1 = 15.9; this.sd2 = 17.3; this.sd3 = 19.0; this.sd4 = 20.9; this.sd5 = 23.0; this.sd6 = 25.5; this.sd7 = 28.4;}
      else if (this.totalmonth == 116){this.sd1 = 16.0; this.sd2 = 17.5; this.sd3 = 19.2; this.sd4 = 21.1; this.sd5 = 23.3; this.sd6 = 25.8; this.sd7 = 28.7;}
      else if (this.totalmonth == 116.5){this.sd1 = 16.2; this.sd2 = 17.7; this.sd3 = 19.4; this.sd4 = 21.3; this.sd5 = 23.5; this.sd6 = 26.1; this.sd7 = 29.0;}
      else if (this.totalmonth == 117){this.sd1 = 16.3; this.sd2 = 17.8; this.sd3 = 19.6; this.sd4 = 21.5; this.sd5 = 23.8; this.sd6 = 26.3; this.sd7 = 29.3;}
      else if (this.totalmonth == 117.5){this.sd1 = 16.5; this.sd2 = 18.0; this.sd3 = 19.8; this.sd4 = 21.7; this.sd5 = 24.0; this.sd6 = 26.6; this.sd7 = 29.6;}
      else if (this.totalmonth == 118){this.sd1 = 16.6; this.sd2 = 18.2; this.sd3 = 19.9; this.sd4 = 22.0; this.sd5 = 24.2; this.sd6 = 26.9; this.sd7 = 29.9;}
      else if (this.totalmonth == 118.5){this.sd1 = 16.8; this.sd2 = 18.4; this.sd3 = 20.1; this.sd4 = 22.2; this.sd5 = 24.5; this.sd6 = 27.2; this.sd7 = 30.3;}
      else if (this.totalmonth == 119){this.sd1 = 16.9; this.sd2 = 18.5; this.sd3 = 20.3; this.sd4 = 22.4; this.sd5 = 24.7; this.sd6 = 27.4; this.sd7 = 30.6;}
      else if (this.totalmonth == 119.5){this.sd1 = 17.1; this.sd2 = 18.7; this.sd3 = 20.5; this.sd4 = 22.6; this.sd5 = 25.0; this.sd6 = 27.7; this.sd7 = 30.9;}
      else if (this.totalmonth == 120){this.sd1 = 17.3; this.sd2 = 18.9; this.sd3 = 20.7; this.sd4 = 22.8; this.sd5 = 25.2; this.sd6 = 28.0; this.sd7 = 31.2;}
    }
    if (this.satuan == 'lbs'){
      this.sd1 = this.sd1/0.45359237;
      this.sd2 = this.sd2/0.45359237;
      this.sd3 = this.sd3/0.45359237;
      this.sd4 = this.sd4/0.45359237;
      this.sd5 = this.sd5/0.45359237;
      this.sd6 = this.sd6/0.45359237;
      this.sd7 = this.sd7/0.45359237;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Wrong Value',
      message: 'Height must be between 65-120 cm!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Wrong Value',
      message: 'It is intended only for birth to 5 years!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  roundoff(value){
    var value4 = "" + Math.round(value);
    var bonus2 = value4.length + 1;
    var bonus = 0;
    if (value < 100){bonus=bonus+1};
    if (value < 10){bonus=bonus+1};
    if (value < 1){bonus=bonus+1};
    if (value < 0.1){bonus=bonus+1};
    if (value < 0.01){bonus=bonus+1};
    if (value < 0.001){bonus=bonus+1};
    if (value < 0.0001){bonus=bonus+1};
    bonus2 = bonus2+bonus;
    var whole = Math.round(value * Math.pow(10, bonus));
    var whole2 = "" + whole * Math.pow(10, -1*bonus);
    var whole3 = whole2.substr(0,bonus2);
    return whole3;
  }

  constructor(public alertController: AlertController) {
  }

}
