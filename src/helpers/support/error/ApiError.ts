export class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ApiError';
        this.message = message || '未知错误';
        this.stack = (new Error()).stack;
    }
}
