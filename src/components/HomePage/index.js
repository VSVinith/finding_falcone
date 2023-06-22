import Dropdown from '../Dropdown'
import './index.css'

import { Component } from 'react'

class HomePage extends Component {

    state = {
        initialPlanetsList: [],
        remainingPlanetsList: [],
        selectedPlanet1: "",
        selectedPlanet2: "",
        selectedPlanet3: "",
        selectedPlanet4: "",

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
            this.setState({ initialPlanetsList: fetchedData, remainingPlanetsList: fetchedData })
        }

        console.log("planetsList from url", this.state.initialPlanetsList)
    }

    handleDropdown1 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild) 
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild ) 
        console.log("remaining planets after dropdown1:", remainingPlanets)
        this.setState({remainingPlanetsList: remainingPlanets, selectedPlanet1: planetFromChild} )
    }

    handleDropdown2 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild) 
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild) 
        console.log("remaining planets after dropdown2:", remainingPlanets)
        this.setState({remainingPlanetsList: remainingPlanets, selectedPlanet2: planetFromChild} )
    }

    handleDropdown3 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild) 
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild ) 
        console.log("remaining planets after dropdown3:", remainingPlanets)
        this.setState({remainingPlanetsList: remainingPlanets, selectedPlanet3: planetFromChild} )
    }

    handleDropdown4 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild) 
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild ) 
        console.log("remaining planets after dropdown4:", remainingPlanets)
        this.setState({remainingPlanetsList: remainingPlanets, selectedPlanet4: planetFromChild} )
    }

    render() {
        const { remainingPlanetsList, selectedPlanet1, selectedPlanet2, selectedPlanet3, selectedPlanet4, isDisabled1, isDisabled2, isDisabled3, isDisabled4 } = this.state
        return (
            <div className='home-page-container'>
                <h1>Finding Falcone</h1>
                <br></br>
                <h4>Select Planets you want to search in:</h4>
                <div className="dropdowns-container">

                    <div>
                        <p>Destination 1:</p>
                        <Dropdown planetsList={remainingPlanetsList} handleDropdown={this.handleDropdown1} />
                        <p>Destination selected: {selectedPlanet1}</p>
                    </div>
                    <div>
                        <p>Destination 2:</p>                       
                        <Dropdown planetsList={remainingPlanetsList} handleDropdown={this.handleDropdown2} />
                        <p>Destination selected: {selectedPlanet2}</p>
                    </div>
                    <div>
                        <p>Destination 3:</p>                        
                        <Dropdown planetsList={remainingPlanetsList} handleDropdown={this.handleDropdown3} />
                        <p>Destination selected: {selectedPlanet3}</p>
                    </div>
                    <div>
                        <p>Destination 4:</p>
                        <Dropdown planetsList={remainingPlanetsList}  handleDropdown={this.handleDropdown4} />
                        <p>Destination selected: {selectedPlanet4}</p>
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