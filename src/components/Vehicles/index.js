import './index.css'

const Vehicles = (props) => {
    const { vehiclesList, forPlanet, handleSpaceVehicles } = props
    const radioName = `space-vehicle${forPlanet}`
    const handleRaidoClick = (event) => {
        handleSpaceVehicles(event.target.value)
        console.log(event.target.value)
    }
    return (
        <>
            <div>
                {vehiclesList.map(vehicle =>
                    <div className="vehicles">
                        <input onClick={handleRaidoClick} name={radioName} value={vehicle.name} id={vehicle.name + forPlanet} type="radio" />
                        <label htmlFor={vehicle.name + forPlanet}>{vehicle.name}({vehicle.total_no})</label>
                    </div>
                )}
            </div>
        </>
    )
}

export default Vehicles