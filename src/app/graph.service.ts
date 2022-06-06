import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  graph = {
    edges: [
      {
        e: [1, 2],
        w: 11
      },
      {
        e: [1, 6],
        w: 2
      },
      {
        e: [1, 4],
        w: 10
      },
      {
        e: [2, 3],
        w: 9
      },
      {
        e: [2, 4],
        w: 6
      },
      {
        e: [2, 5],
        w: 7
      },
      {
        e: [3, 5],
        w: 5
      },
      {
        e: [3, 8],
        w: 15
      },
      {
        e: [4, 6],
        w: 14
      },
      {
        e: [4, 7],
        w: 3
      },
      {
        e: [5, 7],
        w: 12
      },
      {
        e: [5, 8],
        w: 1
      },
      {
        e: [6, 7],
        w: 13
      },
      {
        e: [7, 8],
        w: 4
      }
    ],
    nodes: [1, 2, 3, 4, 5, 6, 7, 8]
  }
}
