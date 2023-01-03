const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// je dois l'importer const uniqueValidator = require('mongoose-unique-validator');
// Voici le modele de données pour un utilisateur
let userSchema = new Schema({
    prenom: { type: String, required:true },
    nom: { type: String, required:true },
    email: { type: String, unique: true, required:true },
    role: { type: String, required:true },
    password: { type: String, required:true },
    etat: { type: Boolean, required:false },
    imageUrl: { type: String, required:false },
    matricule: { type: String, required:true }
}, {timestamps: true},
{
    // Le nom de notre collection
    collection: 'masifacCollection'
})

// à decommenter si uniqueValidator est importé userSchema.plugin(uniqueValidator, { message: 'Email existe déjà.' });

module.exports = mongoose.model('masifacCollection', userSchema)
