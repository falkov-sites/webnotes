// 'use client'

import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

type propsType = {
  amount: number
}

const Particles = (props: propsType) => {
  const particlesArray = Array.from({ length: props.amount ? props.amount : 10 }, (_, i) => i)

  return (
    <div className={cn('pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden', '')}>
      {particlesArray.map((_, index) => (
        <Particle key={index} index={index} />
      ))}
    </div>
  )
}

export { Particles }

const Particle = (props: { index: number }) => {
  const arrColors = ['blue', 'red', 'green', 'yellow', 'pink', 'violet', 'lime', 'orange']

  return (
    <div
      className={`animate-snowflakes absolute`}
      style={{
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 6}s`
      }}>
      {props.index % 3 == 0 && <SnowFlake_1 width={22} height={22} fill={getRandomFromArray(arrColors)} />}
      {props.index % 3 == 1 && <SnowFlake_2 width={22} height={22} fill={getRandomFromArray(arrColors)} />}
      {props.index % 3 == 2 && <SnowFlake_3 width={22} height={22} fill={getRandomFromArray(arrColors)} />}
    </div>
  )
}

const SnowFlake_1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={1481.333} height={1706.667} viewBox='0 0 1111 1280' {...props}>
    <path d='M553.1 8c-.1 5.4-2.1 12.3-12.3 43.1l-12.2 36.6-14.5 7.9c-8 4.3-16.3 8.8-18.3 9.9l-3.7 2.1 16.3 19.5c9.1 10.7 16.3 19.5 16.2 19.6-.2.2-67.7-17.8-82.8-22.1l-4.8-1.4v53.5l17.8 5.7c9.7 3.1 28.5 9.2 41.6 13.4l23.9 7.8 12.3 57c6.8 31.3 12.4 57.1 12.4 57.4 0 .3-5.2 2.5-11.5 5-8 3-11.5 4.8-11.5 5.9.1.9 1.3 8.3 2.9 16.4 2.1 11.3 2.4 14.7 1.4 14.3-.7-.3-50.2-35.5-110-78.2s-109.3-77.8-110-78.1c-1.1-.4-1.2.4-.8 3.3.3 2.2 3.3 27.5 6.6 56.4 3.2 28.9 10.2 89.8 15.4 135.3 5.2 45.6 9.5 83.5 9.5 84.3 0 .8-7.5-4.9-16.7-12.7-9.2-7.8-17.3-14.3-18-14.6-.7-.3-4.8 2.4-9 5.9-4.3 3.5-8.5 6.9-9.5 7.6-1.4 1.1-7.1-3.7-44.5-37.8-23.5-21.5-42.9-39.9-43.1-40.8-.1-.9 3.8-20.6 8.7-43.6 5-23.1 9-42.1 8.8-42.2-2.5-2.1-45.4-26-45.8-25.6-.3.4-5.7 20.2-12 43.9-6.3 23.8-11.6 43.3-11.9 43.3-.3 0-4.3-10.5-8.9-23.3-4.7-12.7-8.6-23.4-8.7-23.6-.2-.2-7.8 4.3-17.1 10-9.2 5.6-17.6 10.4-18.8 10.6-1.1.2-18.4-2.9-38.5-7-32.1-6.5-37.2-7.8-41.9-10.6-5.2-3.1-7.7-3.7-4.6-1.1 2.3 1.9 1.8 2.8-1.3 2.3-2-.3-1.2.4 3.1 3 4.8 2.8 10.7 8.9 31.2 32.2l25.3 28.7-.5 20.8-.6 20.7 23.9-4.4c13.1-2.4 24.5-4.2 25.2-4.1.7.2-13.1 14.7-30.7 32.2-17.7 17.6-32 32-31.9 32.1.2.1 10.5 6.1 23 13.3l22.6 13 32.7-29.3 32.6-29.4 4.2 1.4c5.3 1.8 56.5 18.2 85 27.4 12.1 3.8 22.1 7.1 22.2 7.3.2.2-.5 5.7-1.5 12.3-1.1 6.5-1.8 12.1-1.5 12.3.3.3 7.1 2.9 15.1 5.7 8.1 2.9 14.3 5.5 13.8 5.8-.9.5-68.8 31.5-177.2 80.8-27.6 12.6-51.9 23.7-54 24.8l-3.7 1.9 3.5 1.5c3.7 1.5 61.1 26.4 124 53.8 20.6 8.9 59.5 25.8 86.5 37.5 46.6 20.3 48.8 21.3 46 22.4-1.7.7-14.2 5.2-28 10.2-13.7 4.9-25.3 9.3-25.8 9.7-.4.4.1 6.1 1.2 12.7 1.1 6.5 1.9 12 1.8 12-.2.2-18.6 6-75.5 24L160 827.1l-3.4-2.8c-1.8-1.5-16.6-14.8-32.9-29.5L94.2 768l-21.8 12.6c-12.1 7-22.3 13-22.9 13.5-.6.6 11.3 13.2 31.5 33.5 22.3 22.3 31.7 32.3 30 32-1.4-.3-11.9-2.2-23.5-4.1-11.6-2-21.9-3.9-22.9-4.2-1.8-.5-1.9.2-1.4 20.5l.5 21-25.3 28.7C18 944.8 12 950.9 7.3 953.7c-4.4 2.6-5.1 3.3-3 3 3-.5 3.5.4 1.2 2.3-3.2 2.7-.5 2 4.5-1.1 4.6-2.9 9.2-4 41.4-10.5 19.8-4.1 37-7.4 38.1-7.4 1.2 0 9.7 4.7 19 10.4 9.4 5.7 17.3 10.1 17.6 9.8.4-.4 4.4-11.2 9-24 5.9-16.6 8.6-22.8 9.1-21.5.4 1 5.7 20.7 11.8 43.8 6.1 23 11.2 42 11.3 42.1.2.2 44.8-25.4 45.6-26.1.2-.3-3.7-19.7-8.7-43.2l-9.2-42.8 2.5-2.1c1.3-1.2 20.7-18.8 43.1-39 22.3-20.3 40.9-37 41.3-37.1.3-.2 4.8 3.1 10 7.2 5.1 4.1 9.6 7.5 10 7.5.3-.1 8.5-6.8 18.1-15 9.6-8.1 17.6-14.7 17.7-14.6.1.1-.4 6.7-1.2 14.6-6.7 66.5-23.5 243.8-23.3 244.8.2.7 48.5-34.4 109.1-79.4 59.9-44.3 109-80.4 109.2-80.3.2.2-1.9 12.5-4.6 27.4-2.7 14.8-4.9 27.7-4.9 28.6 0 1.1 3.3 2.9 11.3 5.9 6.1 2.3 11.3 4.3 11.4 4.4.3.2-23.3 110.7-24.2 113.7-.3.9-4.5 2.8-10.8 4.8-5.6 1.8-24.3 7.8-41.4 13.4l-31.3 10.1v53.4l4.8-1.4c15.6-4.4 82.6-22.3 82.8-22.1.1.1-7.1 9-16.1 19.7l-16.4 19.4 17.2 9.2c9.5 5 17.9 9.8 18.7 10.6.9.8 7.1 17.6 13.8 37.3 10.3 30.4 12.2 37 12.3 42.5.1 3.6.4 5.5.6 4.2.5-2.6 2-2.9 2.6-.5.3 1 .5-.9.6-4.2.1-4.8 2.5-13.1 12.3-42.6l12.2-36.7 17.5-9.5c9.6-5.2 17.7-9.9 17.8-10.4.2-.5-6.8-9.4-15.6-19.8-8.7-10.5-15.8-19.1-15.7-19.2.2-.2 13.6 3.3 63.1 16.7 12.7 3.4 23.5 6.2 24 6.3.6.1 1-9.2 1-26.3v-26.4l-33-10.8c-18.1-5.9-36.9-12-41.7-13.5-5.4-1.6-9-3.3-9.2-4.2-.5-1.8-24.6-112.8-24.6-113.4 0-.2 5.2-2.3 11.5-4.7 6.3-2.4 11.5-4.7 11.5-5.2s-2.5-14.5-5.6-31c-3-16.5-5.3-30.2-5.1-30.4.2-.2 51.4 36 113.7 80.6 62.4 44.5 113.5 80.8 113.6 80.7.2-.1-6.2-56.9-14.1-126.2-8-69.2-14.3-126-14.1-126.2.1-.2 7.2 5.6 15.6 12.7 8.5 7.2 15.7 13 16.1 13 .4 0 4.8-3.4 9.9-7.5 5.1-4.1 9.7-7.2 10.2-6.8.6.3 20.3 17.9 43.7 39.1 25.5 23.1 42.5 39.2 42.4 40.2-.1.8-3.2 15.5-6.8 32.5-3.6 17.1-7.5 35.4-8.6 40.7-1.2 5.4-1.9 10.2-1.7 10.8.3.9 45 27.2 45.4 26.7.1-.1 5.2-19.3 11.4-42.7 6.1-23.4 11.4-43.2 11.7-44 .2-.8 4.4 9.2 9.1 22.3 4.8 13.2 9 24 9.3 24 .3.1 8.4-4.7 18-10.6l17.4-10.9 37 7.2c20.4 3.9 38.4 7.8 40 8.7 1.7.9 4.6 2.5 6.5 3.6l3.5 2.1-2-2.4-2-2.3 3 .7c3.8 1 2.9 0-3.9-3.8-4.4-2.5-10.5-8.8-30.6-31.5l-25.1-28.5.7-20.7.7-20.7-22.4 3.9c-12.3 2.1-23.7 4.1-25.4 4.4-2.4.4 3-5.5 29.5-31.9 17.8-17.9 32.1-32.8 31.7-33.2-.3-.4-10.7-6.5-22.9-13.5l-22.2-12.9-3.1 2.9c-1.6 1.5-14.9 13.5-29.5 26.6-14.6 13.1-27.9 25.2-29.7 26.8l-3.2 3-36.8-11.7c-20.2-6.5-45.3-14.5-55.8-17.8-10.4-3.3-19.1-6.1-19.2-6.2-.2-.1.6-5.6 1.7-12.2 1-6.5 1.6-12.2 1.2-12.5-.4-.4-13.7-5.3-29.7-10.9-15.9-5.6-29.4-10.6-29.8-11-.4-.3 14.7-7.7 33.5-16.3 18.9-8.5 52.5-23.9 74.8-34 22.3-10.2 66.4-30.3 98-44.7 31.6-14.3 57.8-26.5 58.3-26.9.6-.6-44.7-20.5-187.6-82.4-22.9-9.9-41.4-18.4-41-18.7.5-.4 5.8-2.4 11.8-4.5 6.1-2.1 11.3-4.1 11.7-4.4.5-.5-.5-8.6-2.7-21.8-.5-2.9-.3-3.3 2.7-4.1 1.8-.5 10.5-3.3 19.3-6.2 8.8-2.8 31.3-10.1 50-16.1 18.7-6 35.2-11.4 36.6-11.8 2.5-.9 4.9 1.1 35.2 28.4l32.6 29.3 23-13.1 23-13.2-32.2-32.3C1012 434.5 998.2 420 999 420c.9 0 11.4 1.8 23.5 4s22.8 4 23.8 4c1.7 0 1.8-1 1.1-20.8l-.7-20.7 25.2-29c20.3-23.3 26.4-29.6 30.9-32.3 4.4-2.5 5-3.2 2.7-2.7l-2.9.6 1.9-2.2c1.7-1.9 1-1.7-3.9 1.1-5.1 2.9-10.4 4.2-41.9 10.6-19.7 4.1-36.7 7.4-37.7 7.4s-9.5-4.8-19-10.6c-9.4-5.8-17.3-10.4-17.4-10.2-.2.2-4 10.8-8.7 23.5-4.6 12.8-8.6 23.3-8.9 23.3-.3 0-5.7-19.2-11.9-42.8-6.3-23.5-11.6-43.2-12-43.8-.5-1-19.4 9.3-44.9 24.5-1 .6.6 9.7 7.8 43.1 5 23.3 8.9 42.9 8.8 43.6-.2.9-68.7 63.8-84.4 77.6-1.9 1.7-2.3 1.4-11.3-5.7-5.2-4.1-9.7-7.5-10-7.5-.4 0-9 7-19.2 15.6-16.4 14-18.4 15.4-18.7 13.3-.1-1.3 2.4-30.3 5.7-64.4 18.3-188.9 21.2-218.9 20.9-220-.2-.7-48.2 34.2-106.7 77.6-58.5 43.4-106.5 78.8-106.7 78.7-.1-.2.9-5.9 2.2-12.8 1.3-6.9 2.3-13.2 2.4-14.1 0-1.1-3.3-2.8-11.5-5.9-6.3-2.4-11.5-4.5-11.5-4.7 0-.6 24-111.5 24.6-113.4.3-.9 3.8-2.6 9.2-4.2 4.8-1.5 23.6-7.6 41.7-13.5l33-10.8V150c0-17.1-.4-26.4-1-26.3-.5.1-11.3 2.9-24 6.3-49.5 13.4-62.9 16.9-63.1 16.7-.1-.1 7.1-9 16.1-19.7l16.4-19.4-5.2-2.9c-2.9-1.5-11.1-6-18.4-9.9l-13.1-7-12.1-35.5C558.9 19.4 558 16.2 558 9.3c0-4.7-.4-7.2-1-6.8-.5.3-1 1.6-1 2.8 0 2.4-1.6 1.3-2.3-1.8-.3-1.1-.5.9-.6 4.5zm190.3 290.2c-.4 2.8-21.4 221-21.4 222.3 0 .6-45.7 23.5-46.8 23.5-.4 0 2.5-33.6 6.5-74.8 4-41.1 7.2-75.5 7-76.4-.1-1.2-15.8 10-54.7 38.8-30 22.2-54.8 40.4-55.1 40.4-.6 0-3.3-37.2-3.4-47.3v-5.8L659 357c45.9-34.1 83.8-62 84.2-62 .4 0 .5 1.5.2 3.2zm-294.1 62.1c77.5 55.3 86.7 62.2 86.7 64.5 0 1.5-.5 13.4-1.2 26.5-.9 19.2-1.4 23.7-2.5 23.3-.8-.3-26.6-18.6-57.4-40.6-30.9-22.1-56.3-39.9-56.6-39.6-.3.2 3.3 33.5 7.9 73.8 4.7 40.3 8.4 73.4 8.3 73.6-.5.7-47.6-22.9-47.9-24-.2-.7-5.2-43.8-11.1-95.8-5.9-52-11.5-101.1-12.5-109.3-.9-8.1-1.4-14.6-1-14.5.3.2 39.6 28.1 87.3 62.1zm185 130.9c-3.6 33.5-9 94.5-8.5 95 .6.5 32.6 14.5 87.6 38.3l2.9 1.3-4.4 1.9c-30.7 13.9-84.6 38.6-85.2 39.2-.5.5 1.7 22.6 4.8 49.1 3 26.6 5.3 48.5 5.1 48.7-.2.2-18.4-12.5-40.4-28.2l-40-28.6-39.1 29.1c-21.5 15.9-39.5 29-39.9 29-.6 0 3.5-45.8 8.2-92.1l.5-5.6-45.5-19.8c-25-10.9-45.3-19.9-45.2-20 .2-.2 20.3-9.4 44.8-20.5 24.5-11.1 44.6-20.4 44.8-20.5.2-.2-2.2-22.2-5.2-49.1-3.1-26.8-5.5-48.9-5.3-49 .2-.2 18.2 12.5 40.2 28.1 21.9 15.7 40.1 28.5 40.4 28.5.3-.1 18.2-13.1 39.6-29 21.5-16 39.2-29 39.5-29 .4 0 .4 1.5.3 3.2zm185.3 81.2c33.5 14.5 73.6 31.9 89.2 38.7 15.5 6.7 27.9 12.6 27.5 13-.5.4-35 16.4-76.8 35.4-41.8 19.1-87.4 39.9-101.4 46.2-14 6.4-26 11.6-26.5 11.6-.6 0-10.9-6.5-22.9-14.3l-21.8-14.3 6.8-3.2c3.7-1.7 35-15.9 69.5-31.6 34.5-15.6 62.7-28.7 62.8-29 0-.4-25.2-11.6-56-25-30.8-13.3-55.9-24.6-55.8-25.1.4-1.1 43.2-29.6 43.9-29.2.3.2 28 12.2 61.5 26.8zm-441-11.2c12.3 7.9 22.3 14.5 22.3 14.8 0 .3-25.9 12.2-57.5 26.6-31.7 14.3-57.6 26.5-57.6 26.9 0 .5 30.2 14 67.1 30 36.9 15.9 67 29.2 67 29.5 0 .3-9.8 7.1-21.8 15.2l-21.8 14.7-62.9-27.3c-34.6-15.1-79.9-34.7-100.6-43.7-20.7-9-37.6-16.9-37.5-17.4 0-.6 24.7-12.2 54.7-25.9 30-13.6 70.5-32.2 90-41.1 19.5-9 35.7-16.3 35.9-16.4.2-.1 10.5 6.3 22.7 14.1zM428 799.5c-3.4 34.5-5.9 62.9-5.7 63.1.2.2 24.6-17.6 54.3-39.5 33.4-24.8 54-39.5 54.2-38.6.2.7 1.1 12.7 2 26.5l1.7 25.2-83.4 61.9c-46 34-83.6 61.7-83.7 61.6-.6-.8 19.3-198.8 20.1-199.6 1.4-1.2 45.9-24.1 46.2-23.7.2.2-2.4 28.6-5.7 63.1zm276-48.7 23.5 11.7 11 96.8c7 61.4 10.7 96.6 10 96.3-1.3-.5-169.3-120.3-171.3-122.1-1.1-1-1.1-5.7.1-26.9.8-14.1 1.7-25.9 1.9-26.1.2-.2 25.8 17.7 56.8 39.8 31.1 22.2 56.6 39.8 56.8 39.1.3-1-12-111.2-13.2-118.2-.2-1.2 0-2.2.3-2.1.3 0 11.2 5.3 24.1 11.7z' />
  </svg>
)

const SnowFlake_2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={1504} height={1706.667} viewBox='0 0 1128 1280' {...props}>
    <path d='M553.5.6c-7.1 1.2-19.5 5.6-26 9.4-16.8 9.9-27.7 23.4-34.6 43-2.2 6.1-2.3 8.3-2.7 38.2-.2 17.5-.5 31.8-.8 31.8-.2 0-2.5-1.6-5.1-3.7-5.9-4.4-16.6-9.5-25.3-11.9-8.7-2.4-27.1-2.4-36-.1-20.1 5.3-38.4 19.8-47.5 37.7-6.2 12.4-8 19.9-8 34.5.1 14.3 1.5 21.5 6.5 32 1.6 3.3 28.3 42.9 59.4 88l56.5 82 .1 64.7c0 35.7-.2 64.8-.4 64.8-1 0-110.3-63.4-111.8-64.9-.9-.9-19.3-38.7-40.8-84-46.1-97-45.5-95.8-51.3-103.8-8.9-12.1-25-22.7-40.7-26.9-8.9-2.4-28.2-2.5-36.8-.1-26.4 7.2-46.1 26.8-53.2 53-1.6 5.8-2.2 10.7-2.2 19.2 0 6.3.3 11.9.7 12.5.3.5.4 1 .1 1-.2 0-11.1-6.1-24.1-13.6-24.7-14.3-32.2-17.6-44.5-19.5-32.5-5-66.9 14.2-79.2 44.3C-6 357.3.9 389.4 23.6 410.9c6.8 6.4 11.8 9.8 31.7 21.1 13 7.4 23.6 13.7 23.7 14 0 .3-2.1 1.3-4.7 2.2-6.7 2.4-16.3 9-23.1 15.8-11.9 11.9-19.2 27.1-21.3 44.4-3.3 26.1 9.2 53 31.7 68.6 9.6 6.6 20.3 10.9 31.8 12.6 10 1.5.4 2.1 140.7-9.1l68.6-5.5 56.1 32.2c30.9 17.8 56.1 32.5 56.1 32.8 0 .3-25.2 15-56.1 32.8L302.7 705l-68.6-5.5c-140.3-11.2-130.7-10.6-140.7-9.1-32.6 4.9-57.5 29.4-63 62.1-4.8 28.4 8.3 57.2 33.3 73.6 4.2 2.7 9.3 5.4 11.4 6.1 2.2.6 3.9 1.4 3.9 1.7-.1.3-10.7 6.7-23.8 14.1-20.1 11.5-24.9 14.6-31.7 21.2-38.4 36.7-28 99.1 20.2 120.9C51.5 993.7 66 997 74 997c16.6 0 26.5-3.6 55.5-20.4 12.9-7.5 23.8-13.6 24.1-13.6.3 0 .2.5-.1 1-.4.6-.7 6.2-.7 12.5 0 18 5.1 32.9 15.9 46.6 9.2 11.8 24.1 21.5 39.3 25.6 8.9 2.4 27 2.4 36.5-.1 16.1-4.1 32-14.6 41.2-26.9 5.1-6.9 11.4-19.6 58.7-119.2l32.8-69 55.5-32c30.5-17.6 55.9-32.2 56.4-32.3.5-.2.9 26.7.9 64.5l-.1 64.8-56.5 82c-31.1 45.1-57.8 84.7-59.4 88-5 10.5-6.4 17.7-6.5 32 0 14.6 1.8 22.1 8 34.5 9.1 17.9 27.4 32.4 47.5 37.7 8.9 2.3 27.3 2.3 36-.1s19.4-7.5 25.3-11.9c2.6-2.1 4.9-3.7 5.1-3.7.3 0 .6 14.3.8 31.8.4 29.9.5 32.1 2.7 38.2 8.9 25.1 26.1 42.1 50.1 49.7 7.4 2.4 10.2 2.7 21 2.7 10.2 0 13.9-.4 20-2.3 24.7-7.7 42.2-24.8 51.1-50.1 2.2-6.1 2.3-8.3 2.7-38.2.2-17.5.5-31.8.8-31.8.2 0 2.5 1.6 5.1 3.7 5.7 4.3 16.3 9.3 25.3 11.9 8.7 2.4 26.9 2.5 36 .1 20.2-5.3 38.2-19.6 47.5-37.7 6.2-12.3 8-19.9 8-34.5 0-14.4-1.5-21.5-6.5-31.9-1.6-3.3-28.3-43-59.4-88.1l-56.5-82-.1-64.8c0-37.4.4-64.7.9-64.5.5.1 25.9 14.7 56.4 32.3l55.5 32 32.8 69c48.9 103 54.4 114.1 60 121 16.9 20.5 45.4 31.1 71 26.2 38.2-7.3 64.2-41.8 60.3-80-.3-3.4-.5-6.3-.4-6.5.1-.1 10.9 5.9 23.9 13.4 24.8 14.3 32.3 17.6 44.6 19.5 32.5 5 66.9-14.2 79.2-44.3 11.8-29.1 4.9-61.2-17.8-82.7-6.8-6.4-11.8-9.8-31.7-21.1-13-7.4-23.6-13.8-23.7-14.1 0-.3 1.7-1.1 3.9-1.7 5.5-1.7 17.8-10 24-16.3 15.8-15.9 24-39.3 21.1-60.6-4.5-34.1-29.6-59.7-63.4-64.9-10-1.5-.2-2.1-140.7 9.1l-68.6 5.5-56.1-32.2c-30.9-17.8-56.1-32.5-56.1-32.8 0-.3 25.2-15 56.1-32.8l56.1-32.2 68.6 5.5c140.5 11.2 130.7 10.6 140.7 9.1 19.2-2.9 36.7-13 47.8-27.5 9.2-12 13.7-22.8 15.6-37.4 2.9-21.3-5.3-44.7-21.1-60.6-6.2-6.3-18.5-14.6-24-16.3-2.2-.6-3.9-1.4-3.9-1.7.1-.3 10.8-6.7 23.8-14.1 21.9-12.5 24.4-14.2 32.8-22.5 7.8-7.7 9.8-10.4 13.8-18.5 5.5-11.4 7.5-18.5 8.3-30.5 1.6-24.5-9.9-48.6-30.4-63.1-20.8-14.9-48.2-18.3-71.3-9-3.1 1.3-15.9 8.2-28.4 15.5-12.6 7.2-23 13-23.1 12.9-.1-.2.1-3.1.4-6.6 3.4-32.8-16-64.3-46.8-76.1-29.8-11.4-64.3-2.3-84.4 22.4-6.2 7.6-6.8 8.9-53.2 106.5-21.2 44.8-39.4 82.2-40.3 83.1-1.5 1.5-110.8 64.9-111.8 64.9-.2 0-.4-29.1-.4-64.8l.1-64.7 56.5-82c31.1-45.1 57.8-84.8 59.4-88.1 5-10.4 6.5-17.5 6.5-31.9 0-14.6-1.8-22.2-8-34.5-9.3-18.1-27.3-32.4-47.5-37.7-9.1-2.4-27.3-2.3-36 .1-9 2.6-19.6 7.6-25.3 11.9-2.6 2.1-4.9 3.7-5.1 3.7-.3 0-.6-14.3-.8-31.8-.4-29.9-.5-32.1-2.7-38.2C623.9 21.3 598 1.4 566.5.5c-5.5-.2-11.3-.1-13 .1zm24.3 40.6c6.9 2.6 15.4 10.8 19 18.5l2.7 5.8.5 88.1.5 88.2 29-42.1c16-23.2 30.7-43.8 32.7-45.9 12.9-13 34.9-13.3 49.3-.7 10.4 9.2 14.4 27.3 8.8 39.9-1.1 2.5-28.6 43.2-61.1 90.4L600 369.2v103.9c0 57.2.3 103.9.8 103.9.4-.1 41-23.3 90.2-51.8l89.4-51.7 44.6-93.7c24.5-51.6 46-95.7 47.7-98.2 6.6-9.4 20-15.4 31.5-14.2 12.6 1.3 25.1 10.1 30 21.3 2.5 5.8 3.5 16.6 1.9 22.7-.6 2.4-11 25.3-23.1 50.7-12.1 25.4-22 46.6-22 47.1s1.7-.2 3.8-1.5c12.4-7.8 144.1-83.3 147.6-84.5 6.1-2.4 17.8-2 24.8.7 8 3.1 15 9.8 19 17.9 2.9 6 3.2 7.6 3.2 15.2-.1 7.3-.5 9.4-3.1 15-1.7 3.7-4.9 8.3-7.4 10.7-2.8 2.6-30.2 19-75.8 45.3-39.2 22.6-72.4 41.6-73.7 42.2-1.3.6-2.4 1.4-2.4 1.7 0 .3 23.5 2.5 52.3 4.8 44.3 3.5 53.1 4.5 57.9 6.3 7.6 2.8 15.9 10.4 19.5 17.8 2.5 5.1 2.8 6.8 2.8 15.7 0 9-.3 10.5-2.8 15.3-6.2 11.8-16.7 19.1-28.6 20-3.7.2-51.1-3.1-109.2-7.8l-102.6-8.2-89.4 51.6c-49.2 28.4-89.5 52-89.7 52.4-.1.4 40.1 24.1 89.5 52.6l89.7 51.8 102.5-8.2c57.4-4.6 105.5-8 109.1-7.8 11.7.9 22 7.8 28.1 19 3.2 6 3.4 6.8 3.4 16.3 0 8.9-.3 10.6-2.8 15.7-1.7 3.4-5 7.7-8.2 10.7-9.5 8.6-9.9 8.7-69.5 13.5l-52.5 4.2 9.5 5.6c5.2 3.1 38.5 22.3 74 42.8 41.3 23.8 66.1 38.7 68.9 41.3 2.5 2.4 5.7 7 7.4 10.7 2.6 5.6 3 7.7 3.1 15 0 7.6-.3 9.2-3.2 15.2-4 8.1-11 14.8-19 17.9-6.9 2.7-18.7 3.1-24.8.8-3.2-1.2-109.5-62.1-144.1-82.5-4-2.4-7.3-4-7.3-3.6 0 .4 9.9 21.6 22 47.1 12.1 25.4 22.5 48.3 23.1 50.7 1.6 6.1.6 16.9-1.9 22.7-3.1 7-11.1 14.9-18.5 18.3-8.4 3.8-18.4 4-27.6.5-9.6-3.7-15.5-10-22-23.6-2.9-6.1-20.1-42.1-38.1-80-18-38-36.1-76-40.2-84.6l-7.5-15.5-89.5-51.7C641.6 726.3 601 703 600.6 703c-.3 0-.6 46.7-.6 103.9v103.9l59.2 85.8c32.5 47.2 60 87.9 61.1 90.4 5.6 12.6 1.6 30.7-8.8 39.9-14.4 12.6-36.4 12.3-49.3-.7-2-2.1-16.7-22.7-32.7-45.9l-29-42.1-.5 88.2-.5 88.1-2.7 5.8c-3.7 7.9-12 15.9-19.5 18.7-7.9 3-18.7 3-26.6 0-7.5-2.8-15.8-10.8-19.5-18.7l-2.7-5.8-.5-88.1-.5-88.2-29 42.1c-15.9 23.2-30.7 43.8-32.7 45.9-12.9 13-34.9 13.3-49.3.7-10.4-9.2-14.4-27.3-8.8-39.9 1.1-2.5 28.6-43.2 61.1-90.4l59.2-85.8v-104c0-89.1-.2-103.9-1.4-103.5-2.4.9-177 101.9-178.3 103.1-.7.6-20.2 40.9-43.3 89.6-23.2 48.7-43.5 91.4-45.2 95-11.4 23.8-41.2 29-58.8 10.4-2.8-3-6.1-7.5-7.2-10.1-2.6-5.8-3.5-16.6-1.9-22.9.7-2.5 11.1-25.4 23.1-50.7 12.1-25.4 22-46.5 22-46.8 0-.4-33.4 18.6-74.3 42.2-40.8 23.6-76 43.5-78.2 44.2-2.2.6-7.1 1.1-11 1.1-14-.2-25.6-7.6-31.7-20.2-2.9-6-3.2-7.6-3.2-15.2 0-10.6 3.2-18.4 10.2-25.3 3.4-3.3 22.8-15 69.2-41.7 35.5-20.5 68.8-39.7 74-42.8l9.5-5.6-52.5-4.2c-59.6-4.8-60-4.9-69.5-13.5-3.2-3-6.5-7.3-8.2-10.7-2.5-5.1-2.8-6.8-2.8-15.7 0-8.4.4-10.7 2.4-14.7 5.7-11.7 17.1-19.7 29-20.6 3.7-.2 51 3.1 109.1 7.8l102.6 8.2 89.7-51.8c49.4-28.5 89.6-52.1 89.5-52.6-.2-.4-40.5-24-89.7-52.4l-89.5-51.6-102.5 8.2c-58.1 4.7-105.5 8-109.2 7.8-11.9-.9-23.3-8.9-29-20.6-2-4-2.4-6.3-2.4-14.7 0-8.9.3-10.6 2.8-15.7 1.7-3.4 5-7.7 8.2-10.7 9.5-8.6 9.9-8.7 69.5-13.5l52.5-4.2-9.5-5.6c-5.2-3.1-38.5-22.3-74-42.8-46.3-26.7-65.8-38.4-69.2-41.7-7-6.9-10.2-14.7-10.2-25.3 0-7.6.3-9.2 3.2-15.2 4-8.1 11-14.8 19-17.9 6.9-2.7 18.7-3.1 24.8-.8 3.2 1.2 108.9 61.7 144.1 82.5 4 2.4 7.3 4 7.3 3.6 0-.4-9.9-21.5-22-46.9s-22.5-48.3-23.1-50.8c-1.6-6.2-.7-17 1.9-22.8 4.9-11.2 17.4-20 30-21.3 11.6-1.3 26.4 5.7 32.3 15.2 1.3 2.1 22.4 45.9 46.9 97.4l44.5 93.5 89.5 51.7c49.2 28.5 89.8 51.7 90.3 51.8.4 0 .7-46.7.7-103.9V369.2l-59.2-85.8c-32.5-47.2-60-87.9-61.1-90.4-5.6-12.6-1.6-30.7 8.8-39.9 14.4-12.6 36.4-12.3 49.3.7 2 2.1 16.8 22.7 32.7 45.9l29 42.1.5-88.2.5-88.1 2.7-5.7c8.3-17.8 27.7-25.5 46.6-18.6z' />
  </svg>
)

const SnowFlake_3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' xmlSpace='preserve' viewBox='0 0 512 512' {...props}>
    <path d='M503.467 247.467h-64.733l36.633-36.633c3.333-3.333 3.333-8.733 0-12.067s-8.733-3.333-12.067 0l-48.7 48.7h-99.548a59.324 59.324 0 0 0-11.28-27.172l70.407-70.407h68.871c4.717 0 8.533-3.821 8.533-8.533s-3.817-8.533-8.533-8.533h-51.804l45.804-45.804a8.531 8.531 0 0 0 0-12.067 8.531 8.531 0 0 0-12.067 0l-45.808 45.808V68.946c0-4.713-3.817-8.533-8.533-8.533s-8.533 3.821-8.533 8.533v68.879l-70.403 70.403a59.343 59.343 0 0 0-27.172-11.279V97.4l48.7-48.7a8.531 8.531 0 0 0 0-12.067 8.531 8.531 0 0 0-12.067 0l-36.633 36.633V8.533A8.532 8.532 0 0 0 256 0a8.53 8.53 0 0 0-8.533 8.533v64.733l-36.633-36.633c-3.333-3.333-8.733-3.333-12.067 0s-3.333 8.733 0 12.067l48.7 48.7v99.549a59.338 59.338 0 0 0-27.172 11.279l-70.403-70.403V68.946c0-4.713-3.817-8.533-8.533-8.533s-8.533 3.821-8.533 8.533v51.813L87.017 74.95a8.531 8.531 0 0 0-12.067 0 8.531 8.531 0 0 0 0 12.067l45.804 45.804H68.95a8.53 8.53 0 0 0-8.533 8.533 8.53 8.53 0 0 0 8.533 8.533h68.871l70.407 70.407a59.334 59.334 0 0 0-11.279 27.172H97.4l-48.7-48.7a8.531 8.531 0 0 0-12.067 0 8.531 8.531 0 0 0 0 12.067l36.633 36.633H8.533C3.817 247.467 0 251.287 0 256s3.817 8.533 8.533 8.533h64.733l-36.633 36.633a8.531 8.531 0 0 0 0 12.067c1.667 1.667 3.85 2.5 6.033 2.5s4.367-.833 6.033-2.5l48.7-48.7h99.549a59.334 59.334 0 0 0 11.279 27.172l-70.407 70.407H68.95c-4.717 0-8.533 3.821-8.533 8.533s3.817 8.533 8.533 8.533h51.804L74.95 424.983a8.531 8.531 0 0 0 0 12.067 8.505 8.505 0 0 0 6.033 2.5 8.503 8.503 0 0 0 6.033-2.5l45.808-45.808v51.813a8.53 8.53 0 0 0 8.533 8.533 8.53 8.53 0 0 0 8.533-8.533v-68.879l70.403-70.403a59.343 59.343 0 0 0 27.172 11.279V414.6l-48.7 48.7a8.531 8.531 0 0 0 0 12.067 8.531 8.531 0 0 0 12.067 0l36.633-36.633v64.733a8.53 8.53 0 0 0 8.533 8.533 8.53 8.53 0 0 0 8.533-8.533v-64.733l36.633 36.633c1.667 1.667 3.85 2.5 6.033 2.5s4.367-.833 6.033-2.5a8.531 8.531 0 0 0 0-12.067l-48.7-48.7v-99.548a59.334 59.334 0 0 0 27.172-11.279l70.403 70.403v68.879a8.53 8.53 0 0 0 8.533 8.533 8.53 8.53 0 0 0 8.533-8.533v-51.813l45.808 45.808c1.667 1.667 3.85 2.5 6.033 2.5s4.367-.833 6.033-2.5a8.531 8.531 0 0 0 0-12.067l-45.804-45.804h51.804a8.53 8.53 0 0 0 8.533-8.533 8.53 8.53 0 0 0-8.533-8.533h-68.871l-70.407-70.407a59.335 59.335 0 0 0 11.28-27.172H414.6l48.7 48.7a8.505 8.505 0 0 0 6.033 2.5 8.503 8.503 0 0 0 6.033-2.5 8.531 8.531 0 0 0 0-12.067l-36.633-36.633h64.733c4.717 0 8.533-3.821 8.533-8.533s-3.816-8.534-8.532-8.534zm-217.296 38.669c-.006.006-.015.008-.021.014-.006.006-.008.015-.014.021-7.724 7.716-18.382 12.496-30.136 12.496s-22.411-4.78-30.136-12.496c-.006-.006-.008-.015-.014-.021-.006-.006-.015-.008-.021-.014-7.716-7.724-12.496-18.382-12.496-30.136s4.78-22.411 12.496-30.136c.006-.006.015-.008.021-.014s.008-.015.014-.021c7.724-7.716 18.382-12.496 30.136-12.496s22.411 4.78 30.136 12.496c.006.006.008.015.014.021s.015.008.021.014c7.716 7.724 12.496 18.382 12.496 30.136s-4.781 22.411-12.496 30.136z' />
  </svg>
)

function getRandomFromArray<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined // Возвращаем undefined, если массив пустой
  }
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
// использование: <Particles amount={50} />