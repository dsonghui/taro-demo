export class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyError';
        this.message = message || '未知错误';
        this.stack = (new Error()).stack;
    }
}
