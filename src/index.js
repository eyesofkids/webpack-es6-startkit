//@flow

const obj = {a:1}

function func(x: number): any {
  const that = this

  setTimeout(
    function(){
      console.log(that)
    }, 2000)

  return x
}

func.call(obj, 1) //Object {a: 1}
