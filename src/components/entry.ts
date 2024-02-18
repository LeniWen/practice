import path from 'node:path'
import fs from 'node:fs'

const BASE_PATH = './src/components'

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url)
    const filePath = path.join(BASE_PATH, url.pathname)
    try {
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        const file = Bun.file(path.join(filePath, 'index.html'))
        const exists = await file.exists()
        if (exists)
          return new Response(file)
        throw new Error('html file is not exist')
      }
      else if (stats.isFile()) { return new Response(Bun.file(filePath)) }
    }
    catch (e) {
      return new Response(e?.message ?? 'Resource is not exist')
    }
    return new Response('Resource is not exist')
  },
})
