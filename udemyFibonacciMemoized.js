function fibMemo(index, cache) {
    // index: index of number in fibonacci sequence
    // cache: an array used as memory
    cache = cache || [];
    if (cache[index]) return cache[index]
    else {
        if (index < 3) return 1;
        else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    console.log(cache)
    return cache[index];
}

// With Memoized fibonacci, the memo part means that each subsequent number is calculated, however all preceding numbers will be pulled from cache instead of calculated each time.
console.log(fibMemo(40));