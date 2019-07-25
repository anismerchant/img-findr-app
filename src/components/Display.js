import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BackTop, Input, Switch } from 'antd'
import { getPhotos, setPhotoDescFilter } from '../actions'
import { API_ENDPOINT, API_ACCESS_KEY, QUERY_STRING, PARAMETER } from '../api'
import { findPhoto } from '../selectors'
import Card from './Card'

class Display extends Component {
  state = {
    loading: true,
    orientation: ''
  }

  // Api call
  async componentDidMount() {
    const photoDetails = await axios.get(`${API_ENDPOINT}${QUERY_STRING}${API_ACCESS_KEY}${PARAMETER}`)
    this.props.getPhotos({ data: photoDetails.data })
  }

  // Capture search input
  onSearch = (e) => {
    this.props.setPhotoDescFilter(e.target.value)
  }

  // Display Photo Details
  displayCard = () => {
    if(!this.props.displayCard.length) return
    return this.props.displayCard.map(photo => {
      return <Card key={photo.id} {...photo}/>
    })
  }

  // TODO: Toggle between featured and not featured
  onSwitch = checked => {
    this.setState(() => ({ loading: !checked }))  

    const featured = document.getElementById('featured')
    if (featured.getAttribute('aria-checked') === 'true') {
      this.props.getNotFeatured()
    }
    if (featured.getAttribute('aria-checked') === 'false') {
      this.props.getFeatured()
    }
  };

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
  setPhotoDescFilter: (payload) => dispatch(setPhotoDescFilter(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)
