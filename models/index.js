// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'Set Null'
});
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


// Products belongToMany Tags (through ProductTag)
// ProductTag.hasMany(Product, {
//   foreignKey: 'product_id',
//   onDelete: 'Set Null'
// });


 Tag.belongsToMany(Product, {
 through: {
   model: ProductTag,
   as: 'tag'
 }
 
});

Product.belongsToMany(Tag, {
  through: {
  model: ProductTag,
  as: 'product'
}});

// Tags belongToMany Products (through ProductTag)
// Tag.hasMany(ProductTag, {
//   foreignKey: 'tag_id',
//   onDelete: 'Set Null'
// });

// Tag.belongsto(ProductTag, {
//    foreignKey: 'tag_id',
//  })


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
