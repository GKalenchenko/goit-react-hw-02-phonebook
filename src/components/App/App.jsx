import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  onSubmit = contact => {
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  onChange = e => {
    this.setState({ filter: e.target.value });
    this.setState(prevState => {
      console.log(prevState);
      if (this.state.filter === '') {
        return { contacts: prevState.contacts };
      }
      return {
        contacts: this.state.contacts.filter(contact =>
          contact.name.includes(this.state.filter)
        ),
      };
    });
  };

  render() {
    return (
      <>
        <ContactForm contacts={this.state.contacts} onSubmit={this.onSubmit} />
        <ContactList contacts={this.state.contacts}>
          <SearchFilter onChange={this.onChange} />
        </ContactList>
      </>
    );
  }
}
