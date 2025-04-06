# utf-8
# language: pt

Funcionalidade: Validação de fluxo com dados incompletos ou inválidos
  Cenário: envio da proposta com e-mail inválido
      Dado que o usuario acessa o portal 
      E acessa a opcao de automovel automobile
      E é validado que o usuario esta na aba de Automobile Insurace
      E o usuario insere os dados do veiculo
      E o usuario insere os dados do seguro
      E o usuario insere os dados do produto
      E o usuario seleciona uma opcao de preco
      E preenche o último formulário deixando e-mail inválido
      Quando tenta enviar a proposta
      Então o sistema exibe uma mensagem de erro indicando e-mail inválido
