function newCard(){
 let card=document.createElement('div')
 card.className='card';
 let level=document.createElement('div')
 level.className='level'
 let sn=document.createElement('div')
 sn.className='sn'
 let title=document.createElement('div')
 title.className='title'
 let description=document.createElement('div')
 description.className='description'
level.innerHTML='<h2>Level:<span></span></h2>'
 sn.innerHTML='<h2>Serial number:<br><span></span></h2>'
 title.innerHTML='<h4></h4>'
card.append(level,sn,title,description)
let snSpan=sn.querySelector ('span')
let levelSpan=level.querySelector('span')
let titleH=title.querySelector('h4')
snSpan.innerText = this.id;
levelSpan.innerText = this.userId;
titleH.innerText = this.title;
description.innerText = this.body;
document.body.append(card)
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((res) => {for (el of res) {
        newCard.call(el);
    }});

