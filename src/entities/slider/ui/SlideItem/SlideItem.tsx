import Image from 'next/image'

import { Slide, } from '../../lib/types'

import styles from './SlideItem.module.scss'


export const SlideItem = ({
  title,
  image_link,
}: Slide): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <Image
        className={ styles.image }
        alt={ '' }
        src={ image_link }
        fill
      />

      <div className={ styles.inner }>
        <p className={ styles.title }>
          { title }
        </p>
      </div>
    </div>
  )
}
