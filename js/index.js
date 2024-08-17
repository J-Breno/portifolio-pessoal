const htmlBar = document.querySelector("#html")
const cssBar = document.querySelector("#css");
const javascriptBar = document.querySelector("#javascript");
const gitBar = document.querySelector("#git");
const typescriptBar = document.querySelector("#typescript");
const tailwindBar = document.querySelector("#tailwind");
const nodeBar = document.querySelector("#node");

var progess = 16;
var progess1 = 16;
var progess2 = 16;
var progess3 = 15;
var progess4 = 16;
var progess5 = 16;
var progess6 = 15;


const loading = setInterval(load, 50);
const loading1 = setInterval(load1, 50);
const loading2 = setInterval(load2, 50);
const loading3 = setInterval(load3, 50);
const loading4 = setInterval(load4, 50);
const loading5 = setInterval(load5, 50);
const loading6 = setInterval(load6, 50);

const htmlBarLargura = htmlBar.offsetWidth;
const cssBarLargura = cssBar.offsetWidth;
const javascriptLargura = javascriptBar.offsetWidth;
const gitLargura = gitBar.offsetWidth;
const typescriptLargura = typescriptBar.offsetWidth;
const nodeLargura = nodeBar.offsetWidth;
const tailwindLargura = tailwindBar.offsetWidth;

function load() {
    if(progess == htmlBarLargura) {
        clearInterval(loading)
    } else {
        progess += 4;
        htmlBar.style.width = progess + 'px';
    }

}

function load1() {
    if(progess1 == cssBarLargura) {
        clearInterval(loading1)
    } else {
        progess1 += 4;
        cssBar.style.width = progess1 + 'px';
    }
}

function load2() {
    if(progess2 == javascriptLargura) {
        clearInterval(loading2)
    } else {
        progess2 += 3;
        javascriptBar.style.width = progess2 + 'px';
    }
}

function load3() {
    if(progess3 == gitLargura) {
        clearInterval(loading3)
    } else {
        progess3 += 2;
        gitBar.style.width = progess3 + 'px';
    }
}

function load4() {
    if(progess4 == typescriptLargura) {
        clearInterval(loading4)
    } else {
        progess4 += 4;
        typescriptBar.style.width = progess4 + 'px';
    }
}

function load5() {
    if(progess5 == nodeLargura) {
        clearInterval(loading5)
    } else {
        progess5 += 3;
        nodeBar.style.width = progess5 + 'px';
    }
}

function load6() {
    if(progess6 == tailwindLargura) {
        clearInterval(loading6)
    } else {
        progess6 += 5;
        tailwindBar.style.width = progess6 + 'px';
    }
}

