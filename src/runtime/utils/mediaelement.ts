import 'mediaelement/build/mediaelement-and-player.js'
import type { MediaElementPlayer, MediaElementPlayerOptions } from '../types/mediaelement'
import { createError } from 'h3'

declare global {
  interface Window {
    MediaElementPlayer: MediaElementPlayer | undefined;
  }
}

export const mediaElementPlayer = (element: HTMLAudioElement, options: MediaElementPlayerOptions) => {
  const MediaElementPlayer = window.MediaElementPlayer

  if (!import.meta.client) throw createError({ status: 500, message: 'MediaElementPlayer is not available on server side'})
  if (!MediaElementPlayer) throw createError({ status: 500, message: 'MediaElementPlayer is not available'})

  return new MediaElementPlayer(element, options)
};
