const Skribi = require('./skribi'); // Replace with the actual path to your Skribi class

document.querySelectorAll("[data-skribi]").forEach( el => {
    let s = new Skribi(el);
});