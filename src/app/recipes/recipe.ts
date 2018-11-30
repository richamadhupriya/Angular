import { Ingredient } from "../shared/ingredients";

export class Recipe
{
    name:string;
    description:string;
    imageUrl:string;
    ingredient:Ingredient[];

    constructor(name:string,description:string,imageUrl:string,ingredient:Ingredient[]){
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ingredient = ingredient;
    }
}