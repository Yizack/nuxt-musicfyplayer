<script setup lang="ts">
const config = defineMusicfyPlayer({
  audio: {
    provider: 'dropbox',
    type: 'audio/mpeg',
    preload: 'none',
    id: 'soep3xvq8aee4eh6hcj4r',
    rlkey: 'g7sqo9y5zl3f69oxftzo5auc5',
  },
  image: {
    src: 'https://dimatis.music/images/reminiscences.jpg',
    alt: 'Dimatis - Reminiscences',
  },
  color: {
    detect: true,
  },
})
</script>

<template>
  <MusicfyPlayer :config="config" height="500px" />
</template>
