import { clsx, } from 'clsx'

import Icon from '../../lib/images/arrow.svg'


import styles from './ControlButton.module.scss'


interface Props {
  direction?: 'left' | 'right'
}


export const ControlButton = ({
  direction = 'left',
}: Props): JSX.Element => {
  return (
    <button
      id={ direction === 'left' ? 'previous-slide-button' : 'next-slide-button' }
      className={ styles.button }
      type={ 'button' }
    >
      <Icon
        className={ clsx(styles.icon, {
          [ styles.icon_right ]: direction === 'right',
        }) }
      />
    </button>
  )
}
