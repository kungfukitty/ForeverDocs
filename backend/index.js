import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(express.json())
app.use(morgan('combined'))

app.get('/', (req,res)=> res.json({ ok:true, service:'foreverdocs-api' }))
app.get('/health', (req,res)=> res.json({ ok:true, time:new Date().toISOString() }))

// Fallback 404
app.use((req,res)=> res.status(404).json({ ok:false, error:'not_found' }))

app.listen(PORT, ()=> console.log(`[api] listening on :${PORT}`))
