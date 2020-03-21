import { Server } from 'http'

declare global {
  namespace NodeJS {
    interface Global {
      __appServer__: Server,
    }
  }
  // namespace jest {
  //   interface Matchers<R> {
  //     toContainObject(value: object): CustomMatcherResult;
  //   }
  // }
}

// expect.extend({
//   toContainObject(received, argument) {

//     const pass = this.equals(received,
//       expect.arrayContaining([
//         expect.objectContaining(argument)
//       ])
//     )

//     if (pass) {
//       return {
//         message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
//         pass: true,
//       }
//     } else {
//       return {
//         message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
//         pass: false,
//       }
//     }
//   }
// })
