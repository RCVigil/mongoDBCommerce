db.produtos.find({ $nor: [
  { vendidos: 50 }, { tags: { $exists: true } }] },
  { _id: false, nome: true, vendidos: true }); 