import type { MusicfyPlayerConfig, MusicfyPlayerDefinition, LocalAudio, DropboxAudio } from './../types/musicfyplayer'
import { ref } from '#imports'

const srcDropbox = (id: string, rlkey?: string) => {
  const dropboxBase = 'https://www.dropbox.com'
  return rlkey ? `${dropboxBase}/scl/fi/${id}/?rlkey=${rlkey}&dl=1` : `${dropboxBase}/s/${id}?dl=1`
}

export const defineMusicfyPlayer = (config: MusicfyPlayerDefinition): MusicfyPlayerConfig => {
  const audioSrc = ref<string>()
  const provider = config.audio.provider || 'local'
  const size = {
    width: config.size?.width || '100%',
    height: config.size?.height || '450px'
  }

  switch (provider) {
    default:
    case 'local':
      audioSrc.value = (config.audio as LocalAudio).src
      break
    case 'dropbox':
      audioSrc.value = srcDropbox((config.audio as DropboxAudio).id, (config.audio as DropboxAudio).rlkey)
      break
  }

  if (!audioSrc.value) {
    throw new Error('Invalid audio source')
  }

  return {
    imageSrc: config.image.src,
    imageAlt: config.image.alt || 'Musicfy Player',
    audioType: config.audio.type || 'audio/mpeg',
    audioSrc: audioSrc.value,
    sizeWidth: size.width,
    sizeHeight: size.height,
    colorClass: config.color?.class || 'musicfyplayer-color',
    colorDetect: config.color?.detect || false
  }
}
