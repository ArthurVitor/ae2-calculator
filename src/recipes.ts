import Item from "./interfaces/item.i";

const recipes: Item[] = [
    {
        name: "1k",
        ingredients: [
            { name: "Redstone", quantity: 4 },
            { name: "Certus Quartz Crystal", quantity: 4 },
            { name: "Logic Processor", quantity: 1 },
        ]
    },
    {
        name: "4k",
        ingredients: [
            { name: "Redstone", quantity: 4 },
            { name: "Calculation Processor", quantity: 1 },
            { name: "1k", quantity: 3 },
            { name: "Quartz Glass", quantity: 1 },
        ]
    }
];

export default recipes;
