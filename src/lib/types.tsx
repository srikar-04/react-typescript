export type ButtonColor = 'blue' | 'green' | 'yellow' | 'red'

export interface Price {
    [currency: string]: number
};

// export interface Currency<Base extends string> {
//     // date: string;
//     // [k in Base]: Price;
// };

export type Currency<Base extends string> = {
    date: string;
} & {
    [k in Base]: Price
}

