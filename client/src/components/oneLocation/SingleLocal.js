import React, { Component } from 'react'
import axios from 'axios'

export default class SingleLocal extends Component {
  state = {
    singleSite: {},
    listings: []
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


  render() {
    const singleSite = this.state.singleSite
    const listingsArray = this.state.listings.map((eachListing, i) => {
      return (
        <div key={i}>
          
        </div>
      )
    })

    return (
      <div>
        
        <h1>Single Local</h1>
        <div>Address: {singleSite.address}</div>
        <div>Baths: {singleSite.baths}</div> 
        <div>Beds: {singleSite.beds}</div>
        <div> Description: {singleSite.description} <button>Update</button></div>
        




        <button>Delete</button>
      </div>
    )
  }
}