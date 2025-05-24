'use client'
import * as React from 'react'

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-xl border bg-white p-4 shadow ${className}`}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

// components/ui/scroll-area.tsx
'use client'
import * as React from 'react'

export function ScrollArea({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-auto ${className}`} style={{ maxHeight: '200px' }}>
      {children}
    </div>
  )
}
