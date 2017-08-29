import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (type) => {
    this.setState({
        filters: {
           ...this.state.filters,
          type: type  
        }
    })
  }

  adoptPet = (id) => {
    // this.state.adoptedPets.push(this.state.pets.find( pet => pet.id === id))
    // this.setState({
    //   adoptedPets: {
    //     ...this.state.adoptedPets, 
    //     adoptedPets: id
    //     // this.state.pets.find( pet => pet.id === id)
    //   }
    // })
    this.setState({
      adoptedPets: [
        ...this.state.adoptedPets.concat(id)
      ]
    })
  }

  fetchPets = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url).then(res => res.json()).then(pets => this.setState({ pets }))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.onChangeType} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;