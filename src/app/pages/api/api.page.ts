import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  cep : string = "89057500";
  resultado : any = {
    bairro: "",
    cep: "",
    complemento: "",
    ddd: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    siafi: "",
    uf: "",
  };
  constructor(private cepService : CepService) { }

  ngOnInit() {
  }
  
  ConsultarCEP(){
    this.cepService.obterEndereco(this.cep)
    .then((json) => {
      console.log(json)
      this.resultado = json
    })
    .catch((erro)=>{
      console.log(erro)
    });
  }
}
