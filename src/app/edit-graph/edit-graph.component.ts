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

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  array: number[] = [];
  qntPontos: any;
  qntCabos: any;
  arestas= [[]];


  secondStep() {
    for (let i = 0; i < this.qntPontos; i++) {
      this.array.push(i)
    }
    console.log(this.array)
  }
  console(){
    console.log(network2)
    network2.nodes=[]
    console.log(network2.nodes)
  }
}
