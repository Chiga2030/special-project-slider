export const getShiftValue = (slideFlow: HTMLElement, amountSlides: number) => {
  /**
   * Определим ширину потока в пикселях
   */
  const flowWidth = slideFlow.offsetWidth

  /**
   * Определим ширину слайда в пикселях
  */
  const slideList = slideFlow.children
  let slideWidth: number = 0
  if (amountSlides > 0) {
    slideWidth = slideList[ 0 ].clientWidth
  }

  /**
   * Рассчитаем ширину разрывов между слайдами в пикселях
   */
  const allSlidesWidth = slideWidth * amountSlides
  const allGapsWidth = flowWidth - allSlidesWidth
  const gapWidth = allGapsWidth / (amountSlides - 1)  // разделить на кол-во разрывов между слайдами

  /**
   * Сложим ширину слайда и разрыва. Это будет значение на которое нужно сдвигать поток слайдов.
   */
  const shiftValue = slideWidth + gapWidth


  return shiftValue
}
