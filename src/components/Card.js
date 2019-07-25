import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

export default (props) => (     
  <Card
    hoverable
    cover={
      <img 
        alt={props.alt_description} 
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            window.open(`${props.urls.full}`, '_blank' )
          }
        }}  
        src={props.urls.small} 
      />
    }
    >
    <Meta title={`Photographer: ${props.user.name}`} description={`Description: ${props.alt_description ? props.alt_description : props.description}`} />
    <div className="ant-card-custom-info">
      <h4>Downloads: {props.downloads}</h4>
      <h4>Likes: {props.likes}</h4>
    </div>
  </Card>
)
