export const getAmountSlides = (slideFlow: HTMLElement) => {
  /**
   * Найдем кол-во слайдов
   */
  const slideList = slideFlow.children
  const amountSlides = slideList.length


  return amountSlides
}
