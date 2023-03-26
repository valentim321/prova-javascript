const container = document.querySelector('.container');
let doces = [];

 async function api() { 
    await fetch("https://641cf247b556e431a878fb78.mockapi.io/produto?aluno=felipe valentim")
    .then(resposta => resposta.json())
    .then(dados => {
        doces = dados;
    })

}
function carregar() {
    container.innerHTML = "";
    doces.map((info)=> {
        container.insertAdjacentHTML('beforeend',
        `
        <section>
            <article>
                <img src="${info.imagem}" alt="">
                <h2> ${info.titulo} </h2>
                <div class="cont">
                    <p> ${info.descrição}</p>
               </div>
            </article>
            <button class="button"> comprar</buttom>
        </section>
        `)
    })
}
 async function main (){
   await api();
    carregar();
}
main();