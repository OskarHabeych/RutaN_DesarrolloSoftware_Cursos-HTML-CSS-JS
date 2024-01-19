function challenge(shoppingList) {
	let lista1 = ['lentils', 'beans', 'chickpeas', 'corn']; 
	let lista2 = ['cassava', 'potato', 'banana', 'arracacha', 'tomato', 'onion'];
	let lista3 = ['meat', 'chicken', 'fish', 'eggs', 'sausage'];
	let lista4 = ['yogurt', 'milk', 'jelly', 'cheese', 'jam', 'grapes', 'strawberries', 'blackberries'];

	shoppingList = [...lista1, ...lista2, ...lista3, ...lista4]
	
	if (shoppingList[0].length <= 4) {
		return shoppingList[0][0];
	} /*else if (shoppingList[lista2].length >= 4 && shoppingList[lista2].length < 7) {
		return shoppingList[lista2][5];
	} else if (shoppingList[lista3].length >= 5) {
		return shoppingList[lista3][4];
	} else if (shoppingList[lista4].length <= 8) {
		return shoppingList[lista4][5];
	}*/
}