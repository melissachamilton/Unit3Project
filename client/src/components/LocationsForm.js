import React, { Component } from 'react'
import axios from 'axios'
export default class LocationsForm extends Component {
  state = {
    newLocal: {
    }
  }

  handleNewLocalChange = (event) => {
    const eventValue = event.target.value
    const eventName = event.target.name

    //take it
    const newLocal = { ...this.state.newLocal }
    //change it
    newLocal[eventName] = eventValue
    //put it back
    this.setState({ newLocal })
  }

  addLocal = async (event) => {
    event.preventDefault()
    // const response = await axios.post(`/api/locations`, this.state.newLocal)
    axios.post(`/api/locations`, this.state.newLocal)
      .then( response => {
        console.log(response.data)
      })
    
    this.props.history.push('/locations')
  }

  render() {
    return (
      <div>
        <form>
          <div><input name="address" type="text" placeholder="Address" onChange={this.handleNewLocalChange} /></div>
          <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewLocalChange} /></div>
          <div><input name="beds" type="number" placeholder="Beds" onChange={this.handleNewLocalChange} /></div>
          <div>
            <input
              type="submit"
              value="Create New Product"
              onClick={this.addLocal} />
          </div>
        </form>
      </div>
    )
  }
}