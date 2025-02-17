# Meu Teste Automatizado com Cypress

Este é um projeto de automação de testes que utilizei o [Taskit](http://www.juliodelima.com.br/taskit/) do Julio de Lima (https://mentoria.juliodelima.com.br/), utilizando o Cypress, com configurações para ambientes de **Desenvolvimento (Dev)** e **Qualidade (QA)**. O objetivo do projeto é praticar algumas tecnicas utilizadas em projetos reais e depois integrar com o fluxo de integração contínua através do **GitHub Actions**.

## 🛠 Tecnologias Utilizadas

- **JavaScript**: Linguagem principal para desenvolvimento dos testes.
- **Cypress**: Framework de automação de testes para front-end.
- **GitHub Actions**: Integração contínua para rodar os testes automaticamente.
- **Reports**: Relatórios para visualização dos resultados dos testes.

## 🔧 Configuração de Ambientes

O projeto possui dois ambientes configurados: **Desenvolvimento (Dev)** e **Qualidade (QA)**. Cada um possui configurações específicas, incluindo variáveis de ambiente e URLs de acesso.

### 1. **Ambiente de Desenvolvimento (Dev)**

- **URL**: [http://www.dev.leandroucuamba.com.br/taskit/](http://www.dev.leandroucuamba.com.br/taskit/)
- **Usuário**: DEV_Leandro
- **Senha**: DEV_Secret

O arquivo `.env.dev` foi configurado com as variáveis necessárias para o ambiente de desenvolvimento:

```bash
BASE_URL=http://www.dev.leandroucuamba.com.br/taskit/
USER=DEV_Leandro
PASSWORD=DEV_Secret
```

### 2. **Ambiente de Qualidade (QA)**

- **URL**: [http://www.qa.leandroucuamba.com.br/taskit/](http://www.qa.leandroucuamba.com.br/taskit/)
- **Usuário**: QA_Leandro
- **Senha**: QA_Secret

```bash
BASE_URL=http://www.qa.leandroucuamba.com.br/taskit/
USER=QA_Leandro
PASSWORD=QA_Secret
```

## Configuração de Ambientes no Cypress

Existem dois arquivos de configuração para cada ambiente:

- config-dev.js: Configuração para o ambiente de desenvolvimento.
- config-qa.js: Configuração para o ambiente de qualidade.


## Exemplos de Scripts para Execução

Você pode executar os testes em diferentes ambientes utilizando os seguintes scripts:

- cypress:open:dev
```bash
npx cypress open --config-file config-dev.js --browser chrome
```

- cypress:open:qa
```bash
npx cypress open --config-file config-qa.js --browser chrome
```
