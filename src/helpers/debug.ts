const isProduction = process.env.NODE_ENV === 'production';
export default (name) => {
    return function (...arg) {
        if (!isProduction) {
            console.log.apply(null, [name].concat([].slice.call(arg)))
        }
    }
}
