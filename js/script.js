// let o = [] array 

/*let p = {
    property:value
    n1:'a',
    n2:'m',
    n3:'b',
    n4:'h',
    function myF(h){
        console.log(h)
    }
    functions/methods

myF('Hello')
} js objects*/

var student = {
    'name' : 'Dev',
    'sname' : "kumar",
    address : `mathurapur`,
    friends :['Raju','Kriti',`Dipu`,'Salu'], //Js object conatining array 
    teachers : [
                {
                    name:"suraj",
                    sname:'thakur'
                },
                {
                    name:'neha',
                    sname:'sharma'
                },
                {
                    name:'soni',
                    sname:"kumari"
                }
               ],// array of objects
    
    sister : {
        name:'Saloni',
        Contact:'84575457',
        hobbi:['writting','cycling',`Reading`]
    }
}
//object.member
console.log(student.name)
//object[propertyname]
// console.log[address[2]] -> not working

console.log(student);
console.log(student.address);
console.log(student.friends[0]);
console.log(student.friends[2]);
console.log(student.friends.length);
console.log(student.name+' have '+student.friends.length+' friends');
//Dev have 2 teachers
console.log(student.name + ' have '+student.teachers.length+' teachers')

// now for printing tha teacher name with his surname we have to use for loop

for(var i=0;i<student.teachers.length;i++){
    console.log(student.teachers[i].name+' '+student.teachers[i].sname);
}


var x1 = ['Sunil', student] //Array is contaning Js object

console.log(x1);