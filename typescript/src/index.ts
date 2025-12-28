var personName:string = 'Arham' //inference type

// personName = 123

var age:number | string = 123

interface UserInterface {
    personName : string
    age: number
    isGraduate: boolean
}

interface newInterface extends UserInterface{
    dataOfBirth: string
    nationality: string
}

let user:newInterface = {
    personName : 'Arham',
    age: 23,
    isGraduate: true,
    dataOfBirth: '12-02-2001',
    nationality: 'Pakistani'
}

