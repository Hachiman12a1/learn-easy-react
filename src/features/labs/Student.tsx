import * as React from 'react'
import { Student } from '../../models'
// import { Student } from '../../models/student'

export interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  const { name, isHero } = student

  return (
    <div>
      Student: {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  )
}
