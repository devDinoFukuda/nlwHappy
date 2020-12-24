const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.222633", 
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "011 95296-1716",
    images: [
      "https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1601758066233-2dc181fb3380?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ].toString(),
    instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Visitação das 8hs às 18hs.",
    open_on_weekends: "0"

  })
  /*
  await db.run(`
  INSERT INTO orphanages (
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
  ) VALUES (
    "-27.2145",
    "-49.6435",
    "Lar das meninas",
    "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    "011 95296-1716",
    "https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
    "Visitação das 8hs às 18hs.",
    "1"



  )
  `)*/
/*
  //consultar dados da tabela
  // o comando * abaixo, significa selecionar todos os campos
 const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages) 
*/
  /*
  //consultar somente 1 orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  console.log(orphanage)
  */


/*
  //deletando dados da tabela
  //OBS: deletando algum id por exemplo o 4, o mesmo não sera mais utilizado 
  console.log(await db.run("DELETE FROM orphanages WHERE id = '10'"))
*/
})