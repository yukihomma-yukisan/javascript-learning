'use strict';

const getId = document.getElementById('button');
getId.addEventListener('click', ()=>{
  const result = document.getElementById('result');
  console.log(result.innerText);
},false);

const getTag = document.getElementById('button2');
getTag.addEventListener('click', ()=>{
  const elements = document.getElementsByTagName('div');
  for(let i = 0; i < elements.length; i++){
    console.log(elements[i].innerText);
  }
},false);

const getName = document.getElementById('button3');
getName.addEventListener('click', ()=>{
  const elements2 = document.getElementsByName('result3');
  console.log(elements2[0].value);
  },false);

const getClass = document.getElementById('button4');
getClass.addEventListener('click', ()=>{
  const elements3 = document.getElementsByClassName('foo');
  for(let i = 0; i < elements3.length; i++){
    console.log(elements3[i].innerText);
  }
  },false);
  