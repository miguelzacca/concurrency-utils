# concurrency-utils

Generate chunks:

```ts
import { getChunk } from 'concurrency-utils'

const data = // [1000 items]

for (const chunk of getChunk(data, 100)) {
  console.log(chunk) // [100 items]
}
```

Resolve promises with max concurrency

```ts
import { resolvePromises } from 'concurrency-utils'

const actions = [
  () => // async action,
  () => // async action,
  async () => // sync action,
  async () => // sync action,
]

await resolvePromises(actions, 2)
```

## API

```ts
getChunk(data: any[], chunkSize: number)
```

```ts
resolvePromises(
  promiseFunctions: (() => Promise<any>)[],
  maxconcurrency-utils: number // default is 10
)
```
