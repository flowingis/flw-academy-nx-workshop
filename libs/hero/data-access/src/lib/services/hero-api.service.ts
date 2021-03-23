import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroDTO } from '@flowing/hero/api-interfaces';
import { BASE_API_URL } from '@flowing/common/tokens';

@Injectable({
  providedIn: 'root',
})
export class HeroApiService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_API_URL) private readonly baseApiUrl: string
  ) {}

  getHeros(): Observable<HeroDTO[]> {
    return this.http.get<HeroDTO[]>(`${this.baseApiUrl}/api/hero`);
  }
}
