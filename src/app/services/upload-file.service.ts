import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInfoWithCount,OrderInfo } from '../model/orderInfo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

private baseUrl = environment.serverUrl;

constructor(private http: HttpClient) { }

upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}


getOrderInfo(pageIndex: number = 0, pageSize: number = 10): Observable<OrderInfoWithCount> {
  return this.http.get<OrderInfoWithCount>(`${this.baseUrl}/eventhistorystatus`, {
    params: new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())
  });
}

}