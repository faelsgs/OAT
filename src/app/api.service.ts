import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(page){
    return this.httpClient.get(`http://localhost:1337/produtos`);
  }

  sendPostRequest(postData) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

//  let postData = {
//      "name": "morpheus",
//      "job": "leader"
//  }

    return this.httpClient.post("http://localhost:1337/produtos", postData, httpOptions);
    
  }

  sendPutRequest(id, postData) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.put(`http://localhost:1337/produtos/${id}`, postData, httpOptions);
    
  }

  sendDeleteRequest(id){
    return this.httpClient.delete(`http://localhost:1337/produtos/${id}`);
  }

}
