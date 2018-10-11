import React, { Component } from 'react'
import axios from 'axios'
import { Route, Redirect } from 'react-router'

export default class SingleLocal extends Component {
  state = {
    singleSite: {},
    listings: [],
    redirect: true
  }


  fetchLocalInfo = async () => {
    const response = await axios.get(`/api/locations/${this.props.match.params.localId}`)
    console.log(response.data)
    this.setState({
      singleSite: response.data,
      listings: response.data.listings
    })
  }

  componentDidMount = () => {
    this.fetchLocalInfo()
  }

  // re route to a new page upon deletion
  handleDelete = async () => {
    const singleLocal = this.props.match.params.localId
    await axios.delete(`/api/locations/${singleLocal}`)
    this.props.history.push('/locations')
  }

  

  render() {
    const singleSite = this.state.singleSite 
  
  
    return (
      <div>

        <h1>Single Local</h1>
        <div>Address: {singleSite.address}</div>
        <div>Baths: {singleSite.baths}</div> 
        <div>Beds: {singleSite.beds}</div>
        <div> Description: {singleSite.description} <button>Update</button></div>
        <button onClick={this.handleDelete}> Delete</button>

      
      </div>
    )
  }
}
