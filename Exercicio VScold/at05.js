// // function classificar () {
// //     const nota = parseInt ( promt('Digite a nota de todods os alunos')) 
// //     let resultado;
// //     if (nota > 90) { 
// //         resultado = 'A. Excelente trabalho!';
// //     } else if ( nota>= 80) {
// //         resultado = 'B. Bom trabalho!';
// // } else if ( nota >=70) {
// //         resultado = 'C. Trabalho satisfatorio.';
// // } else if ( nota >= 60) {
// //        resultado = 'D. precisa melhorar.';
// // } else {
// //        resultado = 'F. Insuficiente.'; 
// // }
// // alert('sua nota é ${resultado}');
// }
// executar
// função



// Aula Dia/ 27/08/24.


// 1° Qustão:
// function classificarNota() {
//     const nota = parseInt ( prompt( 'Digite a nota de todos os alunos (  0 a 10)'));
//     let resultado;
//     if (nota > 90) {
//         resultado = 'A. Excelente trabalho!';
//     } else if (nota >= 80) {
//         resultado = 'B. Bom trabalo!';
//     } else if (nota >= 70) {
//         resultado = 'C. Trabalho satisfatorio.';
//     } else if (nota >= 60) {
//         resultado = 'D. precisa melhorar.';
//     } else {
//         resultado = 'F. Insufuciente.';
//     }
//     alert(`sua nota é ${resultado}`);
// }
// classificarNota();

// 2° Questão

// function classificarNota() {
//     const nota = (prompt (' Digite a nota do aluno (0 a 100'));
//     const notaA = ( prompt (' Digite a classificação da nota A'));
//     const notaB = ( prompt (' Digite a clssificação nota B'));
//     const notaC = ( prompt (' Digite  a classificação nota C'));
//     let resultado;
//       if ( nota>= notaA){
//         resultado = 'A';
//       } else if ( nota>= notaB){
//         resultado = 'B';
//       } else if (nota>= notaC){
//         resultado = 'C';
//       }
//       alert( `sua nota é ${ resultado}`);
// }
// classificarNota();

// 3° Questão

// function classificarNota() {
//     const nota = parseInt (prompt('Digite a nota de todos os alunos (0 a 100):'));
//     if (nota <0 || nota >100)
//         alert(' nota inválida')
//     if (nota > 90) {
//         alert('A. Excelente trabalho!');
//     } else if (nota >= 80) {
//         alert('B. Bom trabalho!');
//     } else if (nota >= 70) {
//         alert('C. Trabalho satisfatorio.');
//     } else if (nota >= 40) {
//         alert('D. Precisa melhorar.');
//     } else {
//        alert('F. Insuficiente.');
//     }
// }
// classificarNota();


// 4°  Questão

//  function classificarNota() {
//     const nota = parseInt ( prompt (' Digite a nota do aluno ( 0 a 100):'));
//     if ( nota <0 || nota >100)
//         alert (' nota invalida')
//     if (nota > 90) {
//         alert ('A. Excente trabalho!');
//     } else if ( nota >= 80) {
//         alert ('B. Bom trabalho!');
//     } else if ( nota >= 67 ) {
//         alert ('C. Trabalho satisfatorio.');
//     } else if (nota >= 50 ) {
//         alert ('D. Precisa melhorar.');
//     } else {
//         alert ('F. Insufuciente.');
//     }
// }
// classificarNota();


// 5° Questão

// function classificarNota() {
//     const nota = parseInt (prompt (' Digite a nota do aluno (0 a 100):'));
//     if ( nota <0 || nota >100)
//         alert ('nota invalida')
//     if (nota > 95) {
//         alert ('A. Excelente trabalho!');
//     } else if ( nota >= 85) {
//         alert ('B. Bom trabalho!');
//     } else if ( nota >= 73) {
//         alert ( 'C. trabalho satisfatorio.');
//     } else if ( nota >= 45) {
//         alert ('D. Precisa melhorar.');
//     } else {
//         alert ('F. Insuficiente.');
//     }
// }
// classificarNota();

// 6° Questão

// function classificarNota() {
//     const nota = parseInt ( prompt( 'Digite a nota do aluno ( 0 a 100):'));
//     if ( nota <0 || nota > 100)
//         alert ('nota invalida')
//     if ( nota > 93) {
//         alert ('A. Excelente trabalho!');
//     } else if ( nota >= 89) {
//         alert ('B. Bom trabalho!');
//     } else if ( nota >= 76) {
//         alert ('C. Trabalho satisfatorio.');
//     } else if ( nota >= 55) {
//         alert ('D. Precisa melhorar.');
//     } else {
//         alert ('F. Insufuciente.');
//     }
// }
// classificarNota();


// ----------------------------------------------------------------------------------------------------------


// Aula dia,29/08/24.

// Add no inicio
// cont numeros = [1,2,3,4,5]
// numeros.ushift(77)
// console.log(numeros)

// Add no meio
// const numeros = [1,2,3,4,5]
// numeros.splice(2,0,"valnei")
// console.log(numeros)

// Add no final
// const numeros = [1,2,3,4,5]
// numeros.push("valnei")
// console.log(numeros)

// Busca se existe
// const numeros = ['valnei','mohamed','sergio','batista']
// console.log(numeros.indexOf('batista'))

// Encontrando a ultima adição
// const numeros = ['valnei','mohamed','sergio','batista']
// console.log(numeros.lastIndexOf('valnei'))

// Verificando a existencia
// const numeros = ['valnei','mohamed','sergio','batista']
// console.log(numeros.includes('valnei'))

// const numeros = ['valnei','mohamed','sergio','batista']
// const ultimo = numeros.pop()
// console.log(ultimo)
// console.log(numeros)
// numeros.pop()
// console.log(numeros)

// const numeros = ['valnei','mohamed','sergio','batista']
// const primeiro = numeros.shift()
// console.log(primeiro)
// console.log(numeros)

// const numeros = ['valnei','mohamed','sergio','batista']
// const meio = numeros.splice(2,2)
// console.log(meio)
// console.log(numeros)

// let numeros = ['valnei','mohamed','sergio','batista']
// numeros.length=0
// console.log(numeros)

// ------------------------------------------------------------------------------------------------------------

// Exercicio: 

// 1° Quetsão

// let frutas = ['maça', 'banana','laranja'];
// frutas.unshift('abacaxi');
// frutas.push('manga');
// console.log(frutas);
// const primeiro = frutas.shift()
// const ultimo = frutas.pop()
// console.log(primeiro);
// console.log(ultimo);
// console.log(frutas);


// 2° Questão

// let numeros = [10,20,30,40,50];
// numeros.splice(2,0,25);
// console.log(numeros);
// numeros.splice(4,1);
// console.log(numeros);


// 3° Questão

// const cores = ['vermelho','azul','verde','amarelo','azul'];
// console.log(cores.indexOf('azul'));
// console.log(cores.lastIndexOf('azul'));
// console.log(cores.includes('roxo'));





// Aula continuação, 03/09/24.

// 4°Questão

// let alunos = ['joão','ana','carlos','Bia'];
// const meio =  alunos.splice (2,1);
// console.log(meio);
// console.log(alunos);

// alunos.push ('maria');
// console.log('alunos');

// alunos.unshift('pedro');
// console.log('alunos');


// 5° Questão

// let animais = ['gato','cachorro','passáro','peixe','gato'];
// animais.shift();
// console.log(animais);

// animais.splice(0,1);          /* para remover*/
// console.log('animais');

// animais.push('hamster');     /* para adicionar*/
// console.log('animais');

// animais.splice(1,1);         /* para remover*/
// console.log('animais');

// console.log(animais.includes('gato'));


// 6° Questão

// let livros = [' O Senhor dos Aneis', '1984', 'O Ppequeno Principe','Harry Potter'];
// console.log(livros.lastIndexOf('1984'));

// livros.splice (2,1);      /* para remover*/
// console.log('livros');


// 7° Questão

// let cidades =[ 'São Paulo', ' Rio de Janeiro' , ' Salvador', 'Brasilia'];

// console.log(cidades.includes('Salvador'));

// cidades.unshift('Curitiba');     /* para adicionar */
// console.log('cidades');


// 8° Questão

// let jogos = ['FIFA', 'Minecrafy', 'Fortnine', 'AmongUs'];
// console.log('jogos');

// jogos.shift(1,1);     /* para remover */
// console.log('jogos');

// jogos.shift(1,0, "The Sims");
// console.log('jogos');


// 9° Questão

// let Esportes = ['Futebol', 'Basquete', 'Volei', 'Tênis'];

// const Primreiro = Esportes.shift('Futebol');
// console.log('Esportes');

// console.log (Esportes.includes('Volei'));
// console.log('Esportes');

// Esportes.splice(1,1);                /* para remover */
// console.log ( 'Esportes');


// 10° Questão

// let Tecnologias = ['HTML',' CSS', 'JavaScript', 'React'];
// const ultimo = Tecnologias.pop()           /* para remover */
// console.log ('ultimo');
// console.log ('Tecnologias');

// console.log( Tecnologias.indexOf ('JavasCript'));


// 11° Questão

// let filmes = ['Matrix', 'Inception', 'Avatar'];
// filmes.unshift("Interstellar");
// console.log('filmes');

// const ultimo = filmes.pop();
// console.log(ultimo);
// console.log(filmes);

// filmes.push("The Godfather");
// console.log(filmes);


// 12° Questão

// let cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo'];
// console.log(cores);

// const meio = cores.splice( 2,1);
// console.log(meio);
// console.log(cores);


// 13° Questão

// let Times = ['Flamengo', 'Corintians','Palmeiras'];
// console.log (Times);

// console.log ( Times.includes ('São Paulo'));
// console.log (Times);


// 14° Questão

// let comidas = ['Pizza','Hamburguer', 'Sushi', 'Lasanha'];
// console.log(comidas);
// console.log ( comidas.lastIndexOf('Sushi'));

// const meio = comidas.splice(2,1);
// console.log(meio);
// console.log(comidas);


// 15°Questão

// let numeros = [5, 10, 15, 20];
// numeros.push(25);
// console.log(numeros);

// numeros.unshift(7);
// console.log(numeros);


// 16° Questão

// let planetas = [ 'Terra', 'Marte', 'Jupiter', 'Saturno'];
// console.log(planetas);
// const primeiro = planetas.shift()
// console.log(primeiro);
// console.log(planetas);

// planetas.unshift('Vênus');
// console.log(planetas);



// 17° Questão

// let cursos = ['Matemática', 'Fisica','Quimica', 'Biologia'];
// console.log (cursos.includes ('Fisica'));
// console.log(cursos);

// const meio = cursos.splice(1,1);
// console.log(meio);
// console.log(cursos);


// 18° Questão

// let carros = ['Ferrari', 'Lamborghini', 'Porsche','Bugatti'];
// console.log(carros)
// const meio = carros.splice(1,1);
// console.log(meio);
// console.log(carros);

// carros.splice(1,0, "McLaren");  /* para mudança de posição, ordem, ou apagar alguma fila. basta trocar  os dois primeiro numeros */
// console.log(carros);

// const ultimo = carros.pop()
// console.log(ultimo);
// console.log(carros);


// 19° Questão

// let idiomas = ['Inglês', 'Espanhol', 'Francês', 'Alemão'];
// console.log(idiomas)

// idiomas.splice(0,1);   /* para mudança de posição, ordem, ou apagar alguem da fila. basta trocar os dois primeiros numeros*/
// console.log(idiomas)

// idiomas.splice (4,1, 'Italiano'); 
// console.log(idiomas)

// console.log(idiomas.indexOf ("Francês"));


// 20° QAuestão

// let Frutas = ['maçã', 'banana', 'laranja', 'uva'];

// Frutas.splice (0,0,'morango');      /* para adicionar ou apagar utilizando o .splice*/
// console.log(Frutas)

// console.log (Frutas.includes('laranja'));    /* verifica se objeto ou numero está presente no Array*/


// ---------------------------------------------------------------------------------------------------------------


// Atividade Dia 03/09/24

// 1° Questão

// let Frutas = ['maçã', 'Banana', 'Laranja'];
// Frutas.push(0,4, 'uva');
// console.log( Frutas);

// let inicio = Frutas.shift();
// console.log (inicio);              // "maçã"
// console.log (Frutas);                //"banana", 'maçã", "uva"


// function  verificarFrutas(nomeFrutas){
// if  (Frutas.includes(nomeFrutas)) {

// return "Frutas encontrada";
// } else {
//     return "fruta não encontrada";
//    }
// }
// console.log(verificarFrutas("banana"));   //"fruta encontrada"


// 2° Questão

// function calcular(a, b, operacao) {
//     let Resultado;


//    if (operacao === "soma") {
//    return  a + b;
//     } else if (operacao === "subtracao") {
//    return  a - b;
//     } else if (operacao === "multiplicacao") {
//     return  a * b;
//     } else if (operacao ==="divisao") {
//     return  a / b;

//     } else {

//         return "operacao não reconhecida.";
// }
// }


// console.log("Resultado da soma: " + calcular(20,5, "soma"));
// console.log("Resultado da divisao:" + calcular( 18,2, "divisao"));


// 3° Questão

// let numeros = [1, 2, 3, 4, 5];

// let numerosAumentados = [];
// for (let i = 0; i < numeros.length; i ++) {
// // numerosAumentados.push(numeros[i] + 5);
// }
// console.log(numerosAumentados);


// 4° Questão

// function classificarNota(nota) {
//     switch (true) {
//        case (nota >= 7):
//            return "Aprovado";
//         default:
//            return "Reprovado";
//        }
//    }
//    console.log("nota  8:" + classificarNota(8));  // "Aprovado"
//    console.log("nota  5:" + classificarNota(5));  // "Reporvado"



// 5° Questão

let Numeros  = [5, 10, 15, 20];
    function verificarNumeros(num) {
    if (num < 10) {
        return "Menor que 10";
    } else if ( num  >= 10 && num <= 20) {
        return "Entre 10 e 20";
    }  else  { 
        return "Maior que 20";
       }
    }
    
    for ( let i = 0; i < Numeros.lenght; i++) {
        let classificacao = verificarNumeros(Numeros[i]);
        console.log(`numeros ${Numeros[i]}: ${classificacao}`);
    }


