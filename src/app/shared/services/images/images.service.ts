import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { NzImage } from 'ng-zorro-antd/image'

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves all images for a given portfolio ID from backend.
   *
   * @param {number} portfolio_id - The ID of the portfolio to retrieve images for
   * @return {Observable<NzImage[]>} An observable of type NzImage[] representing the retrieved images
   */
  getAllImages(portfolio_id: number): Observable<NzImage[]> {
    return this.http.get<NzImage[]>('https://www.danielwparker.space/api/v1/images/' + portfolio_id)
  }
}