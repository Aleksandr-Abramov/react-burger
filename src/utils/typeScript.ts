export interface IIngredientDetails {
    ingredientsData: {
      _id: string;
      type: string;
      image_large: string;
      image_mobail: string;
      image: string;
      name: string;
      calories: number;
      proteins: number;
      fat: number;
      carbohydrates: number;
      price: number
    }[];
}

export interface IIngridients {
      _id: string;
      type: string;
      image_large: string;
      image_mobail: string;
      image: string;
      name: string;
      calories: number;
      proteins: number;
      fat: number;
      carbohydrates: number;
      price: number;
      key?:string;
}