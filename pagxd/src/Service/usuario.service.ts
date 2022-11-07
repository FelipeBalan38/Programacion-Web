import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario!: Usuario
  private readonly url = 'https://crudcrud.com/api/d882a68529c74f059ee43bbfce7c6689/pagos'; 
  constructor(private readonly http:HttpClient) { }

  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url,usuario)
  }

  list():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
  
  listOne(id:String):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

  updateUser(usuario:Usuario):Observable<void>{
    return this.http.put<void>(`${this.url}/${usuario._id}`,usuario)
  }

  deleteUser(id:String):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
