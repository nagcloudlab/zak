import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SortingInterface } from '../types/sorting.interface';
import { UserInterface } from '../types/user.interface';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(
    sorting: SortingInterface,
    searchValue: string
  ): Observable<UserInterface[]> {
    const url = `https://randomuser.me/api/`;
    return this.http.get<any>(url).pipe(map((response: any) => response.results));
  }
}
