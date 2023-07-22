export default class FinancingModel {
    readonly vehicleValue: number;
    readonly entry: number;
    readonly installments: number;

    public constructor(vehicleValue: number, entry: number, installments: number) {
        this.vehicleValue = vehicleValue;
        this.entry = entry;
        this.installments = installments;
    }

    public getValueFinanced(): number {
        let valueFinanced = 0;

        if(this.entry !== 0) {
            valueFinanced = this.vehicleValue - this.entry;
        } else {
            valueFinanced = this.vehicleValue;
        }

        return valueFinanced;
    }

    public getTotalWithFees() {
        const totalFinanced = this.getValueFinanced();

        //30% per year
        const fees = (28.32 / 100);

        return totalFinanced + (totalFinanced * (fees));
    }

    public getInstallmentsValue() {
        const totalWitFees = this.getTotalWithFees();
        return Number.parseInt((totalWitFees / this.installments).toFixed(2));
    }

    public getTotalWithEntry() {
        const totalWithFees = this.getTotalWithFees();
        return totalWithFees + this.entry;
    }

    public getTotalFeesPaid() {
        let totalFeesPaid = 0;

        if(this.entry) {
            totalFeesPaid = this.getTotalWithEntry() - this.vehicleValue;    
        } else {
            totalFeesPaid = this.getTotalWithFees() - this.vehicleValue;
        }

        return totalFeesPaid;
    }
}