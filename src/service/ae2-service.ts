
import Item from "../interfaces/item.i";
import ItemToCraft from "../interfaces/itemToCraft.i";
import _recipes from "../recipes";

interface IngredientsList {
    name: string,
    quantity: number
}

function findItem(item: ItemToCraft) {
    return _recipes.find(rec => rec.name == item.itemName)
}

function getIngredients(ingredientsList: IngredientsList[], item: Item, quantity: number) {
    item.ingredients.forEach(ingr => {
        const ingredientFound: IngredientsList | undefined = ingredientsList.find(ingredient => ingredient.name == ingr.name)
        if (ingredientFound) {
           ingredientFound.quantity += ingr.quantity * quantity
        }

        ingredientsList.push({name: ingr.name, quantity: ingr.quantity * quantity});
    });
}

function getRecipes(itensToCraft: ItemToCraft[]): IngredientsList[] {
    const neededIngredients: IngredientsList[] = []
    itensToCraft.forEach(itemToCraft => {
        const foundItem: Item | undefined = findItem(itemToCraft);
        
        if (foundItem) {
            getIngredients(neededIngredients, foundItem, itemToCraft.quantity);
        }
    });
    
    return neededIngredients;
}

export default { getRecipes };
