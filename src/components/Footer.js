import React from 'react'
import styled from 'styled-components'


const FooterGroup = styled.div `
    background: #F1F3F5;
    padding:50px 0;
    display:grid;
    grid-gap: 20px;

`

const Text = styled.p `
    font-size:24px;
    font-weight: 600;
    color: #486791;
    max-width:500px;
    margin: 0 auto;
`

const Button = styled.button `
    background: linear-gradient(102.24deg, #33ccff 0%, #333399 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color:#fff;
    border:none;
    padding: 16px 60px;
    font-size:24px;
    font-weight: 600;
    justify-self:center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);

    &:hover{
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div `
    width:500px;
    margin: 50px auto;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap : 10px;

    a{
        transition: 0.8s;
    }
    a:hover{
        color:black;
    }

`

const Copyright = styled.div `
    color: #486791;
    max-width:500px;
    margin: 0 auto;
    padding : 0 20px;
    font-size:18px;

`

const Footer = ({data, children}) => (
      <FooterGroup>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tincidunt.
          </Text>
          <Button>Tweet</Button>
          <LinkGroup>{data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
            ))}
          </LinkGroup>
          <Copyright>{children}</Copyright>
      </FooterGroup>
)


export default Footer