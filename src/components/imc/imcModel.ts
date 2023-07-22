export default class imcModel {
    #weight: number;
    #height: number;

    public constructor(weight: number, height: number) {
        this.#weight = weight;
        this.#height = height;
    }

    get height() {
        const heightInString = this.#height.toString();
        const addPoint = heightInString.charAt(0) + ".";
        return Number.parseFloat(addPoint + heightInString.substring(1));
    }

    public getImc() {
        return Number.parseFloat((this.#weight / (this.height * this.height)).toFixed(2));
    }

    public getImcStatus(): string {
        const imc = this.getImc();
        let status = "";

        if (imc <= 15) status = "Você está muito abaixo do seu peso ideal - Magreza Extrema";
        else if (imc > 15 && imc < 18.5) status = "Você está abaixo do seu peso ideal";
        else if (imc > 18.5 && imc < 24.9) status = "Você está no seu peso ideal";
        else if (imc > 24.9 && imc < 29.9) status = "Você está um pouco acima do seu peso ideal";
        else if (imc > 29.9 && imc < 34.9) status = "Você está com Obesidade Grau I - Obesidade Leve";
        else if (imc > 34.9 && imc < 39.9) status = "Você está com Obesidade Grau II - Obesidade Moderada";
        else status = "Você está com Obesidade Grau III - Obesidade Mórbida";

        return status;
    }

    public getImcStatusColor() {
        const imc = this.getImc();
        let color = "";

        if (imc <= 15) color = "rgb(0, 63, 136)";
        else if (imc > 15 && imc < 18.5) color = "rgb(0, 136, 106)";
        else if (imc > 18.5 && imc < 24.9) color = "#008000";
        else if (imc > 24.9 && imc < 29.9) color = "rgb(136, 134, 0)";
        else if (imc > 29.9 && imc < 34.9) color = "rgb(136, 88, 0)";
        else if (imc > 34.9 && imc < 39.9) color = "rgb(136, 39, 0)";
        else color = "rgb(136, 0, 0)";

        return color;
    }

    public getIdealWeight() {
        const minimumImc = 19;
        const maximumImc = 25;

        return {
            minimumWeight: () => Math.round(minimumImc * (this.height * this.height)),
            maximumWeight: () => Math.round(maximumImc * (this.height * this.height))
        }
    }
}