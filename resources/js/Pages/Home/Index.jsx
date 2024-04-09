import Container from '@/Components/Container'
import FullBleed from '@/Components/FullBleed'
import FullBleedAbsolute from '@/Components/FullBleedAbsolute'
import Header from '@/Components/Header'
import React from 'react'

function Index() {
  return (
    <>
      <Container className='relative isolate h-[640px] sm:h-[780px] lg:h-[960px] 2xl:h-[1080px] pt-5'>
        <FullBleedAbsolute className='h-full z-20'>
          {/* TODO: this image has to be responsive */}
          <img src='./hero.png' className='block object-cover object-center w-full h-full' alt='Hero' />
        </FullBleedAbsolute>
        <Header className='relative z-30'>hi</Header>
      </Container>
    </>
  )
}

export default Index