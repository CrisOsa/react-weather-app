import React from "react";

class CityInput extends React.Component {
constructor(props){
    super(props);
    this.state = {
    stat: '',
    temp: '',
    hum: '',
};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Kliknięto mnie')
    const URL =
    `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=fe390c054fc5845a3ed3525f88e4b825&units=metric`

    fetch(URL)
    .then(response =>{
        if (response.ok) {
            return response
        }
        throw Error ("Coś się zjebało")
    })
    .then(response => response.json())
    .then(data => {
        this.setState( state => ({
            stat:Object.assign({}, ...data.weather),
            temp: data.main.temp,
            hum: data.main.humidity,
            city: data.name
        }))
    })
    .catch(err => {
        this.setState({
            err: 'Popraw coś'
        })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} placeholder='Wpisz nazwę miasta...'
           onChange={this.handleChange} />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

export default CityInput