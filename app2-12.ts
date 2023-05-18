// const person: {
//   name: string
//   age: number
// } = {
// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}

if (person.role === Role.AUTHOR) {
  console.log('is read only')
}
