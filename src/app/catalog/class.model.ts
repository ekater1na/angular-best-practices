export interface ICourse {
  courseNumber: string,
  courseName: string,
  creditHours: number,
  description: string
}

export interface IClass {
  classId: string,
  course: ICourse,
  professor: string,
  seatsAvailable: number,
  days: string,
  time: number,
  enrolled: boolean,
  processing: boolean
}
