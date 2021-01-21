let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.basic_section');


// start chat
showChat.addEventListener('click', () => {
  chatText.style.display = 'none'
});

let click;
chat.addEventListener('click', () => {
  if(click == 0) {
  chatText.style.display = 'none'
  return click = 1;
  }
  else {
  chatText.style.display = 'block'
  return click = 0;
  }
});
// End chat