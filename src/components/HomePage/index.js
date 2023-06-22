import './index.css'

import { Component } from 'react'

class HomePage extends Component {

    state = {
        planetsList: [],
        selectedPlanets: [],
        isDisabled: false
    }

    componentDidMount() {
        this.getPlanetsDetails()
    }

    getPlanetsDetails = async () => {

        const planetsUrl = "https://findfalcone.geektrust.com/planets"
        const options = {
            method: 'GET'
        }

        const planetsUrlResponse = await fetch(planetsUrl, options)
        if (planetsUrlResponse.ok) {
            const fetchedData = await planetsUrlResponse.json()
            this.setState({ planetsList: fetchedData })
        }

        console.log(this.state.planetsList)
    }

    handleChange =  (event) => {
        const { planetsList, selectedPlanets, isDisabled } = this.state
        console.log(event.target.value)
        const selectedPlanet = event.target.value
   
        const remainingPlanetsList =  planetsList.filter((planet) => event.target.value !== planet.name)
        
        let updatedselectedPlanets = [...selectedPlanets, selectedPlanet]

        this.setState({ planetsList: remainingPlanetsList, selectedPlanets: updatedselectedPlanets, isDisabled: !isDisabled }, ()=> console.log(selectedPlanet))
        
    }

    render() {
        const { planetsList, selectedPlanets, isDisabled } = this.state
        return (
            <div className='home-page-container'>
                <h1>Finding Falcone</h1>
                <br></br>
                <h4>Select Planets you want to search in:</h4>
                <div className="dropdowns-container">

                    <div>
                        <p>Destination 1:</p>
                        <label htmlFor='' >Choose</label>
                        <select name="first" id="first" onChange={this.handleChange}>
                            <option  value="" disabled={isDisabled} >Choose Planet</option>
                            {planetsList.map(planet => <option disabled={isDisabled} value={planet.name} key={planet.name} >{planet.name}</option>

                            )}
                         
                        </select>
                        <p>Destination selected: {selectedPlanets[0]}</p>
                    </div>
                    <div>
                        <p>Destination 2:</p>
                        <select name="second" onChange={this.handleChange}>
                        <option >Choose Planet</option>
                            {planetsList.map(planet => <option  value={planet.name} key={planet.name} >{planet.name}</option>

                            )}
                        </select>
                    </div>
                    <div>
                        <p>Destination 3:</p>
                        <select name="third" onChange={this.handleChange}> 
                        <option >Choose Planet</option>
                            {planetsList.map(planet => <option value={planet.name} key={planet.name}>{planet.name}</option>

                            )}
                        </select>
                    </div>
                    <div>
                        <p>Destination 4:</p>
                        <select name="fourth" onChange={this.handleChange}>
                        <option >Choose Planet</option>
                            {planetsList.map(planet => <option value={planet.name} key={planet.name}>{planet.name}</option>

                            )}
                        </select>
                    </div>

                    <div>
                        Time Taken:
                    </div>
                </div>
                <div>
                    <button>Find Falcone</button>
                </div>
            </div>
        )
    }
}

export default HomePage