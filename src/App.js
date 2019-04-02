import React, {
  Component
} from 'react';
import './App.css';
import 'bulma/css/bulma.css';


class WeatherService extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    }
  }

  componentDidMount() {
    const zip = this.props.zip;
    //     const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" +

    //      zip +

    //      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    const apiURL = "https://swapi.co/api/planets/?page=" + zip;

    fetch(apiURL)
      .then(res => res.json())
      .then(json => {
        this.setState({
          weatherData: json
        })
      })
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div> Loading data... </div>
    
    const planets = weatherData.results;
    return (
      <div>
        {
          planets.map((planet, index)=>  <p>Name:{planet.name}</p>)
        }
      </div>

      // weatherData.map(
      //   (index)=>(
      //     <p>Name:{weatherData.results[index].name}</p>
      //   )
      // )

      // <
      // div >

      // {
      //   JSON.stringify(weatherData)
      // } {
      //   console.log(JSON.stringify(weatherData.results[0].name))
      // } <
      // p > Name: {
      //   weatherData.results[0].name
      // } < /p>

      // <
      // p > Diameter: {
      //   weatherData.results[0].diameter
      // } < /p>

      // <
      // p > Rotation_period: {
      //   weatherData.results[0].rotation_period
      // } < /p>

      // <
      // p > Orbital_period: {
      //   weatherData.results[0].orbital_period
      // } < /p>

      // <
      // p > Gravity: {
      //   weatherData.results[0].gravity
      // } < /p>

      // <
      // p > Population: {
      //   weatherData.results[0].population
      // } < /p>

      // <
      // p > Climate: {
      //   weatherData.results[0].climate
      // } < /p>

      // <
      // p > Terrain: {
      //   weatherData.results[0].terrain
      // } < /p>

      // <
      // p > Surface_water: {
      //   weatherData.results[0].surface_water
      // } < /p> <
      // /div>

    );
  }
}

// const PLACES = [
// {name:"Washington", zip: "10001"},
// {name:"New York", zip: "20001"},
// {name:"Seatle", zip: "30001"},
// {name:"Las Vegas", zip: "40001"},
// ];

const PLACES = [{
    zip: "1"
  },
  {
    zip: "2"
  },
  {
    zip: "3"
  },
  {
    zip: "4"
  },
];




class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return ( 
      <div className = "App" > {
        /* <p> Hello world from react.JS!! </p> */ } {
        PLACES.map((place, index) => ( 
          <button key = {
            index
          }
          className = {
            "button " + (index % 2 === 0 ? "is-danger" : "is-primary")
          }
          onClick = {
            () => {
              //  console.log(`Button ${index} clicked!!!`)
              this.setState({
                activePlace: index
              })
            }
          } > {
            place.zip
          } <
          /button>
        ))
      } <
      WeatherService zip = {
        PLACES[activePlace].zip
      }
      key = {
        activePlace
      } > < /WeatherService> <
      /div>
    );
  }
}

export default App;