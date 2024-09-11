
import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'react-bootstrap'


import weatherImg from '../data/image/weather.png'
import guideImg from '../data/image/guide.png'
import customizationImg from '../data/image/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title: "Calculate Weather",
        desc:"KNOW THE WEATHER BEFORE YOU GO",

    },
    {
        imgUrl:guideImg,
        title: "Best Tour Guide",
        desc:"BEST TOUR GUIDES FOR YOU",

    },
    {
        imgUrl:customizationImg,
        title: "Customization",
        desc:"CUSTOMIZE YOUR OWN JOURNEY",

    },
]

const ServiceList = () => {
  return <>
    {
        servicesData.map((item,index)=> 
        <Col lg='3' md='6' sm='12' className='mb-6' key={index}>
        <ServiceCard item={item}/>
        </Col>)
    }
  </>
}

export default ServiceList