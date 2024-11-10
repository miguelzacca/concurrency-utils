export function* getChunk<T extends any[]>(data: T, chunkSize: number) {
  for (let i = 0; i < data.length; i += chunkSize) {
    yield data.slice(i, i + chunkSize)
  }
}

export async function resolvePromises<T extends () => Promise<any>>(
  promiseFunctions: T[],
  maxConcurrency: number = 10,
) {
  for (const chunk of getChunk(promiseFunctions, maxConcurrency)) {
    const promises = chunk.map((func) => func())
    await Promise.all(promises)
  }
}
