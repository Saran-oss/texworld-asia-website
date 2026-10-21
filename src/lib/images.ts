export function buildImageUrl(prompt: string, size: 'square_hd' | 'square' | 'portrait_4_3' | 'portrait_16_9' | 'landscape_4_3' | 'landscape_16_9' = 'portrait_4_3') {
  const encoded = encodeURIComponent(prompt)
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encoded}&image_size=${size}`
}
