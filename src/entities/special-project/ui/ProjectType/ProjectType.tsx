import { ReactNode, } from 'react'

import Icon from '../../lib/images/flash-icon.svg'

import styles from './ProjectType.module.scss'


interface Props {
  children: ReactNode
}


export const ProjectType = ({
  children,
}: Props): JSX.Element => {
  return (
    <p className={ styles.wrapper }>
      <Icon />
      { children }
    </p>
  )
}
