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
          planets.map((planet, index)=> 
          <div>
            <br></br>
           <p>Name:{planet.name}</p>
           <p>Diameter:{planet.diameter}</p>
           <p>Rotation_period:{planet.rotation_period}</p> 
           <p>Orbital_period:{planet.orbital_period}</p>
           <p>Gravity:{planet.gravity}</p>
           <p>Population:{planet.population}</p> 
           <p>Climate:{planet.climate}</p>
           <p>Terrain:{planet.terrain}</p>
           <p>Surface_water:{planet.surface_water}</p> 
           <br></br>
           <hr></hr>  
           {/* <p>{JSON.stringify(weatherData)}></p>   */}
           </div>
          
                     )
        }
      </div>
    );
  }
}


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
  {
    zip: "5"
  },
  {
    zip: "6"
  },
  {
    zip: "7"
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
          } 
          </button>
        ))
      } 
      <WeatherService zip = {
        PLACES[activePlace].zip
      }
      key = {
        activePlace
      } > </WeatherService> </div>
    );
  }
}

export default App;