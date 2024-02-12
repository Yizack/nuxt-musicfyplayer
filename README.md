# nuxt-musicfyplayer

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Tests][tests-src]][tests-href]
[![Nuxt][nuxt-src]][nuxt-href]

Embed a simple HTML music player from local or hosted audio on your Nuxt app using MediaElement.js and ColorThief.js

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

Define your configuration options with the `defineMusicfyPlayer` composable.

| Property                   | Description                           |
|----------------------------|---------------------------------------|
| [`audio`](#audio-shared-properties) | The audio source properties           |
| [`image`](#image-properties) | The image source (preferably squared) |
| [`size`](#size-properties)   | The size of your player               |
| [`color`](#color-properties) | Color options                         |

## Audio shared properties

| Property   | Description                      | Default value |
|------------|----------------------------------|---------------|
| `provider` | Provider of the audio source.    | `local`       |
| `type`     | Content-type fo the audio source | `audio/mpeg`  |
| [`...`](#supported-audio-providers) | Selected audio provider properties ||

### Supported audio providers

| Provider                             | Value    |
|--------------------------------------|----------|
| [URL](#local-audio-properties)     | `local`  |
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

## Size properties

| Property | Description            | Default value |
|----------|------------------------|---------------|
| `width`  | Music player width     | `100%`        |
| `height` | Music player height    | `450px`       |

## Color properties

| Property | Description                                                                                 | Default value         |
|----------|---------------------------------------------------------------------------------------------|-----------------------|
| `class`  | A custom class for your player's background color                                           | `musicfyplayer-color` |
| `detect` | Detect the dominant color from the image source and use it as the player's background color | `false`               |

## Example

Use the emoji property to render an emoji by character.

```html
<script setup lang="ts">
const config = defineMusicfyPlayer({
  audio: {
    provider: "dropbox",
    id: "soep3xvq8aee4eh6hcj4r",
    rlkey: "g7sqo9y5zl3f69oxftzo5auc5"
  },
  image: {
    src: "https://dimatis.yizack.com/images/reminiscences.jpg",
    alt: "Dimatis - Reminiscences"
  },
  size: {
    width: "100%"
  },
  color: {
    detect: true
  }
})
</script>

<template>
  <MusicfyPlayer :config="config" />
</template>
```

## Credits

- Detect dominant color with [ColorThief](https://lokeshdhakar.com/projects/color-thief/)
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
[npm-version-src]: https://img.shields.io/npm/v/nuxt-musicfyplayer/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-musicfyplayer

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-musicfyplayer.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-musicfyplayer

[license-src]: https://img.shields.io/npm/l/nuxt-musicfyplayer.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: LICENSE

[tests-src]: https://img.shields.io/github/actions/workflow/status/Yizack/nuxt-musicfyplayer/tests.yml?style=flat&colorA=18181B&colorB=28CF8D&label=tests
[tests-href]: https://github.com/Yizack/nuxt-musicfyplayer/actions/workflows/tests.yml

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
