import { defineNuxtModule, createResolver, addComponent, addImportsDir } from '@nuxt/kit'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-musicfyplayer',
    configKey: 'musicfyplayer',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)
    addComponent({
      name: 'MusicfyPlayer',
      global: true,
      filePath: resolve('./runtime/components/MusicfyPlayer.vue'),
    })
    addImportsDir(resolve('./runtime/composables'))
  },
})
