// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'Set Null'
});
// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'Set Null'
});
// Tags belongToMany Products (through ProductTag)

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'Set Null'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
