

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export default class GroupService {
  public API = 'http://localhost:61294/api';
  public Group = `${this.API}/Group`;

  constructor(private http: HttpClient) {}

  getAllGroup(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.Group);
  }

  getbYgROUPiD(id: string) {
    return this.http.get(`${this.Group}/${id}`);
  }

  // save(sugarLevel: SugarLevel): Observable<SugarLevel> {
  //   let result: Observable<SugarLevel>;
  //   if (sugarLevel.id) {
  //     result = this.http.put<SugarLevel>(
  //       `${this.SUGARLEVELS_API}/${sugarLevel.id}`,
  //       sugarLevel
  //     );
  //   } else {
  //     result = this.http.post<SugarLevel>(this.SUGARLEVELS_API, sugarLevel);
  //   }
  //   return result;
  // }

  // remove(id: number) {
  //   return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
  // }
}