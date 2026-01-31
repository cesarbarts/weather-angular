# WeatherCheck

WeatherCheck é uma aplicação frontend desenvolvida com Angular 21 para consulta de condições climáticas em tempo real a partir da API do OpenWeather em formato de card.

O objetivo do projeto é demonstrar boas práticas de arquitetura no Angular moderno, uso de Signals, tipagem com TypeScript e organização de componentes.

## Tecnologias utilizadas

- Angular 21
- TypeScript
- Signals
- Angular Router
- RxJS
- Bootstrap
- FontAwesome
- OpenWeather API

## Principais conceitos aplicados

- Consumo de API externa utilizando HttpClient e injeção de dependência via services.
- Separação de responsabilidades entre componentes inteligentes (smart components) e componentes de apresentação (dumb components).
- Comunicação entre componentes pai e filho utilizando Input Signals e contratos de tipo bem definidos.
- Gerenciamento de estado com Signals, evitando uso excessivo de subscriptions diretamente no template.
- Tipagem explícita da resposta da API através da interface Weather, garantindo segurança de tipo em toda a aplicação.
- Criação de componentes reutilizáveis, como itens de navegação, utilizando input.required para reforçar contratos obrigatórios.
- Configuração de rotas com Angular Router, incluindo redirecionamento padrão e navegação ativa.
- Integração de bibliotecas externas via npm, como Bootstrap para layout e FontAwesome para ícones.

## Estrutura da aplicação

A aplicação é organizada em componentes, services e models, mantendo uma separação clara entre lógica de negócio, apresentação e tipagem de dados.

Os componentes de layout e navegação são desacoplados da lógica principal da aplicação, facilitando manutenção e reutilização.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [Angular CLI](https://angular.io/cli) (versão 21 ou superior)

Para instalar o Angular CLI globalmente:
```bash
npm install -g @angular/cli
```

## Como executar o projeto

### 1. Obter o código

Clone o repositório:
```bash
git clone https://github.com/cesarbarts/weather-angular.git
```

Ou baixe o ZIP do repositório e extraia os arquivos.

### 2. Acessar o diretório do projeto

```bash
cd weather-frontend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
ng serve
```

ou

```bash
npm start
```

### 5. Acessar no navegador

Abra seu navegador e acesse:
```
http://localhost:4200
```

## Observações sobre segurança

Por se tratar de uma aplicação client-side, a chave da API é exposta no frontend apenas para fins educacionais e de portfólio.

Em um cenário de produção, essa comunicação deveria ser intermediada por um backend para garantir a proteção das credenciais da API.

## Build para produção

Para gerar uma versão otimizada para produção:

```bash
ng build
```

Os arquivos gerados estarão disponíveis no diretório `dist/`.

## Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

---