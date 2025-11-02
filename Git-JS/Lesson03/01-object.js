const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
}

console.log(car.make);
console.log(car.model);

const person = {
    name: '',
    address: {
        street: '50 Nguyen Van Linh, Da Nang',
        city: '',
        country: ''
    }
}
//thêm thuộc tính
person["note"] = "new para";

console.log("người này sống tại đường: ", person.address.street);
console.log("new para:", person.note)

// tạo object student
const student = {
    name: 'John Doe',
    grades: {
        english: 8.5,
        math: 7.5,
    }
}

//truy cậo đến điểm môn toán
console.log("điểm toán: ", student.grades.math);

//object settings

const settings = {
    volume: 12,
    brightness: 80,
    theme: 'dark',
}

let a = settings.volume = 20; //cập nhật thuộc tính volume
console.log("new volumne: ", a);

//object bike
const bike = {
    brand: 'Giant',
    type: 'Mountain',
    gears: 21,
}

let b = bike["color"] = "black"

console.log(bike);

//object employee
const employee = {
    name: 'Alice',
    age: 30
}
delete employee['age'];
console.log(employee);

//school
const school = {
    classA: ["Giang", "An", "Bình"],
    classB: ["Hùng", "Tuấn", "Dũng"],
}

console.log("Học sinh lớp A: ", school.classA);
console.log("Học sinh lớp B: ", school.classB);
