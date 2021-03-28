import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  from: Date = null;
  to: Date = null;
  gender: string = 'boys';
  age: string;
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
    this.from = null;
    this.to = null;
    this.age = null;
    this.ideal = '-';
    this.totalmonth = null;
    this.sd1 = null;
  }

  calculate(){
    if (this.from == null || this.to == null){
      this.presentAlert();
      this.age = null;
      this.ideal = '-';
      this.totalmonth = null;
      this.sd1 = null;
    }else{
      var todate = new Date(this.to);
      var fromdate = new Date(this.from);
      if (todate < fromdate){
        this.presentAlert2();
        this.age = null;
        this.ideal = '-';
        this.totalmonth = null;
        this.sd1 = null;
      } else {
      var yeardiff = todate.getFullYear() - fromdate.getFullYear();
      var monthdiff = todate.getMonth() - fromdate.getMonth();
      var daydiff = todate.getDate() - fromdate.getDate();
      var totaldays =  yeardiff*12*30 + monthdiff*30 + daydiff;
      var year1 = totaldays/30/12;
      year1 = Math.floor(year1);
      var year2 = (totaldays-(year1*12*30))/30;
      year2 = Math.floor(year2);
      var year3 = totaldays - (year1*12*30) - (year2*30);
      this.age = year1+' Years '+year2+' Months '+year3+' Days';
      this.totalmonth = Math.floor(totaldays/30);
      if (this.totalmonth > 60){
        this.presentAlert3();
        this.totalmonth = null;
        this.ideal = '-';
        this.sd1 = null;
      } else {
        this.calculate2();
      }
    }
    }
  }

  calculate2(){
    if (this.gender == 'boys'){
      if (this.totalmonth == 0){this.sd1 = 2.1; this.sd2 = 2.5; this.sd3 = 2.9; this.sd4 = 3.3; this.sd5 = 3.9; this.sd6 = 4.4; this.sd7 = 5.0;}
      else if (this.totalmonth == 1){this.sd1 = 2.9; this.sd2 = 3.4; this.sd3 = 3.9; this.sd4 = 4.5; this.sd5 = 5.1; this.sd6 = 5.8; this.sd7 = 6.6;}
      else if (this.totalmonth == 2){this.sd1 = 3.8; this.sd2 = 4.3; this.sd3 = 4.9; this.sd4 = 5.6; this.sd5 = 6.3; this.sd6 = 7.1; this.sd7 = 8.0;}
      else if (this.totalmonth == 3){this.sd1 = 4.4; this.sd2 = 5.0; this.sd3 = 5.7; this.sd4 = 6.4; this.sd5 = 7.2; this.sd6 = 8.0; this.sd7 = 9.0;}
      else if (this.totalmonth == 4){this.sd1 = 4.9; this.sd2 = 5.6; this.sd3 = 6.2; this.sd4 = 7.0; this.sd5 = 7.8; this.sd6 = 8.7; this.sd7 = 9.7;}
      else if (this.totalmonth == 5){this.sd1 = 5.3; this.sd2 = 6.0; this.sd3 = 6.7; this.sd4 = 7.5; this.sd5 = 8.4; this.sd6 = 9.3; this.sd7 = 10.4;}
      else if (this.totalmonth == 6){this.sd1 = 5.7; this.sd2 = 6.4; this.sd3 = 7.1; this.sd4 = 7.9; this.sd5 = 8.8; this.sd6 = 9.8; this.sd7 = 10.9;}
      else if (this.totalmonth == 7){this.sd1 = 5.9; this.sd2 = 6.7; this.sd3 = 7.4; this.sd4 = 8.3; this.sd5 = 9.2; this.sd6 = 10.3; this.sd7 = 11.4;}
      else if (this.totalmonth == 8){this.sd1 = 6.2; this.sd2 = 6.9; this.sd3 = 7.7; this.sd4 = 8.6; this.sd5 = 9.6; this.sd6 = 10.7; this.sd7 = 11.9;}
      else if (this.totalmonth == 9){this.sd1 = 6.4; this.sd2 = 7.1; this.sd3 = 8.0; this.sd4 = 8.9; this.sd5 = 9.9; this.sd6 = 11.0; this.sd7 = 12.3;}
      else if (this.totalmonth == 10){this.sd1 = 6.6; this.sd2 = 7.4; this.sd3 = 8.2; this.sd4 = 9.2; this.sd5 = 10.2; this.sd6 = 11.4; this.sd7 = 12.7;}
      else if (this.totalmonth == 11){this.sd1 = 6.8; this.sd2 = 7.6; this.sd3 = 8.4; this.sd4 = 9.4; this.sd5 = 10.5; this.sd6 = 11.7; this.sd7 = 13.0;}
      else if (this.totalmonth == 12){this.sd1 = 6.9; this.sd2 = 7.7; this.sd3 = 8.6; this.sd4 = 9.6; this.sd5 = 10.8; this.sd6 = 12.0; this.sd7 = 13.3;}
      else if (this.totalmonth == 13){this.sd1 = 7.1; this.sd2 = 7.9; this.sd3 = 8.8; this.sd4 = 9.9; this.sd5 = 11.0; this.sd6 = 12.3; this.sd7 = 13.7;}
      else if (this.totalmonth == 14){this.sd1 = 7.2; this.sd2 = 8.1; this.sd3 = 9.0; this.sd4 = 10.1; this.sd5 = 11.3; this.sd6 = 12.6; this.sd7 = 14.0;}
else if (this.totalmonth == 15){this.sd1 = 7.4; this.sd2 = 8.3; this.sd3 = 9.2; this.sd4 = 10.3; this.sd5 = 11.5; this.sd6 = 12.8; this.sd7 = 14.3;}
else if (this.totalmonth == 16){this.sd1 = 7.5; this.sd2 = 8.4; this.sd3 = 9.4; this.sd4 = 10.5; this.sd5 = 11.7; this.sd6 = 13.1; this.sd7 = 14.6;}
else if (this.totalmonth == 17){this.sd1 = 7.7; this.sd2 = 8.6; this.sd3 = 9.6; this.sd4 = 10.7; this.sd5 = 12.0; this.sd6 = 13.4; this.sd7 = 14.9;}
else if (this.totalmonth == 18){this.sd1 = 7.8; this.sd2 = 8.8; this.sd3 = 9.8; this.sd4 = 10.9; this.sd5 = 12.2; this.sd6 = 13.7; this.sd7 = 15.3;}
else if (this.totalmonth == 19){this.sd1 = 8.0; this.sd2 = 8.9; this.sd3 = 10.0; this.sd4 = 11.1; this.sd5 = 12.5; this.sd6 = 13.9; this.sd7 = 15.6;}
else if (this.totalmonth == 20){this.sd1 = 8.1; this.sd2 = 9.1; this.sd3 = 10.1; this.sd4 = 11.3; this.sd5 = 12.7; this.sd6 = 14.2; this.sd7 = 15.9;}
else if (this.totalmonth == 21){this.sd1 = 8.2; this.sd2 = 9.2; this.sd3 = 10.3; this.sd4 = 11.5; this.sd5 = 12.9; this.sd6 = 14.5; this.sd7 = 16.2;}
else if (this.totalmonth == 22){this.sd1 = 8.4; this.sd2 = 9.4; this.sd3 = 10.5; this.sd4 = 11.8; this.sd5 = 13.2; this.sd6 = 14.7; this.sd7 = 16.5;}
else if (this.totalmonth == 23){this.sd1 = 8.5; this.sd2 = 9.5; this.sd3 = 10.7; this.sd4 = 12.0; this.sd5 = 13.4; this.sd6 = 15.0; this.sd7 = 16.8;}
else if (this.totalmonth == 24){this.sd1 = 8.6; this.sd2 = 9.7; this.sd3 = 10.8; this.sd4 = 12.2; this.sd5 = 13.6; this.sd6 = 15.3; this.sd7 = 17.1;}
else if (this.totalmonth == 25){this.sd1 = 8.8; this.sd2 = 9.8; this.sd3 = 11.0; this.sd4 = 12.4; this.sd5 = 13.9; this.sd6 = 15.5; this.sd7 = 17.5;}
else if (this.totalmonth == 26){this.sd1 = 8.9; this.sd2 = 10.0; this.sd3 = 11.2; this.sd4 = 12.5; this.sd5 = 14.1; this.sd6 = 15.8; this.sd7 = 17.8;}
else if (this.totalmonth == 27){this.sd1 = 9.0; this.sd2 = 10.1; this.sd3 = 11.3; this.sd4 = 12.7; this.sd5 = 14.3; this.sd6 = 16.1; this.sd7 = 18.1;}
else if (this.totalmonth == 28){this.sd1 = 9.1; this.sd2 = 10.2; this.sd3 = 11.5; this.sd4 = 12.9; this.sd5 = 14.5; this.sd6 = 16.3; this.sd7 = 18.4;}
else if (this.totalmonth == 29){this.sd1 = 9.2; this.sd2 = 10.4; this.sd3 = 11.7; this.sd4 = 13.1; this.sd5 = 14.8; this.sd6 = 16.6; this.sd7 = 18.7;}
else if (this.totalmonth == 30){this.sd1 = 9.4; this.sd2 = 10.5; this.sd3 = 11.8; this.sd4 = 13.3; this.sd5 = 15.0; this.sd6 = 16.9; this.sd7 = 19.0;}
else if (this.totalmonth == 31){this.sd1 = 9.5; this.sd2 = 10.7; this.sd3 = 12.0; this.sd4 = 13.5; this.sd5 = 15.2; this.sd6 = 17.1; this.sd7 = 19.3;}
else if (this.totalmonth == 32){this.sd1 = 9.6; this.sd2 = 10.8; this.sd3 = 12.1; this.sd4 = 13.7; this.sd5 = 15.4; this.sd6 = 17.4; this.sd7 = 19.6;}
else if (this.totalmonth == 33){this.sd1 = 9.7; this.sd2 = 10.9; this.sd3 = 12.3; this.sd4 = 13.8; this.sd5 = 15.6; this.sd6 = 17.6; this.sd7 = 19.9;}
else if (this.totalmonth == 34){this.sd1 = 9.8; this.sd2 = 11.0; this.sd3 = 12.4; this.sd4 = 14.0; this.sd5 = 15.8; this.sd6 = 17.8; this.sd7 = 20.2;}
else if (this.totalmonth == 35){this.sd1 = 9.9; this.sd2 = 11.2; this.sd3 = 12.6; this.sd4 = 14.2; this.sd5 = 16.0; this.sd6 = 18.1; this.sd7 = 20.4;}
else if (this.totalmonth == 36){this.sd1 = 10.0; this.sd2 = 11.3; this.sd3 = 12.7; this.sd4 = 14.3; this.sd5 = 16.2; this.sd6 = 18.3; this.sd7 = 20.7;}
else if (this.totalmonth == 37){this.sd1 = 10.1; this.sd2 = 11.4; this.sd3 = 12.9; this.sd4 = 14.5; this.sd5 = 16.4; this.sd6 = 18.6; this.sd7 = 21.0;}
else if (this.totalmonth == 38){this.sd1 = 10.2; this.sd2 = 11.5; this.sd3 = 13.0; this.sd4 = 14.7; this.sd5 = 16.6; this.sd6 = 18.8; this.sd7 = 21.3;}
else if (this.totalmonth == 39){this.sd1 = 10.3; this.sd2 = 11.6; this.sd3 = 13.1; this.sd4 = 14.8; this.sd5 = 16.8; this.sd6 = 19.0; this.sd7 = 21.6;}
else if (this.totalmonth == 40){this.sd1 = 10.4; this.sd2 = 11.8; this.sd3 = 13.3; this.sd4 = 15.0; this.sd5 = 17.0; this.sd6 = 19.3; this.sd7 = 21.9;}
else if (this.totalmonth == 41){this.sd1 = 10.5; this.sd2 = 11.9; this.sd3 = 13.4; this.sd4 = 15.2; this.sd5 = 17.2; this.sd6 = 19.5; this.sd7 = 22.1;}
else if (this.totalmonth == 42){this.sd1 = 10.6; this.sd2 = 12.0; this.sd3 = 13.6; this.sd4 = 15.3; this.sd5 = 17.4; this.sd6 = 19.7; this.sd7 = 22.4;}
else if (this.totalmonth == 43){this.sd1 = 10.7; this.sd2 = 12.1; this.sd3 = 13.7; this.sd4 = 15.5; this.sd5 = 17.6; this.sd6 = 20.0; this.sd7 = 22.7;}
else if (this.totalmonth == 44){this.sd1 = 10.8; this.sd2 = 12.2; this.sd3 = 13.8; this.sd4 = 15.7; this.sd5 = 17.8; this.sd6 = 20.2; this.sd7 = 23.0;}
else if (this.totalmonth == 45){this.sd1 = 10.9; this.sd2 = 12.4; this.sd3 = 14.0; this.sd4 = 15.8; this.sd5 = 18.0; this.sd6 = 20.5; this.sd7 = 23.3;}
else if (this.totalmonth == 46){this.sd1 = 11.0; this.sd2 = 12.5; this.sd3 = 14.1; this.sd4 = 16.0; this.sd5 = 18.2; this.sd6 = 20.7; this.sd7 = 23.6;}
else if (this.totalmonth == 47){this.sd1 = 11.1; this.sd2 = 12.6; this.sd3 = 14.3; this.sd4 = 16.2; this.sd5 = 18.4; this.sd6 = 20.9; this.sd7 = 23.9;}
else if (this.totalmonth == 48){this.sd1 = 11.2; this.sd2 = 12.7; this.sd3 = 14.4; this.sd4 = 16.3; this.sd5 = 18.6; this.sd6 = 21.2; this.sd7 = 24.2;}
else if (this.totalmonth == 49){this.sd1 = 11.3; this.sd2 = 12.8; this.sd3 = 14.5; this.sd4 = 16.5; this.sd5 = 18.8; this.sd6 = 21.4; this.sd7 = 24.5;}
else if (this.totalmonth == 50){this.sd1 = 11.4; this.sd2 = 12.9; this.sd3 = 14.7; this.sd4 = 16.7; this.sd5 = 19.0; this.sd6 = 21.7; this.sd7 = 24.8;}
else if (this.totalmonth == 51){this.sd1 = 11.5; this.sd2 = 13.1; this.sd3 = 14.8; this.sd4 = 16.8; this.sd5 = 19.2; this.sd6 = 21.9; this.sd7 = 25.1;}
else if (this.totalmonth == 52){this.sd1 = 11.6; this.sd2 = 13.2; this.sd3 = 15.0; this.sd4 = 17.0; this.sd5 = 19.4; this.sd6 = 22.2; this.sd7 = 25.4;}
else if (this.totalmonth == 53){this.sd1 = 11.7; this.sd2 = 13.3; this.sd3 = 15.1; this.sd4 = 17.2; this.sd5 = 19.6; this.sd6 = 22.4; this.sd7 = 25.7;}
else if (this.totalmonth == 54){this.sd1 = 11.8; this.sd2 = 13.4; this.sd3 = 15.2; this.sd4 = 17.3; this.sd5 = 19.8; this.sd6 = 22.7; this.sd7 = 26.0;}
else if (this.totalmonth == 55){this.sd1 = 11.9; this.sd2 = 13.5; this.sd3 = 15.4; this.sd4 = 17.5; this.sd5 = 20.0; this.sd6 = 22.9; this.sd7 = 26.3;}
else if (this.totalmonth == 56){this.sd1 = 12.0; this.sd2 = 13.6; this.sd3 = 15.5; this.sd4 = 17.7; this.sd5 = 20.2; this.sd6 = 23.2; this.sd7 = 26.6;}
else if (this.totalmonth == 57){this.sd1 = 12.1; this.sd2 = 13.7; this.sd3 = 15.6; this.sd4 = 17.8; this.sd5 = 20.4; this.sd6 = 23.4; this.sd7 = 26.9;}
else if (this.totalmonth == 58){this.sd1 = 12.2; this.sd2 = 13.8; this.sd3 = 15.8; this.sd4 = 18.0; this.sd5 = 20.6; this.sd6 = 23.7; this.sd7 = 27.2;}
else if (this.totalmonth == 59){this.sd1 = 12.3; this.sd2 = 14.0; this.sd3 = 15.9; this.sd4 = 18.2; this.sd5 = 20.8; this.sd6 = 23.9; this.sd7 = 27.6;}
else if (this.totalmonth == 60){this.sd1 = 12.4; this.sd2 = 14.1; this.sd3 = 16.0; this.sd4 = 18.3; this.sd5 = 21.0; this.sd6 = 24.2; this.sd7 = 27.9;}
    } else if (this.gender == 'girls'){
if (this.totalmonth == 0){this.sd1 = 2.0; this.sd2 = 2.4; this.sd3 = 2.8; this.sd4 = 3.2; this.sd5 = 3.7; this.sd6 = 4.2; this.sd7 = 4.8;}
else if (this.totalmonth == 1){this.sd1 = 2.7; this.sd2 = 3.2; this.sd3 = 3.6; this.sd4 = 4.2; this.sd5 = 4.8; this.sd6 = 5.5; this.sd7 = 6.2;}
else if (this.totalmonth == 2){this.sd1 = 3.4; this.sd2 = 3.9; this.sd3 = 4.5; this.sd4 = 5.1; this.sd5 = 5.8; this.sd6 = 6.6; this.sd7 = 7.5;}
else if (this.totalmonth == 3){this.sd1 = 4.0; this.sd2 = 4.5; this.sd3 = 5.2; this.sd4 = 5.8; this.sd5 = 6.6; this.sd6 = 7.5; this.sd7 = 8.5;}
else if (this.totalmonth == 4){this.sd1 = 4.4; this.sd2 = 5.0; this.sd3 = 5.7; this.sd4 = 6.4; this.sd5 = 7.3; this.sd6 = 8.2; this.sd7 = 9.3;}
else if (this.totalmonth == 5){this.sd1 = 4.8; this.sd2 = 5.4; this.sd3 = 6.1; this.sd4 = 6.9; this.sd5 = 7.8; this.sd6 = 8.8; this.sd7 = 10.0;}
else if (this.totalmonth == 6){this.sd1 = 5.1; this.sd2 = 5.7; this.sd3 = 6.5; this.sd4 = 7.3; this.sd5 = 8.2; this.sd6 = 9.3; this.sd7 = 10.6;}
else if (this.totalmonth == 7){this.sd1 = 5.3; this.sd2 = 6.0; this.sd3 = 6.8; this.sd4 = 7.6; this.sd5 = 8.6; this.sd6 = 9.8; this.sd7 = 11.1;}
else if (this.totalmonth == 8){this.sd1 = 5.6; this.sd2 = 6.3; this.sd3 = 7.0; this.sd4 = 7.9; this.sd5 = 9.0; this.sd6 = 10.2; this.sd7 = 11.6;}
else if (this.totalmonth == 9){this.sd1 = 5.8; this.sd2 = 6.5; this.sd3 = 7.3; this.sd4 = 8.2; this.sd5 = 9.3; this.sd6 = 10.5; this.sd7 = 12.0;}
else if (this.totalmonth == 10){this.sd1 = 5.9; this.sd2 = 6.7; this.sd3 = 7.5; this.sd4 = 8.5; this.sd5 = 9.6; this.sd6 = 10.9; this.sd7 = 12.4;}
else if (this.totalmonth == 11){this.sd1 = 6.1; this.sd2 = 6.9; this.sd3 = 7.7; this.sd4 = 8.7; this.sd5 = 9.9; this.sd6 = 11.2; this.sd7 = 12.8;}
else if (this.totalmonth == 12){this.sd1 = 6.3; this.sd2 = 7.0; this.sd3 = 7.9; this.sd4 = 8.9; this.sd5 = 10.1; this.sd6 = 11.5; this.sd7 = 13.1;}
else if (this.totalmonth == 13){this.sd1 = 6.4; this.sd2 = 7.2; this.sd3 = 8.1; this.sd4 = 9.2; this.sd5 = 10.4; this.sd6 = 11.8; this.sd7 = 13.5;}
else if (this.totalmonth == 14){this.sd1 = 6.6; this.sd2 = 7.4; this.sd3 = 8.3; this.sd4 = 9.4; this.sd5 = 10.6; this.sd6 = 12.1; this.sd7 = 13.8;}
else if (this.totalmonth == 15){this.sd1 = 6.7; this.sd2 = 7.6; this.sd3 = 8.5; this.sd4 = 9.6; this.sd5 = 10.9; this.sd6 = 12.4; this.sd7 = 14.1;}
else if (this.totalmonth == 16){this.sd1 = 6.9; this.sd2 = 7.7; this.sd3 = 8.7; this.sd4 = 9.8; this.sd5 = 11.1; this.sd6 = 12.6; this.sd7 = 14.5;}
else if (this.totalmonth == 17){this.sd1 = 7.0; this.sd2 = 7.9; this.sd3 = 8.9; this.sd4 = 10.0; this.sd5 = 11.4; this.sd6 = 12.9; this.sd7 = 14.8;}
else if (this.totalmonth == 18){this.sd1 = 7.2; this.sd2 = 8.1; this.sd3 = 9.1; this.sd4 = 10.2; this.sd5 = 11.6; this.sd6 = 13.2; this.sd7 = 15.1;}
else if (this.totalmonth == 19){this.sd1 = 7.3; this.sd2 = 8.2; this.sd3 = 9.2; this.sd4 = 10.4; this.sd5 = 11.8; this.sd6 = 13.5; this.sd7 = 15.4;}
else if (this.totalmonth == 20){this.sd1 = 7.5; this.sd2 = 8.4; this.sd3 = 9.4; this.sd4 = 10.6; this.sd5 = 12.1; this.sd6 = 13.7; this.sd7 = 15.7;}
else if (this.totalmonth == 21){this.sd1 = 7.6; this.sd2 = 8.6; this.sd3 = 9.6; this.sd4 = 10.9; this.sd5 = 12.3; this.sd6 = 14.0; this.sd7 = 16.0;}
else if (this.totalmonth == 22){this.sd1 = 7.8; this.sd2 = 8.7; this.sd3 = 9.8; this.sd4 = 11.1; this.sd5 = 12.5; this.sd6 = 14.3; this.sd7 = 16.4;}
else if (this.totalmonth == 23){this.sd1 = 7.9; this.sd2 = 8.9; this.sd3 = 10.0; this.sd4 = 11.3; this.sd5 = 12.8; this.sd6 = 14.6; this.sd7 = 16.7;}
else if (this.totalmonth == 24){this.sd1 = 8.1; this.sd2 = 9.0; this.sd3 = 10.2; this.sd4 = 11.5; this.sd5 = 13.0; this.sd6 = 14.8; this.sd7 = 17.0;}
else if (this.totalmonth == 25){this.sd1 = 8.2; this.sd2 = 9.2; this.sd3 = 10.3; this.sd4 = 11.7; this.sd5 = 13.3; this.sd6 = 15.1; this.sd7 = 17.3;}
else if (this.totalmonth == 26){this.sd1 = 8.4; this.sd2 = 9.4; this.sd3 = 10.5; this.sd4 = 11.9; this.sd5 = 13.5; this.sd6 = 15.4; this.sd7 = 17.7;}
else if (this.totalmonth == 27){this.sd1 = 8.5; this.sd2 = 9.5; this.sd3 = 10.7; this.sd4 = 12.1; this.sd5 = 13.7; this.sd6 = 15.7; this.sd7 = 18.0;}
else if (this.totalmonth == 28){this.sd1 = 8.6; this.sd2 = 9.7; this.sd3 = 10.9; this.sd4 = 12.3; this.sd5 = 14.0; this.sd6 = 16.0; this.sd7 = 18.3;}
else if (this.totalmonth == 29){this.sd1 = 8.8; this.sd2 = 9.8; this.sd3 = 11.1; this.sd4 = 12.5; this.sd5 = 14.2; this.sd6 = 16.2; this.sd7 = 18.7;}
else if (this.totalmonth == 30){this.sd1 = 8.9; this.sd2 = 10.0; this.sd3 = 11.2; this.sd4 = 12.7; this.sd5 = 14.4; this.sd6 = 16.5; this.sd7 = 19.0;}
else if (this.totalmonth == 31){this.sd1 = 9.0; this.sd2 = 10.1; this.sd3 = 11.4; this.sd4 = 12.9; this.sd5 = 14.7; this.sd6 = 16.8; this.sd7 = 19.3;}
else if (this.totalmonth == 32){this.sd1 = 9.1; this.sd2 = 10.3; this.sd3 = 11.6; this.sd4 = 13.1; this.sd5 = 14.9; this.sd6 = 17.1; this.sd7 = 19.6;}
else if (this.totalmonth == 33){this.sd1 = 9.3; this.sd2 = 10.4; this.sd3 = 11.7; this.sd4 = 13.3; this.sd5 = 15.1; this.sd6 = 17.3; this.sd7 = 20.0;}
else if (this.totalmonth == 34){this.sd1 = 9.4; this.sd2 = 10.5; this.sd3 = 11.9; this.sd4 = 13.5; this.sd5 = 15.4; this.sd6 = 17.6; this.sd7 = 20.3;}
else if (this.totalmonth == 35){this.sd1 = 9.5; this.sd2 = 10.7; this.sd3 = 12.0; this.sd4 = 13.7; this.sd5 = 15.6; this.sd6 = 17.9; this.sd7 = 20.6;}
else if (this.totalmonth == 36){this.sd1 = 9.6; this.sd2 = 10.8; this.sd3 = 12.2; this.sd4 = 13.9; this.sd5 = 15.8; this.sd6 = 18.1; this.sd7 = 20.9;}
else if (this.totalmonth == 37){this.sd1 = 9.7; this.sd2 = 10.9; this.sd3 = 12.4; this.sd4 = 14.0; this.sd5 = 16.0; this.sd6 = 18.4; this.sd7 = 21.3;}
else if (this.totalmonth == 38){this.sd1 = 9.8; this.sd2 = 11.1; this.sd3 = 12.5; this.sd4 = 14.2; this.sd5 = 16.3; this.sd6 = 18.7; this.sd7 = 21.6;}
else if (this.totalmonth == 39){this.sd1 = 9.9; this.sd2 = 11.2; this.sd3 = 12.7; this.sd4 = 14.4; this.sd5 = 16.5; this.sd6 = 19.0; this.sd7 = 22.0;}
else if (this.totalmonth == 40){this.sd1 = 10.1; this.sd2 = 11.3; this.sd3 = 12.8; this.sd4 = 14.6; this.sd5 = 16.7; this.sd6 = 19.2; this.sd7 = 22.3;}
else if (this.totalmonth == 41){this.sd1 = 10.2; this.sd2 = 11.5; this.sd3 = 13.0; this.sd4 = 14.8; this.sd5 = 16.9; this.sd6 = 19.5; this.sd7 = 22.7;}
else if (this.totalmonth == 42){this.sd1 = 10.3; this.sd2 = 11.6; this.sd3 = 13.1; this.sd4 = 15.0; this.sd5 = 17.2; this.sd6 = 19.8; this.sd7 = 23.0;}
else if (this.totalmonth == 43){this.sd1 = 10.4; this.sd2 = 11.7; this.sd3 = 13.3; this.sd4 = 15.2; this.sd5 = 17.4; this.sd6 = 20.1; this.sd7 = 23.4;}
else if (this.totalmonth == 44){this.sd1 = 10.5; this.sd2 = 11.8; this.sd3 = 13.4; this.sd4 = 15.3; this.sd5 = 17.6; this.sd6 = 20.4; this.sd7 = 23.7;}
else if (this.totalmonth == 45){this.sd1 = 10.6; this.sd2 = 12.0; this.sd3 = 13.6; this.sd4 = 15.5; this.sd5 = 17.8; this.sd6 = 20.7; this.sd7 = 24.1;}
else if (this.totalmonth == 46){this.sd1 = 10.7; this.sd2 = 12.1; this.sd3 = 13.7; this.sd4 = 15.7; this.sd5 = 18.1; this.sd6 = 20.9; this.sd7 = 24.5;}
else if (this.totalmonth == 47){this.sd1 = 10.8; this.sd2 = 12.2; this.sd3 = 13.9; this.sd4 = 15.9; this.sd5 = 18.3; this.sd6 = 21.2; this.sd7 = 24.8;}
else if (this.totalmonth == 48){this.sd1 = 10.9; this.sd2 = 12.3; this.sd3 = 14.0; this.sd4 = 16.1; this.sd5 = 18.5; this.sd6 = 21.5; this.sd7 = 25.2;}
else if (this.totalmonth == 49){this.sd1 = 11.0; this.sd2 = 12.4; this.sd3 = 14.2; this.sd4 = 16.3; this.sd5 = 18.8; this.sd6 = 21.8; this.sd7 = 25.5;}
else if (this.totalmonth == 50){this.sd1 = 11.1; this.sd2 = 12.6; this.sd3 = 14.3; this.sd4 = 16.4; this.sd5 = 19.0; this.sd6 = 22.1; this.sd7 = 25.9;}
else if (this.totalmonth == 51){this.sd1 = 11.2; this.sd2 = 12.7; this.sd3 = 14.5; this.sd4 = 16.6; this.sd5 = 19.2; this.sd6 = 22.4; this.sd7 = 26.3;}
else if (this.totalmonth == 52){this.sd1 = 11.3; this.sd2 = 12.8; this.sd3 = 14.6; this.sd4 = 16.8; this.sd5 = 19.4; this.sd6 = 22.6; this.sd7 = 26.6;}
else if (this.totalmonth == 53){this.sd1 = 11.4; this.sd2 = 12.9; this.sd3 = 14.8; this.sd4 = 17.0; this.sd5 = 19.7; this.sd6 = 22.9; this.sd7 = 27.0;}
else if (this.totalmonth == 54){this.sd1 = 11.5; this.sd2 = 13.0; this.sd3 = 14.9; this.sd4 = 17.2; this.sd5 = 19.9; this.sd6 = 23.2; this.sd7 = 27.4;}
else if (this.totalmonth == 55){this.sd1 = 11.6; this.sd2 = 13.2; this.sd3 = 15.1; this.sd4 = 17.3; this.sd5 = 20.1; this.sd6 = 23.5; this.sd7 = 27.7;}
else if (this.totalmonth == 56){this.sd1 = 11.7; this.sd2 = 13.3; this.sd3 = 15.2; this.sd4 = 17.5; this.sd5 = 20.3; this.sd6 = 23.8; this.sd7 = 28.1;}
else if (this.totalmonth == 57){this.sd1 = 11.8; this.sd2 = 13.4; this.sd3 = 15.3; this.sd4 = 17.7; this.sd5 = 20.6; this.sd6 = 24.1; this.sd7 = 28.5;}
else if (this.totalmonth == 58){this.sd1 = 11.9; this.sd2 = 13.5; this.sd3 = 15.5; this.sd4 = 17.9; this.sd5 = 20.8; this.sd6 = 24.4; this.sd7 = 28.8;}
else if (this.totalmonth == 59){this.sd1 = 12.0; this.sd2 = 13.6; this.sd3 = 15.6; this.sd4 = 18.0; this.sd5 = 21.0; this.sd6 = 24.6; this.sd7 = 29.2;}
else if (this.totalmonth == 60){this.sd1 = 12.1; this.sd2 = 13.7; this.sd3 = 15.8; this.sd4 = 18.2; this.sd5 = 21.2; this.sd6 = 24.9; this.sd7 = 29.5;}
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
      message: 'Birth date and measurement date are wrong!',
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
