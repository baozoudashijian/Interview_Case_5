const ajax = {
    get: function(url, cb) {
        let xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.send(null)
        xhr.onreadystatechange = function(data) {
            if(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                cb(data)
            }
        }
    },
    post: function(url, data, cb) {
        let xhr = new XMLHttpRequest()
        xhr.open('post', url)
        xhr.send(data)
        xhr.onreadystatechange = function(data) {
            if(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                cb(data)
            }
        }
    }
}