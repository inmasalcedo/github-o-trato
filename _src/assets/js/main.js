'use strict';

const btnElement = document.querySelector('.btn_name');
const userNameElement = document.querySelector('.userName');
const githubNameElement = document.querySelector('.githubName');

function handlerUserInfo(event) {
  event.preventDefault();
  fetch(`https://api.github.com/users/${userNameElement.value}`)

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const nameSurname = data.name;
      const arrayNameSurname = nameSurname.split(' ');
      const arrayLetters = arrayNameSurname[0].split('');
      console.log(arrayLetters);
      for (let i = 0; i < arrayLetters.length; i++) {
        githubNameElement.innerHTML += `<li class="letter">${arrayLetters[i]}</li>`;
      }
    });
}


btnElement.addEventListener('click', handlerUserInfo);