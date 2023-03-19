import React from 'react'
import Banner from '../banners/BannerHome'
import Footer from '../footer/Footer'
import Mapa from '../mapa/Mapa'
import Posts from '../posts-instagram/Posts'


export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Banner />
      <Posts />
      <Mapa />
      <Footer />
    </>
  )
}