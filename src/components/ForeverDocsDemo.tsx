import React, { useMemo, useState } from 'react'

const nowIso = (): string => new Date().toISOString()

const rand = (n: number = 8): string => {
  try {
    return [...crypto.getRandomValues(new Uint8Array(n))]
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  } catch (error) {
    // Fallback for environments without crypto API
    return [...Array(n * 2)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
  }
}

const base36 = (len: number = 6): string => 
  [...Array(len)]
    .map(() => Math.floor(Math.random() * 36).toString(36))
    .join('')
    .toUpperCase()

const fakeDigest = (): string => rand(32)
const makeCode = (family: string = 'FD'): string => 
  `${family.slice(0, 2).toUpperCase()}-${new Date().getFullYear()}-${base36(3)}`

const docTypes = ['DEED', 'WILL', 'INSURANCE', 'ID', 'OTHER'] as const
type DocType = typeof docTypes[number]
type Step = 'home' | 'upload' | 'review' | 'crest' | 'verify'

interface ComponentProps {
  children: React.ReactNode
}

interface FieldProps {
  label: string
  children: React.ReactNode
}

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
}

interface FrameProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function ForeverDocsDemo() {
  const [step, setStep] = useState<Step>('home')
  const [familyName, setFamilyName] = useState('Johnson Family')
  const [ownerContact, setOwnerContact] = useState('')
  const [documentType, setDocumentType] = useState<DocType>('DEED')
  const [jurisdiction, setJurisdiction] = useState('TN/Hamilton')
  const [fileName, setFileName] = useState('')
  const [uploadedAt, setUploadedAt] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [fileDigest, setFileDigest] = useState('')
  const [storageURI, setStorageURI] = useState('')
  const [publicNotes, setPublicNotes] = useState('Prepared with ForeverDocs pilot, Aug 2025')
  
  const crestTitle = useMemo(() => `${familyName} Digital Crest`, [familyName])

  const resetAll = () => {
    setStep('home')
    setFamilyName('Johnson Family')
    setOwnerContact('')
    setDocumentType('DEED')
    setJurisdiction('TN/Hamilton')
    setFileName('')
    setUploadedAt('')
    setVerificationCode('')
    setFileDigest('')
    setStorageURI('')
    setPublicNotes('Prepared with ForeverDocs pilot, Aug 2025')
  }

  const demoUpload = () => {
    try {
      const ts = nowIso()
      setUploadedAt(ts)
      const fakeCid = rand(8)
      const name = fileName || 'johnson-deed.pdf'
      setFileName(name)
      setStorageURI(`gs://foreverdocs/uploads/${fakeCid}/${name}`)
      setFileDigest(fakeDigest())
      const famInitials = familyName.replace(/[^A-Za-z]/g, '').slice(0, 2) || 'FD'
      setVerificationCode(makeCode(famInitials))
      setStep('review')
    } catch (error) {
      console.error('Error during demo upload:', error)
      // Continue with demo even if there's an error
      const ts = nowIso()
      setUploadedAt(ts)
      setFileName(fileName || 'johnson-deed.pdf')
      setStorageURI(`gs://foreverdocs/uploads/demo/${fileName || 'johnson-deed.pdf'}`)
      setFileDigest('a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456')
      setVerificationCode('FD-2025-ABC')
      setStep('review')
    }
  }

  // Component definitions
  const Outline = ({ children }: ComponentProps) => (
    <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 shadow-xl shadow-black/30 p-6">
      {children}
    </div>
  )

  const Pill = ({ label }: { label: string }) => (
    <span className="text-xs rounded-full border border-zinc-700 px-2 py-1 uppercase tracking-wide text-zinc-300">
      {label}
    </span>
  )

  const Field = ({ label, children }: FieldProps) => (
    <label className="block mb-3">
      <div className="text-sm text-zinc-400 mb-1">{label}</div>
      {children}
    </label>
  )

  const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input 
      {...props} 
      className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 outline-none focus:border-zinc-500 ${props.className || ''}`} 
    />
  )

  const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
    <select 
      {...props} 
      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 outline-none focus:border-zinc-500"
    >
      {props.children}
    </select>
  )

  const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => (
    <button 
      onClick={onClick} 
      className={
        variant === 'primary'
          ? 'px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 active:scale-[.99] transition-all'
          : 'px-4 py-2 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-all'
      }
    >
      {children}
    </button>
  )

  const Nav = () => (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600" />
        <div className="font-semibold">ForeverDocs</div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Pill label="Demo" />
        <Pill label="Pre-501(c)(3)" />
        <Pill label="No private data on-chain" />
      </div>
    </div>
  )

  const Frame = ({ title, subtitle, children }: FrameProps) => (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <Nav />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Outline>
              <h1 className="text-3xl font-bold">{title}</h1>
              {subtitle && <p className="mt-2 text-zinc-400">{subtitle}</p>}
              <div className="mt-6">{children}</div>
            </Outline>
          </div>
          <div className="space-y-6">
            <Outline>
              <h3 className="font-semibold">Pilot Guardrails</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-400 space-y-1">
                <li>Files stored off-chain (demo storage URI)</li>
                <li>On-chain idea: store only SHA-256 digest</li>
                <li>Minimal metadata (no SSNs, no DOBs)</li>
                <li>Soft delete via isActive=false</li>
              </ul>
            </Outline>
            <Outline>
              <h3 className="font-semibold">Record Snapshot</h3>
              <div className="mt-3 text-xs text-zinc-300 space-y-1 font-mono">
                <div><span className="text-zinc-500">verificationCode:</span> {verificationCode || '—'}</div>
                <div><span className="text-zinc-500">documentType:</span> {documentType}</div>
                <div><span className="text-zinc-500">familyName:</span> {familyName}</div>
                <div><span className="text-zinc-500">uploadedAt:</span> {uploadedAt || '—'}</div>
                <div><span className="text-zinc-500">fileDigest:</span> {fileDigest ? `${fileDigest.slice(0, 16)}…` : '—'}</div>
                <div><span className="text-zinc-500">storageURI:</span> {storageURI ? storageURI.replace('gs://', 'gs://…/') : '—'}</div>
                <div><span className="text-zinc-500">jurisdiction:</span> {jurisdiction}</div>
              </div>
            </Outline>
          </div>
        </div>
      </div>
    </div>
  )

  if (step === 'home') return (
    <Frame title="Safeguard Wills, Deeds & Insurance" subtitle="Community-rooted digital vault + public proof (demo)">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-zinc-300">
            This demo shows the ForeverDocs flow without collecting sensitive data. We generate a human-readable verification code and a SHA-256 fingerprint of the file, then render a public-safe crest page families can print or bookmark.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => setStep('upload')}>Start Demo</Button>
            <Button variant="ghost" onClick={resetAll}>Reset</Button>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 p-4">
          <div className="aspect-video rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500">
            Crest Preview Area
          </div>
          <div className="mt-3 text-sm text-zinc-400">
            You will see the crest with your family name and verification code after upload.
          </div>
        </div>
      </div>
    </Frame>
  )

  if (step === 'upload') return (
    <Frame title="Upload Document (Demo)" subtitle="File is not persisted; URI and digest are simulated for the walkthrough.">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Field label="Family Name (public-safe)">
            <Input 
              value={familyName} 
              onChange={(e) => setFamilyName(e.target.value)} 
            />
          </Field>
          <Field label="Contact (email or phone - off-chain, not displayed)">
            <Input 
              value={ownerContact} 
              onChange={(e) => setOwnerContact(e.target.value)} 
              placeholder="optional" 
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Document Type">
              <Select 
                value={documentType} 
                onChange={(e) => setDocumentType(e.target.value as DocType)}
              >
                {docTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </Select>
            </Field>
            <Field label="Jurisdiction (State/County)">
              <Input 
                value={jurisdiction} 
                onChange={(e) => setJurisdiction(e.target.value)} 
              />
            </Field>
          </div>
          <Field label="Choose File (simulated)">
            <div className="flex items-center gap-3">
              <Input 
                type="text" 
                placeholder="e.g., johnson-deed.pdf" 
                value={fileName} 
                onChange={(e) => setFileName(e.target.value)} 
              />
              <Button onClick={demoUpload}>Use Sample</Button>
            </div>
            <div className="mt-2 text-xs text-zinc-500">
              In a real build, this would be a file picker writing to Firebase/Drive.
            </div>
          </Field>
          <div className="flex gap-3 mt-4">
            <Button onClick={demoUpload}>Generate Code</Button>
            <Button variant="ghost" onClick={() => setStep('home')}>Back</Button>
          </div>
        </div>

        <div className="space-y-4">
          <Outline>
            <h3 className="font-semibold">What we store (MVP)</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-400 space-y-1">
              <li><b>verificationCode</b> (human-readable)</li>
              <li><b>fileDigest</b> (SHA-256) - not the file</li>
              <li><b>documentType</b>, <b>familyName</b>, <b>jurisdiction</b></li>
              <li><b>storageURI</b> (off-chain bucket path)</li>
              <li><b>uploadedAt</b>, <b>isActive</b></li>
            </ul>
          </Outline>
          <Outline>
            <h3 className="font-semibold">What we never put on-chain</h3>
            <p className="text-sm text-zinc-400 mt-2">
              Private data (names inside documents, SSNs, DOBs). Only the digest would be anchored on a chain later for timestamped proof.
            </p>
          </Outline>
        </div>
      </div>
    </Frame>
  )

  if (step === 'review') return (
    <Frame title="Record Created" subtitle="Share the code. Print the crest. Verify anytime.">
      <div className="grid md:grid-cols-2 gap-6">
        <Outline>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Verification Code">
              <Input value={verificationCode} readOnly />
            </Field>
            <Field label="Uploaded At">
              <Input value={uploadedAt} readOnly />
            </Field>
            <Field label="File Digest (SHA-256)">
              <Input value={fileDigest} readOnly />
            </Field>
            <Field label="Storage URI (off-chain)">
              <Input value={storageURI} readOnly />
            </Field>
            <Field label="Family Name">
              <Input value={familyName} readOnly />
            </Field>
            <Field label="Document Type">
              <Input value={documentType} readOnly />
            </Field>
            <Field label="Jurisdiction">
              <Input value={jurisdiction} readOnly />
            </Field>
          </div>
          <div className="flex gap-3 mt-6">
            <Button onClick={() => setStep('crest')}>View Crest</Button>
            <Button variant="ghost" onClick={() => setStep('upload')}>Back</Button>
          </div>
        </Outline>

        <Outline>
          <h3 className="font-semibold">Demo Talk Track</h3>
          <ol className="mt-3 list-decimal pl-5 text-sm text-zinc-400 space-y-1">
            <li>Family uploads a document (off-chain storage).</li>
            <li>We compute a fingerprint (SHA-256) of the file.</li>
            <li>We create a human code they can write down.</li>
            <li>We show a public-safe crest page with no private details.</li>
            <li>Later: anchor digest on a blockchain for tamper-proof timestamp.</li>
          </ol>
        </Outline>
      </div>
    </Frame>
  )

  if (step === 'crest') return (
    <Frame title="Digital Family Crest" subtitle="Public-safe card for families to print or bookmark">
      <div className="grid md:grid-cols-2 gap-6">
        <Outline>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600" />
            <div>
              <div className="text-xl font-bold">{crestTitle}</div>
              <div className="text-zinc-400">{documentType} • {jurisdiction}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-zinc-400">Verification Code</div>
              <div className="font-mono text-lg">{verificationCode}</div>
            </div>
            <div>
              <div className="text-zinc-400">Registered</div>
              <div>{uploadedAt ? new Date(uploadedAt).toLocaleString() : '—'}</div>
            </div>
            <div className="col-span-2">
              <div className="text-zinc-400 mb-1">Public Notes</div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-zinc-300">
                {publicNotes}
              </div>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <Button onClick={() => setStep('verify')}>Open Verify Page</Button>
            <Button variant="ghost" onClick={() => setStep('review')}>Back</Button>
          </div>
        </Outline>

        <Outline>
          <h3 className="font-semibold">QR (demo)</h3>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center aspect-square rounded-xl border border-zinc-800 bg-zinc-950">
              <div className="text-xs text-center text-zinc-500 px-4">
                QR placeholder
                <div className="mt-2 font-mono text-[10px] break-all">
                  {JSON.stringify({
                    v: 1,
                    vc: verificationCode,
                    t: documentType,
                    j: jurisdiction
                  })}
                </div>
              </div>
            </div>
            <div className="text-sm text-zinc-300">
              Scan to resolve <span className="font-mono">/verify/{verificationCode || 'CODE'}</span>.
              In production, the QR payload stays minimal; the server renders full details.
            </div>
          </div>
        </Outline>
      </div>
    </Frame>
  )

  if (step === 'verify') return (
    <Frame title="Verify Document" subtitle="Public-safe verification page (read-only)">
      <div className="grid md:grid-cols-2 gap-6">
        <Outline>
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <div className="text-zinc-400">Verification Code</div>
              <div className="font-mono">{verificationCode}</div>
            </div>
            <div>
              <div className="text-zinc-400">Document Type</div>
              <div>{documentType}</div>
            </div>
            <div>
              <div className="text-zinc-400">Jurisdiction</div>
              <div>{jurisdiction}</div>
            </div>
            <div>
              <div className="text-zinc-400">Family Name</div>
              <div>{familyName}</div>
            </div>
            <div className="md:col-span-2">
              <div className="text-zinc-400">File Digest (first 32 chars)</div>
              <div className="font-mono">{fileDigest ? `${fileDigest.slice(0, 32)}…` : '—'}</div>
            </div>
            <div className="md:col-span-2">
              <div className="text-zinc-400">Blockchain (optional later)</div>
              <div className="text-zinc-300">
                Not anchored in this demo. In production, we would show chain, tx hash, and block number.
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="ghost" onClick={() => setStep('crest')}>Back</Button>
            <Button onClick={() => setStep('home')}>Finish</Button>
          </div>
        </Outline>

        <Outline>
          <h3 className="font-semibold">Community Trust Notes</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-400 space-y-1">
            <li>Built for families first; tech stays invisible.</li>
            <li>Nothing private on-chain - only a fingerprint for tamper-evidence.</li>
            <li>Plain-language consent and easy deletion policy.</li>
            <li>Local partners: churches, legal aid, and city offices.</li>
          </ul>
        </Outline>
      </div>
    </Frame>
  )

  return null
}
