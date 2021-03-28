function getProdutos(orderBy){
    var produtos = [
        { codigo: 1, produto: 'Produto D', categoria: 'C' },
        { codigo: 2, produto: 'Produto B', categoria: 'C' },
        { codigo: 3, produto: 'Produto A', categoria: 'A' },
        { codigo: 4, produto: 'Produto C', categoria: 'B' }
    ];

    switch(orderBy)
    {
        case 'CODIGO_ASC': produtos.sort(orderByCodigoAsc); break;
        case 'CODIGO_DESC': produtos.sort(orderByCodigoDesc); break;
        case 'PRODUTO_ASC': produtos.sort(orderByProdutoAsc); break; 
        case 'PRODUTO_DESC': produtos.sort(orderByProdutoDesc); break; 
        case 'CATEGORIA_ASC': produtos.sort(orderByCategoriaAsc); break; 
        case 'CATEGORIA_DESC': produtos.sort(orderByCategoriaDesc); break; 
    }
    
    return produtos;
}

function orderByCodigoAsc(a,b){
    if (a.codigo < b.codigo) return -1;
    else if (a.codigo > b.codigo) return 1;
    else return 0;
}

function orderByCodigoDesc(a,b){
    if (a.codigo > b.codigo) return -1;
    else if (a.codigo < b.codigo) return 1;
    else return 0;
}

function orderByProdutoAsc(a,b){
    if (a.produto < b.produto) return -1;
    else if (a.produto > b.produto) return 1;
    else return 0;
}

function orderByProdutoDesc(a,b){
    if (a.produto > b.produto) return -1;
    else if (a.produto < b.produto) return 1;
    else return 0;
}

function orderByCategoriaAsc(a,b){
    if (a.categoria < b.categoria) return -1;
    else if (a.categoria > b.categoria) return 1;
    else return 0;
}

function orderByCategoriaDesc(a,b){
    if (a.categoria > b.categoria) return -1;
    else if (a.categoria < b.categoria) return 1;
    else return 0;
}