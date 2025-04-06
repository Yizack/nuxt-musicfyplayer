![musicfyplayer](https://github.com/Yizack/nuxt-musicfyplayer/assets/16264115/d1603014-8331-4327-9b65-4ff580c3624d)

# nuxt-musicfyplayer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Embed a simple HTML music player from local or hosted audio on your Nuxt app using MediaElement.js and fast-average-color

- [✨ Release Notes](https://github.com/Yizack/nuxt-musicfyplayer/blob/main/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/yizack/nuxt-musicfyplayer?file=playground%2Fapp.vue)

## Quick Setup

1. Add `nuxt-musicfyplayer` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-musicfyplayer

# Using yarn
yarn add --dev nuxt-musicfyplayer

# Using npm
npm install --save-dev nuxt-musicfyplayer
```

2. Add `nuxt-musicfyplayer` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-musicfyplayer'
  ]
})
```

That's it! You can now use `nuxt-musicfyplayer` in your Nuxt app ✨

## Usage

In the project, use the component `<MusicfyPlayer :config="" />`, where `config` is the configuration options of the player.

### Component properties

## Size properties

| Property                              | Description              | Default value |
|---------------------------------------|--------------------------|---------------|
| [`config`](#musicfyplayer-composable) | MusicfyPlayer composable |               |
| `width`                               | Music player width       | `100%`        |
| `height`                              | Music player height      | `450px`       |

## MusicfyPlayer composable

Define your configuration options with the `useMusicfyPlayer` composable.

| Property                            | Description                           |
|-------------------------------------|---------------------------------------|
| [`audio`](#audio-shared-properties) | The audio source properties           |
| [`image`](#image-properties)        | The image source (preferably squared) |
| [`color`](#color-properties)        | Color options                         |

## Audio shared properties

| Property   | Description                      | Default value |
|------------|----------------------------------|---------------|
| `provider` | Provider of the audio source.    | `local`       |
| `type`     | Content-type fo the audio source | `audio/mpeg`  |
| `preload`  | Preload the audio source         | `auto`        |
| [`...`](#supported-audio-providers) | Selected audio provider properties ||

### Supported audio providers

| Provider                             | Value    |
|--------------------------------------|----------|
| [URL](#local-audio-properties)       | `local`  |
| [Dropbox](#dropbox-audio-properties) | `dropbox`|

### Local audio properties

| Audio property | Description               | Required |
|----------------|---------------------------|----------|
| `src`          | Audio source link         | Yes      |

### Dropbox audio properties

| Audio property | Description               | Required |
|----------------|---------------------------|----------|
| `id`           | File identifier           | Yes      |
| `rlkey`        | New file identifier param | No       |

## Image properties

| Property | Description            | Required |
|----------|------------------------|----------|
| `src`    | Image source link      | Yes      |
| `alt`    | Image alternative text | No       |

## Color properties

| Property | Description                                                                                 | Default value         |
|----------|---------------------------------------------------------------------------------------------|-----------------------|
| `class`  | A custom class for your player's background color                                           | `musicfyplayer-color` |
| `detect` | Detect the dominant color from the image source and use it as the player's background color | `false`               |

## Example

Use the `useMusicfyPlayer` composable to define the configuration options of the player.

```html
<script setup lang="ts">
const config = useMusicfyPlayer({
  audio: {
    provider: "dropbox",
    preload: "none",
    id: "soep3xvq8aee4eh6hcj4r",
    rlkey: "g7sqo9y5zl3f69oxftzo5auc5"
  },
  image: {
    src: "https://dimatis.music/images/reminiscences.jpg",
    alt: "Dimatis - Reminiscences"
  },
  color: {
    detect: true
  }
})
</script>

<template>
  <MusicfyPlayer :config="config" width="100%" />
</template>
```

### More examples

Example of use on a website: [Dimatis Website](https://dimatis.yizack.com)

[![Live Demo](https://yizack.com/images/embeddable-music-player/embeddeds.jpg)](https://dimatis.yizack.com)

[![Live Demo](https://yizack.com/images/embeddable-music-player/embeddeds2.jpg)](https://dimatis.yizack.com/music/fly-again)

Check out the [🏀 Online playground](https://stackblitz.com/github/yizack/nuxt-musicfyplayer?file=playground%2Fapp.vue) for more examples.

## Credits

- Detect average color with [fast-average-color](https://github.com/fast-average-color/fast-average-color)
- Music player controls by [MediaElement.js](https://www.mediaelementjs.com/)
- [Nuxt](https://github.com/nuxt/nuxt), the JavaScript framework for creating SSR Vue applications and its [Module Author Guide](https://nuxt.com/docs/guide/going-further/modules)

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-musicfyplayer/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-musicfyplayer

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-musicfyplayer.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-musicfyplayer

[license-src]: https://img.shields.io/npm/l/nuxt-musicfyplayer.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: LICENSE

[tests-src]: https://img.shields.io/github/actions/workflow/status/Yizack/nuxt-musicfyplayer/tests.yml?style=flat&colorA=020420&colorB=00DC82&label=tests
[tests-href]: https://github.com/Yizack/nuxt-musicfyplayer/actions/workflows/tests.yml

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
