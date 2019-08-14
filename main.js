const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')

const csvpath = path.join(__dirname,'customer-data.csv')


csvtojson().fromFile(csvpath).then((jsonres)=>{
//  console.log(jsonres)
  fs.writeFileSync(path.join(__dirname,'jsonconvert.json'),JSON.stringify(jsonres),function(error){
    if(error) return console.log(error.message)
  })
  console.log('*** done converting *** ')
}

)
