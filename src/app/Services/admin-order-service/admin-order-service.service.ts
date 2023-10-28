import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderServiceService {

  constructor(private _http: HttpClient) { }

  getAllOrders(): Observable<any> {
    let apiUrl = 'http://localhost:3600/admin/orders';
    return this._http.get(apiUrl);
  }

  createOrder(data: any): Observable<any> {
    let apiUrl = 'http://localhost:3600/admin/orders/addOrder';
    console.log(data, 'create order')
    return this._http.post(apiUrl, data);
  }

  getAllIngredients(): Observable<any> {
    let apiUrl = 'http://localhost:3600/admin/orders/ingredients';
    return this._http.get(apiUrl);
  }

  getIngredientById(id: any): Observable<any> {
    let apiUrl = 'http://localhost:3600/admin/orders/ingredients/' + id;
    return this._http.get(apiUrl);
  }

  createOrderCustomizations(data: any, orderId: any): Observable<any> {
    let apiUrl = 'http://localhost:3600/admin/orders/addOrderCustomizations';
    //we need to pass the last inserted order Id to insert for the orderCustomizations table
    let finalData = {
      orderId: orderId,
      data: data

    }
    console.log(finalData, 'create order ingredients')
    return this._http.post(apiUrl, finalData);
  }

  deleteOrder(id: any): Observable<any> {
    let apiUrl = 'http://localhost:3600/admin/orders/deleteOrder/' + id;
    return this._http.delete(apiUrl);
  }
  getOrderById(id:any):Observable<any>{
    let apiUrl = 'http://localhost:3600/admin/orders/'+id;
    return this._http.get(apiUrl);
  }

  updateOrderStatusById(data:any,orderId:any):Observable<any>{
    let apiUrl = 'http://localhost:3600/admin/orders/updateOrderStatusById/'+orderId;
    return this._http.put(apiUrl,data);
  }

  getOrderForViewById(orderItemID:any):Observable<any>{
    let apiUrl = 'http://localhost:3600/admin/orders/getOrderForViewById/'+orderItemID;
    return this._http.get(apiUrl);
  }

  getAllOrderItemsByOrderID(orderId:any):Observable<any>{
    let apiUrl = 'http://localhost:3600/admin/orders/getAllOrderItemsByOrderID/'+orderId;
    return this._http.get(apiUrl);
  }
}
