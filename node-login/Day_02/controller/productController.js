const Product = require('../model/productModel');

exports.create = (req, res) => {
    // console.log(req.body);
    let product = new Product(req.body)
    product.save((err, data) => {
        // console.log('I am here', data, err)
        if(err) return res.render('Err', {err});
        // res.send('done');
        res.render('productSave', {product: data});
    });
};


exports.show = async (req, res) => {
    let added = false;
    if(req.query.productName){
        added = true;
    }
    const page = req.query.page;
    const count = await Product.countDocuments();
    const totalPages = Math.ceil(count/10);

    await Product.find({})
    .limit(10)
    .skip((page - 1)*10)
    .sort('name')
    .exec((err, data) => {
        if(err) return res.render('Err', {err});
        res.render('ProductPage', {product: data, page, totalPages, added, productName: req.query.productName});
    })
};

exports.productTaken = async (id) => {
    console.log(id);
    let name
    await Product.findOne({_id: id}, (err, product) => {
        if(err) return console.log(err)
        product.quantity -= 1;
        product.save((err) => console.log(err));
        // console.log(product.name, 'in product');
        name = product.name;
    });
    return name;
};