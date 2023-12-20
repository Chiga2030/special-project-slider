import { defineThumbWidth, } from '../defineThumbWidth'


export const setThumbWidth = () => {
  const thumb: HTMLElement = document.getElementById('slider-thumb')!
  const thumbWidth = defineThumbWidth()

  thumb.style.width = `${thumbWidth}px`
}
