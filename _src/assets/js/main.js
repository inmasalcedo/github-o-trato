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
      githubNameElement.innerHTML = data.name;
    });
}

btnElement.addEventListener('click', handlerUserInfo);