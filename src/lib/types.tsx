export type ButtonColor = 'blue' | 'green' | 'yellow' | 'red'

export interface Price {
    [currency: string]: number
};


export type Currency<Base extends string> = {
    date: string;
} & {
    [k in Base]: Price
}

export type TCurrencyInput = {
    label: 'From' | "To",
    currencyValue: number,
    currencyList: string[],
    onCurrencyChange(currency: string): void
    onAmountChange?(amount: number): void
    value: string
}