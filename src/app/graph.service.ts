import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  network2 = {
    edges: [
      {
        e: Array(2),
        w: 0
      }
    ],
    nodes: []
  }
}
