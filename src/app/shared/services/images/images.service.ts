import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { NzImage } from 'ng-zorro-antd/image'

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) {}

  getAllImages(portfolio_id: number): Observable<NzImage[]> {
    return this.http.get<NzImage[]>('https://www.danielwparker.space/api/v1/images/' + portfolio_id)
  }
}