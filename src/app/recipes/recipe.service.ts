import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }
  add(name:string,description:string,imageUrl:string):Observable<any>{
  
    return this.http.post('http://localhost:4210/add',{
      name:name,
      description:description,
      imageUrl:imageUrl
    })
  }

  delete():Observable<any>{
  
    return this.http.post('http://localhost:4210/delete',{})
  }
}
