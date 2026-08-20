type User = {
    name: string,
    age: number,
    city: string,
}

const formatUserProfile = (user: User) => {

    return `${user.name} is ${user.age} years old and lives in ${user.city}.`
}
//test casess
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}))