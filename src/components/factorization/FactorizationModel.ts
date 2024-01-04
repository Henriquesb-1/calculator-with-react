interface resultsInterface {
    divideBy: number;
    remaining: number;
}

export default class factorizationModel {
    #numberToFactorize: number;

    public constructor(number: number) {
        this.#numberToFactorize = number;
    }

    private getDivisor(number: number) {
        let divisor = 0;

        for(let i = 2; i <= 7 ; i++) {
            if(number % i === 0) {
                divisor = i;
                break;
            } else {
                divisor = number;
            }
        }

        return divisor;
    }

    private factorization(number: number) {
        const results: resultsInterface[] = [];

        while(number > 1) {
            const divisorNumber = this.getDivisor(number);
            results.push({divideBy: divisorNumber, remaining: number});
            number /= divisorNumber;
        }

        return results;
    }

    public getResult() {
        return this.factorization(this.#numberToFactorize);
    }
}