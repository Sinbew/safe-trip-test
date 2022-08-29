// class WordCounter{
//     constructor()
// }

const input = document.querySelector('.input');
const textArea = document.querySelector('.textarea');

input.addEventListener('input', handlerInput);

let int;

textArea.setAttribute('disabled', 'true');

function handlerInput(evt) {
  int = +evt.target.value;

  if (int) {
    textArea.removeAttribute('disabled', 'false');
  } else {
    textArea.setAttribute('disabled', 'true');
  }

  textArea.setAttribute('maxLength', int);
  setTimeout(() => {
    textArea.value = textArea.value.slice(0, int);
  }, 1000);
}

textArea.addEventListener('keypress', onlyLetters);

function onlyLetters(evt) {
  if (evt.which < 48 || evt.which > 57) {
    return;
  } else {
    evt.preventDefault();
  }
}
