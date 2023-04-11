import { motion } from 'framer-motion'
import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import styled from 'styled-components'
import Logo from "../assets/Svgs/star_white_48dp.svg"

const Section=styled.section`
min-height:100vh;
width:100vw;
margin:5rem auto;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-color:${props => props.theme.body};
color:${props=>props.theme.text};
position:relative;
`

const LogoContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

img{
    width:20vh;
    height:auto;
}
h3{
    font-size:${props=>props.theme.fontxl};
    font-family:"Kaushan Script"
}

`
const FooterComponenet = styled(motion.footer)`
width:80vw;

ul{
    list-style-type:style none;
    display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
margin:2rem;
margin-top:4rem;
padding:0 1rem;
border-top:1px solid ${props=>props.theme.text};
border-bottom:1px solid ${props=>props.theme.text};

}

li{
    padding:2rem;
    font-size:${props => props.theme.fontlg};
    text-transform:uppercase;
    cursor:pointer;
    transition:all 0.3s ease;

    &:hover{
        transform:scale(1.1);
    }
}

`

const Bottom=styled.div`
padding:0.5rem 0;
margin:0 4rem;
font-size:${props => props.theme.fontlg};

display:flex;
justify-content:space-between;
align-items:center;

a{
    text-decoration:underline
}
`
const Footer = () => {
    

    const {scroll} = useLocomotiveScroll();
    const handleScroll =(id)=>{
        let elm = document.querySelector(id);

        scroll.scrollTo(elm,{
            offset:"-100",
            duration:'2000',
            easing:[0.25,0.0,0.35,1.0]
        })
    }
  return (
    <Section>
        <LogoContainer>
        
            <img 
            data-Scroll data-scroll-speed="2"
            src={Logo} alt="Wide Studio" />
            <h3 data-Scroll data-scroll-speed="-1">Wibe Studio  </h3>
        </LogoContainer>
        <FooterComponenet
        initial={{y:"-400px"}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{
            duration:1.5
        }}
        >
        
            <ul>
                <li onClick={() =>handleScroll("#home")} >home</li>
                <li onClick={() =>handleScroll(".about")} >about</li>
                <li onClick={() =>handleScroll("#shop")} >shop</li>
                <li onClick={() =>handleScroll("new-arrival")} >new arrival </li>
                    <a href="http://google.com" target="_blank" rel="noreferrer">
                        look book
                    </a>
                
                <li>
                    <a href="http://google.com" target="_blank" rel="noreferrer">
                        riview
                    </a>
                </li>
            </ul>
            <Bottom>
                <span
                 data-Scroll data-scroll-speed="2" data-scroll-direction="horizontal" 
                >&copy;{new Date().getTime}.web Developer .</span>
                <span
                 data-Scroll data-scroll-speed="-2" data-scroll-direction="horizontal" 
                > Made with &hearts ; by
                <a href="http://youtube.com" target="_blank" rel="noreferrer">
                    --MgCoder
                </a></span>
            </Bottom>
        </FooterComponenet>
    </Section>
  )
}

export default Footer;
