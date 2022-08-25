const throttle = (fn, time) => {
    let timer
    return () => {
        if(!timer) {
            timer = setTimeout(() => {
                fn()
                timer = null
            }, time)
        }
    }
}