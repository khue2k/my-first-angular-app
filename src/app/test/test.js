function getProductId(id){
  return {
    id:id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}

const product=getProductId(12)
console.log(product.id+" "+product.NAME);
