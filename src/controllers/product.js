module.exports = {
    detail: (req, res) => res.render('products/detail'),
    cart: (req, res) => res.render('products/cart'),
    create: (req, res) => res.render('products/create'),
    edit: (req, res) => res.render('products/edit') 
}