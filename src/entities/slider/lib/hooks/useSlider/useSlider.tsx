'use client'

import { useEffect, } from 'react'

import { defineSlideOnLeft, } from '../../utils/defineSlideOnLeft'
import { defineThumbWidth, } from '../../utils/defineThumbWidth'
import { getAmountSlides, } from '../../utils/getAmountSlides'
import { getCurrentTransform, } from '../../utils/getCurrentTransform'
import { getShiftValue, } from '../../utils/getShiftValue'


const showNext = (slideFlow: HTMLElement, thumb: HTMLElement, thumbWidth: number) => {
  const currentTransform = getCurrentTransform(slideFlow)
  const amountSlides = getAmountSlides(slideFlow)
  const shiftValue = getShiftValue(slideFlow, amountSlides)
  const slideOnLeft = defineSlideOnLeft(currentTransform, shiftValue, amountSlides)

  const currentThumbTransform = getCurrentTransform(thumb)


  if (slideOnLeft !== 'last') {
    slideFlow.style.transform = `translateX(${currentTransform - shiftValue}px)`
    thumb.style.transform = `translateX(${currentThumbTransform + (thumbWidth)}px)`
  }
}

const showPrevious = (slideFlow: HTMLElement, thumb: HTMLElement, thumbWidth: number) => {
  const currentSlideFlowTransform = getCurrentTransform(slideFlow)
  const amountSlides = getAmountSlides(slideFlow)
  const shiftValue = getShiftValue(slideFlow, amountSlides)
  const slideOnLeft = defineSlideOnLeft(currentSlideFlowTransform, shiftValue, amountSlides)

  const currentThumbTransform = getCurrentTransform(thumb)

  if (slideOnLeft !== 'first') {
    slideFlow.style.transform = `translateX(${currentSlideFlowTransform + shiftValue}px)`
    const transformThumb = currentThumbTransform - thumbWidth
    thumb.style.transform = `translateX(${transformThumb >= 0 ? transformThumb : 0}px)`
  }
}


export const useSlider = () => {
  useEffect(() => {
    const slideFlow: HTMLElement = document.getElementById('slider-slide-flow')!
    const progressLine: HTMLElement = document.getElementById('slider-progress-line')!
    const thumb: HTMLElement = document.getElementById('slider-thumb')!
    const buttonPrev = document.getElementById('previous-slide-button') as HTMLButtonElement
    const buttonNext = document.getElementById('next-slide-button') as HTMLButtonElement


    const thumbWidth = defineThumbWidth(slideFlow, progressLine)
    thumb.style.width = `${thumbWidth}px`


    const showPreviousSlide = showPrevious.bind(null, slideFlow, thumb, thumbWidth)
    const showNextSlide = showNext.bind(null, slideFlow, thumb, thumbWidth)

    buttonPrev.addEventListener('click', showPreviousSlide)
    buttonNext.addEventListener('click', showNextSlide)


    return () => {
      buttonPrev.removeEventListener('click', showPreviousSlide)
      buttonNext.removeEventListener('click', showNextSlide)
    }
  }, [])
}
