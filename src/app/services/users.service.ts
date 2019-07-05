import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface User {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}
export interface Paged<T> {
  data: T[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

const USERS_CACHE = new Map();

@Injectable()
export class UsersService {
  private api = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  fetchByPage(page: number = 1) {
    return this.http.get<Paged<User>>(`${this.api}?page=${page}`);
  }

  fetchById(id: number) {
    if (USERS_CACHE.has(id)) {
      return of(USERS_CACHE.get(id));
    }
    return this.http.get<{data: User}>(`${this.api}/${id}`)
      .pipe(
        map(res => res.data),
        tap(user => USERS_CACHE.set(id, user))
      );
  }
}
