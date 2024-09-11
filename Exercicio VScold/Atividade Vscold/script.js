// function dizerNome(){
//     console.log('joão')
// }
// dizerNome()

// function multiplicapordois(valor){
//     return valor * 5
// }
//     let resultado= multiplicapordois(5)
//     console.log (resultado)

// +,-,*,/,**

// let salario= 100
// console.log(salario++)
// console.log(salario)

// let valor Teclado= 100
// valor Teclado+=valorTeclado
// console.log(valorTeclado)

// console.log(1===1)

// let pontos=100
// let tipo=pontos >100? 'premium':'comum'
// console.log(tipo)

// console.log(true && true)

// let cursoSuperior=true
// let cursoTecnico= false
// let podeTrabalhar=cursoSuperior || cursoTecnico
// console.log('pode trabalhar?', podeTrabalhar)

// let candidatoRecusado = !podeTrabalhar
// console.log('Candidato Recusado','candidatoRecusado')

// let a = 'vermelho'
// let b = 'azul'
// let c = a

// a=b
// b=c

// console.log(a)
// console.log(b)

// let x = 5
// let y = 10
// x= x+y; // x agora é 15 (5+10)
// y= x-y; // y agora é 5 (15-10)
// x= x-y; // x agora é 10 (15-5)

// console.log(x) // Deve mostrar 10
// console.log(y) // Deve mostrar 5

// let hora = 17

// if(hora>6&&hora<12){
//     console.log('bom dia')
// }
// else if (hora>12&&hora<18){
//     console.log('boa tarde')
// }
// else{
//     console.log('boa noite')
// }

// ------------------------------------------------------------------------------------
// questão 1°

// let valor = 50

// if(valor>100){
//    console.log ( 'desconto 20%' )
// }
// else if (valor>50){
//     console.log ('desconto 10%')
// }
// else{
//     console.log ('não tem desconto')
// }

// ------------------------------------------------------------------
// questão 2°
// let idade = 15;

// if(idade>12&&idade<18){
//     console.log( 'adolescente');
// }
// else if (idade<12&&idade>18){
//     console.log('adulto');
// }
// else{
//  console.log('adulto')
// }

// ----------------------------------------------------------------------------------

// questão 3°

// let temperatura = 60
// if(temperatura<15){
//     console.log('frio')

// elseif (r=temperatura< 30){
// console.log('agradavel')

// else{
// console.log('Quente')
// }
// ---------------------------------------------------------------------------------------

// questão 4°

// let valor = 85;
// if (valor>90){
//     console.log('A'){

//     else if (valor>70&&valor<90){
//     console.log('B')

//     else{
//     console.log('C')
//     }
//     ----------------------------------------------------------------------------

// Qusqetão 5°

// let velocidade = 90;
// if (velocidade >120){
//     console.log('Muito Rapido'){

// else if (velocidade> 80 && velocidade<120 ){
//     console.log ('Muito Adequada'){

// else{
// //     console.log('Muito Lenta'){

// ...-------------------------------------------------------------

    // Questão 6°

//     let peso = 55;
//     if (peso<10)
//         console.log('Estoque Baixo')

//     else if(peso>10 && peso<50)
//         console.log('Estoque medio')

//     else
//     console.log('Estoque Alto')
// -------------------------------------------------------------------------------

// Questão 7°

// function classificarPeso (Peso) {
//     if (peso < 1) {
//         return "Leve";
//     } else if ( peso >= 1 && peso <= 5)
//     {
//         return "Médio";
//     } else {
//         return "Pesado";
        
//     }
// }
    
 


// ---------------------------------------------------------------------------------------------------------------
// &&, ||, !

// let maiorDeIdade= true
// let possui Cnh= true
// let podeTrabalhar=maiorDeIdade || possuiCnh
// console.log (!pode Trablahar)


// Atividade 2°

// Questão 1°

// function avaliarDesempenho (vendas, pontualidade){
//     if (vendas > 100000 && pontualidade >95) {
//         return "Desempenho Excelente";
// } else if ( (vendas >= 50000 && vendas <= 100000) && (pontualidade >=85 && pontualidade <= 95)){
//     return "Desempenho Bom";
// } else if (vendas < 50000 || pontualidade < 85){
//     return "Desempenho Regular";
//        }
// }
// console.log( avaliarDesempenho(120000,96))

//  Questão 2°

// function bolsadeEstudos (media, renda){
//     if( media >8.5 && renda < 3000 ){
//         return "aprovarBolsaIntegral";
//     } else if(( renda >=3000 && renda <= 6000 ) && ( media>= 7 && media <= 8.5)) {
//         return "aprovarBolsaParcial";
//     }else if (media <7 || renda >6000){
//         return "naoAprovarBolsa";
//     }
// }
// console.log( bolsadeEstudos(8.5,7)) 

// ---------------------------------------------------------------------------------
// QUESTÃO 3°

// function riscoDeSaude (imc, idade){
//     if (imc >30 && idade > 60){
//          return " Risco Alto";
//     } else if ((imc >= 25 && imc <=30 ) && ( idade >= 45 && idade <= 60)){
//         return "Risco Medio";
//     } else if (imc<25 || idade <45){

//        }
//     }
//     console.log (riscoDeSaude (30,60))
// ----------------------------------------------------------------------------------

// Questão 4°

// function classificacaoDeCredito ( renda , credito){
// if ( renda >100000 && credito === "Excelente"){
//     return "Prime"
// } else if ( renda >= 50000 && renda <= 100000 &&  credito === " Bom"){
//     return "Padrao"
// } else if ( renda < 50000 || credito === "Ruim"){
//     return "Restrito"
//    }
// }
// console.log (classificacaoDeCredito ( 100000, " Bom"))

// Questão 5°

// function classificar (preco, demanda){
// if ( preco > 100 && demanda > 500){
//     return "produto premium";
// } else if ( preco ==50,100 || demanda ==200,500){
//     return"produto padrao";
// } else if (preco <=50 && demanda <=200){
//     return"produto economico";
//     }
// }
// console.log (classifcar preco, demanda( 100,500)); produto premium















// Aula dia 13/08/24
// let permissao
// permissao= 'pessoa'

// switch (permissao){
//     case 'comum':
//         console.log('usuario comum')
//         break;
//     case'gerente':
//         console.log('usuario gerente')
//         break;
//     case 'diretor':
//         break;
//     default:
//        console.log('usuario não reconhecido')
//        break;

// }


// for( let i=0;i<=5;i++){
//     if(i % 2 !==0){
//     console.log('estou aprendendo',i)
// }}






// let i= 1
// while (i<=10){
//     if(i % 2!==0){
//         console.log(i)
//     }
//     i++
//


// exericio
// function FizzBuzz (num){
//     if (num & 3 ==0 && num % 5 ==0){
//         return 'FizzBuzz';
//     }else if ( num % 3 ===0){
//         return 'Fizz';
//     }else if (num % 5 ===0){
//         return 'Buzz';
//     } else{
//         return num
// }
// }
// console.log(FizzBuzz(10))


// const resultado= fizzbuzz (15);
// console.log (resultado)
// function fizzbuzz(entrada){
//     if (typeof entrada! =='number')
//         return 'não é um numero'
//     if(entrada 3 %  ===0) && (entrada % 5 ===0))
//         return 'fizz buzz'
//     console.log()
// ----------------------------------------------------------------------------------

// Aula 15/08/24

// Loop for

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // ---------------------------------------------------------------------------------

// let i =0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// Exercicio: 15/08/24

// 1°

// Crie um loop for que conte de 1 até 10 e exiba cada número no console.

// for (let i =0; i <10; i++){
//     console.log (i);
// }

// 2. Contar até 10 com while
// Crie um loop while que conte de 1 até 10 e exiba cada número no console.

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// 3. Somar números de 1 a 5 com for
// Crie um loop for que some os números de 1 a 5 e exiba a soma total.

// let soma = 0
// for (let i = 1; i <= 5; i++){
//     soma = soma +i;
// }
//     console.log (soma);


// 4. Somar números de 1 a 5 com while
// Crie um loop while que some os números de 1 a 5 e exiba a soma total.

// let soma = 0
// let i=1
// while (i <= 5) {
//      soma +=i;
//     i++;
// }
// console.log (soma);

// 5. Multiplicar números de 1 a 4 com for

// let produto = 1
// for (let i = 1; i <= +4; i++){
//     produto *=i
// } 
// console.log(produto);


// 6. Multiplicar números de 1 a 4 com while
// / Crie um loop while que multiplique os números de 1 a 4 e exiba o resultado.
// let i = 1
// let num = i
// while (i <= 4) {
//     num *=i
//     i++;
// }
// console.log(num);


// 7. Verificar paridade com for
// Crie um loop for que percorre os números de 1 a 10 e exibe "Par" se o número for par e
// "Ímpar" se o número for ímpar.

// for (let i= 1; i<= 10; i++){
//     if ( i % 2 ===0){
//    console.log (i, 'par')
//     }
//     else {
//       console.log (i, 'impar')
//     }
// } 


// 8. Verificar paridade com while
// Crie um loop while que percorre os números de 1 a 10 e exibe "Par" se o número for par e
// "Ímpar" se o número for ímpar.

// let i = 1
// let num = 0
// while (i <=10){
//     if (i % 2 ===0){
//     console.log ( i, 'par')
//     }
//     else {
//         console.log( i,'impar')
//     }
// }



// 9. FizzBuzz com for
// Crie um loop for que percorre os números de 1 a 20 e exibe:
// ● "Fizz" se o número for múltiplo de 3,
// ● "Buzz" se o número for múltiplo de 5,
// ● "FizzBuzz" se o número for múltiplo de 3 e 5,
// ● Caso contrário, exiba o número.

// for (let i =1; i<= 20; i++){
//     if (i % 3 ==0  && i % 5 ==0){
//      console.log  ('FizzBuzz')
//      } else if (i % 3 ==0){
//         console.log ('Fizz')
//      } else if (i % 5 === 0){
//         console.log ('Buzz')
//     } else {
//     console.log( i)
//     }
// } 


// 10. Escolher a operação com switch
// Crie uma função que usa um switch para retornar uma mensagem baseada na operação
// passada como argumento:
// ● "soma" para adição,
// ● "subtração" para subtração,
// ● "multiplicação" para multiplicação,
// ● "divisão" para divisão.


// function escolherOperação(operação) {
//     switch (operação){
//         case 'soma':
//             return 'para adição';
//         case  'subtração':
//             return 'para subtrtação';
//         case  'multiplicação':
//             return 'para multiplicação';
//         case ' divisão':
//             return 'para divisão';
//         default:
//             return 'Operação não reconhecido';
        

//     }}
//     console.log (escolherOperação ('soma'));
   






// 2° exercicio dia 15/08/25 

// Primeiro;

// function verificarIdade (listadeIdades) {
//     for (let i = 0; i < listadeIdades.length; i++) {
//         if (listadeIdades[i] < 18){
//             return "Alguem não pode entrar";
//         }

//         else{
//              return "todos podem entrar";

//         }}}

//    let idades =[15,22,19,20,30,28,26];
//     console.log( verificarIdade(idades)); 


// Continuação do exercico dia20/08/24

// Segundo:

// let i = 1
// let num = 0
//  while (i <= 50){
//     if ( i % 2 ===0){
//     console.log (i, 'par')
//     }
//        i++
//  

// Terceiro°

// function validarSenha ( Senha){
//      switch ( Senha) {
//         case '1':
//         return "Cor Clara";
//         case '2':
//         return "Cor Média";
//         case '3':
//         return " Cor Escura";
//         default:
//         return 'Desconhecido';
// }}
//        console.log( validarSenha ('1'));
//        console.log( validarSenha ('2'));
//        console.log( validarSenha ('3'));


 // Quarta°

//  function validarSenha (Senha){
//     switch ( Senha){
//         case '7':
//         return " Senha Fraca";
//         case '10':
//         return " Senha Média";
//         case '13':
//         return " Senha Forte";
//         default:
//         return " Desconhecido"


//     }}
//         console.log( validarSenha ('7'));
//         console.log ( validarSenha ( "10"));
//         console.log ( validarSenha ( "13"));


    // Quinta°

    // function classificarNotas ( Notas){
    //     switch ( Notas){
    //         case '100':
    //         return "A ";
    //         case '85':
    //         return "B";
    //         case '77':
    //         return "C";
    //         case '63':
    //         return "D";
    //         case '59':
    //         return "D";
    //         default:
                
    // }}
    //         console.log( classificarNotas('100'));
    //         console.log( classificarNotas( '85'));
    //         console.log( classificarNotas( '77'));
    //         console.log( classificarNotas( '63'));
    //         console.log( classificarNotas( '59')); 


    // Sexta°

//     for (let i =1; i<= 100; i++){
//         if ( i % 2 ==0 && i % 3 ==0 && i % 5 ==0){
//             console.log ("FizzBuzzBoom")
//          } else if ( i % 2 ==0 && i % 3 ==0){
//             console.log ("FizzBuzz")
//          } else if ( i % 3 ==0 && i % 5 ==0){
//             console.log( "BuzzBoom")
//          } else if ( i % 2 ==0 && i % 5 ==0){
//             console.log ("FizzBoom")
//          } else if ( i & 2 ==0){
//             console.log (" Fizz")
//          } else if ( i % 3 ==0){
//             console.log ("Buzz")
//          } else if ( i % 5 ==0){
//             console.log ("Boom")
//          } else {
//          console.log ( i )
//          }
//   }
// -----------------------------------------------------------------------------------------------------------------
        