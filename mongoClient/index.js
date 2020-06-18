const mongoose = require('mongoose');

// process.env.MI_VARIABLE_DE_ENTORNO -> asi accedemos a variables de entorno

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('database connected'))
    .catch(() => console.log('error connecting to database...'));