import { ControlButton, } from '../ControlButton'

import styles from './SliderControls.module.scss'


export const SliderControls = (): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <ControlButton />
      <ControlButton direction={ 'right' } />
    </div>
  )
}
