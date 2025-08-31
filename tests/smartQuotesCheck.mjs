// tests/smartQuotesCheck.mjs
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.cwd(), 'src')
const reSmart = /[\u2018\u2019\u201C\u201D]/

let failures = 0
for (const file of walk(ROOT)) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue
  const txt = fs.readFileSync(file, 'utf8')
  if (reSmart.test(txt)) {
    console.error('Smart quotes found in', path.relative(process.cwd(), file))
    failures++
  }
}

if (failures > 0) {
  console.error('❌ Smart quotes detected')
  process.exit(1)
} else {
  console.log('✅ No smart quotes detected in src.')
}

function walk(dir) {
  const out = []
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const s = fs.statSync(p)
    if (s.isDirectory()) out.push(...walk(p))
    else out.push(p)
  }
  return out
}
