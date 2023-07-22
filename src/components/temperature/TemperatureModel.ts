export default class TemperatureModel {
    readonly temperature: number;

    public constructor(temperature: number) {
        this.temperature = temperature;
    }

    public fromCelciusToFahrenheit() {
        return Math.round((this.temperature * 1.8) + 32);
    }
    public fromCelciusToKelvins() {
        return Math.round(this.temperature + 273);
    }

    public fromFahrenheitToCelsius() {
        return Math.round((this.temperature - 32) / 1.8);
    }
    public fromFahrenheitToKelvins() {
        return Math.round((this.temperature - 32) * 5 / 9 + 273);
    }

    public fromKelvinsToFahrenheit() {
        return Math.round((this.temperature - 273) * 1.8 + 32);
    }
    public fromKelvinsToCelsius() {
        return Math.round(this.temperature - 273);
    }

    private convertToCelsius(tempSelectedIndex: number) {
        if (tempSelectedIndex == 1) {
            return (this.temperature - 32) / 1.8;
        }
        else if (tempSelectedIndex == 2) {
            return this.temperature - 273;
        }
        else {
            return this.temperature;
        }
    }

    public getBackgroundColor(tempSelectedIndex: number) {
        const temperatureInCelsius = this.convertToCelsius(tempSelectedIndex);

        let backgroundColor = "";

        if (temperatureInCelsius < 10) {
            backgroundColor = "rgba(20, 150, 255, 0.3)"
        }
        else if (temperatureInCelsius >= 10 && temperatureInCelsius <= 25) {
            backgroundColor = "rgba(230, 190, 86, 0.5)";
        }
        else if (temperatureInCelsius >= 26 && temperatureInCelsius <= 45) {
            backgroundColor = "rgba(238, 100, 50, 0.7)";
        }
        else {
            backgroundColor = "rgba(255, 50, 20, 0.9)";
        }

        return backgroundColor;
    }
}