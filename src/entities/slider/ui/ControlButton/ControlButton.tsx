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
