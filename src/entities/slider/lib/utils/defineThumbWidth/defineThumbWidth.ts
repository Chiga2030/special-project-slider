import { getAmountSlides, } from '../getAmountSlides'


export const defineThumbWidth = (slideFlow: HTMLElement, progressLine: HTMLElement) => {
  const amountSlides = getAmountSlides(slideFlow)
  const progressLineWidth = progressLine.offsetWidth

  const thumbWidth = progressLineWidth / amountSlides

  return thumbWidth
}
