# WORKSHOP REACT

## Setup

- Instale o [NodeJs](https://nodejs.org/en/) caso não tenha
- No terminal rode este comando para instalar o create react app
  - `npm i create-react-app`
- Clone o projeto
- No terminal, dentro da pasta do projeto, rode este comando para instalar dependencias
  - `npm install`
- Para rodar a aplicação rode este comando na pasta local onde você baixou o projeto
  - `npm start`

### Opcional - sugestões

- Editor de código [VSCode](https://code.visualstudio.com/)
- Snippets que ajudam no desenvolvimento
  - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/itemdetails?itemName=xabikos.JavaScriptSnippets)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)

## MODULO I - REVISÃO JS - ES6 - ES7 - ES8

### Features úteis - ver aplicação em `./src/App.js`

- var, const, let - scope
- criação/manipulação de objetos
- operações com arrays
- classes
- default parameters
- template literals
- multi-line strings
- arrow functions
- object literals
- destructuring
- promises
- async-await

## MODULO II

### O que é o React e como ele funciona

- React é uma library para criar UI's
- Declarativa
  - mais previsível, mais fácil de debugar
- Baseado em componentes
  - não existe separação de tecnologias marcação (HTML) e lógica (JS)
    - em vez disso, separa-se **_concerns_** [SoC](https://en.wikipedia.org/wiki/Separation_of_concerns)
    - reduz acoplamento, aumenta coesão
  - o DOM é gerado via função(JS) pelo react
  - one-way-binding
    - mais fácil de controlar e debugar
  - o estado é controlado fora do DOM
  - o componente re-renderiza a UI sempre que algum estado muda
  - não quer dizer que todo DOM é atualizado. Somente as partes que de fato mudaram
  - isso é possível graças ao [virtual DOM object](https://www.codecademy.com/articles/react-virtual-dom)
    - uma representação virtual (em JS) do DOM real
  - o DOM real só é alterado nas partes que precisa ser alterado
    - caso seja identificado diferenças entre o DOM virtual antigo e o novo
    - caso contrário, o DOM real não é manipulado
    - isso faz com que a atualização seja muito menos custosa e muito mais rápida

### JSX e React elements

- JSX não é nem uma string nem é puramente HTML
- é como uma "notação" para criar _React Elements_. Análogo ao **xml**
- _React Elements_ não são DOM elements
- são apenas objetos simples que descrevem como o elemento deve ser
  ```javascript
  const element = <h1 className="greeting">Hello, world!</h1>;
  ```
- no final das contas o [Babel](https://babeljs.io) transpila o JSX criando o React Element via função
  ```javascript
  const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
  ```

### Como renderizar o elemento no DOM afinal?

- em algum lugar no HTML você tem
  ```javascript
  <div id="root" />
  ```
- e no JSX você cria seu elemento react, e fala para o React onde no HTML esse elemento deve ser renderizado
  ```javascript
  const element = <h1>Hello, world</h1>;
  ReactDOM.render(element, document.getElementById('root'));
  ```

### Componentes

- orientação a componentes é uma forma de contornar duplicação de código
- então, se um ou vários elementos da sua UI são usados em diferentes locais com poucas ou nenhuma alteração visual e/ou de comportamento, você poderia considerar componentiza-los para reuso
- _"React is all about components"_
- componentes "são como" funções JS que recebem inputs (**props**) e renderizam elementos React
- há duas formas de criar componentes em react
- **function components** que são literalmente funções que recebem **props** como parametro e retornam **JSX** ou **null**
  ```javascript
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
- e **class component** usando ES6 class. São classes que devem retornar um **JSX** ou **null** necessariamente excutando o método **render()**
  ```javascript
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```
- usar **function components** ou **class components** implica em performance
- **function components** são mais performáticos
- **IMPORTANTE** antes da versão **16.6** os **function components** eram também conhecidos como **stateless components**, isso porque estes não controlavam seu próprio estado.
- os **class components** por sua vez eram também conhecidos como **stateful components** pois controlam o próprio estado e possuem _lifecycles_ (mais detalhes a seguir)
  . **NO ENTANTO** a partir da versão **16.6** do react, novas features possibilitam que **function components** controlem o seu próprio estado sem serem _classes_

### Componentes - Props

- o fluxo de data do React é **_top-down_**, ou seja o componente de mais alto nível passa o para componentes "filhos" via **Props**
- o componente pai chama o filho e passa as props necessárias
  ```javascript
  class MeuComponentPrincipal extends React.Component {
    render() {
      return (
        <div>
          <h1>Esta é uma aplicação React</h1>
          <Welcome name="Ramon" />
        </div>
      );
    }
  }
  ```
- o componente filho recebe as **props** e as usa
  ```javascript
  class Welcome extends React.Component {
    render() {
      return <h1>Meu nome é {this.props.name}</h1>;
    }
  }
  ```
- as **Props** recebidas por um componente são imutáveis
- um componente "pai" pode passar também, via **props**, referencias de funções implementadas no pai para serem chamadas nos filhos

## MODULO III

### Componentes - State

- O estado de um componente diz como este deve ser apresentado na tela
- Quando o estado do componente não depende ou não provém de um componente pai (**props**), o proprio componente controla seu estado. Isso pode ser chamado de estado local

  ```javascript
  class App extends Component {
    state = {
      comment: 'Comentário inicial'
    };
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>My comment: {this.state.comment}.</h2>
        </div>
      );
    }
  }
  ```

- O estado de um componente deve ser alterado via chamada de função `setState({})`

  ```javascript
  // Errado
  this.state.comment = 'Hello';
  // Certo
  this.setState({ comment: 'Hello' });
  ```

### Componentes - LifeCycle

- LifeCycle são alguns métodos que são executados durante o ciclo de criação ou atualização de um componente
- Esses métodos são executados pelo React, e só existe **lifecycle** em componentes do tipo **class components**
- Embora os **function components** não tenham **lifecycle**, novas features adicionadas ao React na versão **16.6**, possibilitam que **function components** se comportem exatamente como **class component** no que diz respeito a controle de estado e **lifecycle**.
- Essas novas features serão abordadas mais a frente..
- Existem **lifecycles** de criação e atualização do componente
- A atualização de um componente ocorre quando um componente pai passa props para o componente, ou quando o próprio componente atualiza seu estado via `setState()`
- Toda atualização irá invocar o **lifecycle** de atualização do componente novamente
- Entender o **lifecycle** e como a alteração de estado do componente interage com o **lifecycle** é extremamente importante e sua aplicação influencia diretamente na performance e usabilidade da aplicação
- Component **lifecycle** exemplo

  ```javascript
  class MeuComponente extends Component {
    state = {
      comment: 'Comentário inicial'
    };
    // o componentDidMount é um dos métodos do lifecycle de criação do componente
    // ele executa quando o componente acaba de renderizar
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          comment: 'Altera o comentário 3 segundos depois que meu componente for montado'
        });
      }, 3000);
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>My comment: {this.state.comment}.</h2>
        </div>
      );
    }
  }
  ```

### Componentes - LifeCycle - React < 16.3

![](images/lifecyclereact.png)

### Componentes - LifeCycle - React >= 16.3

![](images/lifecyclereact16.png)

## MODULO IV

### Navegação - React router

- Route
- Switch
- Link
- Navegação programática
- Navegação com parâmetros

### Navegação - Prática - Book Store

![](images/bookStoreModulo4.png)

## MODULO V

### Controle de estado da aplicação - React Redux

- controle de estado global da aplicação
- compartilhar estados entre componentes em qualquer nível
- store
  - state
    - guarda o estado da aplicação
  - reducers
    - funções que alteram o estado da aplicação
  - actions
    - ações que dizem como os reducers devem alterar o estado

### Controle de estado da aplicação - React Redux

![](images/redux1.png)

### Controle de estado da aplicação - React Redux

![](images/redux2.png)

## MODULO VI - Boas práticas, otimização e reuso de coponentes

- Quebrar componentes e componentes menores
  - facilita manutenabilidade
  - mais controle nas renderizações (otimização)
  - aumenta potencial de reuso de componentes
- Transformar function componentes em class componentes
  - performance

## MODULO VII - Features React 16.x.x / Testes

- React memo
  - melhora performance
  - faz o cache de uma renderização que já ocorreu
  - se as props não mudam renderiza o que está em cache sem precisar
    processar a renderização novamente
  - [Entenda a técnica de memoization](http://cangaceirojavascript.com.br/funcoes-velozes-com-memoization-pattern/)
- React React hooks
  - uma forma de mehorar a performance da aplicação fazendo **function components** se comportarem como **class components**
  - principais hooks
    - **useState:** fazer controle de estado em um **function component**
    - **useEffect:** simular lifecycle em um **function component**
  - outros hooks
    - useReducer
    - useRef
    - useCallback
    - useMemo
- Testes unitários
  - [Jest](https://jestjs.io/)
    - default em aplicações react
    - test runner
    - é o jest que irá rodar seus testes, fazer os asserts(validações)
  - [Enzyme](https://airbnb.io/enzyme/)
    - é um _utility_ para testar componentes em react
    - provê recursos para montar e manipular os componentes
    - ver alguns exemplos de teste no projeto em: `src/bookStore/tests`
    - para rodar os testes execute: `npm run test`
    - as configurações do jest ficam no `package.json`

# REFERENCIAS

https://reactjs.org

https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

https://www.lifewire.com/best-javascript-es6-features-4579821

https://medium.freecodecamp.org/ecmascript-2016-es7-features-86903c5cab70

https://medium.freecodecamp.org/es8-the-new-features-of-javascript-7506210a1a22

https://reacttraining.com/react-router/web/guides/quick-start

https://redux.js.org/

https://reactjs.org/docs/hooks-intro.html

https://reactjs.org/docs/react-api.html#reactmemo

https://jestjs.io/

https://airbnb.io/enzyme/

# React Overview completo

React é uma biblioteca JavaScript usada para criar interfaces de usuário (UI's), que é mantida pelo Facebook.
Desde seu lançamento, em 2013, o React tem crecido de forma considerável entre desenvolvedores e consequentemente no mercado. Com apenas 6 anos o React já se tornou uma das bibliotecas JavaScript mais populares, se não a mais popular. Segundo o trends no GitHub e StackOverflow, o React já ultrapassou outros famosos frameworks/libraries JavaScript dos últimos 10 anos. Hoje, além de todas as plataformas do Facebook, o React é usado também por outras grandes companhias como Amazon, Apple, Google, Microsoft, Dropbox, Lyft, Netflix, NYTimes, Pinterest, Snapchat, Spotify, Square, Twitter, Uber, Nubank, Walmart, Yahoo, Airbnb e claro, nós da DTI digital.
Sua popularidade está relacionada ao principal objetivo/missão do time React que é tonar a criação de UI's o mais simples possível para o desenvolvedor de forma que, como resultado, consigamos construir interfaces de usuário mais agradáveis e com uma melhor interação para o usuário final.
Um dos fatores que simplifica a criação de UI's utilizando React é o fato de ele ser declarativo. Dessa forma nós precisamos nos preocupar mais com "O que" e menos com o "Como". Em outras palavras, você precisa simplesmente "falar" para o React: "Dado o estado X na minha aplicação, apresenta a visualização desta forma para o usuário". E é o React que irá se encarregar, de forma eficiente, do "Como" isto será feito. Além disso, o paradigma de programação declarativa torna o código mais previsível e mais fácil de "debugar".
Outro aspecto que facilita no desenvolvimento com React é que ele é baseado em componentes. A ideia aqui é criar componentes auto-contidos menores e mais simples, e combina-los para construir UI's mais complexas. Uma analogia legal de fazer seria Legos, onde pequenas partes atômicas compõe um todo. O conceito de componentização não é algo do React, é uma abordagem de programação que dentre outras vantagens podemos citar melhor testabilidade e mais reuso no nosso código. No caso do React em si, componentes bem divididos e com "responsabilidades" bem definidas pode implicar inclusive na performance da aplicação.

Mas o que seria um componente? E por que auto-contido? Bem, suponhamos que você esteja desenvolvendo uma aplicação web e você queira colocar um botão na tela para que, ao clique do usuário, este botão execute algo. Se você não estiver usando nenhum framework/library, e até mesmo usando alguns, você provavelmente irá precisar de pelo menos duas coisas: criar um arquivo HTML que contem o elemento botão que irá aparecer para o usuário e criar um script que capture o clique do usuário para que execute algo. Esse script poderá ser feito no próprio HTML ou em um arquivo separado JS. Nesse cenário você teria dois arquivos minimamente acoplados para criar o que seria a "forma" do elemento (HTML) e o comportamento do elemento (JS). Note que, ao fazer isto só estamos separando tecnologias (HTML/JS) e não interesses/responsabilidades. Imagine ainda que sua aplicação web terá várias páginas que tenha botões com nomes diferentes que execute funções diferentes ao clique, de acordo com o contexto da página. Não seria legal criar uma única "coisa" (componente) que já embarcasse tanto a forma (HTML) quanto o comportamento (JS) e que você pudesse parametrizar as partes condicionadas ao contexto, e então conseguir reusar essa única coisa em todas as páginas? Se isso fez sentido para você, então você já tem uma ideia do que seria um componente. Um componente nada mais é que um encapsulamento de um ou mais elementos e/ou outros componentes. Ele é auto-contido porque já embarca sua forma (HTML) e seu comportamento (JS) e opcionalmente até mesmo seu estilo (CSS). E pode ser reusável em contextos diferentes conforme a necessidades.

Além de toda preocupação com a simplicidade e em nos ajudar fazer códigos mais testáveis e reusáveis usando os padrões e abordagens mencionadas. O React investe um grande esforço, talvez o maior, em tornar aplicações React naturalmente performáticas, novamente para que os desenvolvedores não precisem lidar diretamente com o "Como". E o que faz com que aplicações React, seguindo as boas recomendações, sejam performáticas está no "Como" o React faz as coisas no background. Ha alguns anos atrás era muito comum numa aplicação web o usuário interagir de alguma forma com uma página, clicando em um botão por exemplo, e então aguardar a página ser recarregada por completo, mesmo que depois de recarregada 98% do conteúdo da página ainda era o mesmo. Isso além de custoso,
causava uma insatisfação na experiência do usuário com o sistema. Foi aí que tiveram uma sacada: "Por que não alterar no DOM(Dopcument Object Model) somente o que de fato mudou e somente quando for necessário, e manter o que não foi alterado?". A forma com que o React faz isso é usando o conceito de Virtual DOM. Basicamente quando criamos componentes, não estamos criando elementos HTML e sim elementos React, que são uma representação mais simples e mais "leve" de um elemento HTML. Todos os elementos React criados através de componentes compõe o Virtual DOM que por sua vez é uma representação virtual do DOM real, em JS, que é mantida em memória. Dessa forma, com o Virtual DOM o React consegue optimizar as alterações no DOM real. Sempre que o estado da aplicação ou de um subconjunto de componentes alteram, o React compara aquela "nova versão" com a versão virtual do DOM que está em memória, e então o React altera no DOM real somente o que ele identificou que de fato mudou no DOM virtual, mantendo todo o restante do DOM real intacto. Essa é uma das estratégias do React para tonar as aplicações naturalmente performáticas sem que o desenvolvedor tenha que se preocupar em "Como" o React faz isso nos "bastidores". Além disso o React provê recursos e técnicas que são inclusive recomendações simples que podem ser aplicadas e muitos cenários para que, como desenvolvedores, possamos optimizar ainda mais nossas aplicações.
