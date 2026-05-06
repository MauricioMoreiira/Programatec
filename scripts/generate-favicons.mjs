import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import toIco from 'to-ico'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const pub = path.join(root, 'public')
const input = path.join(pub, 'Logo_Programatec_2026.png')
/** Preenchimento das margens ao encaixar logo retangular em quadrado (transparente, sem faixa preta). */
const bg = { r: 0, g: 0, b: 0, alpha: 0 }

async function writeSquarePng(size, filename) {
  await sharp(input)
    .ensureAlpha()
    .resize(size, size, { fit: 'contain', background: bg })
    .png()
    .toFile(path.join(pub, filename))
}

async function pngBuffer(size) {
  return sharp(input)
    .ensureAlpha()
    .resize(size, size, { fit: 'contain', background: bg })
    .png()
    .toBuffer()
}

await writeSquarePng(48, 'icon-48.png')
await writeSquarePng(192, 'icon-192.png')
await writeSquarePng(512, 'icon-512.png')

const ico = await toIco([await pngBuffer(16), await pngBuffer(32), await pngBuffer(48)])
fs.writeFileSync(path.join(pub, 'favicon.ico'), ico)

console.log('Generated public/icon-48.png, icon-192.png, icon-512.png, favicon.ico')
