import { ReactNode, } from 'react'

import styles from './ProjectDescription.module.scss'


interface Props {
  children: ReactNode
}


export const ProjectDescription = ({
  children,
}: Props): JSX.Element => {
  return (
    <p className={ styles.description }>
      { children }
    </p>
  )
}
