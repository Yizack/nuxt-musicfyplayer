export interface Providers {
  local: {
    /**
     * Path to the audio file
     * @example '/path/to/audio.mp3'
     * @example 'https://example.com/audio.mp3'
     */
    src: string
  }
  dropbox: {
    id: string
    rlkey?: string
  }
}
