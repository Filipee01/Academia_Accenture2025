# 🚀 Desafio de Automação de Testes com Cypress

Este repositório contém a automação de testes do portal de propostas de seguro, desenvolvido com foco na eficiência, organização e boas práticas de testes automatizados.

---

## 🧪 Objetivo do Projeto

Automatizar o preenchimento e envio de formulários do portal de seguro utilizando **Cypress**, seguindo o padrão **Page Object Model**, com cenários escritos em **Gherkin** e contemplando:

- ✅ Validações obrigatórias
- ✅ Testes positivos e negativos
- ✅ Dados sensíveis separados em `cypress.env.json`
- ✅ Redução de tarefas manuais repetitivas

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

## ✍️ Funcionalidades Testadas

- **Formulário de Veículo**
- **Formulário do Segurado**
- **Formulário do Produto**
- **Opção de Preço**
- **Envio de Proposta**
- **Validações de Campos Obrigatórios**
- **Tratamento de e-mails inválidos**
- **Fluxos incompletos**

---

## 💡 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
- Gherkin (BDD)
- Page Object Model (POM)

---

## ⚙️ Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd Academia_Accenture2025

npm install

npx cypress open

```
