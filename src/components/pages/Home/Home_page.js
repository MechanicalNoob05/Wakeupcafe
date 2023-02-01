import React from 'react'
import './Style.css'
import { useInView } from 'react-intersection-observer';

function Home_page() {
  const options = {
    threshold: 0.7,
    triggerOnce:true,
  }
  const { ref:page1Ref, inView:page1IsInView} = useInView(options);
  const { ref:page2Ref, inView:page2InView} = useInView(options);
  const { ref:page3Ref, inView:page3InView} = useInView(options);

  return (
    <div className='home_page_main_container'>
      <section className='image-section'>
        <div className='image-div'>
          <div className='blur-div'>
            <h1>Welcome to Wake-up Cafe,</h1>
            <h1 className='down-arrow'>↓</h1>
          </div>
        </div>
      </section>
      <section className='home_page-content'>
        <div className='content-container'>
          <div className={page1IsInView ? "content-container-left inview":'content-container-left'} ref={page1Ref}>
            <p>Our main goal since we began has remained basic: acquaint our clients with the domains we specifically purchase our extraordinary-tasting coffee from, broil the beans with consideration, and make astounding coffee increasingly available through our bistros and our site. The coffee we cook is the coffee we like to drink, and we trust you like it as well.<br></br><br></br>At ‘Wake-up Cafe’ Roasters, we pursue a straightforward arrangement of convictions.<br></br></p>
            <br></br>
            <h4>Straightforwardness is significantly more than exactly where we get our beans from.</h4>
            <br></br>
            <p>The primary thing we did when we began our organization was to feature our honor-winning ranches.This thought of straightforwardness naturally advanced to the manner in which we worked in different territories as well – our baristas are constantly present to talk about blending tips, our client benefit group is there to walk you through your coffee questions, and our broiling group to demonstrate to you how they function.</p>
            <br></br>
          </div>
          <div className='content-container-right'>
          </div>
        </div>    
      </section>
      <section className='home_page-content2'>
        <div className='content-container2'>
          <div className={page2InView ? "content-container-left2 inview":'content-container2-left'} ref={page2Ref}>
            <h4>A culture of consistent learning is the way to continue driving coffee forward.</h4>
            <br></br>
            <p>We are reliably inquiring about, testing, and executing best practices all throughout our business to increase present expectations. Making refractometers fundamental for our bistro blending.Holding progressed tangible learnings for junior roasters and exploring different avenues regarding handling at the ranch level are only a portion of the manners in which our profoundly gifted group is continually developing the manner in which Indian coffee is dealt with, experienced, or imparted.</p>
            <br></br>
          </div>
          <div className='content-container-right'>
          </div>
        </div>    
      </section>
      <section className='home_page-content3'>
        <div className='content-container3'>
          <div className={page3InView ? "content-container-left3 inview":'content-container3-left'} ref={page3Ref}>
            <h4>Sourcing the best coffee beans does not ensure great coffee.</h4>
            <br></br>
            <p>In spite of the fact that we have a committed sourcing group for green beans and have put resources into building up quality broiling parameters, we realize that significantly more advances still need to become alright to mix a decent container.This is the reason we have worked intimately with our Director of Training and our Q Grade guaranteed Director of Coffee to make industry-driving strategies, for example, furnishing baristas with evaluating and announcing devices for accuracy, preparing and measuring each and every bunch that is broiled to guarantee steady quality. </p>
          </div>
          <div className='content-container-right3'>
          </div>
        </div>    
      </section>
    </div>
    
  )
}

export default Home_page