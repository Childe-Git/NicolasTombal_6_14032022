const mongoose = require('mongoose');
// importation du plugin mongoose-unique-validator, permet de recevoir des erreurs plus précise et clair en cas d'erreur 
const uniqueValidator = require('mongoose-unique-validator');

// Schema des utilisateurs  
const userSchema = mongoose.Schema({
    email : { type: String, require: true, unique: true },
    password: { type: String, required: true }
});

// Utilisation du plugin mongoose-unique-validator 
userSchema.plugin(uniqueValidator);

// Exportation du modèle User, donc userSchema  
module.exports = mongoose.model('User', userSchema);