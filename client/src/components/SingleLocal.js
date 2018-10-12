import React, { Component } from 'react'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export default class SingleLocal extends Component {
  state = {
    singleSite: {},
    listings: [],
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

  handleChange = (event) => {
    console.log('This is working')
    const editDesc = { ...this.state.singleSite}
    editDesc[event.target.name] = event.target.value
    this.setState({ singleSite: editDesc })
  }

  saveUpdatedDesc = async (event) => {
    const singleLocal = this.props.match.params.localId
    console.log('Bluring is working')  
    event.preventDefault()
      // const response = await axios.post(`/api/locations`, this.state.newLocal)
      axios.post(`/api/locations/${singleLocal}`, this.state.singleSite)
        .then( response => {
          console.log(response.data)
        })
      
      this.props.history.push('/locations/${singleLocal}')
    }


  render() {
    const singleSite = this.state.singleSite
    const listingsArray = this.state.listings.map((listing, i) => {
      return (
        < div key={i}>

       <Link to={`/locations/listings`} >
                Listings: {listing.url}
                </Link>
        </div >
      )
      })


    return (

      <div>

        <h1>Single Local</h1>
        <div>Address: {singleSite.address}</div>
        <div>Baths: {singleSite.baths}</div>
        <div>Beds: {singleSite.beds}</div>
        <div>Description:<input name="description" type="text" placeholder = {singleSite.description} onChange={this.handleChange} onBlur ={this.saveUpdatedDesc}/></div>
        <div>{listingsArray}</div>
        <button onClick={this.handleDelete}> Delete</button>


      </div >
    )
  }
}
