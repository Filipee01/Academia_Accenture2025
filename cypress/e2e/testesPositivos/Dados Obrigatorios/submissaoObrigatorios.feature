#utf-8
#language: pt 

Funcionalidade: Envio de Proposta de Seguro Automotivo
    Cenário: Envio de Proposta de seguro automotivo apenas com dados obrigatorios
        Dado que o usuario acessa o portal 
        E acessa a opcao de automovel automobile
        Quando é validado que o usuario esta na aba de Automobile Insurace
        E o usuario insere os dados do veiculo
        E o usuario insere os dados obrigatorios do seguro
        E o usuario insere os dados do produto
        Então o usuario seleciona uma opcao de preco
        E o usuario envia a proposta com os dados obrigatorios




