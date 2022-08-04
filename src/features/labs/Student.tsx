import * as React from 'react'

export interface StudentProps {
  name?: string
  age: number
  isHero?: boolean
  hobbyList: string[]
  sayHello: () => void
}

export function Student({ name = 'Default Name', isHero = false }: StudentProps) {
  return (
    <div>
      Student: {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  )
}
