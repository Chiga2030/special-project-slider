import { defineSlideOnLeft, } from '../defineSlideOnLeft'
import { defineThumbWidth, } from '../defineThumbWidth'
import { getAmountSlides, } from '../getAmountSlides'
import { getCurrentTransform, } from '../getCurrentTransform'
import { getShiftValue, } from '../getShiftValue'


export const showNextSlide = () => {
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
