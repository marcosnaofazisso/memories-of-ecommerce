import React from 'react'
import Banner from '../banner-home/BannerHome'
import BemVindo from '../bem-vindo/BemVindo'
import Footer from '../footer/Footer'
import Mapa from '../mapa/Mapa'
import Posts from '../posts-instagram/Posts'


export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Banner />
      <Posts />
      <BemVindo />
      <Mapa />
      <Footer />
    </>
  )
}