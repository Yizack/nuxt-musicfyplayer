import type { Providers } from './providers'

export interface MusicfyPlayerComposableConfig<T extends keyof Providers> {
  /**
   * Image configuration
   */
  image: {
    src: string
    /**
     * Image alt text
     * @default 'Musicfy Player'
     */
    alt?: string
  }
  /**
   * Audio configuration
   */
  audio: {
    /**
     * Audio provider
     * @default 'local'
     */
    provider?: T
    /**
     * Audio type
     * @default 'audio/mpeg'
     */
    type?: string
    /**
     * Specifies if and how the audio file should be loaded when the page loads
     * @default 'auto'
     */
    preload?: 'auto' | 'metadata' | 'none'
  } & Providers[T]
  /**
   * Color configuration
   */
  color?: {
    /**
     * Set if the color should be detected from the image
     * @default false
     */
    detect?: boolean
    /**
     * Custom class to apply to the player
     * @default 'musicfyplayer-color'
     */
    class?: string
  }
}

export interface MusicfyPlayerConfig {
  imageSrc: string
  imageAlt: string
  audioType: string
  audioSrc: string
  audioPreload: MusicfyPlayerComposableConfig['audio']['preload']
  colorClass: string
  colorDetect: boolean
}
