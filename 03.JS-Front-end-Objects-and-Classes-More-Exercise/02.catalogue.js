function solve(array) {
    let catalogue = {};

    for (const line of array) {
        let [name, price] = line.split(' : ');
        let firstChar = name[0];

        if (!catalogue.hasOwnProperty(firstChar)) {
            catalogue[firstChar] = [];
        }
        catalogue[firstChar].push({name, price});
    }

    for (let key of Object.keys(catalogue).sort()) {
        console.log(key);
        for (let prod of catalogue[key].sort((a, b) => a.name.localeCompare(b.name))) {
            console.log(` ${prod.name}: ${prod.price}`);
        }
    }
}