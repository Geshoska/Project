/*import axios from 'axios';
const instance = axios.create({
  baseUrl:'http://192.168.0.111:5500/setup/index.html', 
  headers:
  {'Acces-Control-Allow - Origin':'*'}
}) */
/*
let req = new XMLHttpRequest(); 
req.open('get','/Users/38977/Desktop/Challenge/data.json',true); 
req.send();
req.onload= function(){

  if(this.readyState == 4 && this.status==200){
    let prod = JSON.parse(this.responseText);
    let output ='';
    for (let item of products){
      output+=`
      <div class='products'>
      <img src='${item.image}' alt='${item.image}'>
      <b><p class='name'>${item.name}</p></b>
      <p class='date'>${item.date}</p>
      <img src='./heart.svg' alt='logo'>
      <p class='desc'>${item.caption}</p>
      <br>
      <img src='${item.profile_image}' alt='${item.profile_image}'>
      <p class='nOfLikes'>${item.likes}</p>
     </div> 
     `;
    }
    document.querySelector('.products').innerHTML= output; 
  }
}
fetch('./data.json',{
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }})
   .then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})*/
'use strict'
let init = {
  method:'GET', 
  headers:{
    'Acces-Control-Allow-Origin':'*'
  },
  mode:'cors',
  cache:'default'
};
let request = new Request('./data.json',init); 
fetch(request)
.then(function(resp){
  return resp.json();
})
.then(function(data){
  console.log(data);
})