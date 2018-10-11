import React, { Component } from 'react'

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

  addLocal = (event) => {
    event.preventDefault()
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