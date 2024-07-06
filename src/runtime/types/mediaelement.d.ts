export interface MediaElementPlayer {
  new (node: HTMLAudioElement, options: MediaElementPlayerOptions): void
}

export interface MediaElementPlayerOptions {
  iconSprite: string
  audioHeight: number
  features: ('playpause' | 'current' | 'progress' | 'duration' | 'tracks' | 'volume' | 'fullscreen')[]
  alwaysShowControls: boolean
  timeAndDurationSeparator: string
  iPadUseNativeControls: boolean
  iPhoneUseNativeControls: boolean
  AndroidUseNativeControls: boolean
}
