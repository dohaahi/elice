const loginForm = document.getElementById('login-form');
const loginInput = document.getElementById('input');
const greeting = document.getElementById('greeting');

function onLoginSubmit (e) {
  e.preventDefault(); //브라우저 기본동작 막아줌

  //hidden으로 form 없애기 (class 추가)
  loginForm.classList.add('hidden');

  //userName을 localStorage에 저장
  const username = loginInput.value;
  localStorage.setItem('username', username);

  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove('hidden'); //remove로 hidden이였던 greeting 표시 (class 삭제)
}

const savedUsername = localStorage.getItem('username');

if(!savedUsername) {
  //savedUsername이 없다면 form 표시
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername)
}
