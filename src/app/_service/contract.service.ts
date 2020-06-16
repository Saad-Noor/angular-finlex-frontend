import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getContracts(){
    console.log("hit service");
    return this.http.get(environment.apiUrl + '/contract/getContracts')
  }

  createContract(contract){
    return this.http.post(environment.apiUrl + '/contract/createContracts', contract)
  }

}
