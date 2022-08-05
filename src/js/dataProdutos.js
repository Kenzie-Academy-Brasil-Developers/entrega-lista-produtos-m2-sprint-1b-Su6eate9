const produtos = [
    {   
        id: 01,
        nome: 'Banana',
        preco: 3.99,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: "./src/img/banana.png",
        promocao: true,
        precoPromocao: 2.99,
        componentes: [
            'Potássio',
            'Vitamina B6',
            'Vitamina C',
            'Folatos'
        ]
    },
    {   
        id: 02,
        nome: 'Morango',
        preco: 2.99,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './src/img/morango.png',
        promocao: false,
        precoPromocao: 0,
        componentes: [
            'Fibras',
            'Cálcio',
            'Vitamina C',
            'Ferro'
        ]
    },
    {
        id: 03,
        nome: 'Maçã', 
        preco: 2.99,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './src/img/maça.png',
        promocao: true,
        precoPromocao: 1.49,
        componentes: [
            'Potássio',
            'Vitamina A',
            'Vitamina C',
            'Vitamina E'
        ]
    },
    {
        id: 04,
        nome: 'Pão',
        preco: 4.99,
        secao: 'Panificadora',
        categoria: 'Pães',
        img: './src/img/pao.png',
        promocao: true,
        precoPromocao: 3.69,
        componentes: [
            'Cálcio',
            'Sódio',
            'Fibra Alimentar',
            'Proteína'
        ]
    },
    {
        id: 05,
        nome: 'Leite',
        preco: 5.99,
        secao: 'Laticínios',
        categoria: 'Leite',
        img: './src/img/leite.png',
        promocao: false,
        precoPromocao: 0,
        componentes: [
            'Carboidratos',
            'Proteínas',
            'Gorduras totais',
            'Vitaminas'
        ]
    },
    {
        id: 06,
        nome: 'Bolo',
        preco: 10.99,
        secao: 'Panificadora',
        categoria: 'Bolos',
        img: './src/img/bolo.png',
        promocao: true,
        precoPromocao: 7.99,
        componentes: [
            'Carboidrato',
            'Vitaminas',
            'Minerais',
            'Cálcio'
        ]
    },
    {
        id: 07,
        nome: 'Yorgut de Morango',
        preco: 4.99,
        secao: 'Laticínios',
        categoria: 'Yorgutes',
        img: './src/img/yorgut_de_morango.png',
        promocao: true,
        precoPromocao: 3.99,
        componentes: [
            'Potássio',
            'Cálcio',
            'Vitamina B',
            'Folatos'
        ]
    },
    {
        id: 08,
        nome: 'Torta de Maçã',
        preco: 6.99,
        secao: 'Panificadora',
        categoria: 'Tortas',
        img: './src/img/torta_de_maçã.png',
        promocao: false,
        precoPromocao: 0,
        componentes: [
            'Potássio',
            'Vitamina B6',
            'Cálcio',
            'Folatos'
        ]
    }
]

let carrinhoProducts = []
