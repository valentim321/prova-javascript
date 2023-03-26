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