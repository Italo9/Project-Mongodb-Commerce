db.produtos.updateOne({ nome: { $eq: "Big Mac" } }, { $push: { ingredientes: { $each: ["bacon"] },
} });
db.produtos.updateOne({ nome: { $eq: "Quarteirão com Queijo" } },
 { $push: { ingredientes: { $each: ["bacon"] },
} });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });