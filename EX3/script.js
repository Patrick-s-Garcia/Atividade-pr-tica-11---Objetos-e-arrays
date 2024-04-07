let trabalhandoMenos2500 = []

let trabalhandoMais2500 = []

let naoTrabalhando = []

let continua = true


function criarPessoa (){
    let nome = prompt("Qual é o seu nome ?")
    let idade = Number(prompt("Qual é sua idade?"))
    let emprego = confirm("Você esta trabalhando ? S - Sim N - Não")

    if(emprego){
        let salario = parseFloat(prompt("Qual é o seu salário?"))
        
        let pessoa = {
            nome: nome,
            idade: idade,
            salario: salario,
        }

        if(salario<2500){
            trabalhandoMenos2500.push(pessoa)
        }
        else{
            trabalhandoMais2500.push(pessoa)
        }



    }
    else{
        let pessoa = {
            nome: nome,
            idade: idade
        }

        naoTrabalhando.push(pessoa)
    

    }
    
    continua = confirm("Você quer continuar cadastrando? S - Sim N - Não")

    return 

}


while(continua){
    criarPessoa()
}



console.log(trabalhandoMais2500)
console.log(trabalhandoMenos2500)
console.log(naoTrabalhando)


document.write("Pessoas desempregadas:<br>")

for(i=0; i<naoTrabalhando.length;i++){
    document.write(`Nome = ${naoTrabalhando[i].nome}, Idade = ${naoTrabalhando[i].idade}<br>`)
}

document.write("Pessoas empregadas com salários menores que 2500:<br>")

for(i=0; i<trabalhandoMenos2500.length;i++){
    document.write(`Nome = ${trabalhandoMenos2500[i].nome}, Idade = ${trabalhandoMenos2500[i].idade}, Salário = ${trabalhandoMenos2500[i].salario}<br>`)
}

document.write("Pessoas empregadas com salários maiores que 2500:<br>")

for(i=0; i<trabalhandoMais2500.length;i++){
    document.write(`Nome = ${trabalhandoMais2500[i].nome}, Idade = ${trabalhandoMais2500[i].idade}, Salário = ${trabalhandoMais2500[i].salario}<br>`)
}


