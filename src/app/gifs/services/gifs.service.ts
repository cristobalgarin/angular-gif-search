import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "mbLJsSDhtAmc2IurIrfmr3Chlcne47us";
  private _historial: string[] = [];

  // TODO: Cambiar any por el tipo correspondiente
  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    let url: string = `https://api.giphy.com/v1/gifs/search?api_key=mbLJsSDhtAmc2IurIrfmr3Chlcne47us&q=${query}&limit=10`;
    this.http.get(url)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      })
  }
}
