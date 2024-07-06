export interface MusicfyPlayerDefinition {
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
  audio: {
    /**
     * Audio provider
     * @default 'local'
     */
    provider?: string
    /**
     * Audio type
     * @default 'audio/mpeg'
     */
    type?: string
  } & (LocalAudio | DropboxAudio)
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

export interface LocalAudio {
  provider?: 'local'
  /**
   * Path to the audio file
   * @example '/path/to/audio.mp3'
   * @example 'https://example.com/audio.mp3'
   */
  src: string
}

export interface DropboxAudio {
  provider?: 'dropbox'
  id: string
  rlkey?: string
}

export type AudioConfig = LocalAudio | DropboxAudio

export interface MusicfyPlayerConfig {
  imageSrc: string
  imageAlt: string
  audioType: string
  audioSrc: string
  colorClass: string
  colorDetect: boolean
}
