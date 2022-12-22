const mongoose = require("mongoose");

const conectarDB = async () => {
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://henrdeld:04197227HD.0@cluster0.hod0jly.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB conectado en :${url}`);


    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1);

    }    
};
module.exports = conectarDB;