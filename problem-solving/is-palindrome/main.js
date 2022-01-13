const isPalindrome = (x) => {
    let chars = x.toString()
    let head = 0
    let tail = chars.length - 1
    console.log(chars);
    while (head < tail) {
        if (chars[head] != chars[tail]) {
            return false
        }
        head++
        tail--
    }
    return true
}

const result = isPalindrome(1222223321)
result