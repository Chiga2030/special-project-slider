export const resetSliderTransform = () => {
  const slideFlow: HTMLElement = document.getElementById('slider-slide-flow')!
  const thumb: HTMLElement = document.getElementById('slider-thumb')!

  slideFlow.style.transform = 'translateX(0px)'
  thumb.style.transform = 'translateX(0px)'
}
