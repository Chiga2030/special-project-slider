export const defineSlideOnLeft = (currentTransform: number, shiftValue: number, amountSlides: number): 'first' | 'last' | undefined => {
  /**
   * Определим первый ли слайд слева.
   */
  if (currentTransform === 0) {
    return 'first'
  }

  /**
   * Определим последний ли слайд слева.
   */
  if (Math.abs(currentTransform / shiftValue) === amountSlides - 1) {
    return 'last'
  }
}
