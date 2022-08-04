import { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
}

// Props are READ ONLY
// DO NOT MUTATE Props
//Props are immutable

export function StudentCard({ student }: StudentCardProps) {
  let { name, isHero } = student;

  // name = 'bob'

  function handleClick() {
    student.name = 'Bob';
    console.log(student);
    // - not trigger re-render
    // - inconsistent data
  }

  return (
    <div onClick={handleClick}>
      Student: {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  );
}
