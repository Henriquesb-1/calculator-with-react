import Operation from "./Operation";

export default class Calculator {
    private _memory = [0, 0];
    private _result = 0

    public get memory(): number[] {
        return this._memory;
    }

    public set memory(memory: number[]) {
        this._memory = memory;
    }

    public cleanMemory(): void {
        this._result = 0;
        this._memory = [0, 0];
    }

    public getCurrentOperationInString(operation: Operation): string {
        let currentOperation = "";

        switch(operation) {
            case Operation.SUM:
                currentOperation =  "+";
            break;

            case Operation.SUBTRACTION:
                currentOperation = "-";
            break;

            case Operation.MULTIPLICATION:
                currentOperation = "x";
            break;

            case Operation.DIVISION:
                currentOperation = "/";
            break;
        }

        return currentOperation;
    }

    private fixValue(value: number): number {
        return Number.parseFloat(value.toFixed(2));
            
    }

    public calculate(operation: Operation, callback?:() => void): number {
        switch(operation) {
            case Operation.SUM:
                this._result = this._memory[0] + this._memory[1];
            break;

            case Operation.SUBTRACTION:
                this._result = this._memory[0] - this._memory[1];
            break;

            case Operation.MULTIPLICATION:
                this._result = this._memory[0] * this._memory[1];
            break;

            case Operation.DIVISION:
                this._result = this.fixValue(this._memory[0] / this._memory[1]);
            break;

            case Operation.SQUARE:
                const sqrt = Math.sqrt(this._memory[0]);
                this._result = this.fixValue(sqrt);
            break;

            case Operation.CLEAN:
                this.cleanMemory();
            break;
        }

        this._memory = [this._result, 0];

        if(callback) callback();

        return this._result;
    }

}