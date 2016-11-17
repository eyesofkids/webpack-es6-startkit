// @flow

const obj = { a: 1 }

function func(x: number): any {
  const that = this

  setTimeout(
    () => console.log(that)
    , 2000)

  return x
}


func.call(obj, '123')   // Object {a: 1}
