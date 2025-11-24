
// // اكتب كود يطبع الجملة دي لكل طالب:
// “Hi, My Name Is  Mahmoud Habib   And I Am  30 Years Old   I Work As A  Software Engineer   My Salary Is  5500   I Live In  Cairo   Egypt   And I Am A Manager true   My Skills Is  3.”
// بس من غير ما تكتب الجملة 3 مرات!
//  استخدم Array indexing وابدأ من students[0] لحد آخر طالب
//     (يعني الطالبين يتطبعوا في سطور مختلفة باستخدام console.log).
// // كل طالب ف سطر لوحده يعني

let students = [
    { name: "Mahmoud Habib", age: 30, job: "Software Engineer", salary: 5500, city: "Cairo", country: "Egypt", isManager: true, skills: 3 },
    { name: "Ali Ahmed", age: 25, job: "Web Developer", salary: 4000, city: "Alexandria", country: "Egypt", isManager: false, skills: 2 },
    { name: "Sarah Mohamed", age: 28, job: "Data Analyst", salary: 5000, city: "Giza", country: "Egypt", isManager: false, skills: 4 }
];

for (let i = 0; i < students.length; i++) {
    console.log(`Hi , My Name Is  ${students[i].name}   And I Am  ${students[i].age} Years Old   I Work As A  ${students[i].job}   My Salary Is  ${students[i].salary}   I Live In  ${students[i].city}   ${students[i].country}   And I Am A Manager ${students[i].isManager}   My Skills Is  ${students[i].skills}.`);
}