import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

import img1 from "../assets/Images/11.webp";
import img2 from "../assets/Images/12.webp";
import img3 from "../assets/Images/13.webp";
import img4 from "../assets/Images/14.webp";


const Section = styled.section`
min-height:100vh;
width:100vw;
margin:0 auto ;

display:flex;
justify-content:center;
align-items:center;

position:relative;
${'' /* background-color:yellow; */}


`
const Overlay = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:30vw;
height:90vh;

box-shadow:0 0 0 4vw ${props=>props.theme.text}; 
border:3px solid ${props => props.theme.body};
z-index:11;
`
const Title = styled.h1`
font-size:${props => props.theme.fontxxxl};
font-family:"Kaushan Script";
font-weight:300;
text-shadow:1px 1px 1px ${props => props.theme.text};
color:${props => props.theme.body};
position:absolute;
top:1rem;
left:5%;
z-index:11;
`

const Text = styled.div`
width:20%;
font-size:${props=>props.theme.fontlg};
font-weight:300;
position:absolute;
padding:2rem;
top:0;
right:0;

z-index:11;

`
const Container = styled.div`
position:absolute;
top:0%;
left:50%;
transform:translate(-50%,0);
width:25vw;
height:200vh;

flex-direction:column;
display:flex;
justify-content:center;
align-items:center;

h1{
    width:5rem;
    margin:0 2rem;
} 
`

const Item = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:5rem 0;

img{
  width:100%;
  height:auto;
  z-index:5;
}

` 


const Product =({img,title=''})=>{


  return(
    <Item 
    >
      <img src={img} alt={title} />
      <h2>{title}</h2> 
    </Item>
  )

}


const NewArrival = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const Scrollingref= useRef(null);

    useLayoutEffect(() => {
  
        let element = ref.current;
        let scrollingElement = Scrollingref.current;
    
      
        let t1 = gsap.timeline();
      
        setTimeout(() => {
          t1.to(element,{
            scrollTrigger:{
              trigger:element,
              start:'top top ',
              scroller:'.App',
              end:"bottom+=100% top-=100%",
              scrub:true,  
              pin:true,
              // markers: true,
            },
            // we have to increase scrolling height of this section same as the scrolling  element 
            ease:'none,' 
          })
    
          // Vertcal scrolling 
    
         
            t1.fromTo(scrollingElement,
                {
                    y:'0',
                },
                {
                    y:'-100%',
              scrollTrigger:{
                trigger:scrollingElement,
                start:"top top ",
                scroller:".App",
                end:"bottom top",
                scrub:true,
              
                 
              },
              // we have to increase scrolling height of this section same as the scrolling  element 
               
            })
    ScrollTrigger.refresh();
      
        }, 1000);
    
      return () => {
        // lets clear instans=ce
        t1.kill();
        ScrollTrigger.kill();
        
      };
    }, [])

  return (
    <Section ref={ref} id="new-arrival">
    <Overlay />
    <Title data-Scroll data-scroll-speed="-2" 
    data-scroll-direction="horizontal" >
    New Arrivals</Title>

    <Container ref={Scrollingref}>
        <Product img={img1} title="Man Basics"/>
        <Product img={img2} title="Tops"/>
        <Product img={img3} title="Sweatshirt"/>
        <Product img={img4} title="Ethenic Wear"/>
        
      </Container>
    
    <Text data-Scroll data-scroll-speed="-4">
    There is new collection available for cool clothes in all sizes. 
This collection is a great way to find a new look for you. 
It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
<br />
<br />
The first line of clothing you will see on this collection is for men. 
The collection also includes three new styles for women.
<br />
<br />
Give it a try and experience a new look.
    </Text>
    
    </Section>
  )
}

export default NewArrival
