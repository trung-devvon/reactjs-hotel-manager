import React, { memo } from 'react'
import Title from './Title'
import Carousel from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface IProps {
  subTitle?: string
  title?: string
  count?: number
  children: React.ReactNode
}
const Slider = ({ subTitle, title, count = 4, children }: IProps) => {
  return (
    <div className='w-full flex flex-col my-4'>
      <Title px={false} line={false}>
        {title}
        {subTitle && <small className='text-gray-500 text-sm font-normal'>{subTitle}</small>}
      </Title>
      <Carousel
        className='w-full'
        slidesToShow={count}
        autoplay={true}
        autoplayInterval={4000}
        slidesToScroll={1}
        cellSpacing={16}
        renderBottomCenterControls={null}
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className='p-2 bg-white border shadow-sm rounded-full -translate-x-3 -translate-y-5'
            onClick={previousSlide}
          >
            <FiChevronLeft color='#28666e' size={20} />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            className='p-2 bg-white border shadow-sm rounded-full translate-x-3 -translate-y-5'
            onClick={nextSlide}
          >
            <FiChevronRight color='#28666e' size={20} />
          </button>
        )}
      >
        {children}
      </Carousel>
    </div>
  )
}

export default memo(Slider)
