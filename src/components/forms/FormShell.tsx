// src/components/forms/FormShell.tsx
import React from 'react'

interface FormShellProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

interface FieldProps {
  label: string
  children: React.ReactNode
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface SubmitBarProps {
  canSubmit: boolean
  cta: string
}

export function FormShell({ title, subtitle, children }: FormShellProps) {
  return (
    <main className="min-h-[70vh] bg-black text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-zinc-400 mt-2">{subtitle}</p>
        <div className="mt-6">
          {children}
        </div>
      </div>
    </main>
  )
}

export function Field({ label, children }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm text-zinc-400">{label}</span>
      <div className="mt-1">
        {children}
      </div>
    </label>
  )
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500 ${className || ''}`}
      {...props}
    />
  )
}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500 ${className || ''}`}
      {...props}
    >
      {children}
    </select>
  )
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500 resize-vertical ${className || ''}`}
      {...props}
    />
  )
}

export function SubmitBar({ canSubmit, cta }: SubmitBarProps) {
  return (
    <div>
      <button
        type="submit"
        disabled={!canSubmit}
        className={`px-4 py-2 rounded-xl font-medium transition-colors ${
          canSubmit
            ? 'bg-white text-black hover:bg-zinc-200'
            : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
        }`}
      >
        {cta}
      </button>
    </div>
  )
}
