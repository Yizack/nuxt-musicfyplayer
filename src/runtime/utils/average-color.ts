import { FastAverageColor } from 'fast-average-color'

const fac = new FastAverageColor()

export const getImageAverageColor = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = src

    img.onload = () => {
      const color = fac.getColor(img)
      resolve(color.rgb)
    }

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`))
    }
  })
}
