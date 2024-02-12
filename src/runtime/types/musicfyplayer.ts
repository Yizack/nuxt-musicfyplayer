export interface MusicfyPlayerDefinition {
  image: {
    src: string;
    alt: string;
  }
  audio: {
    provider: string;
    type: string;
  } & (LocalAudio | DropboxAudio);
  color?: {
    detect?: boolean;
    class?: string;
  }
  size?: {
    width?: string;
    height?: string;
  };
}

export interface LocalAudio {
  provider: 'local';
  src: string;
}

export interface DropboxAudio {
  provider: 'dropbox';
  id: string;
  rlkey?: string;
}

export type AudioConfig = LocalAudio | DropboxAudio;

export interface MusicfyPlayerConfig {
  imageSrc: string;
  imageAlt: string;
  audioType: string;
  audioSrc: string;
  sizeWidth: string;
  sizeHeight: string;
  colorClass: string;
  colorDetect: boolean;
}
