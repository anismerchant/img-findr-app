import React, { Component } from 'react'
import { Card } from 'antd'

const { Meta } = Card

class Container extends Component {

  onClickHandler = (e) => {
    if (e.target === e.currentTarget) {
      window.open(`${this.props.urls.full}`, '_blank' )
    }
  }

  render() {
    return (     
      <Card
        hoverable
        cover={
          <img 
            alt={this.props.alt_description} 
            onClick={this.onClickHandler}  
            src={this.props.urls.small} 
          />
        }
        >
        <Meta title={`Photographer: ${this.props.user.name}`} description={`Description: ${this.props.alt_description ? this.props.alt_description : this.props.description}`} />
        <div className="ant-card-custom-info">
          <h4>Downloads: {this.props.downloads}</h4>
          <h4>Likes: {this.props.likes}</h4>
        </div>
      </Card>
    )
  }
}

export default Container