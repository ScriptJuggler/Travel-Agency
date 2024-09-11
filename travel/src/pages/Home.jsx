import React from 'react'
import '../style/home.css'
import { Container, Row, Col } from 'react-bootstrap'
import heroImg from '../data/image/hero-img01.jpg'
import heroImg02 from '../data/image/hero-img02.jpg'
import experienceImg from '../data/image/experience.png'
import heroVideo from '../data/image/hero-video.mp4'
import worldImg from '../data/image/world.png'

import Subtitle from '../shared/Subtitle'
import Searchbar from '../shared/Searchbar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../component/Featured-tours/FeaturedTourList'
import Masonygallery from '../imageGallery/Masonygallery'
import Testimonial from '../component/Testimonial/Testimonial'
import NewsLetter from '../shared/NewsLetter'
const Home = () => {
  return <>
    {/* /hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle Subtitle="Know before you go " className="subtitle-know-before" ></Subtitle>
                <img src={worldImg} alt='world' />
              </div>
              <h1>Travel Beyond Limits. Explore, Discover, Thrive
                <span className='highlight'>!</span>
              </h1>
              <p>
                With Grammarly, you’ll get automated APA, MLA, and Chicago-style
                citations built for you without having to leave a web page. You
                ’ll also benefit from more academic writing support, including
                plagiarism detection, citation formatting, and proofreading.
              </p>
            </div>

          </Col>
          <Col lg='2'>
            <div className='hero__img-box  '>
              <img src={heroImg} alt="hero" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box hero__video-box mt-4'>
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
              <img src={heroImg02} alt="hero" />

            </div>
          </Col>
          <Searchbar />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h3 className='services__subtitle'>what we serve</h3>
            <h2 className='services__title'>we offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>


    {/* ===============feature tour sectionstart =========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle Subtitle={"Explore"} className="subtitle-explore"/>
            <h2 className='featured__tour-title'>Our features toures</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ===============feature tour section end =========== */}
    {/* ================experience section start==========       */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='experience__content'>
              <Subtitle Subtitle={'Experience'} className="subtitle-experience"/>
              <h2>with all our experience <br />we will serve you </h2>
              <p>Open-source neutral-style system symbols elaborately <br />
                Open-source neutral-style system symbols e
              </p>

            </div>
            <div className='counter__wrapper d-flex align-items-center gap-5' >
              <div className='counter__box'>
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className='counter__box'>
                <span>2k+</span>
                <h6>Regular Client</h6>
              </div>
              <div className='counter__box'>
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className='experience__img'>
              <img src={experienceImg} alt='experience' />

            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ================experience section end==========       */}
    {/* ================gallary section start============ */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle Subtitle={"Gallery"} className="subtitle-gallery"/>
            <h2 className='gallery__title'>
              visit our client tour gallery
            </h2>
          </Col>
          <Col lg='12'>
            <Masonygallery />
          </Col>
        </Row>
      </Container>
    </section>
   
    {/* ================gallary section end============ */}
    {/* ----------------------tetimonial section start-------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle Subtitle={"Fans love"}  className="subtitle-fans-love"/>
            <h2 className='testimonial__title'>What our fans say about us</h2>

          </Col>
          <Col lg='12'>
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>



    {/* ----------------------tetimonial section end-------------------- */}
    <NewsLetter />

  </>
}

export default Home