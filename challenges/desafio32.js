// Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5
db.produtos.find({}, { _id: 0, nome: 1, descricaoSite: 1 }).pretty();