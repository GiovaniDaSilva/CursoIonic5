import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, idade: 13, nome: 'Paulo' },
      { id: 2, idade: 17, nome: 'Joana' },
      { id: 3, idade: 55, nome: 'Joao' },
      { id: 4, idade: 22, nome: 'Lucas' },
      { id: 5, idade: 33, nome: 'Ana Paula' },
      { id: 6, idade: 11, nome: 'Paula' },
      { id: 7, idade: 10, nome: 'Giovani' },
      { id: 8, idade: 35, nome: 'Carlos' },
      { id: 9, idade: 40, nome: 'Barbara' },
      { id: 10, idade: 5, nome: 'Sintia' },
    ]

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(event) {
    this.nome = event.target.value.toLowerCase();

    console.log(this.nome);

    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome) {
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
        
  }
}
