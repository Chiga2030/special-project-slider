import { getAmountSlides, } from '../getAmountSlides'


export const defineThumbWidth = () => {
  const progressLine: HTMLElement = document.getElementById('slider-progress-line')!
  const progressLineWidth = progressLine.offsetWidth

  const slideFlow: HTMLElement = document.getElementById('slider-slide-flow')!
  const amountSlides = getAmountSlides(slideFlow)
  const thumbWidth = progressLineWidth / amountSlides

  return thumbWidth
}
