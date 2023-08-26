// string
let nome: string = 'João'
console.log(nome)
// nome = 28

// numbers
let idade: number = 24
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 24'
// console.log(typeof minhaIdade)

// array
let hobbies: any [] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul, // 101
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = "BMW"
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)

function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaMeuNome())

// void = vazio
function digaOi(): void {
    console.log('Oi')
    // return nome
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
// calculo
console.log(calculo(5, 6))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)
// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria'
}

// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) e retorna uma string
            -> ponto normal (<=8)
            -> fora do horário (> 8)
*/
// Alias
type Funcionario = {
    supervisores: string [], 
    baterponto: (horas: number) => string 
}

let funcionario: Funcionario = {
    supervisores: ["André", "Bia", "Carlos"],
    baterponto: (horario: number): string => {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário'
    }
}

let funcionario2: Funcionario = {
    supervisores: ["André", "Bia", "Carlos"],
    baterponto: (horario: number): string => {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário'
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterponto(8))
console.log(funcionario.baterponto(9))

// funcionario = {}

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true

// Chegando tipos
let valor = true

if(typeof valor === "number"){
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

// never
function falha(msg: string): never {
    throw new Error(msg);
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '987654321',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar: (valor: number): void => {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['322441000', '333441000']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)