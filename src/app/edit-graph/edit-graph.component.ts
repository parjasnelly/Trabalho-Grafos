import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { network1, network2 } from '../mst/grafos';
import {GraphService} from "../graph.service";

@Component({
  selector: 'app-edit-graph',
  templateUrl: './edit-graph.component.html',
  styleUrls: ['./edit-graph.component.css']
})
export class EditGraphComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, public graphSrvc: GraphService) {}

  ngOnInit(): void {
  }

  array: number[] = [];
  qntPontos: any;
  qntCabos: any;
  arestas= [[]];


  secondStep() {
    // @ts-ignore
    this.graphSrvc.graph.nodes = Array.from({length: this.qntPontos}, (_, i) => i)
    this.graphSrvc.graph.edges = []
    for (let i = 0; i < this.qntCabos; i++) {
      this.graphSrvc.graph.edges.push({
        e: Array(2),
        w: 0
      })
    }
    console.log(this.graphSrvc.graph)
  }
  console(){
    console.log(this.graphSrvc.graph)

  }
}
