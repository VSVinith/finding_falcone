import Dropdown from '../Dropdown'
import Vehicles from '../Vehicles'
import './index.css'

import { Component } from 'react'

class HomePage extends Component {

    state = {
        initialPlanetsList: [],
        initialVehiclesList: [],
        remainingPlanetsList: [],
        remainingVehiclesList: [],
        vehicleClass1: "display-no-vehicle",
        vehicleClass2: "display-no-vehicle",
        vehicleClass3: "display-no-vehicle",
        vehicleClass4: "display-no-vehicle",
        selectedPlanet1: "",
        selectedPlanet2: "",
        selectedPlanet3: "",
        selectedPlanet4: "",
        vehicleNo: null

    }

    componentDidMount() {
        this.getPlanetsAndVehiclesDetails()
    }

    getPlanetsAndVehiclesDetails = async () => {

        const vehiclesUrl = "https://findfalcone.geektrust.com/vehicles"
        const planetsUrl = "https://findfalcone.geektrust.com/planets"
        const options = {
            method: 'GET'
        }

        //fetching vehicles response
        const vehiclesUrlResponse = await fetch(vehiclesUrl, options)
        if (vehiclesUrlResponse.ok) {
            const fetchedData = await vehiclesUrlResponse.json()
            this.setState({ initialVehiclesList: fetchedData, remainingVehiclesList: fetchedData })
        }
        console.log("vehiclesList from url", this.state.initialVehiclesList)

        //fetching planets response
        const planetsUrlResponse = await fetch(planetsUrl, options)
        if (planetsUrlResponse.ok) {
            const fetchedData = await planetsUrlResponse.json()
            this.setState({ initialPlanetsList: fetchedData, remainingPlanetsList: fetchedData })
        }
        console.log("planetsList from url", this.state.initialPlanetsList)
    }

    handleSpaceVehicles = (vehicleFromChild) => {
        // console.log("from handle space vehicles:", vehicleFromChild )
        const {remainingVehiclesList} = this.state
        remainingVehiclesList.filter(vehicle => {if (vehicle.name === vehicleFromChild && vehicle.total_no !== 0){
                vehicle.total_no = vehicle.total_no - 1
                console.log(vehicle.total_no)

        }

        })
    }

    handleDropdown1 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild)
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild)
        console.log("remaining planets after dropdown1:", remainingPlanets)
        this.setState({ remainingPlanetsList: remainingPlanets, selectedPlanet1: planetFromChild, vehicleClass1:"display-vehicle" })
    }

    handleDropdown2 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild)
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild)
        console.log("remaining planets after dropdown2:", remainingPlanets)
        this.setState({ remainingPlanetsList: remainingPlanets, selectedPlanet2: planetFromChild, vehicleClass2:"display-vehicle" })
    }

    handleDropdown3 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild)
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild)
        console.log("remaining planets after dropdown3:", remainingPlanets)
        this.setState({ remainingPlanetsList: remainingPlanets, selectedPlanet3: planetFromChild, vehicleClass3:"display-vehicle" })
    }

    handleDropdown4 = (planetFromChild) => {
        const { remainingPlanetsList } = this.state
        console.log("from event", planetFromChild)
        const remainingPlanets = remainingPlanetsList.filter(planet => planet.name !== planetFromChild)
        console.log("remaining planets after dropdown4:", remainingPlanets)
        this.setState({ remainingPlanetsList: remainingPlanets, selectedPlanet4: planetFromChild, vehicleClass4:"display-vehicle" })
    }

    render() {
        const { remainingPlanetsList, vehicleClass1, vehicleClass2, vehicleClass3, vehicleClass4, initialVehiclesList, selectedPlanet1, selectedPlanet2, selectedPlanet3, selectedPlanet4, isDisabled1, isDisabled2, isDisabled3, isDisabled4 } = this.state
        return (
            <div className='home-page-container'>
                <h1>Finding Falcone</h1>
                <br></br>
                <h4>Select Planets you want to search in:</h4>
                <div className="dropdowns-container">
                    <div className='dropdown-container'>
                        <p>Destination 1:</p>
                        <Dropdown planetsList={remainingPlanetsList} handleDropdown={this.handleDropdown1} />
                        <p> {selectedPlanet1}</p>
                        <div className={vehicleClass1}>
                            <Vehicles vehiclesList={initialVehiclesList} handleSpaceVehicles={this.handleSpaceVehicles} forPlanet={1} />
                        </div>
                    </div>
                    <div className='dropdown-container'>
                        <p>Destination 2:</p>
                        <Dropdown planetsList={remainingPlanetsList}  handleDropdown={this.handleDropdown2} />
                        <p> {selectedPlanet2}</p>
                        <div className={vehicleClass2}>
                            <Vehicles vehiclesList={initialVehiclesList} handleSpaceVehicles={this.handleSpaceVehicles} forPlanet={2} />
                        </div>
                    </div>
                    <div className='dropdown-container'>
                        <p>Destination 3:</p>
                        <Dropdown planetsList={remainingPlanetsList} handleDropdown={this.handleDropdown3} />
                        <p> {selectedPlanet3}</p>
                        <div className={vehicleClass3}>
                            <Vehicles vehiclesList={initialVehiclesList} handleSpaceVehicles={this.handleSpaceVehicles} forPlanet={3}/>
                        </div>
                    </div>
                    <div className='dropdown-container'>
                        <p>Destination 4:</p>
                        <Dropdown planetsList={remainingPlanetsList} handleDropdown={this.handleDropdown4} />
                        <p> {selectedPlanet4}</p>
                        <div className={vehicleClass4}>
                            <Vehicles vehiclesList={initialVehiclesList} handleSpaceVehicles={this.handleSpaceVehicles} forPlanet={4}/>
                        </div>
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