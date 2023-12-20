'use client'

import { useSlider, } from '../../lib/hooks/useSlider/useSlider'
import { ControlButton, } from '../ControlButton'
import { SliderProgressLine, } from '../SliderProgressLine'

import styles from './SliderControls.module.scss'


export const SliderControls = (): JSX.Element => {
  useSlider()


  return (
    <div className={ styles.wrapper }>
      <div className={ styles.inner }>
        <ControlButton />
        <ControlButton direction={ 'right' } />
      </div>

      <SliderProgressLine />
    </div>
  )
}
