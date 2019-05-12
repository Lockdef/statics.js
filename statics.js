let stats  = {
    sum : num_array => {
        let result = 0
        for (num of num_array) {
            result += num
        }
        return result
    },
    mean : num_array => stats.sum(num_array) / num_array.length,
    dev : num_array => {
        let mean = stats.mean(num_array)
        let result = []
        for (num of num_array){
            result.push(num - mean)
        }
        return result
    },
    var : num_array => {
        dev_square = []
        for (num of stats.dev(num_array)){
            dev_square.push(num**2)
        }
        return (1 / num_array.length) * stats.sum(dev_square)
    },
    std : num_array => Math.sqrt(stats.var(num_array))
}