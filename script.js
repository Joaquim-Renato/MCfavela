var textoIntro = document.querySelector('h1');
textoIntro.innerHTML = 'MC Favela';

var paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Olá, seja bem-vinde!! <br> Abaixo você poderá visualizar o nosso cardápio :)";

// Lista de preços dos produtos
var pedidos = [];
var precos = {
    "100": 9.80,
    "101": 5.60,
    "102": 7.20,
    "103": 12.30,
    "104": 16.90
};

var produtos = {
    "100": "Cachorro quente",
    "101": "Bauru Simples",
    "102": "Bauru com ovo",
    "103": "Hambúrguer",
    "104": "Cheeseburguer"
};

function pedidoCliente() {
    var codigo = document.getElementById('pedidoCliente').value;
    var quantidade = parseInt(document.getElementById('qtd').value);
    var total;

    if (precos[codigo]) {
        total = precos[codigo] * quantidade;
        pedidos.push({ produto: produtos[codigo], quantidade: quantidade, total: total });
        exibePedido(`Item adicionado. Total até agora: R$ ${somarPedidos().toFixed(2)}`);
    } else {
        exibePedido('Código inválido. Por favor, tente novamente.');
    }
}

function exibePedido(mensagem) {
    document.getElementById('guiaPedido').innerHTML = mensagem;
}

function somarPedidos() {
    return pedidos.reduce((acc, curr) => acc + curr.total, 0); // Soma todos os valores no array de pedidos
}

function visualizarCarrinho() {
    var carrinho = document.getElementById('carrinhoCompras');
    carrinho.innerHTML = '<h3>Carrinho de Compras:</h3>';

    pedidos.forEach(function(item, index) {
        carrinho.innerHTML += `Item ${index + 1}: ${item.produto} | Quantidade: ${item.quantidade} | Subtotal: R$ ${item.total.toFixed(2)}<br>`;
    });
    carrinho.innerHTML += `<br>Total: R$ ${somarPedidos().toFixed(2)}`;
}

function finalizarPedido() {
    var totalFinal = somarPedidos();
    exibePedido(`Pedido finalizado! Total a pagar: R$ ${totalFinal.toFixed(2)}`);
    pedidos = []; // Limpa o array de pedidos após finalizar
    document.getElementById('carrinhoCompras').innerHTML = ''; // Limpa o carrinho visual
}
