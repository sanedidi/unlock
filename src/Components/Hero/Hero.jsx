import React from 'react'
import './Hero.scss'
import icon from '../../assets/heroIcon.png'

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__top">
                    <div className="hero__icon">
                        <img src={icon} alt="" />
                    </div>
                    <div className="hero__item">
                        <h2 className="hero__title"><span>Unlock </span>Your Creative Potential</h2>
                    </div>
                </div>
                <div className="hero__mid">
                    <p className="hero__text">with Online Design and Development Courses.</p>
                    <p className="hero__text small">Learn from Industry Experts and Enhance Your Skills.</p>
                </div>
                <div className="hero__btm"> 
                    <button className="hero__btn orange">Explore Courses</button>
                    <button className="hero__btn">View Pricing</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero