import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Locations extends Component {
    state = {
        locals: []
    }
    
    
    componentDidMount = async () => {
        const response = await axios.get('/api/locations')
        this.setState({ locals: response.data })
      }
    
      handleChange = (event) => {
        const newlocal = { ...this.state.newlocal }
        newlocal[event.target.address] = event.target.value
        this.setState({ newlocal })
      }
    
      handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/locations', this.state.newlocal)
    
        const locals = [...this.state.locals]
        locals.push(response.data)
        this.setState({ locals })
      }
    
      render() {
        const localsList = this.state.locals.map((local, i) => {
          return (
            <div>
                <Link to={`/locations/${local._id}`} key={i}>
                Address: {local.address}
                </Link>
            </div>
          )
        })
    
        return (
          <div>
            <h1>Locations</h1>
            {localsList}
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='userName'
                value={this.state.newlocal}
                onChange={this.handleChange} />
              <input type='submit' value='Create New Location' />
            </form>
          </div>
        )
      }
    }