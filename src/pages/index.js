import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image' 
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p `
  font-size:28px;
  font-weight:600;
  text-transform:uppercase;
  color: #0045AD;
  text-align:center;
`

const SectionCellGroup = styled.div `
  max-width:800px;
  margin:0 auto 100px;
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-colum-gap: 20px;
  padding: 0 20px;

  @media (max-width:800px){
    grid-template-columns:repeat(1,1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Power to <br/>create anything</h1>
          <p>We are global branding agency helping companies to communicate through vision and imagination</p> 
          <Link to="/page-2/">Watch the video</Link>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>OUR SERVICES</h2>
        <div className="CardGroup">
            <Card 
                title = "Mobile Application"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia varius sodales."
                image ={require('../images/wallpaper.jpg')} />
              <Card 
                title = "Web Design"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia varius sodales."
                image ={require('../images/wallpaper3.jpg')} />
              <Card 
                title = "ECommerce Solutions"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia varius sodales."
                image ={require('../images/wallpaper2.jpg')} />
              <Card 
                title = "Web Development"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia varius sodales."
                image ={require('../images/wallpaper4.jpg')} />
              <Card 
                title = "Google Analytics"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia varius sodales."
                image ={require('../images/wallpaper.jpg')} />
              <Card 
                title = "Digital Marketing"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia varius sodales."
                image ={require('../images/wallpaper4.jpg')} />
          </div>
      </div>
      <Section 
        image = {require('../images/wallpaper2.jpg')}
        logo = {require('../images/global.png')}
        title="Nullam Id Feugiat"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim et ipsum ut congue. Nam et neque nec turpis interdum pellentesque a id nisi. Nam interdum non tellus et efficitur.  "
      />
      
       <SectionCaption>Lorem ipsum dolor sit amet
       </SectionCaption>
       <SectionCellGroup>
            {staticdata.cells.map(cell => (
            <Cell 
            title={cell.title}
            image={cell.image} />
            ))}
       </SectionCellGroup>
    </div>
      </Layout>
)

export default IndexPage



