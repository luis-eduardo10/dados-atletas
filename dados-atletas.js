class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome,
      this.idade = idade,
      this.peso = peso,
      this.altura = altura,
      this.notas = notas
    }
  
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil"
      } else if (this.idade == 12 || this.idade == 13) {
        return "Juvenil"
      } else if (this.idade == 14 || this.idade == 15) {
        return "Intermediário"
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Adulto"
      } else {
        return "Sem Categoria"
      }
    }
  
    calculaIMC() {
      const imc = this.peso / (this.altura * this.altura);
      return imc
    }
  
    calculaMediaValida() {
      let ordem = this.notas.sort(function(a, b) {
        return a - b
      })
      
      let meio = ordem.slice(1, 4)
      
      let total = meio.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual
      }, 0)
  
      let media = total/3
      return media
    }
  
    obtemNomeAtleta() {
      return `Nome: ${this.nome}`
    }
  
    obtemIdadeAtleta() {
      return `Idade: ${this.idade}`
    }
  
    obtemPesoAtleta() {
      return `Peso: ${this.peso}`
    }
  
    obtemNotasAtleta() {
      return `Notas: ${this.notas}`
    }
  
    obtemCategoria() {
      return `Categoria: ${this.calculaCategoria()}`;
    }
  
    obtemIMC() {
      return `IMC: ${this.calculaIMC()}`;
    }
  
    obtemMediaValida() {
      return `Média Válida: ${this.calculaMediaValida()}`;
    }
  
  }
  
  const atleta = new Atleta("Alexandre", 33, 98, 1.88, [9, 8.45, 7.78, 8.55, 10]);
  console.log(atleta.obtemNomeAtleta());
  console.log(atleta.obtemIdadeAtleta());
  console.log(atleta.obtemPesoAtleta());
  console.log(atleta.obtemNotasAtleta());
  console.log(atleta.obtemCategoria());
  console.log(atleta.obtemIMC());
  console.log(atleta.obtemMediaValida());