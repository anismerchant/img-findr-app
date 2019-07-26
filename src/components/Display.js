import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BackTop, Input, Switch } from 'antd'
import { getPhotos, setPhotoDescFilter, getNotFeatured, getFeatured,
         getPortrait, getLandscape, getSquarish } from '../actions'
import { API_ENDPOINT, API_ACCESS_KEY, CONNECTOR, 
         QUERY_STRING, QUERY_SELECTOR, PARAMETER } from '../api'
import { findPhoto } from '../selectors'
import Container from './Container'

class Display extends Component {
  state = {
    loading: true
  }

  // Api call
  async componentDidMount() {
    const photoDetails = await axios.get(`${API_ENDPOINT}${QUERY_STRING}${API_ACCESS_KEY}${CONNECTOR}${PARAMETER}`)
    this.props.getPhotos({ data: photoDetails.data })
  }

  // Capture search input
  onSearch = (e) => {
    this.props.setPhotoDescFilter(e.target.value)
  }

  // Display Photo Details
  displayCard = () => {
    if(!this.props.displayCard.length) return
    return this.props.displayCard.map((photo,index) => {
      return <Container key={photo.id+index} {...photo}/>
    })
  } 

  // Build query 
  queryOption = (param = '', query_selector='') => {
    fetch(`${API_ENDPOINT}${QUERY_STRING}${API_ACCESS_KEY}${CONNECTOR}${PARAMETER}${CONNECTOR}${query_selector}${param}`)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
      return this.props.getPhotos({ data })
    })
  }

  onSwitch = checked => {
    this.setState(() => ({ loading: !checked }))  

    const featured = document.getElementById('featured')
    if (featured.getAttribute('aria-checked') === 'false') {
      this.props.getNotFeatured()
      this.queryOption(this.props.filters.sortBy)
    }
    if (featured.getAttribute('aria-checked') === 'true') {
      this.props.getFeatured()
      this.queryOption()
    }
  }

  changeOrientation = (e) => {
    if (e.target.value === "portrait") {
        this.props.getPortrait()
        this.queryOption(e.target.value, QUERY_SELECTOR)
    } else if (e.target.value === "landscape") {
        this.props.getLandscape()
        this.queryOption(e.target.value, QUERY_SELECTOR)
    } else if (e.target.value === "squarish") {
        this.props.getSquarish()
        this.queryOption(e.target.value, QUERY_SELECTOR)
    } 
  }

  render () {
    const { loading } = this.state
    const { Search } = Input;
    return (
      <div>
        <div className= "ant-input-search-container">
          <Search
            type = "text"
            placeholder="Filter by description..."
            autoFocus
            onChange={this.onSearch}
          />
        </div>
        <div className="ant-switch-container">
          <h3>Not Featured</h3>
          <Switch id="featured" checked={!loading} onChange={this.onSwitch} />
          <h3>Featured</h3>
        </div>
        <select
            value={this.state.orientation}
            onChange = {this.changeOrientation}
            className="ant-dropdown-menu"
          >    
            <option value="" disabled>Get Images</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
            <option value="squarish">Squarish</option>
        </select>
        <div className="ant-card-container">
          {
            this.displayCard()
          }
       </div>
        <div>
          <BackTop />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  filters: state.filters,
  displayCard: findPhoto(state.photos, state.filters)
})

const mapDispatchToProps = (dispatch) => ({
  getPhotos: (payload) => dispatch(getPhotos(payload)),
  setPhotoDescFilter: (payload) => dispatch(setPhotoDescFilter(payload)),
  getNotFeatured: () => dispatch(getNotFeatured()),
  getFeatured: () => dispatch(getFeatured()),
  getPortrait: () => dispatch(getPortrait()),
  getLandscape: () => dispatch(getLandscape()),
  getSquarish: () => dispatch(getSquarish()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)
