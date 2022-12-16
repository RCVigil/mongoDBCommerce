db.produtos.find({ $and: [
  { vendidos: { $gt: 50, $lt: 100 } }] },
  { _id: false, nome: true, vendidos: true }).sort({ vendidos: 1 }); 