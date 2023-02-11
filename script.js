/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
PrintStudentswithMap();
addData();
concatenateArray();

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let pass = arr.filter(function (arr) {
    return arr.marks >= 50;
}).map(function (arr) {
    return arr.name;
})

console.log("Passed students are:");
  
pass.forEach(function (passed) {
    console.log(passed);
});
  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  let pass = arr.filter(function (arr) {
    return arr.marks >= 50;
}).map(function (arr) {
    return arr.name;
})

console.log("Passed students are:");
  
pass.forEach(function (passed) {
    console.log(passed);
});
  

}

function addData() {
  //Write your code here, just console.log
  var stud={id:4,name:"susan",age:"20",marks:45};
  console.log(arr.push(stud));
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  
}

function concatenateArray() {
  //Write your code here, just console.log
  
  var stud1=  { id: 5, name: "jojp", age: "17", marks: 81 };
  var stud2=  { id: 6, name: "lol", age: "21", marks: 82 };
  var stud3= { id: 7, name: "sili", age: "22", marks: 83 };

  console.log(arr.concat(stud1,[stud2,stud3]));
}
