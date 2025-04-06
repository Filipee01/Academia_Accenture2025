# utf-8
# language: pt

Funcionalidade: Validação de fluxo incompleto
  Cenário: usuário tenta avançar sem preencher os formulários
    Dado que o usuario acessa o portal
    E acessa a opcao de automovel automobile
    E é validado que o usuario esta na aba de Automobile Insurace
    Quando tenta avançar clicando em Next sem preencher os formularios
    Então o sistema exibe a mensagem para completar os passos anteriores

