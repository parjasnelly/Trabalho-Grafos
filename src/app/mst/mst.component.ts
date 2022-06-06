import { Component, OnInit } from '@angular/core';
import { createCanvas } from 'algorithmx';
import { network1, network2 } from './grafos';
// @ts-ignore
let UnionFind = require("union-find");

@Component({
  selector: 'app-mst',
  templateUrl: './mst.component.html',
  styleUrls: ['./mst.component.css']
})
export class MstComponent implements OnInit {
  ngOnInit(): void {
    this.startAnimation()
  }
  startAnimation(){
    const canvas = createCanvas('graph');
    canvas.remove();
    canvas.size([500, 500]);
    canvas.zoom(1.5);
    canvas.edgelayout('symmetric');
    canvas.nodes(network1.nodes).add().color('blue');

    network1.edges.map((item:any) => {
      canvas.edge(item.e).add({ length: item.w }).label().add({ text: item.w });
    })
    canvas.pause(2);
    this.prim(network1.edges, network1.nodes, canvas)
  }
  // @ts-ignore
  prim(net, nods, canvas){
    let maxW = 10000;
    let n;
    let filtered;
    let i = 0;
    let l = 0;

    // @ts-ignore
    let sorted = net.sort(function(a,b){
      var x = a.w < b.w? -1:1;
      return x;
    });

    console.log(sorted)

    let forest = new UnionFind(nods.length);

    let parent = []
    let rank = []
    let minNode, u, v, w, x, y;

    for(let node of nods){
      parent.push(node)
      rank.push(0)
    }
    console.log('parent', parent)

    while (l < (nods.length -1) && i < net.length) {
      minNode = sorted[i];
      console.log(minNode);
      u = minNode.e[0]
      v = minNode.e[1]
      w = minNode.w
      i = i + 1
      console.log('u v w', u,v,w)

      x = forest.find(u)
      y = forest.find(v)
      console.log('x,y', x,y)

      if (x != y) {
        l = l + 1;
        forest.link(u, v);
        console.log(u,v)

        canvas.node(u).highlight().size('1.25x')
        canvas.node(u).color('orange')
        canvas.pause(0.5)

        canvas.edge([u, v]).highlight(0)
        canvas.edge([u, v]).traverse('red').thickness(5)
        canvas.node(v).highlight().size('1.25x')
        canvas.node(v).color('orange')
        canvas.pause(0.5)
      }
    }
  }

}
