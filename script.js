const doces = [
    { nome: "Pudim de Leite Condensado", preco: "R$ 35,00", img: "https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=400" },
    { nome: "Bolo de Cenoura c/ Calda", preco: "R$ 28,00", img: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=400" },
    { nome: "Cesta de Brigadeiros", preco: "R$ 15,00", img: "https://images.unsplash.com/photo-1548629395-585802526e84?q=80&w=400" },
    { nome: "Torta de Morango", preco: "R$ 45,00", img: "https://images.unsplash.com/photo-1464305795204-6f5bdf7f81b1?q=80&w=400" },
    { nome: "Pão de Mel Caseiro", preco: "R$ 10,00", img: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=400" },
    { nome: "Rosquinhas da Vovó", preco: "R$ 12,00", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400" }
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