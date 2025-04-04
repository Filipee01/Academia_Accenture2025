#utf-8
#language: pt 

Funcionalidade: preenchimento de abas no portal
    Cenário: usuario acessa o portal e preenche as abas
        Dado que o usuario acessa o portal 
        E acessa a opcao de automovel 'automobile'
        Quando é validado que o usuario esta na aba de 'Automobile Insurace'
        E o usuario insere os dados do veiculo
        E o usuario insere os dados do seguro
        E o usuario insere os dados do produto
        Então o usuario seleciona uma opcao de preco
        E o usuario envia a proposta




