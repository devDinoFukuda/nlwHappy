//chamando o banco de dados para as páginas
//OBS: await somente funciona com async
const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");


module.exports = {
  index(req, res) {
    return res.render('index')
  },

  async orphanage (req, res){
    const id = req.query.id;
    try {
      //colocar o orphanage pelo banco
    const db = await Database;  
    const results = await db.all(`SELECT * FROM orphanages WHERE ID = "${id}"`);
    const orphanage = results[0]

    

    orphanage.images = orphanage.images.split(",");
    orphanage.firstImage = orphanage.images[0]

    if(orphanage.open_on_weekends =="0"){
      orphanage.open_on_weekends = false
    }else{
      orphanage.open_on_weekends = true
    }
    return res.render('orphanage', { orphanage })
    } catch (error) {
      console.log(error)
      return res.send('Erro no Banco de dados!')      
    }

  },
  async orphanages (req, res) {
    try {
      //colocar o orphanage pelo banco
    const db = await Database;  
    const orphanages = await db.all("SELECT * FROM orphanages")
    return res.render('orphanages', { orphanages })
    } catch (error) {
      console.log(error)
      return res.send('Erro no Banco de dados!')      
    }

  },


  createOrphanage(req, res) {
    return res.render('create-orphanage')

  },

  async saveOrphanage (req, res) {
    const fields = req.body

    //validar se todos os campos estão preenchidos
    if(Object.values(fields).includes('')) {
      return res.send('Todos os campos devem ser preenchidos!')
    }

    try {
    //salvar orfanato
    const db = await Database
    await saveOrphanage(db, {
      lat: fields.lat,
      lng: fields.lng,
      name: fields.name,
      about: fields.about,
      whatsapp: fields.whatsapp,
      images: fields.images.toString(),
      instructions: fields.instructions,
      opening_hours: fields.opening_hours,
      open_on_weekends: fields.open_on_weekends
    });

    //redirecionamento
    return res.redirect('/orphanages')

  } catch (error) {
    console.log(error)
    return res.send('Erro no Banco de dados')
  }


  }
 
  
}

Database.then(async db => {
 /* await saveOrphanage(db, {
    lat: "-27.222633", 
    lng: "-49.5555874",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "011 95296-1716",
    images: [
      "https://images.unsplash.com/photo-1533768814-130e2bd177b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80"
    ].toString(),
    instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Visitação das 8hs às 18hs.",
    open_on_weekends: "1"

  })

  
 
  //consultar dados da tabela
  // o comando * abaixo, significa selecionar todos os campos
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages) 
*/
})  




 