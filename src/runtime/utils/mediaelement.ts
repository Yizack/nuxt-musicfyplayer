import 'mediaelement/build/mediaelement-and-player.js'
import type { MediaElementPlayer, MediaElementPlayerOptions } from '../types/mediaelement'

declare global {
  interface Window {
    MediaElementPlayer: MediaElementPlayer | undefined;
  }
}

export const mediaElementPlayer = (element: HTMLAudioElement, options: MediaElementPlayerOptions) => {
  const MediaElementPlayer = window.MediaElementPlayer

  if (!process.client) throw new Error('MediaElementPlayer is not available on server side')
  if (!MediaElementPlayer) throw new Error('MediaElementPlayer is not available')

  return new MediaElementPlayer(element, options)
};
