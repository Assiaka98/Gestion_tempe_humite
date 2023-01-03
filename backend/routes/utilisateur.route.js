const express = require('express');
const app = express();
const utilisateurRoute = express.Router();
// Employee model
let Utilisateur = require('../models/utilisateurModel');
// Add Employee
utilisateurRoute.route('/create').post((req, res, next) => {
 Utilisateur.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All Employees
utilisateurRoute.route('/').get((req, res) => {
  Utilisateur.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single employee
utilisateurRoute.route('/read/:id').get((req, res) => {
  Utilisateur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee
utilisateurRoute.route('/update/:id').put((req, res, next) => {
  Utilisateur.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete employee
utilisateurRoute.route('/delete/:id').delete((req, res, next) => {
  Utilisateur.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = utilisateurRoute;