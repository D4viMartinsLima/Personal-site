'use strict'

let h1Tag = document.querySelector('.main-bio > h1');
let text = 'avi Martins personal site';


//Função para criar animação de digitação


//Faz com que  o texto seja colocado dentro de um Array
let splitedText = text.split('');

// Aplica a função a cada elemento do array
splitedText.forEach((l, index) => {
    // Adiciona um atraso para simular a animação de digitação
    setTimeout(() => {
        // Adiciona cada letra do texto ao conteúdo do elemento h1
        h1Tag.innerHTML += l;
    }, 140 * index); // Cada letra é adicionada a cada 140 milissegundos
});