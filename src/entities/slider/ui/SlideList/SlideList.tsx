import type { Slide, } from '../../lib/types'
import { SlideItem, } from '../SlideItem'

import styles from './SlideList.module.scss'


interface Props {
  slideList: Slide[]
}


export const SlideList = ({
  slideList,
}: Props): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      { slideList.map(slide => (
        <SlideItem key={ slide.id } { ...slide } />
      )) }
    </div>
  )
}
