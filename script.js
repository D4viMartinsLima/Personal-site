'use strict'

let h1Tag = $('.main-bio > h1');
let text = 'avi Martins personal site';

// Faz com que o texto seja colocado dentro de um Array
let splitedText = text.split('');

// Aplica a função a cada elemento do array usando jQuery
$.each(splitedText, (index, l) => {
    // Adiciona um atraso para simular a animação de digitação
    setTimeout(() => {
        // Adiciona cada letra do texto ao conteúdo do elemento h1 usando jQuery
        h1Tag.append(l);
    }, 140 * index); // Cada letra é adicionada a cada 140 milissegundos
});