import React ,{Component}from 'react';
import Persons from './Persons/Persons'

class TestPro extends Component{
  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    index: 1,
    disabledNext: false,
    disabledPrev: false
  };

  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = (index === 0);

    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
  }

   toggleNext(e) {
     let index = this.state.index + 1;
     let disabledNext = index === (this.props.profiles.length - 1);

     this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
   }

  componentDidMount() {
    console.log('[componentDidMount] ...');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  handlePrevProject = () => {
  }
  handleNextProject = () => {
  }
  render() {

    console.log('[render] ...');
    const { index, disabledNext, disabledPrev } = this.state;
    const profile = this.state.persons ? this.state.persons[index] : null;
    console.log('profile',profile);
    let persons = null;
    persons =  <Persons
    persons={this.state.persons}
    //persons={profile}
    clicked={this.deletePersonHandler}
    changed={this.nameChangedHandler}
  />
    return ( 
      <div>
      <h1>Demo</h1>
      {persons}
      <button onClick={this.handlePrevProject}>Prev</button>
      <button onClick={this.handleNextProject}>Next</button>    
      </div>
    );
  }
}

export default TestPro;