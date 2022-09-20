import logo from './assets/wikipizzlelogo.png';
import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 0, mode: 'up', md: null};
    this.epic = 'TEXT TIME';

    this.state.mdtype = false;
    // this.state.md = getmd(this.state.mdtype);

    console.log("BAKEND!");

    // fetch("http://localhost:3001/art")
    //   .then((response) => response.text())
    //   .then((data) => this.setState({md: data}));

    // fetch("http://localhost:3001/type")
    //   .then((response) => response.text())
    //   .then((data) => {this.mdtype = (data == "w")});

    

    console.log("front!");

    // This binding is necessary to make `this` work in the callback
    this.guessed = this.guessed.bind(this);
    this.home = this.home.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.wholePage = this.wholePage.bind(this);
    // this.switchMode = this.switchMode.bind(this);
  }

head = (
  <div>
    {/* <h1 className="title">Wikipizzle</h1> */}
    <h2 className="subtitle">Wikipedia or AI-Generated? Take a guess and test your gut!</h2>
  </div>
)

  topbar = () => (
    <div className="logo-header">
      <img src={logo} alt=""/><h1>Wikipizzle</h1>
      <div className='button-container'> <button className="button1" role="button" onClick={() => this.setState({mode: 'GES'})}><span>Quizzle</span> </button></div>
      <div className='button-container'> <button className="button1" role="button" onClick={() => this.setState({mode: 'EXP'})}><span>Explore</span> </button></div>
      <div className='button-container'> <button className="button1" role="button" onClick={() => this.setState({mode: 'LRN'})}><span>Learn more</span> </button></div>
      <div className='button-container'> <button className="button1" role="button" onClick={() => this.setState({mode: 'TUT'})}><span>?</span> </button></div>
    </div>
  )

  explore = () => (
    <div className='explore-container wrapper'>
    <form id='explore-form'>
    <div class='form'>
        <label id='inputLable'>Input keywords:</label>
        <input id='inputField' type='text' maxlength='50'></input>
    </div>
    </form>
    {/* function othername() {
    var input = document.getElementById("userInput").value;
    alert(input); */}

    </div>
    );

  tutorial = () => (
    <div className='tutorial-one wrapper'>
      <div class="box article1">
        <p>The University of Queensland (UQ) is a public research university located in the city of Brisbane, the capital of the Australian state of Queensland. Founded in 1901, UQ is colloquially known as <span className='blue-highlight'>a sandstone university</span>.</p>
        <p>UQ is considered one of Australia’s leading universities, and is ranked as the 48th most reputable university in the world in the 2016 Times Higher Education World University Rankings. UQ is ranked within the top 300 universities in thirteen indicators in the 2015-16 QS World University Rankings.</p>
        <p>The main campus occupies much of the riverside inner suburb of St Lucia, southwest of the Brisbane CBD. Other UQ campuses and facilities are located throughout Queensland, the largest of which are the Gatton campus and the herbarium at Mount Coot-tha. UQ also has establishments overseas, such as the Brunei International School in Brunei Darussalam.</p>
        <p>Cras dictum orci interdum nibh laoreet, ac rutrum ipsum rutrum. Aenean aliquam velit eu purus aliquet pretium. In ut ipsum ut justo blandit tristique ac vel urna. Etiam molestie ligula sapien, nec pharetra enim suscipit et. Praesent ultrices velit id ligula lobortis consequat. Praesent id tortor lorem. Vivamus vestibulum metus dui, at efficitur metus egestas quis. Nullam malesuada justo enim, feugiat lobortis quam convallis ac. Nullam nec justo nunc. Duis rutrum felis a ultrices viverra. In luctus accumsan turpis, fermentum tincidunt erat auctor id. Mauris semper nunc quis massa suscipit placerat. Integer vel semper urna.</p>
      </div>
      <div class="box box1">this is blah blah blah blah blah blah blah blah blah blah box 1</div>
      <div class="box box2">box 2</div>
      <div class="box box3">box 3</div>
      <div class="box box4">box 4</div>
      </div>

  );

  learn = () => (
    <div className='learn-container wrapper'>

      <div className='learn-flexbox'>
        <div class="item learn-intro">
            <h1>What is Wikipizzle?</h1>
            <p>Wikipizzle is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nulla libero, a pulvinar risus egestas in. Duis sed mauris velit. Proin condimentum varius odio nec tincidunt. Vivamus tortor neque, sollicitudin id ante sit amet, hendrerit lobortis metus. Nam sagittis finibus elit, at faucibus nisl sagittis id. Nulla facilisi. Duis nec massa eu nisl feugiat lobortis. Donec tellus odio, scelerisque lacinia ex eu, consectetur porttitor turpis. Etiam tellus velit, cursus in fermentum eu, euismod et velit. Nullam a augue at turpis porta convallis. Cras interdum, ex at cursus cursus, purus felis consequat arcu, vel auctor nisi erat ut purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div class="item"><h1>6 ways to spot a generated or fake article</h1></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>

      <div className='learn-training'>
        <h2>1. Inconsistencies</h2>
        <p>The two main inconsistencies to look out for are facts that contradicts itself throughout the article and headlines or titles that do not support the content and lack correlation</p>

        <h2>2. Check the Vibes</h2>
        <p>Does the tone of writing match the topic it is discussing?</p>
        <p>Does a professional article contain large amounts of satire or parody? Does the Wikipedia article contain degrading, nonsensical, very baised or humorous content? There might be no harm intended, but it does have the potential to fool viewers. Apply common sense and look at the context.</p>
        <p>Is the article informative or does it create more questions rather then answering them?</p>

        <h2>3. Sloppy Writing</h2>
        <p>Poor grammar, spelling mistakes</p>
        <p>Stylistic choices, such as excessive capitalisation or the use of !!!, are a sign that the  </p>

        <h2>4. Absence of quotes or sources</h2>
        <p>The presence of quotes and sources might add an additional layer of integrity, potentially indicating more reliable information. External links to credible websites also boost the integrity of an article.</p>

      </div>

    </div>

    );

  
  tutorial = () => (
    <div className='tutorial-one wrapper'>
      <div class="box article1">
        <p>The University of Queensland (UQ) is a public research university located in the city of Brisbane, the capital of the Australian state of Queensland. Founded in 1901, UQ is colloquially known as <span className='blue-highlight'>a sandstone university</span>.</p>
        <p>UQ is considered one of Australia’s leading universities, and is ranked as the 48th most reputable university in the world in the 2016 Times Higher Education World University Rankings. UQ is ranked within the top 300 universities in thirteen indicators in the 2015-16 QS World University Rankings.</p>
        <p>The main campus occupies much of the riverside inner suburb of St Lucia, southwest of the Brisbane CBD. Other UQ campuses and facilities are located throughout Queensland, the largest of which are the Gatton campus and the herbarium at Mount Coot-tha. UQ also has establishments overseas, such as the Brunei International School in Brunei Darussalam.</p>
        <p>Cras dictum orci interdum nibh laoreet, ac rutrum ipsum rutrum. Aenean aliquam velit eu purus aliquet pretium. In ut ipsum ut justo blandit tristique ac vel urna. Etiam molestie ligula sapien, nec pharetra enim suscipit et. Praesent ultrices velit id ligula lobortis consequat. Praesent id tortor lorem. Vivamus vestibulum metus dui, at efficitur metus egestas quis. Nullam malesuada justo enim, feugiat lobortis quam convallis ac. Nullam nec justo nunc. Duis rutrum felis a ultrices viverra. In luctus accumsan turpis, fermentum tincidunt erat auctor id. Mauris semper nunc quis massa suscipit placerat. Integer vel semper urna.</p>
      </div>
      <div class="box box1">this is blah blah blah blah blah blah blah blah blah blah box 1</div>
      <div class="box box2">box 2</div>
      <div class="box box3">box 3</div>
      <div class="box box4">box 4</div>
      </div>

  );

  choose = () => (
    <div className="app">
    {/* <header> {this.topbar()} </header> */}
    {/* {this.head} */}
    
      <div className='article-container'><div className='article'> 
      <ReactMarkdown>
      {this.state.md}
      </ReactMarkdown> 
      </div></div>
    
    <div className='ins'> 
    <div className='button-container'> <button className="button1" role="button" onClick={() => this.guessed(true)}><span>WIKIPEDIA</span></button> </div>
    <div className='button-container'> <button className="button2" role="button" onClick={() => this.guessed(false)}><span>AI GENERATED</span></button> </div>
    </div>
    </div>
    );
    
    correct = (
      <div className="app">
        <header></header>
        {this.head}
        
        <div className='answer-box'>
        something
        </div>

        <div className='article'> something</div>
        <div className='ins'>
        <button className="button1" role="button" onClick={() => this.home()}><span>HOME</span></button>
        </div>
      </div>
    );

    chosen = () => (
      <div className="app">
      {this.head}

      <div className='chosen-container wrapper'>

        <div className='left-wrapper'>
          <div className='chosen-article'>
        <div className='article'>
          <ReactMarkdown>
            {this.state.md}
          </ReactMarkdown>
        </div>
        </div>
        <div className='learn-more'>
            asd
          </div>
      </div>

      <div className='right-wrapper'>
      <div className='answer-box'>
        <h2>{(this.state.page == 1) ? 'Correct' : 'Incorrect'}</h2>
        <h3>{(this.state.page == 1) ? 'You\'re right!' : 'You have been deceived!'} Today's article {this.mdtype ? 'was an actual Wikipedia article' : 'was generated by AI'}</h3>
      </div>
      <div className='stats'>epicc</div>

      {/* <div className='padded'>
        This . Better luck next time.
      </div> */}

      {/* <div className='article'>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
      </div> */}

      </div>
      
      </div>

      {/* <div className='ins'>
      <button className="button1" role="button" onClick={() => this.home()}><span>HOME</span></button>
      </div> */}
      </div>
    );


  guessed(x) {
    if (x == this.mdtype) {
      this.setState({page: 1});
    } else {
      this.setState({page: 2});
    }
  }

  home() {
    this.setState({page: 0})
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  listenScrollEvent = e => {
    const elem = document.getElementById('scroll');

    if (elem.scrollTop > elem.clientHeight/2) {
      this.setState({mode: 'down'});
    } else {
      this.setState({mode: 'up'});
    }
    // console.log("skrrrt");
  }

  componentDidMount() {
    // document.getElementById('scroll').addEventListener('scroll', this.listenScrollEvent);
  }

  scroll = () => {
    console.log(this.mdtype);
    if (this.state.mode == 'down') {
      document.getElementById('guess').scrollIntoView({behavior: 'smooth'});
    } else {
      document.getElementById('learn').scrollIntoView({behavior: 'smooth'});
    }
  };

  guess = () => {
    // const out = this.topbar()

    if (this.state.page == 0) {
      return <> {this.choose()}</>;
    } else {
      return <> {this.chosen()}</>;
    }
  }

  getpage = () => {
    switch (this.state.mode) {
      case 'GES':
        return <div className='page-container-guess' id='guess'> {this.guess()} </div>
      case 'LRN':
        return <div className='page-container-learn' id='learn'> {this.learn()} </div>
      case 'EXP':
        return <div className='page-container-explore' id='explore'> </div>
      case 'TUT':
        return <div className='page-container-tutorial' id='tutorial'>{this.tutorial()} </div>
      default:
        return <></>
    }
  }

  wholePage = () => {return (
    <div className='page-container'>
    <div className='page-container-head'> {this.topbar()} </div>
    <div className='page-container-scroll' id='scroll'>
      {this.getpage()}
      
      {/* <div className='page-container-switch' onClick={this.scroll}> 
        {(this.state.mode == 'up') ? <div className='page-container-switch-button'>Exploration Mode</div> :  <div className='page-container-switch-button'>Play Mode</div>}
      </div> */}
    </div>
    </div>
  )};

  render () {
    return this.wholePage();
  }
}

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   App.render();
// }

// setInterval(tick, 1000);

export default App;
