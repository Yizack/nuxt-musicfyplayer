import { getSource } from '../utils/sources'
import type { Providers } from '../types/providers'
import type { MusicfyPlayerConfig, MusicfyPlayerComposableConfig } from './../types/musicfyplayer'
import { ref } from '#imports'

/**
 * Musicfy Player composable
 * @param config - Musicfy Player composable configuration
 * @returns Musicfy Player configuration
 */
export const useMusicfyPlayer = <T extends keyof Providers = 'local'>(config: MusicfyPlayerComposableConfig<T>): MusicfyPlayerConfig => {
  const audioSrc = ref<string>()
  const provider = config.audio.provider || 'local'

  audioSrc.value = getSource(provider, config.audio)

  if (!audioSrc.value) throw new Error('Invalid audio source')

  return {
    imageSrc: config.image.src,
    imageAlt: config.image.alt || 'Musicfy Player',
    audioType: config.audio.type || 'audio/mpeg',
    audioSrc: audioSrc.value,
    audioPreload: config.audio.preload || 'auto',
    colorClass: config.color?.class || 'musicfyplayer-color',
    colorDetect: config.color?.detect || false,
  }
}

export const defineMusicfyPlayer = useMusicfyPlayer
