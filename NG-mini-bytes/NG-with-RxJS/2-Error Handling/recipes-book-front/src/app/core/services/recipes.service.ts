import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { environment } from 'src/environments/environment';
import { catchError, delayWhen, of, retryWhen, tap, timer } from 'rxjs';
const BASE_PATH = environment.basePath

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  // recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`).pipe(
  //   catchError(error => of([])));

  recipes$ = this.http.get<Recipe[]>('http://localhost:3001/api/recipes').pipe(
    retryWhen(errors => {
      return errors
        .pipe(
          delayWhen(() => timer(5000)),
          tap(() => console.log('Retrying the HTTP request...'))
        );
    }),
  );

  constructor(private http: HttpClient) { }
}
