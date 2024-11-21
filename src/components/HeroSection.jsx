import React from 'react'
import "@/css/heroSection.css"
import { Button } from './ui/button'
function HeroSection() {
  return (
    <div id='heroSection'>
        <h1 className='font-bold text-white text-5xl'>Fast, Flexible, and Customizable UI Components</h1>
        <p className='text-center text-white my-5'>
        Get started with BoltUI's powerful components, detailed guides, and customization tips to build sleek, responsive interfaces with ease.
        </p>

        <Button variant={"outline"}>Get Started</Button>
    </div>
  )
}

export default HeroSection