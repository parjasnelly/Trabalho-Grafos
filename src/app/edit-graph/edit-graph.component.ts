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

  qntPontos: number | undefined;
  qntCabos: number | undefined;


  secondStep() {
    // @ts-ignore
    this.graphSrvc.graph.nodes = Array.from({length: this.qntPontos}, (_, i) => i)
    this.graphSrvc.graph.edges = []
    // @ts-ignore
    for (let i = 0; i < this.qntCabos; i++) {
      this.graphSrvc.graph.edges.push({
        e: Array(2),
        w: 0
      })
    }
  }
}
