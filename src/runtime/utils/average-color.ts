import { FastAverageColor } from 'fast-average-color'

const fac = new FastAverageColor()

export const getImageAverageColor = async (src: string) => {
  const color = await fac.getColorAsync(src)
  return color.rgb
}
