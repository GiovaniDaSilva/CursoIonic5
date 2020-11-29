import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  frutas = ['Abacaxi', 'Banana', 'Carambola', 'Figo', 'Goiaba', 'Jabuticaba', 'Limão', 'Morango'];
  constructor() { }

  ngOnInit() {
  }

  excluir(){
    console.log("Excluido")
  }
}
