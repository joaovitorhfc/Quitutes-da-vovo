const doces = [
    { nome: "Pudim de Leite Condensado", preco: "R$ 35,00", img: "/img/pudim-de-leite-condensado-capa.jpeg" },
    { nome: "Bolo de Cenoura c/ Calda", preco: "R$ 28,00", img: "/img/bolodecenoura.jpeg" },
    { nome: "Cesta de Brigadeiros", preco: "R$ 15,00", img: "/img/brigadeiro.jpeg" },
    { nome: "Torta de Morango", preco: "R$ 45,00", img: "/img/torta.jpeg" },
    { nome: "Pão de Mel Caseiro", preco: "R$ 10,00", img: "/img/paodemelreceita-fb.jpg" },
    { nome: "Rosquinhas da Vovó", preco: "R$ 12,00", img: "/img/rosca.png" }
];

const vitrine = document.getElementById('vitrine-doces');

doces.forEach(doce => {
    vitrine.innerHTML += `
        <article class="card-doce">
            <img src="${doce.img}" alt="Delicioso ${doce.nome}">
            <div class="card-info">
                <h3>${doce.nome}</h3>
                <p><strong>${doce.preco}</strong></p>
            </div>
        </article>
    `;
});

// Mensagem de sucesso amigável
document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Que alegria, ${nome}! A vovó já anotou seu pedido e está separando os ingredientes. Logo você receberá uma mensagem no WhatsApp!`);
    this.reset();
});