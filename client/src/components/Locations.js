import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { StyledHomesContainer } from './SharedComponents'


export default class Locations extends Component {
    state = {
        locals: [],
        newLocal: {
          address: '',
          beds: '',
          baths: '',
          description: '',
          listings: ''
        }
    }
    
    componentDidMount = async () => {
        const response = await axios.get('/api/locations')
        this.setState({ locals: response.data })
      }
    
      handleChange = (event) => {
        const newLocal = { ...this.state.newLocal }
        newLocal[event.target.address] = event.target.value
        this.setState({ newLocal })
      }
    
      handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/locations', this.state.newLocal)
    
        const locals = [...this.state.locals]
        locals.push(response.data)
        this.setState({ locals })
      }
    
      render() {
        const localsList = this.state.locals.map((local, i) => {
          return (

            <div>
                <Link to={`/locations/${local._id}`} key={i}>
                address: {local.address}
                </Link>
            </div>
          )
        })
    
        return (
          <div>
            <h1>Locations</h1>
  <StyledHomesContainer>{localsList}</StyledHomesContainer>
           
           <button><Link to={`locations/newform`}>Add New Location</Link></button>
          </div>
        )
      }
    }