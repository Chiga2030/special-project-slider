import type { Slide, } from '@/entities/slider'
import { SlideList, } from '@/entities/slider'
import { END_POINTS, } from '@/shared/constants/endPoints'

import styles from './Slider.module.scss'


const getMaterials: () => Promise<Slide[]> = () => {
  return fetch(END_POINTS.getMaterials).then(response => {
    return response.json()
  })
}


export const Slider = async (): Promise<JSX.Element> => {
  const slideList = await getMaterials()

  return (
    <div className={ styles.wrapper }>
      <SlideList slideList={ slideList } />
    </div>
  )
}
