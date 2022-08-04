import { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
  onClick?: (student: Student) => void;
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  let { name, isHero } = student;

  function handleClick() {
    onClick?.(student);
  }

  return (
    <div onClick={() => onClick?.(student)}>
      Student: {name} {isHero ? 'hero' : 'no-hero'}
    </div>
  );
}
