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
  
  const appendNode = document.getElementById('button5');
  appendNode.addEventListener('click', ()=>{
    const li = document.createElement('li');

    const text = document.createTextNode('liタグ作成⇦テキスト作成⇦子追加→ulをget⇦li子追加');
    li.appendChild(text);

    const listElement = document.getElementById('list');
    listElement.appendChild(li);
  },false);

  const replaceNode = document.getElementById('button6');
  replaceNode.addEventListener('click', ()=>{
    const newList = document.createElement('li');
    newList.setAttribute('id','newList');
    const newText = document.createTextNode('li作成⇦id属性追加⇦子追加→id取得し親nodeを代入⇦子を置換');
    newList.appendChild(newText);
    const oldList = document.getElementById('oldList');
    const parentNode = oldList.parentNode;
    parentNode.replaceChild(newList, oldList);
  },false);

  const deleteNode = document.getElementById('deleteButton');
  deleteNode.addEventListener('click', ()=>{
    const parentElement = document.getElementById('deleteList');
    const elements = document.getElementsByTagName('li');
    const removeIndex = elements.length - 1;
    // console.log(removeIndex);
    parentElement.removeChild(elements[removeIndex]);
  },false);