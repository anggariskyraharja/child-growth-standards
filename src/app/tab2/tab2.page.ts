import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  from: Date = null;
  to: Date = null;
  gender: string = 'boys';
  age: string;
  ideal: string ='-';
  satuan: string = 'cm';
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
if (this.totalmonth == 0){this.sd1 = 44.2; this.sd2 = 46.1; this.sd3 = 48.0; this.sd4 = 49.9; this.sd5 = 51.8; this.sd6 = 53.7; this.sd7 = 55.6;}
else if (this.totalmonth == 1){this.sd1 = 48.9; this.sd2 = 50.8; this.sd3 = 52.8; this.sd4 = 54.7; this.sd5 = 56.7; this.sd6 = 58.6; this.sd7 = 60.6;}
else if (this.totalmonth == 2){this.sd1 = 52.4; this.sd2 = 54.4; this.sd3 = 56.4; this.sd4 = 58.4; this.sd5 = 60.4; this.sd6 = 62.4; this.sd7 = 64.4;}
else if (this.totalmonth == 3){this.sd1 = 55.3; this.sd2 = 57.3; this.sd3 = 59.4; this.sd4 = 61.4; this.sd5 = 63.5; this.sd6 = 65.5; this.sd7 = 67.6;}
else if (this.totalmonth == 4){this.sd1 = 57.6; this.sd2 = 59.7; this.sd3 = 61.8; this.sd4 = 63.9; this.sd5 = 66.0; this.sd6 = 68.0; this.sd7 = 70.1;}
else if (this.totalmonth == 5){this.sd1 = 59.6; this.sd2 = 61.7; this.sd3 = 63.8; this.sd4 = 65.9; this.sd5 = 68.0; this.sd6 = 70.1; this.sd7 = 72.2;}
else if (this.totalmonth == 6){this.sd1 = 61.2; this.sd2 = 63.3; this.sd3 = 65.5; this.sd4 = 67.6; this.sd5 = 69.8; this.sd6 = 71.9; this.sd7 = 74.0;}
else if (this.totalmonth == 7){this.sd1 = 62.7; this.sd2 = 64.8; this.sd3 = 67.0; this.sd4 = 69.2; this.sd5 = 71.3; this.sd6 = 73.5; this.sd7 = 75.7;}
else if (this.totalmonth == 8){this.sd1 = 64.0; this.sd2 = 66.2; this.sd3 = 68.4; this.sd4 = 70.6; this.sd5 = 72.8; this.sd6 = 75.0; this.sd7 = 77.2;}
else if (this.totalmonth == 9){this.sd1 = 65.2; this.sd2 = 67.5; this.sd3 = 69.7; this.sd4 = 72.0; this.sd5 = 74.2; this.sd6 = 76.5; this.sd7 = 78.7;}
else if (this.totalmonth == 10){this.sd1 = 66.4; this.sd2 = 68.7; this.sd3 = 71.0; this.sd4 = 73.3; this.sd5 = 75.6; this.sd6 = 77.9; this.sd7 = 80.1;}
else if (this.totalmonth == 11){this.sd1 = 67.6; this.sd2 = 69.9; this.sd3 = 72.2; this.sd4 = 74.5; this.sd5 = 76.9; this.sd6 = 79.2; this.sd7 = 81.5;}
else if (this.totalmonth == 12){this.sd1 = 68.6; this.sd2 = 71.0; this.sd3 = 73.4; this.sd4 = 75.7; this.sd5 = 78.1; this.sd6 = 80.5; this.sd7 = 82.9;}
else if (this.totalmonth == 13){this.sd1 = 69.6; this.sd2 = 72.1; this.sd3 = 74.5; this.sd4 = 76.9; this.sd5 = 79.3; this.sd6 = 81.8; this.sd7 = 84.2;}
else if (this.totalmonth == 14){this.sd1 = 70.6; this.sd2 = 73.1; this.sd3 = 75.6; this.sd4 = 78.0; this.sd5 = 80.5; this.sd6 = 83.0; this.sd7 = 85.5;}
else if (this.totalmonth == 15){this.sd1 = 71.6; this.sd2 = 74.1; this.sd3 = 76.6; this.sd4 = 79.1; this.sd5 = 81.7; this.sd6 = 84.2; this.sd7 = 86.7;}
else if (this.totalmonth == 16){this.sd1 = 72.5; this.sd2 = 75.0; this.sd3 = 77.6; this.sd4 = 80.2; this.sd5 = 82.8; this.sd6 = 85.4; this.sd7 = 88.0;}
else if (this.totalmonth == 17){this.sd1 = 73.3; this.sd2 = 76.0; this.sd3 = 78.6; this.sd4 = 81.2; this.sd5 = 83.9; this.sd6 = 86.5; this.sd7 = 89.2;}
else if (this.totalmonth == 18){this.sd1 = 74.2; this.sd2 = 76.9; this.sd3 = 79.6; this.sd4 = 82.3; this.sd5 = 85.0; this.sd6 = 87.7; this.sd7 = 90.4;}
else if (this.totalmonth == 19){this.sd1 = 75.0; this.sd2 = 77.7; this.sd3 = 80.5; this.sd4 = 83.2; this.sd5 = 86.0; this.sd6 = 88.8; this.sd7 = 91.5;}
else if (this.totalmonth == 20){this.sd1 = 75.8; this.sd2 = 78.6; this.sd3 = 81.4; this.sd4 = 84.2; this.sd5 = 87.0; this.sd6 = 89.8; this.sd7 = 92.6;}
else if (this.totalmonth == 21){this.sd1 = 76.5; this.sd2 = 79.4; this.sd3 = 82.3; this.sd4 = 85.1; this.sd5 = 88.0; this.sd6 = 90.9; this.sd7 = 93.8;}
else if (this.totalmonth == 22){this.sd1 = 77.2; this.sd2 = 80.2; this.sd3 = 83.1; this.sd4 = 86.0; this.sd5 = 89.0; this.sd6 = 91.9; this.sd7 = 94.9;}
else if (this.totalmonth == 23){this.sd1 = 78.0; this.sd2 = 81.0; this.sd3 = 83.9; this.sd4 = 86.9; this.sd5 = 89.9; this.sd6 = 92.9; this.sd7 = 95.9;}
else if (this.totalmonth == 24){this.sd1 = 78.7; this.sd2 = 81.7; this.sd3 = 84.8; this.sd4 = 87.8; this.sd5 = 90.9; this.sd6 = 93.9; this.sd7 = 97.0;}
else if (this.totalmonth == 25){this.sd1 = 78.6; this.sd2 = 81.7; this.sd3 = 84.9; this.sd4 = 88.0; this.sd5 = 91.1; this.sd6 = 94.2; this.sd7 = 97.3;}
else if (this.totalmonth == 26){this.sd1 = 79.3; this.sd2 = 82.5; this.sd3 = 85.6; this.sd4 = 88.8; this.sd5 = 92.0; this.sd6 = 95.2; this.sd7 = 98.3;}
else if (this.totalmonth == 27){this.sd1 = 79.9; this.sd2 = 83.1; this.sd3 = 86.4; this.sd4 = 89.6; this.sd5 = 92.9; this.sd6 = 96.1; this.sd7 = 99.3;}
else if (this.totalmonth == 28){this.sd1 = 80.5; this.sd2 = 83.8; this.sd3 = 87.1; this.sd4 = 90.4; this.sd5 = 93.7; this.sd6 = 97.0; this.sd7 = 100.3;}
else if (this.totalmonth == 29){this.sd1 = 81.1; this.sd2 = 84.5; this.sd3 = 87.8; this.sd4 = 91.2; this.sd5 = 94.5; this.sd6 = 97.9; this.sd7 = 101.2;}
else if (this.totalmonth == 30){this.sd1 = 81.7; this.sd2 = 85.1; this.sd3 = 88.5; this.sd4 = 91.9; this.sd5 = 95.3; this.sd6 = 98.7; this.sd7 = 102.1;}
else if (this.totalmonth == 31){this.sd1 = 82.3; this.sd2 = 85.7; this.sd3 = 89.2; this.sd4 = 92.7; this.sd5 = 96.1; this.sd6 = 99.6; this.sd7 = 103.0;}
else if (this.totalmonth == 32){this.sd1 = 82.8; this.sd2 = 86.4; this.sd3 = 89.9; this.sd4 = 93.4; this.sd5 = 96.9; this.sd6 = 100.4; this.sd7 = 103.9;}
else if (this.totalmonth == 33){this.sd1 = 83.4; this.sd2 = 86.9; this.sd3 = 90.5; this.sd4 = 94.1; this.sd5 = 97.6; this.sd6 = 101.2; this.sd7 = 104.8;}
else if (this.totalmonth == 34){this.sd1 = 83.9; this.sd2 = 87.5; this.sd3 = 91.1; this.sd4 = 94.8; this.sd5 = 98.4; this.sd6 = 102.0; this.sd7 = 105.6;}
else if (this.totalmonth == 35){this.sd1 = 84.4; this.sd2 = 88.1; this.sd3 = 91.8; this.sd4 = 95.4; this.sd5 = 99.1; this.sd6 = 102.7; this.sd7 = 106.4;}
else if (this.totalmonth == 36){this.sd1 = 85.0; this.sd2 = 88.7; this.sd3 = 92.4; this.sd4 = 96.1; this.sd5 = 99.8; this.sd6 = 103.5; this.sd7 = 107.2;}
else if (this.totalmonth == 37){this.sd1 = 85.5; this.sd2 = 89.2; this.sd3 = 93.0; this.sd4 = 96.7; this.sd5 = 100.5; this.sd6 = 104.2; this.sd7 = 108.0;}
else if (this.totalmonth == 38){this.sd1 = 86.0; this.sd2 = 89.8; this.sd3 = 93.6; this.sd4 = 97.4; this.sd5 = 101.2; this.sd6 = 105.0; this.sd7 = 108.8;}
else if (this.totalmonth == 39){this.sd1 = 86.5; this.sd2 = 90.3; this.sd3 = 94.2; this.sd4 = 98.0; this.sd5 = 101.8; this.sd6 = 105.7; this.sd7 = 109.5;}
else if (this.totalmonth == 40){this.sd1 = 87.0; this.sd2 = 90.9; this.sd3 = 94.7; this.sd4 = 98.6; this.sd5 = 102.5; this.sd6 = 106.4; this.sd7 = 110.3;}
else if (this.totalmonth == 41){this.sd1 = 87.5; this.sd2 = 91.4; this.sd3 = 95.3; this.sd4 = 99.2; this.sd5 = 103.2; this.sd6 = 107.1; this.sd7 = 111.0;}
else if (this.totalmonth == 42){this.sd1 = 88.0; this.sd2 = 91.9; this.sd3 = 95.9; this.sd4 = 99.9; this.sd5 = 103.8; this.sd6 = 107.8; this.sd7 = 111.7;}
else if (this.totalmonth == 43){this.sd1 = 88.4; this.sd2 = 92.4; this.sd3 = 96.4; this.sd4 = 100.4; this.sd5 = 104.5; this.sd6 = 108.5; this.sd7 = 112.5;}
else if (this.totalmonth == 44){this.sd1 = 88.9; this.sd2 = 93.0; this.sd3 = 97.0; this.sd4 = 101.0; this.sd5 = 105.1; this.sd6 = 109.1; this.sd7 = 113.2;}
else if (this.totalmonth == 45){this.sd1 = 89.4; this.sd2 = 93.5; this.sd3 = 97.5; this.sd4 = 101.6; this.sd5 = 105.7; this.sd6 = 109.8; this.sd7 = 113.9;}
else if (this.totalmonth == 46){this.sd1 = 89.8; this.sd2 = 94.0; this.sd3 = 98.1; this.sd4 = 102.2; this.sd5 = 106.3; this.sd6 = 110.4; this.sd7 = 114.6;}
else if (this.totalmonth == 47){this.sd1 = 90.3; this.sd2 = 94.4; this.sd3 = 98.6; this.sd4 = 102.8; this.sd5 = 106.9; this.sd6 = 111.1; this.sd7 = 115.2;}
else if (this.totalmonth == 48){this.sd1 = 90.7; this.sd2 = 94.9; this.sd3 = 99.1; this.sd4 = 103.3; this.sd5 = 107.5; this.sd6 = 111.7; this.sd7 = 115.9;}
else if (this.totalmonth == 49){this.sd1 = 91.2; this.sd2 = 95.4; this.sd3 = 99.7; this.sd4 = 103.9; this.sd5 = 108.1; this.sd6 = 112.4; this.sd7 = 116.6;}
else if (this.totalmonth == 50){this.sd1 = 91.6; this.sd2 = 95.9; this.sd3 = 100.2; this.sd4 = 104.4; this.sd5 = 108.7; this.sd6 = 113.0; this.sd7 = 117.3;}
else if (this.totalmonth == 51){this.sd1 = 92.1; this.sd2 = 96.4; this.sd3 = 100.7; this.sd4 = 105.0; this.sd5 = 109.3; this.sd6 = 113.6; this.sd7 = 117.9;}
else if (this.totalmonth == 52){this.sd1 = 92.5; this.sd2 = 96.9; this.sd3 = 101.2; this.sd4 = 105.6; this.sd5 = 109.9; this.sd6 = 114.2; this.sd7 = 118.6;}
else if (this.totalmonth == 53){this.sd1 = 93.0; this.sd2 = 97.4; this.sd3 = 101.7; this.sd4 = 106.1; this.sd5 = 110.5; this.sd6 = 114.9; this.sd7 = 119.2;}
else if (this.totalmonth == 54){this.sd1 = 93.4; this.sd2 = 97.8; this.sd3 = 102.3; this.sd4 = 106.7; this.sd5 = 111.1; this.sd6 = 115.5; this.sd7 = 119.9;}
else if (this.totalmonth == 55){this.sd1 = 93.9; this.sd2 = 98.3; this.sd3 = 102.8; this.sd4 = 107.2; this.sd5 = 111.7; this.sd6 = 116.1; this.sd7 = 120.6;}
else if (this.totalmonth == 56){this.sd1 = 94.3; this.sd2 = 98.8; this.sd3 = 103.3; this.sd4 = 107.8; this.sd5 = 112.3; this.sd6 = 116.7; this.sd7 = 121.2;}
else if (this.totalmonth == 57){this.sd1 = 94.7; this.sd2 = 99.3; this.sd3 = 103.8; this.sd4 = 108.3; this.sd5 = 112.8; this.sd6 = 117.4; this.sd7 = 121.9;}
else if (this.totalmonth == 58){this.sd1 = 95.2; this.sd2 = 99.7; this.sd3 = 104.3; this.sd4 = 108.9; this.sd5 = 113.4; this.sd6 = 118.0; this.sd7 = 122.6;}
else if (this.totalmonth == 59){this.sd1 = 95.6; this.sd2 = 100.2; this.sd3 = 104.8; this.sd4 = 109.4; this.sd5 = 114.0; this.sd6 = 118.6; this.sd7 = 123.2;}
else if (this.totalmonth == 60){this.sd1 = 96.1; this.sd2 = 100.7; this.sd3 = 105.3; this.sd4 = 110.0; this.sd5 = 114.6; this.sd6 = 119.2; this.sd7 = 123.9;}
    } else if (this.gender == 'girls'){
      if (this.totalmonth == 0){this.sd1 = 43.6; this.sd2 = 45.4; this.sd3 = 47.3; this.sd4 = 49.1; this.sd5 = 51.0; this.sd6 = 52.9; this.sd7 = 54.7;}
      else if (this.totalmonth == 1){this.sd1 = 47.8; this.sd2 = 49.8; this.sd3 = 51.7; this.sd4 = 53.7; this.sd5 = 55.6; this.sd6 = 57.6; this.sd7 = 59.5;}
      else if (this.totalmonth == 2){this.sd1 = 51.0; this.sd2 = 53.0; this.sd3 = 55.0; this.sd4 = 57.1; this.sd5 = 59.1; this.sd6 = 61.1; this.sd7 = 63.2;}
      else if (this.totalmonth == 3){this.sd1 = 53.5; this.sd2 = 55.6; this.sd3 = 57.7; this.sd4 = 59.8; this.sd5 = 61.9; this.sd6 = 64.0; this.sd7 = 66.1;}
      else if (this.totalmonth == 4){this.sd1 = 55.6; this.sd2 = 57.8; this.sd3 = 59.9; this.sd4 = 62.1; this.sd5 = 64.3; this.sd6 = 66.4; this.sd7 = 68.6;}
      else if (this.totalmonth == 5){this.sd1 = 57.4; this.sd2 = 59.6; this.sd3 = 61.8; this.sd4 = 64.0; this.sd5 = 66.2; this.sd6 = 68.5; this.sd7 = 70.7;}
      else if (this.totalmonth == 6){this.sd1 = 58.9; this.sd2 = 61.2; this.sd3 = 63.5; this.sd4 = 65.7; this.sd5 = 68.0; this.sd6 = 70.3; this.sd7 = 72.5;}
      else if (this.totalmonth == 7){this.sd1 = 60.3; this.sd2 = 62.7; this.sd3 = 65.0; this.sd4 = 67.3; this.sd5 = 69.6; this.sd6 = 71.9; this.sd7 = 74.2;}
      else if (this.totalmonth == 8){this.sd1 = 61.7; this.sd2 = 64.0; this.sd3 = 66.4; this.sd4 = 68.7; this.sd5 = 71.1; this.sd6 = 73.5; this.sd7 = 75.8;}
      else if (this.totalmonth == 9){this.sd1 = 62.9; this.sd2 = 65.3; this.sd3 = 67.7; this.sd4 = 70.1; this.sd5 = 72.6; this.sd6 = 75.0; this.sd7 = 77.4;}
      else if (this.totalmonth == 10){this.sd1 = 64.1; this.sd2 = 66.5; this.sd3 = 69.0; this.sd4 = 71.5; this.sd5 = 73.9; this.sd6 = 76.4; this.sd7 = 78.9;}
      else if (this.totalmonth == 11){this.sd1 = 65.2; this.sd2 = 67.7; this.sd3 = 70.3; this.sd4 = 72.8; this.sd5 = 75.3; this.sd6 = 77.8; this.sd7 = 80.3;}
      else if (this.totalmonth == 12){this.sd1 = 66.3; this.sd2 = 68.9; this.sd3 = 71.4; this.sd4 = 74.0; this.sd5 = 76.6; this.sd6 = 79.2; this.sd7 = 81.7;}
      else if (this.totalmonth == 13){this.sd1 = 67.3; this.sd2 = 70.0; this.sd3 = 72.6; this.sd4 = 75.2; this.sd5 = 77.8; this.sd6 = 80.5; this.sd7 = 83.1;}
      else if (this.totalmonth == 14){this.sd1 = 68.3; this.sd2 = 71.0; this.sd3 = 73.7; this.sd4 = 76.4; this.sd5 = 79.1; this.sd6 = 81.7; this.sd7 = 84.4;}
      else if (this.totalmonth == 15){this.sd1 = 69.3; this.sd2 = 72.0; this.sd3 = 74.8; this.sd4 = 77.5; this.sd5 = 80.2; this.sd6 = 83.0; this.sd7 = 85.7;}
      else if (this.totalmonth == 16){this.sd1 = 70.2; this.sd2 = 73.0; this.sd3 = 75.8; this.sd4 = 78.6; this.sd5 = 81.4; this.sd6 = 84.2; this.sd7 = 87.0;}
      else if (this.totalmonth == 17){this.sd1 = 71.1; this.sd2 = 74.0; this.sd3 = 76.8; this.sd4 = 79.7; this.sd5 = 82.5; this.sd6 = 85.4; this.sd7 = 88.2;}
      else if (this.totalmonth == 18){this.sd1 = 72.0; this.sd2 = 74.9; this.sd3 = 77.8; this.sd4 = 80.7; this.sd5 = 83.6; this.sd6 = 86.5; this.sd7 = 89.4;}
      else if (this.totalmonth == 19){this.sd1 = 72.8; this.sd2 = 75.8; this.sd3 = 78.8; this.sd4 = 81.7; this.sd5 = 84.7; this.sd6 = 87.6; this.sd7 = 90.6;}
      else if (this.totalmonth == 20){this.sd1 = 73.7; this.sd2 = 76.7; this.sd3 = 79.7; this.sd4 = 82.7; this.sd5 = 85.7; this.sd6 = 88.7; this.sd7 = 91.7;}
      else if (this.totalmonth == 21){this.sd1 = 74.5; this.sd2 = 77.5; this.sd3 = 80.6; this.sd4 = 83.7; this.sd5 = 86.7; this.sd6 = 89.8; this.sd7 = 92.9;}
      else if (this.totalmonth == 22){this.sd1 = 75.2; this.sd2 = 78.4; this.sd3 = 81.5; this.sd4 = 84.6; this.sd5 = 87.7; this.sd6 = 90.8; this.sd7 = 94.0;}
      else if (this.totalmonth == 23){this.sd1 = 76.0; this.sd2 = 79.2; this.sd3 = 82.3; this.sd4 = 85.5; this.sd5 = 88.7; this.sd6 = 91.9; this.sd7 = 95.0;}
      else if (this.totalmonth == 24){this.sd1 = 76.7; this.sd2 = 80.0; this.sd3 = 83.2; this.sd4 = 86.4; this.sd5 = 89.6; this.sd6 = 92.9; this.sd7 = 96.1;}
      else if (this.totalmonth == 25){this.sd1 = 76.8; this.sd2 = 80.0; this.sd3 = 83.3; this.sd4 = 86.6; this.sd5 = 89.9; this.sd6 = 93.1; this.sd7 = 96.4;}
      else if (this.totalmonth == 26){this.sd1 = 77.5; this.sd2 = 80.8; this.sd3 = 84.1; this.sd4 = 87.4; this.sd5 = 90.8; this.sd6 = 94.1; this.sd7 = 97.4;}
      else if (this.totalmonth == 27){this.sd1 = 78.1; this.sd2 = 81.5; this.sd3 = 84.9; this.sd4 = 88.3; this.sd5 = 91.7; this.sd6 = 95.0; this.sd7 = 98.4;}
      else if (this.totalmonth == 28){this.sd1 = 78.8; this.sd2 = 82.2; this.sd3 = 85.7; this.sd4 = 89.1; this.sd5 = 92.5; this.sd6 = 96.0; this.sd7 = 99.4;}
      else if (this.totalmonth == 29){this.sd1 = 79.5; this.sd2 = 82.9; this.sd3 = 86.4; this.sd4 = 89.9; this.sd5 = 93.4; this.sd6 = 96.9; this.sd7 = 100.3;}
      else if (this.totalmonth == 30){this.sd1 = 80.1; this.sd2 = 83.6; this.sd3 = 87.1; this.sd4 = 90.7; this.sd5 = 94.2; this.sd6 = 97.7; this.sd7 = 101.3;}
      else if (this.totalmonth == 31){this.sd1 = 80.7; this.sd2 = 84.3; this.sd3 = 87.9; this.sd4 = 91.4; this.sd5 = 95.0; this.sd6 = 98.6; this.sd7 = 102.2;}
      else if (this.totalmonth == 32){this.sd1 = 81.3; this.sd2 = 84.9; this.sd3 = 88.6; this.sd4 = 92.2; this.sd5 = 95.8; this.sd6 = 99.4; this.sd7 = 103.1;}
      else if (this.totalmonth == 33){this.sd1 = 81.9; this.sd2 = 85.6; this.sd3 = 89.3; this.sd4 = 92.9; this.sd5 = 96.6; this.sd6 = 100.3; this.sd7 = 103.9;}
      else if (this.totalmonth == 34){this.sd1 = 82.5; this.sd2 = 86.2; this.sd3 = 89.9; this.sd4 = 93.6; this.sd5 = 97.4; this.sd6 = 101.1; this.sd7 = 104.8;}
      else if (this.totalmonth == 35){this.sd1 = 83.1; this.sd2 = 86.8; this.sd3 = 90.6; this.sd4 = 94.4; this.sd5 = 98.1; this.sd6 = 101.9; this.sd7 = 105.6;}
      else if (this.totalmonth == 36){this.sd1 = 83.6; this.sd2 = 87.4; this.sd3 = 91.2; this.sd4 = 95.1; this.sd5 = 98.9; this.sd6 = 102.7; this.sd7 = 106.5;}
      else if (this.totalmonth == 37){this.sd1 = 84.2; this.sd2 = 88.0; this.sd3 = 91.9; this.sd4 = 95.7; this.sd5 = 99.6; this.sd6 = 103.4; this.sd7 = 107.3;}
      else if (this.totalmonth == 38){this.sd1 = 84.7; this.sd2 = 88.6; this.sd3 = 92.5; this.sd4 = 96.4; this.sd5 = 100.3; this.sd6 = 104.2; this.sd7 = 108.1;}
      else if (this.totalmonth == 39){this.sd1 = 85.3; this.sd2 = 89.2; this.sd3 = 93.1; this.sd4 = 97.1; this.sd5 = 101.0; this.sd6 = 105.0; this.sd7 = 108.9;}
      else if (this.totalmonth == 40){this.sd1 = 85.8; this.sd2 = 89.8; this.sd3 = 93.8; this.sd4 = 97.7; this.sd5 = 101.7; this.sd6 = 105.7; this.sd7 = 109.7;}
      else if (this.totalmonth == 41){this.sd1 = 86.3; this.sd2 = 90.4; this.sd3 = 94.4; this.sd4 = 98.4; this.sd5 = 102.4; this.sd6 = 106.4; this.sd7 = 110.5;}
      else if (this.totalmonth == 42){this.sd1 = 86.8; this.sd2 = 90.9; this.sd3 = 95.0; this.sd4 = 99.0; this.sd5 = 103.1; this.sd6 = 107.2; this.sd7 = 111.2;}
      else if (this.totalmonth == 43){this.sd1 = 87.4; this.sd2 = 91.5; this.sd3 = 95.6; this.sd4 = 99.7; this.sd5 = 103.8; this.sd6 = 107.9; this.sd7 = 112.0;}
      else if (this.totalmonth == 44){this.sd1 = 87.9; this.sd2 = 92.0; this.sd3 = 96.2; this.sd4 = 100.3; this.sd5 = 104.5; this.sd6 = 108.6; this.sd7 = 112.7;}
      else if (this.totalmonth == 45){this.sd1 = 88.4; this.sd2 = 92.5; this.sd3 = 96.7; this.sd4 = 100.9; this.sd5 = 105.1; this.sd6 = 109.3; this.sd7 = 113.5;}
      else if (this.totalmonth == 46){this.sd1 = 88.9; this.sd2 = 93.1; this.sd3 = 97.3; this.sd4 = 101.5; this.sd5 = 105.8; this.sd6 = 110.0; this.sd7 = 114.2;}
      else if (this.totalmonth == 47){this.sd1 = 89.3; this.sd2 = 93.6; this.sd3 = 97.9; this.sd4 = 102.1; this.sd5 = 106.4; this.sd6 = 110.7; this.sd7 = 114.9;}
      else if (this.totalmonth == 48){this.sd1 = 89.8; this.sd2 = 94.1; this.sd3 = 98.4; this.sd4 = 102.7; this.sd5 = 107.0; this.sd6 = 111.3; this.sd7 = 115.7;}
      else if (this.totalmonth == 49){this.sd1 = 90.3; this.sd2 = 94.6; this.sd3 = 99.0; this.sd4 = 103.3; this.sd5 = 107.7; this.sd6 = 112.0; this.sd7 = 116.4;}
      else if (this.totalmonth == 50){this.sd1 = 90.7; this.sd2 = 95.1; this.sd3 = 99.5; this.sd4 = 103.9; this.sd5 = 108.3; this.sd6 = 112.7; this.sd7 = 117.1;}
      else if (this.totalmonth == 51){this.sd1 = 91.2; this.sd2 = 95.6; this.sd3 = 100.1; this.sd4 = 104.5; this.sd5 = 108.9; this.sd6 = 113.3; this.sd7 = 117.7;}
      else if (this.totalmonth == 52){this.sd1 = 91.7; this.sd2 = 96.1; this.sd3 = 100.6; this.sd4 = 105.0; this.sd5 = 109.5; this.sd6 = 114.0; this.sd7 = 118.4;}
      else if (this.totalmonth == 53){this.sd1 = 92.1; this.sd2 = 96.6; this.sd3 = 101.1; this.sd4 = 105.6; this.sd5 = 110.1; this.sd6 = 114.6; this.sd7 = 119.1;}
      else if (this.totalmonth == 54){this.sd1 = 92.6; this.sd2 = 97.1; this.sd3 = 101.6; this.sd4 = 106.2; this.sd5 = 110.7; this.sd6 = 115.2; this.sd7 = 119.8;}
      else if (this.totalmonth == 55){this.sd1 = 93.0; this.sd2 = 97.6; this.sd3 = 102.2; this.sd4 = 106.7; this.sd5 = 111.3; this.sd6 = 115.9; this.sd7 = 120.4;}
      else if (this.totalmonth == 56){this.sd1 = 93.4; this.sd2 = 98.1; this.sd3 = 102.7; this.sd4 = 107.3; this.sd5 = 111.9; this.sd6 = 116.5; this.sd7 = 121.1;}
      else if (this.totalmonth == 57){this.sd1 = 93.9; this.sd2 = 98.5; this.sd3 = 103.2; this.sd4 = 107.8; this.sd5 = 112.5; this.sd6 = 117.1; this.sd7 = 121.8;}
      else if (this.totalmonth == 58){this.sd1 = 94.3; this.sd2 = 99.0; this.sd3 = 103.7; this.sd4 = 108.4; this.sd5 = 113.0; this.sd6 = 117.7; this.sd7 = 122.4;}
      else if (this.totalmonth == 59){this.sd1 = 94.7; this.sd2 = 99.5; this.sd3 = 104.2; this.sd4 = 108.9; this.sd5 = 113.6; this.sd6 = 118.3; this.sd7 = 123.1;}
      else if (this.totalmonth == 60){this.sd1 = 95.2; this.sd2 = 99.9; this.sd3 = 104.7; this.sd4 = 109.4; this.sd5 = 114.2; this.sd6 = 118.9; this.sd7 = 123.7;}
    }
    if (this.satuan == 'in'){
      this.sd1 = this.sd1/2.54;
      this.sd2 = this.sd2/2.54;
      this.sd3 = this.sd3/2.54;
      this.sd4 = this.sd4/2.54;
      this.sd5 = this.sd5/2.54;
      this.sd6 = this.sd6/2.54;
      this.sd7 = this.sd7/2.54;

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
