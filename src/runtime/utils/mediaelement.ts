import 'mediaelement/build/mediaelement-and-player.min.js'
import { createError } from 'h3'
import type { MediaElementPlayerOptions } from '../types/mediaelement'

export const mediaElementPlayer = (element: HTMLAudioElement, options: MediaElementPlayerOptions) => {
  const MediaElementPlayer = window.MediaElementPlayer

  if (!import.meta.client) throw createError({ status: 500, message: 'MediaElementPlayer is not available on server side' })
  if (!MediaElementPlayer) throw createError({ status: 500, message: 'MediaElementPlayer is not available' })

  return new MediaElementPlayer(element, options)
}
