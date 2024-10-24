export default interface Item {
    name: string;
    ingredients: {
        name: string;
        quantity: number;
    }[];
}