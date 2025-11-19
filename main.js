// __________frist try in js_________________

console.log("Hallo");  

// الاعلان عن المتغير الاول  

var emoployee1= {
    name:"Samaa",
    age:25,
    jobTitle:"web devoleb",
    isManager:false,
    from:[" eygpt" , "alex"],
    skills:[1,2,3,4],
    salary:[450 , 500 ,550],
    
}
console.log ( emoployee1 );

// الاعلان عن المتغير التاني 

var emoployee2= {
    name:"Sara",
    age:23,
    jobTitle:"UI-UX designer",
    isManager:false,
    from:[" eygpt" , "kafr el-sheikh"],
    skills:[1,2,3,4],
    salary:[4000 , 5500 ,5050],
    
}
 console.log( emoployee2 );
 
// الاعلان عن المتغير الثالث 

var emoployee3= {
    name:"Amall",
    age:21,
    jobTitle:"Data Analyst",
    isManager:false,
    from:[" eygpt" , "Giza "],
    skills:[ 1,2,3,4],
    salary:[4500 , 5000 ,5500],
    
}
  console.log( emoployee3 );

// _________________الاعلان عن array تضم الثلاث موظفين ________________

var allEmployess=[ emoployee1 , emoployee2 , emoployee3 ];   
console.log( allEmployess);

// _________________متوسط الراتب لكل موظف    باستخدام الarry  _____________________

// متوسط الراتب للموظف الاول___________

var avgSalary1=[allEmployess[0].salary[0] + allEmployess[0].salary[1] + allEmployess[0].salary [2] ];
console.log(avgSalary1  / allEmployess[0].salary.length );

// متوسط الراتب للموظف الثاني ____________

var avgSalary2=[allEmployess[1].salary[0] + allEmployess[1].salary[1] + allEmployess[1].salary [2] ];
console.log(avgSalary2 / allEmployess[1].salary.length );

// متوسط الراتب للموظف الثالث________________

var avgSalary3=[allEmployess[2].salary[0] + allEmployess[2].salary[1] + allEmployess[2].salary [2] ];
console.log(avgSalary3  / allEmployess[2].salary.length );


// __________________متوسط الراتب ب استخدام الobject__________________________

// متوسط الراتب للموظف الاول _____________________________

 var avgSalary1=(emoployee1.salary[0]+ emoployee1.salary[1] + emoployee1.salary[2] );
 console.log(avgSalary1 / emoployee1.salary.length);
 
// متوسط الراتب للموظف الثاني  ___________________
 var avgSalary2=(emoployee2.salary[0]+ emoployee2.salary[1] + emoployee2.salary[2] );
 console.log(avgSalary2 / emoployee2.salary.length);
 

// متوسط الراتب للموظف الثالث  ___________________
 var avgSalary3=(emoployee3.salary[0]+ emoployee3.salary[1] + emoployee3.salary[2] );
 console.log(avgSalary3 / emoployee3.salary.length);
 

// اسم الموظف ووظيفته للاول______________
console.log(emoployee1.name,  emoployee1.jobTitle)
// هل هو مدير ام لا__________________
console.log(emoployee1.isManager);
// عدد المهارات ال عنده__________________
console.log(  emoployee1 .skills.length);

// اسم الموظف ووظيفته لثاني ______________
console.log(emoployee2.name,  emoployee2.jobTitle)
// هل هو مدير ام لا__________________
console.log(emoployee2.isManager);
// عدد المهارات ال عنده__________________
console.log(  emoployee2 .skills.length);

// اسم الموظف ووظيفته لثالث ______________
console.log(emoployee3.name,  emoployee3.jobTitle)
// هل هو مدير ام لا__________________
console.log(emoployee3.isManager);
// عدد المهارات ال عنده__________________
console.log(  emoployee3 .skills.length);


// متوسط الراتب للموظف الاول ___________________
 var avgSalary1=(emoployee1.salary[0]+ emoployee1.salary[1] + emoployee1.salary[2] );
 console.log( avgSalary1 / emoployee1.salary.length);
 
// مجموع مرتب اول شهرين_____________للموظف الاول_______________
console.log(emoployee1.salary[0]+ emoployee1.salary[1]);

//  ______________مجموع الرواتب لكل الموظفين مع بعض  ___________________
 var salary1 =(emoployee1.salary[0]+ emoployee1.salary[1] + emoployee1.salary[2] );
 var salary2 =(emoployee2.salary[0]+ emoployee2.salary[1] + emoployee2.salary[2] );
 var salary3 =(emoployee3.salary[0]+ emoployee3.salary[1] + emoployee3.salary[2] );
 var totalCompanySalary=( salary1 + salary2 + salary3 );
 console.log(totalCompanySalary);
 
// نوع بيانات لكل عنصر  ________________

console.log(typeof emoployee1);
console.log(typeof emoployee1.name);
console.log(typeof emoployee1.age);
console.log(typeof emoployee1.jobTitle);
console.log(typeof emoployee1.isManager);
console.log(typeof emoployee1.from);
console.log(typeof emoployee1.skills);
console.log(typeof emoployee1.salary);

console.log(typeof emoployee2);
console.log(typeof emoployee2.name);
console.log(typeof emoployee2.age);
console.log(typeof emoployee2.jobTitle);
console.log(typeof emoployee2.isManager);
console.log(typeof emoployee2.from);
console.log(typeof emoployee2.skills);
console.log(typeof emoployee2.salary);

console.log(typeof emoployee3);
console.log(typeof emoployee3.name);
console.log(typeof emoployee3.age);
console.log(typeof emoployee3.jobTitle);
console.log(typeof emoployee3.isManager);
console.log(typeof emoployee3.from);
console.log(typeof emoployee3.skills);
console.log(typeof emoployee3.salary);
console.log(typeof allEmployess);
console.log(typeof avgSalary1 );
console.log(typeof avgSalary2 );
console.log(typeof avgSalary3 );
console.log(typeof salary1 );
console.log(typeof salary2 );
console.log(typeof salary3 );


/// ___________________التاسك الاضافي________________


