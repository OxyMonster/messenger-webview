import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment.prod";



@Injectable({
  providedIn: 'root'
})
export class BillersService {

  envURL = environment;   
  billerData: any[] = []; 

  constructor(
    private http: HttpClient
  ) { 
    
  }


  getBillers(langId: any) {

      return this.http
                 .post(this.envURL.urlAddress + 'messenger-user/get-billers', {"languageId": langId} );

  }; 

  setBillers(billerData: any) {
    this.billerData = billerData; 
  }; 

  getDebt(billerInfo: any) {
    const getDebturl = 'get-debt';

    return this.http.post(this.envURL.urlAddress + 'transactions/' + getDebturl, billerInfo); 

  }

  payBill(billerInfo: any) {
    const billPaymentUrl = 'bill-payment'; 

      return this.http.post(this.envURL.urlAddress + 'transactions/' +  billPaymentUrl, billerInfo); 
  }





}
