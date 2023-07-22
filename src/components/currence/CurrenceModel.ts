export default class CurrenceModel {
    #currence: number;

    public constructor(currence: number) {
        this.#currence = currence;
    }

    get currence() {
        return this.#currence;
    }
    set currence(currence: number) {
        this.#currence = currence;
    }

    private fixCurrence(currence: number) {
        return currence
            .toFixed(2)
            .toString()
            .replace(".", ",")
    }

    public toDolar(currencePrice: number) {
        return this.fixCurrence((this.#currence / currencePrice));
    }

    public toEuro(currencePrice: number) {
        return this.fixCurrence((this.#currence / currencePrice));
    }
}