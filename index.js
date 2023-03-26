function cont()
{
	let now = new Date();
	let hoursleft = 23-now.getHours();
	let minutesleft = 59-now.getMinutes();
	let secondsleft = 59-now.getSeconds();
	if(minutesleft<10) minutesleft = "0"+minutesleft;
	if(secondsleft<10) secondsleft = "0"+secondsleft;
	document.getElementById('relogio').innerHTML = hoursleft+":"+minutesleft+":"+secondsleft;
}
cont();
setInterval(cont, 1000);

function cont2()
{
	let now = new Date();
	let hoursleft = 23-now.getHours();
	let minutesleft = 59-now.getMinutes();
	let secondsleft = 59-now.getSeconds();
	if(minutesleft<10) minutesleft = "0"+minutesleft;
	if(secondsleft<10) secondsleft = "0"+secondsleft;
	document.getElementById('relogio2').innerHTML = hoursleft+":"+minutesleft+":"+secondsleft;
}
cont2();
setInterval(cont2, 1000);

const color = document.getElementById("relogio")
color.style.backgroundColor='#FFFF00'

const form = document.getElementById("form");
const emailImput = document.getElementById("email");
const checkB =document.getElementById("caixa")
const resp = document.getElementById("cria")
const armazenar = document.getElementById("cria2")
const colorir = document.getElementById("ver")
let captar ="";

  form.addEventListener("submit", (event) =>{
	event.preventDefault()

	if (emailImput.value ===" " || !EmailValido(emailImput.value) || !digitos(emailImput.value, 10)) {
		alert("o email precisa ter no minimo 10 caracteres, incluindo um @ e um .")
	    return
	}

  	if (!checkB.checked){
		aparecer();
		che();
		return
	} 
	  else{
		function chamar(){
			captar= document.getElementById("email").value;
			document.getElementById("cria2").innerHTML = "E-mail: " + captar + " cadastrado com sucesso!";
		}
		chamar();

	}

	setTimeout(function(){
		form.submit();
	},3000)


  })

  function EmailValido(email){
	const emailRe = new RegExp(
  	/^[a-zA-z]+@[a-zA-z]+\.[a-zA-Z]{2,}$/
	);

	if(emailRe.test(email)){
		return true;
	}
	return false;
  }

function digitos(email, minDigitos){
	if(email.length >= minDigitos) {
		return true;
 	} 
	return false;
}

function aparecer (){
	resp.innerText = "(Você precisa aceitar os termos de uso)"
};

function che(){
if (!checkB.checked){
	colorir.style.color=`#FF0000`
}
}