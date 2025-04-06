<script setup lang='ts'>
import { FastAverageColor } from 'fast-average-color'
import type { MusicfyPlayerConfig } from './../types/musicfyplayer'
import { onMounted, ref, useTemplateRef } from '#imports'

const props = withDefaults(defineProps<{
  /**
   * The configuration of the player
   */
  config: MusicfyPlayerConfig
  /**
   * The width and height of the player
   * @default '100%'
   */
  width?: string
  /**
   * The height of the player
   * @default '450px'
   */
  height?: string
}>(), {
  width: '100%',
  height: '450px',
})

const audio = useTemplateRef<HTMLAudioElement>('audio')

const size = ref({ width: props.width, height: props.height })
const backgroundColor = ref<string | undefined>()

if (import.meta.client && props.config.colorDetect) {
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = props.config.imageSrc

  img.onload = () => {
    const fac = new FastAverageColor()
    const color = fac.getColor(img)
    backgroundColor.value = color ? color.rgba : undefined
  }
}

onMounted(async () => {
  if (!audio.value) return
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
        <audio ref="audio" class="mp__music" :preload="config.audioPreload">
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
