import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Listings extends Component {
  state = {
    sites: [],
    }


  componentDidMount = async () => {
    const response = await axios.get('/api/locations')
    console.log(response)
    this.setState({ sites: response.data })
  }

  // handleChange = (event) => {
  //   const newLocal = { ...this.state.newLocal }
  //   newLocal[event.target.address] = event.target.value
  //   this.setState({ newLocal })
  // }

  // handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const response = await axios.post('/api/locations', this.state.newLocal)

  //   const listings = [...this.state.listings]
  //   listings.push(response.data)
  //   this.setState({ listings })
  // }

  render() {
    const allListings = this.state.sites.map((eachlisting, i) => {
      return (
      
          <div>
            <p>{eachlisting.address}</p>
            <p>{eachlisting.listings[0] ? eachlisting.listings[0].url : 'there was no url'}</p>
            
            
            

          </div>
      )
    })

    return (
      <div>
        <h1>All Listings</h1>
        {allListings}
      </div>
    )
  }
}