import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  showMessage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  exibirMensagem(): void {
    this.showMessage = !this.showMessage;
  }

}
