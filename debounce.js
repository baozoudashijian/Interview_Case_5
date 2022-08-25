const debounce = (fn, time) => {
    let timer
    return () => {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, time)
    }
}