'use client'

import { useEffect, } from 'react'

import { defineSlideOnLeft, } from '../../utils/defineSlideOnLeft'
import { defineThumbWidth, } from '../../utils/defineThumbWidth'
import { getAmountSlides, } from '../../utils/getAmountSlides'
import { getCurrentTransform, } from '../../utils/getCurrentTransform'
import { getShiftValue, } from '../../utils/getShiftValue'


const showNextSlide = () => {
  const slideFlow: HTMLElement = document.getElementById('slider-slide-flow')!

  const currentTransform = getCurrentTransform(slideFlow)
  const amountSlides = getAmountSlides(slideFlow)
  const shiftValue = getShiftValue(slideFlow, amountSlides)
  const slideOnLeft = defineSlideOnLeft(currentTransform, shiftValue, amountSlides)

  const thumb: HTMLElement = document.getElementById('slider-thumb')!
  const currentThumbTransform = getCurrentTransform(thumb)


  if (slideOnLeft !== 'last') {
    slideFlow.style.transform = `translateX(${currentTransform - shiftValue}px)`

    const thumbWidth = defineThumbWidth()
    thumb.style.transform = `translateX(${currentThumbTransform + (thumbWidth)}px)`
  }
}

const showPreviousSlide = () => {
  const slideFlow: HTMLElement = document.getElementById('slider-slide-flow')!

  const currentSlideFlowTransform = getCurrentTransform(slideFlow)
  const amountSlides = getAmountSlides(slideFlow)
  const shiftValue = getShiftValue(slideFlow, amountSlides)
  const slideOnLeft = defineSlideOnLeft(currentSlideFlowTransform, shiftValue, amountSlides)

  const thumb: HTMLElement = document.getElementById('slider-thumb')!
  const currentThumbTransform = getCurrentTransform(thumb)

  if (slideOnLeft !== 'first') {
    slideFlow.style.transform = `translateX(${currentSlideFlowTransform + shiftValue}px)`

    const thumbWidth = defineThumbWidth()
    const transformThumb = currentThumbTransform - thumbWidth
    thumb.style.transform = `translateX(${transformThumb >= 0 ? transformThumb : 0}px)`
  }
}


export const useSlider = () => {
  useEffect(() => {
    const buttonPrev = document.getElementById('previous-slide-button') as HTMLButtonElement
    const buttonNext = document.getElementById('next-slide-button') as HTMLButtonElement


    buttonPrev.addEventListener('click', showPreviousSlide)
    buttonNext.addEventListener('click', showNextSlide)


    return () => {
      buttonPrev.removeEventListener('click', showPreviousSlide)
      buttonNext.removeEventListener('click', showNextSlide)
    }
  }, [])


  const setThumbWidth = () => {
    const thumb: HTMLElement = document.getElementById('slider-thumb')!
    const thumbWidth = defineThumbWidth()

    thumb.style.width = `${thumbWidth}px`
  }

  const resetSliderTransform = () => {
    const slideFlow: HTMLElement = document.getElementById('slider-slide-flow')!
    const thumb: HTMLElement = document.getElementById('slider-thumb')!

    slideFlow.style.transform = 'translateX(0px)'
    thumb.style.transform = 'translateX(0px)'
  }

  useEffect(() => {
    setThumbWidth()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setThumbWidth)
    window.addEventListener('resize', resetSliderTransform)

    return () => {
      window.removeEventListener('resize', setThumbWidth)
      window.removeEventListener('resize', resetSliderTransform)
    }
  }, [])
}
