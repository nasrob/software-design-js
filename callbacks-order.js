// const red = () => { 
//     console.log('RED')
// }

// const green = (func) => { 
//     console.log('GREEN ')
//     func ()
// }

// const blue = (left, right) => { 
//     console.log('BLUE') 
//     left(right)
// }

// blue(green , red)

const blue2 = (left, right) => { 
    console.log('BLUE-2') 
    left(right)
}

blue2(
    (callback) => {
        console.log('GREEN-2')
        callback ()
    },
    () => console.log('RED-2')
)