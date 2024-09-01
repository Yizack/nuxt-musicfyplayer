<script setup lang='ts'>
import ColorThief from 'colorthief'
import type { MusicfyPlayerConfig } from './../types/musicfyplayer'
import { onMounted, ref, type Ref } from '#imports'

const props = defineProps({
  /**
   * The configuration of the player
   */
  config: {
    type: Object as () => MusicfyPlayerConfig,
    required: true,
  },
  /**
   * The width and height of the player
   * @default '100%'
   */
  width: {
    type: String,
    default: '100%',
  },
  /**
   * The height of the player
   * @default '450px'
   */
  height: {
    type: String,
    default: '450px',
  },
})

const audio = ref() as Ref<HTMLAudioElement>
const size = ref({ width: props.width, height: props.height })
const backgroundColor = ref<string | undefined>()

const generateColor = async () => {
  if (import.meta.client && props.config.colorDetect) {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = props.config.imageSrc

    img.onload = () => {
      const colorThief = new ColorThief()
      const color = colorThief.getColor(img)
      backgroundColor.value = color ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : undefined
    }
  }
}

generateColor()

onMounted(async () => {
  const { mediaElementPlayer } = await import('./../utils/mediaelement')
  mediaElementPlayer(audio.value, {
    iconSprite: '',
    audioHeight: 40,
    features: ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
    alwaysShowControls: true,
    timeAndDurationSeparator: '<span></span>',
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false,
  })
})
</script>

<template>
  <div class="musicfyplayer" :class="{ [`${config.colorClass}`]: config.colorClass }" :style="{ ...size, backgroundColor }">
    <div class="mp__box">
      <div class="mp__controls">
        <audio ref="audio" class="mp__music">
          <source :src="config.audioSrc" :type="config.audioType">
        </audio>
      </div>
      <div class="mp__cover">
        <div class="mp__box-1">
          <div class="mp__box-2">
            <div class="mp__box-3">
              <img class="mp__image" :src="config.imageSrc" :alt="config.imageAlt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import './../assets/css/musicfyplayer.css';
</style>
