function fibonacci(position) {
    if (position < 3) return 1;
    else {
    console.log("I'm fibonacci - 1: ", fibonacci(position - 1))
    console.log("I'm fibonacci - 2: ", fibonacci(position - 2))
    return fibonacci(position - 1) + (fibonacci(position - 2))
}
}

console.log(fibonacci(7))