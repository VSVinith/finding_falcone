import { Component } from "react";


const Dropdown = (props) => {
    const { planetsList, handleDropdown } = props

    const handleChange = (event) => {
        handleDropdown(event.target.value)
    }
    return (
        <select onChange={handleChange}>
            <option value="">choose</option>
            {planetsList.map(planet => <option key={planet.name}>{planet.name}</option>)
            }
        </select >
    )
}

export default Dropdown