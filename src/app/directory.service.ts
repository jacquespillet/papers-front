import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import {MessageService} from 'primeng/components/common/messageservice';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Directory} from './Directory';

@Injectable()
export class DirectoryService {
    results: {};

  constructor(private http: HttpClient) { }
  getDirectory(id: number): Observable<Directory[]> {
      return this.http.get<Directory[]>('http://127.0.0.1:8000/api/directories/' + id +'?apikey=37b51d194a7513e45b56f6524f2d51f2');
  }
}
