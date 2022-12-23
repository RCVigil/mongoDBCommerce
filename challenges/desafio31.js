// Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos
db.produtos.find({}, { _id: 0, nome: 1, descricaoSite: 1 }).pretty();