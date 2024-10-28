let pessoa = {
  nome: "Vitor",
  sobrenome: "Martins",
  empresa: "CESF",
  cargo: "Estudante",
};

console.log(pessoa);
console.log(pessoa.nome);

//desconstruir o objeto
const { nome, cargo, empresa } = pessoa;

console.log(nome);
console.log(empresa);
let nomes = ["Aparício", "Bernadete", "Cremilda"];
console.log(nomes);
let { 0: primeiroNome, 1: segundoNome, 2: terceiroNome } = nomes;
console.log(primeiroNome);

//outro jeito de desconstruir array
let [priNome, segNome, tercNome] = nomes;
console.log(segNome);
