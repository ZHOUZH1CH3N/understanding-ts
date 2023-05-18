let userInput: unknown
let useName: string

userInput = 5
userInput = '5'

if (typeof userInput === 'string') {
  useName = userInput
}

function generateError(msg: string, code: number): never {
  throw { message: msg, errorCode: code }
}

const result = generateError('An error occurred!', 500)
console.log(result)
