# utf-8
# language: pt

Funcionalidade: Validação de fluxo com dados incompletos ou inválidos
  Cenário: envio da proposta com e-mail inválido
    Dado que o usuario acessa o portal 
    E acessa a opcao de automovel automobile
    Quando é validado que o usuario esta na aba de Automobile Insurace
    E preenche todos os formulários corretamente, exceto o e-mail
    E tenta enviar a proposta
    Então o sistema exibe uma mensagem de erro indicando e-mail inválido
