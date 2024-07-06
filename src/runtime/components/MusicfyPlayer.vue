<script setup lang='ts'>
import ColorThief from 'colorthief'
import type { MusicfyPlayerConfig } from './../types/musicfyplayer'
import { onMounted, ref, type Ref } from '#imports'

const props = defineProps({
  config: {
    type: Object as () => MusicfyPlayerConfig,
    required: true,
  },
})

const audio = ref() as Ref<HTMLAudioElement>
const size = ref({ width: props.config.sizeWidth, height: props.config.sizeHeight })
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
    <div class="box">
      <div class="controls">
        <div class="lecteur">
          <audio ref="audio" class="music fc-media">
            <source :src="config.audioSrc" :type="config.audioType">
          </audio>
        </div>
      </div>
      <div class="cover">
        <div class="box-1">
          <div class="box-2">
            <div class="box-3">
              <img class="image" :src="config.imageSrc" :alt="config.imageAlt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import 'mediaelement/build/mediaelementplayer.min.css';
@import './../assets/css/musicfyplayer.css';
</style>
