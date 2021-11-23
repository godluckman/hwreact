class HashStorage {
    constructor() {
        this._storage = {}
    }

    addValue(key, value) {
        if (!(key in this._storage)) {

            return this._storage[key] = value;
        } else {

            return this._storage[key + ' new'] = value;
        }

    }

    getValue(key) {
        if (!(key in this._storage)) {

            return false
        } else {

            return this._storage[key]
        }
    }

    deleteValue(key) {
        if (!(key in this._storage)) {
            console.log('Такого коктейля нет!');
            alert('Такого коктейля нет!');
            return false
        } else {
            console.log('Коктейль удален');
            alert('Коктейль удален');
            return delete this._storage[key]
        }
    }

    getKeys() {
        return Object.keys(this._storage);
    }

}

const coctailsStorage = new HashStorage();
coctailsStorage.addValue('Маргарита', {
    name: 'Маргарита',
    isAlco: 'да',
    ing: `Водка Finlandia 50мл
         Кофейный ликер 25мл
         Лед в кубиках 120 г`,
    recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'
});
coctailsStorage.addValue('Пеликан', {
    name: 'Пеликан',
    isAlco: 'нет',
    ing: `Гренадин Monin 10мл
         Клубничный сироп Monin 10мл
         Персиковый сок 150мл
         Лимонный сок 15мл
         Банан 110г
         Клубника 50г
         Дробленый лед 60г`,
    recipe: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'
});

const addButton = document.getElementById('add');
addButton.onclick = function() {
    const n = prompt('Введите название коктеля');
    const alko = confirm('Напиток алкогольный?') ? 'да' : 'нет';
    const ingredients = prompt('Необходимые ингредиенты:');
    const recipe = prompt('рецепт приготовления:');
    coctailsStorage.addValue(n, { name: n, isAlco: alko, ing: ingredients, recipe: recipe });
    console.log('Коктейль добавлен', coctailsStorage.getValue(n));
}



const deleteButton = document.getElementById('delete');
deleteButton.onclick = function() {
    const k = prompt('Какой рецепт удалить?');
    coctailsStorage.deleteValue(k);

}

const getButton = document.getElementById('get');
getButton.onclick = function() {
    console.log(coctailsStorage.getKeys());
}

const recipeButton = document.getElementById('recipe');
recipeButton.onclick = function() {
    const n = prompt('Введите название коктеля');
    const coc = coctailsStorage.getValue(n);
    console.log(
        `Коктейль "${n}" (алкогольный: ${coc.isAlco})
         Необходимые ингредиенты: 
         ${coc.ing}
         Рецепт приготовления:
         ${coc.recipe}`
    );
}