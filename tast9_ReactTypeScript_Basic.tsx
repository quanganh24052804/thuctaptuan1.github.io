type Student = {
  id: number;
  name: string;
  age?: number; // optional
};

const students: Student[] = [
  { id: 1, name: "Quang Anh", age: 21 },
  { id: 2, name: "Huyền" },
];

function printStudentInfo(student: Student): void {
  console.log(
    `ID: ${student.id}, Tên: ${student.name}, Tuổi: ${student.age ?? "N/A"}`
  );
}

students.forEach(printStudentInfo);
