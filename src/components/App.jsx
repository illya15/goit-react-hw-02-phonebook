  // import { render } from '@testing-library/react';

  // import { nanoid } from 'nanoid';
import { Component } from 'react';
  
  export class App extends Component {
    state = {
      contacts: [],
      name: '',
    };
  
    handleInputChange = event =>{
this.setState({name: event.currentTarget.value})
    }
    handleSubmit = event => { 
      event.preventDefault()
      console.log(this.state)
    }

  render() 
  {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <form onSubmit={this.handleSubmit}
          
        >
          <label>
           
            Name
            <input
              type="text"
              name={this.state.name} onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type='submit'>Add contacts</button>
        </form>
         <div>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
        </div>
      </div>
    );
  }
  };