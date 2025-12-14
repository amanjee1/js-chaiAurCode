const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstrouctor : "Hitesh"
}

const {courseInstrouctor : instrctr} = course//besides using course.courseInstroucter we use instrctr --> destructure of object
console.log(instrctr);
