export default class PitagorasModel {
    #hipotenusaOuCatetoB: number
    #catetoC: number

    public constructor(hipotenusaOuCatetoB: number, catetoC: number) {
        this.#hipotenusaOuCatetoB = hipotenusaOuCatetoB;
        this.#catetoC = catetoC;
    }

    public buildFormula(): any {
        const { sum1, sum2 } = this.getSumResult();

        const formula = `
            <p>${this.#hipotenusaOuCatetoB}² + ${this.#catetoC}² = x²</p>
            <p>${sum1()} + ${sum2()} = x²</p>
            <p>x =  √${sum1() + sum2()}</p>
        `;

        return {__html: formula};
    }

    public getSumResult() {
        const sum1 = this.#hipotenusaOuCatetoB ** 2;
        const sum2 = this.#catetoC ** 2;

        return {
            finalResult: () => Math.round(Math.sqrt(sum1 + sum2)),
            sum1: () => sum1,
            sum2: () => sum2
        }
    }
}