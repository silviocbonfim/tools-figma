// Tipos e interfaces para integração com Figma
export interface FigmaImageResponse {
  err: null | string;
  images: Record<string, string>;
}
