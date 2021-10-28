
const products = [
    { id: 1, title: 'Sofá Dior', price: '55000$', pictureUrl: 'assets/images/dior.jpg', stock:3 },
    { id: 2, title: 'Sofá Toledo', price: '46000$', pictureUrl: 'assets/images/toledo.jpg', stock: 2 },
    { id: 3, title: 'Sofá Chester', price: '60000$', pictureUrl: 'assets/images/chester.jpg', stock: 3},
    { id: 4, title: 'Sofá Escandinavo Curvo', price: '41000$', pictureUrl: 'assets/images/escandinavo-curvo-pata-madera.jpg', stock:5 },
];

const Item = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        resolve(products)
    }, 2000)
})
    

export default Item