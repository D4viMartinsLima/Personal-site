'use strict'

// something new
let h1Tag = document.querySelector('.main-bio > h1');
let text = 'avi Martins personal site';
text.split('').forEach((l, index) =>{
    setTimeout(() => {
        h1Tag.innerHTML += l
    }, 80 * index)
})