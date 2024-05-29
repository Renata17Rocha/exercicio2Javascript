let alunos = [
    {
    name:'Amanda',
    nota1: 7.5,
    nota2: 8,
},
{
    name:'Jorge',
    nota1:5.8,
    nota2: 7,
},
{
    name:'Gabriela',
    nota1:4,
    nota2:6.4,
},
{
    name: 'Rafael',
    nota1: 8.2,
    nota2: 8,
}]
console.log(alunos)

function media (nota1,nota2){
    return (nota1+nota2) /2;
}

for ( let aluno of alunos){ // aluno vai ser cada elemento do array alunos
    let calcularMedia = media(aluno.nota1, aluno. nota2) // variavel que depois servirá para fazer a condição, ela guardará o resultado da média para si e retornará uma das opçoes

    if (calcularMedia >= 7){
        alert(`${aluno.name} foi aprovado!
        Media: ${calcularMedia.toFixed(1)}`)
    }else{
        alert(`${aluno.name} foi reprovado.
        Media: ${calcularMedia.toFixed(1)}`)
    }
}