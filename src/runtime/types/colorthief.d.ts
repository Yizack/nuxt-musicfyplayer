declare module 'colorthief' {
  type Palette = [red: number, green: number, blue: number]
  export default class ColorThief {
    getColor(sourceImage: HTMLImageElement, quality?: number): Palette
    static getColor(sourceImage: string, quality?: number): Promise<Palette>
    getPaletteFromURL(URL: string, colorCount?: number, quality?: number): Promise<Palette[]>
    getColorFromURL(imageURL: string, quality?: number): Promise<Palette>
  }
}
