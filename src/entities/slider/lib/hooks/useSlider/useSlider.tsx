'use client'

import { useEffect, } from 'react'

import { resetSliderTransform, } from '../../utils/resetSliderTransform'
import { setThumbWidth, } from '../../utils/setThumbWidth'
import { showNextSlide, } from '../../utils/showNextSlide'
import { showPreviousSlide, } from '../../utils/showPreviousSlide'


export const useSlider = () => {
  useEffect(() => {
    /**
     * Назначаем обработчики кликов по кнопкам слайдера.
     */
    const buttonPrev = document.getElementById('previous-slide-button') as HTMLButtonElement
    const buttonNext = document.getElementById('next-slide-button') as HTMLButtonElement


    buttonPrev.addEventListener('click', showPreviousSlide)
    buttonNext.addEventListener('click', showNextSlide)


    return () => {
      buttonPrev.removeEventListener('click', showPreviousSlide)
      buttonNext.removeEventListener('click', showNextSlide)
    }
  }, [])


  useEffect(() => {
    /**
     * Задаем ширину бегунка при монтировании компонента.
     */
    setThumbWidth()
  }, [])


  useEffect(() => {
    /**
     * Пересчитываем ширину бегунка и сбрасываем бегунок и поток слайдов в исходное состояние при изменении размера viewport.
     */
    window.addEventListener('resize', setThumbWidth)
    window.addEventListener('resize', resetSliderTransform)

    return () => {
      window.removeEventListener('resize', setThumbWidth)
      window.removeEventListener('resize', resetSliderTransform)
    }
  }, [])
}
