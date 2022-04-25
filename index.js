const count = (() => {
    let x = 0
    return () => {
        x++
        return x
    }
})()

function main() {
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
    console.log(count());
}

main()