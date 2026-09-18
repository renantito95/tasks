const URL = 'https://dummyjson.com/products';

async function chamarApi() {
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const obj = await resp.json();
        obj.products.forEach(produto => {
            console.log(produto.title);
        });
    }
}

chamarApi();



