import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ConnectionArgs{
  url:string,
  body?:any
}


@Injectable({
  providedIn: 'root'
})
export abstract class ApiConnectionService {

  backendBaseUrl = environment.ApiBaseUrl

  constructor(private httpClient:HttpClient) { }

  get<T>(args:ConnectionArgs):Observable<T>{
    return this.httpClient.get<T>(this.backendBaseUrl+args.url)
  }

  post<T>(args:ConnectionArgs):Observable<T>{
    return this.httpClient.post<T>(this.backendBaseUrl+args.url,args.body)
  }

  put<T>(args:ConnectionArgs):Observable<T>{
    return this.httpClient.put<T>(this.backendBaseUrl+args.url,args.body)
  }

}

