import { defineSlideOnLeft, } from '../defineSlideOnLeft'
import { defineThumbWidth, } from '../defineThumbWidth'
import { getAmountSlides, } from '../getAmountSlides'
import { getCurrentTransform, } from '../getCurrentTransform'
import { getShiftValue, } from '../getShiftValue'


export const showPreviousSlide = () => {
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
