import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Locations extends Component {
    state = {
        locals: [],
        newLocal: {
          address: '',
          beds: '',
          baths: '',
          description: ''
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
  
           {localsList}
            <form onSubmit={this.handleSubmit}>
           <div><input
            address = 'address'
                beds='text'
                baths='text'
                value={this.state.newLocal.address}
                onChange={this.handleChange} />
              <input type='submit' value='Create New Location' />
              </div>
            </form>
          </div>
        )
      }
    }