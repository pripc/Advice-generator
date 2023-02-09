let adviceNumber = window.document.getElementById('numAdvice')
let adviceText = window.document.getElementById('frase')
let url = `https://api.adviceslip.com/advice`
function Mensagem(){
    //Request Data
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //Inject to DOM
    adviceNumber.innerHTML = data.slip.id;
    adviceText.innerHTML = data.slip.advice;
  });

}

// function geradorDeConselho() {
//   let advice = document.getElementById('advice');
//   let adviceNumber = document.getElementById('adviceNumber');
//   //let randomNumber = Math.floor(Math.random() * 200);
//   //let randomAdvice = `https://api.adviceslip.com/advice/${randomNumber}`
//   let randomAdvice = `https://api.adviceslip.com/advice`
//   console.log(randomAdvice);
//   fetch(randomAdvice)
//       .then(function (response) {
//           return response.json()
//       })
//       .then(function (data){
//           console.log(data)
//           advice.innerHTML = data.slip.advice;
//           adviceNumber.innerHTML= data.slip.id;
//       }) 
// } 
