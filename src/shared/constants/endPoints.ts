interface Global {
  /**
   * Это хак, так как хостинг неизвестен.
   */
  __incrementalCache: {
    requestHeaders: {
      referer: string
    }
  }
}

// eslint-disable-next-line no-underscore-dangle
const DATA_BASE_URL = (global as unknown as Global).__incrementalCache.requestHeaders.referer


export const END_POINTS = {
  getProject: `${DATA_BASE_URL}/api/getProject`,
  getMaterials: `${DATA_BASE_URL}/api/getMaterials`,
}
