# 🚀 Desafio de Automação de Testes com Cypress

Este repositório contém a minha resolução referente ao desafio de Cypress da Academia Accenture 2025, onde é feita a automação de testes do portal de propostas de seguro da Tricents.

## 🧪 Objetivo do Projeto

Automatizar o preenchimento das abas Enter Vehicle Data, Enter Insrant Date, Enter Product Date, Select Price Option, Send Quote... Contemplando os seguintes pontos:

- ✅ A Automação ser no padrão **page Objects**
- ✅ Cenários escritos em **Gherkin**
- ✅ Obedecer às Validações
- ✅ Testes positivos e negativos
- ✅ Dados sensíveis separados em `cypress.env.json`
- ✅ Diferencial criar testes negativos

---

## 📁 Estrutura do Projeto

```bash
📁 Academia_Accenture2025/
├── 📁 cypress/
│   ├── 📁 assets/
│   ├── 📁 e2e/
│   │   ├── 📁 testesNegativos/
│   │   │   ├── 📄 emailInvalido.feature
│   │   │   └── 📄 fluxoIncompleto.feature
│   │   ├── 📁 testesPositivos/
│   │   │   ├── 📁 Dados Completos/
│   │   │   │   └── 📄 submissaoCompleta.feature
│   │   │   └── 📁 Dados Obrigatorios/
│   │   │       └── 📄 submissaoObrigatorios.feature
│   ├── 📁 fixtures/
│   ├── 📁 support/
│   │   ├── 📁 pages/
│   │   │   ├── 📁 Enter Insurant Data/
│   │   │   │   ├── 📄 insurantDataForm.page.js
│   │   │   │   └── 📄 selectors.js
│   │   │   ├── 📁 Enter Product Data/
│   │   │   │   ├── 📄 productDataForm.page.js
│   │   │   │   └── 📄 selectors.js
│   │   │   ├── 📁 Enter Vehicle Data/
│   │   │   │   ├── 📄 vehicleDataForm.page.js
│   │   │   │   └── 📄 selectors.js
│   │   │   ├── 📁 Fluxo Incompleto/
│   │   │   │   └── 📄 automobileInsurance.page.js
│   │   │   ├── 📁 Home/
│   │   │   │   └── 📄 home.page.js
│   │   │   ├── 📁 Select Price Option/
│   │   │   │   ├── 📄 priceOptionForm.page.js
│   │   │   │   └── 📄 selectors.js
│   │   │   └── 📁 Send Quote/
│   │   │       ├── 📄 sendQuoteForm.page.js
│   │   │       └── 📄 selectors.js
│   │   ├── 📁 step-definitions/
│   │   │   ├── 📄 emailInvalido.cy.js
│   │   │   ├── 📄 fluxoIncompleto.cy.js
│   │   │   ├── 📄 submissaoCompleta.cy.js
│   │   │   └── 📄 submissaoObrigatorios.cy.js
│   │   ├── 📄 commands.js
│   │   └── 📄 e2e.js
├── 📄 cypress.config.js
├── 📄 cypress.env.json
├── 📄 package.json
├── 📄 package-lock.json

```

## ⚙️ Como Executar Localmente

1. Clone o repositório:

```bash
**Clone o reposiório**
git clone https://github.com/Filipee01/Academia_Accenture2025.git

**Entre na pasta**
cd Academia_Accenture2025

**Instale as dependencias**
npm install

**Abrir o Cypress para os testes**
npx cypress open

```

## ✍️ Algumas Funcionalidades Testadas

- **Preenchimento de Formulário de Veículo**
- **Preenchimento de Formulário do Segurado**
- **Preenchimento de Formulário do Produto**
- **Preenchimento de Opção de Preço**
- **Preenchimento e Envio de Proposta**
- **Validações de Campos Obrigatórios**
- **Tratamento de e-mails inválidos**
- **Fluxos incompletos**

---

## 💡 Tecnologias Utilizadas

- Cypress
- JavaScript (ES6)
- Gherkin (BDD)
- Page Object Model (POM)

---

## 💡 Bibliotecas instaladas

- Faker js
- Moment js

---

## 😁 Vídeo Detalhando Minha Resolução Do Desafio

[![Vídeo de Demonstração](https://img.youtube.com/vi/8M3bqUtJOF4/0.jpg)](https://youtu.be/8M3bqUtJOF4)

só clicar na imagem da Accenture que você verá o video

Feito por Luiz Filipe Santos de Souza 🚀
