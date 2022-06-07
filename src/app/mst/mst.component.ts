import { Component, OnInit } from '@angular/core';
import { createCanvas } from 'algorithmx';
import {GraphService} from "../graph.service";
// @ts-ignore
let UnionFind = require("union-find");

@Component({
  selector: 'app-mst',
  templateUrl: './mst.component.html',
  styleUrls: ['./mst.component.css']
})
export class MstComponent implements OnInit {

  canvas=createCanvas('graph');

  ngOnInit(): void {
    this.startAnimation();
  }

  constructor(public graphSrvc: GraphService) {
  }

  startAnimation(){
    //Inicia define os vertices, arestas e parametros antes de iniciar a animação
    this.canvas.queue('q1').clear()
    this.canvas.remove();
    this.canvas.size([window.innerWidth, (window.innerHeight-100)])
    this.canvas.zoom(1.5);
    this.canvas.edgelayout('symmetric');
    this.canvas.nodes(this.graphSrvc.graph.nodes).add().color('blue');

    this.graphSrvc.graph.edges.map((item:any) => {
      this.canvas.edge(item.e).add({ length: item.w }).label().add({ text: item.w });
    })
    //Pausa de 2s antes de executar o algoritmo
    this.canvas.withQ('q1').pause(2);
    //Algoritmo MST
    this.kruskal(this.graphSrvc.graph.edges, this.graphSrvc.graph.nodes, this.canvas)
  }

  removeCanvas(){
    //Limpa a fila de animação e exclui o canvas
    this.canvas.withQ().queue('q1').stop()
    this.canvas.remove()
  }
  // @ts-ignore

  kruskal(net, nods, canvas){
    // @ts-ignore
    const animateText = (label, text) =>
      label
        .visible(false)
        .pause(0.4)
        .text(text)
        .visible(true)
        .pause(2).withQ('q1')

    const titleLabel = canvas.label('title')
    titleLabel.add({ pos: [0, '0.5cy'], text: '' })

    let i = 0;
    let l = 0;
    // @ts-ignore
    //Ordena as arestas em ordem crescente dos pesos
    let sorted = net.sort((a,b)=>{
      let x = a.w < b.w? -1:1;
      return x;
    });
    //Usa uma biblioteca para encontrar ciclos
    let forest = new UnionFind(nods.length);
    let minNode, u, v, w, x, y;
    let pesoFinal = 0

    while (l < (nods.length -1) && i < net.length) {
      //Pega a aresta minima atual
      minNode = sorted[i];

      //Pega os 2 vertices da aresta atual e o peso
      u = minNode.e[0]
      v = minNode.e[1]
      w = minNode.w
      i = i + 1
      pesoFinal+= w

      x = forest.find(u)
      y = forest.find(v)
      //verifica se não existem ciclos, para adicionar a aresta a arvore minima

      if (x != y) {
        l = l + 1;
        //Define que agora há uma conexão entre o vertice u e v
        forest.link(u, v);
        animateText(titleLabel, `Conecta o poste ${u} com ${v} na arvore espalhada mínima`)
        canvas.withQ('q1').node(u).highlight().size('1.25x')
        canvas.withQ('q1').node(u).color('orange')
        canvas.withQ('q1').pause(1)
        canvas.withQ('q1').edge([u, v]).highlight(0)
        canvas.withQ('q1').edge([u, v]).traverse('red').thickness(5)
        canvas.withQ('q1').node(v).highlight().size('1.25x')
        canvas.withQ('q1').node(v).color('orange')
        canvas.withQ('q1').pause(1)

      }
    }
    animateText(titleLabel, `Arvore espalhada mínima finalizada!\n Tamanho total minimo de cabos para conectar todos os postes: ${pesoFinal}`)
  }

}
