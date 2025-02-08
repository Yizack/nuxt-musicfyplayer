import type { Providers } from '../types/providers'

const getDropboxSource = (id: string, rlkey?: string) => {
  const dropboxBase = 'https://www.dropbox.com'
  return rlkey ? `${dropboxBase}/scl/fi/${id}/?rlkey=${rlkey}&dl=1` : `${dropboxBase}/s/${id}?dl=1`
}

export const getSource = <T extends keyof Providers>(provider: T, config: Providers[keyof Providers]) => {
  switch (provider) {
    default:
    case 'local':
      return (config as Providers['local']).src
    case 'dropbox':
      return getDropboxSource((config as Providers['dropbox']).id, (config as Providers['dropbox']).rlkey)
  }
}
