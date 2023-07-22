export default class BhaskaraModel {
    readonly a: number;
    readonly b: number;
    readonly c: number;

    public constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDelta(): number {
        return (this.b) * 2 - 4 * this.a - this.c;
    }

    public getX1(): number {
        const fator = Math.sqrt(this.getDelta());
        return Math.round((this.b - fator) / (2 * this.a));
    }

    public getX2(): number {
        const fator = Math.sqrt(this.getDelta());
        return Math.round((this.b + fator) / (2 * this.a));
    }
}