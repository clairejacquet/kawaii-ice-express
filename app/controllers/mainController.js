
// const path = require('path');
const icePops = require('data.json');
// console.log(icePops.name);

// const dataMapper = require('../dataMapper');

const mainController = {

  homePage: (request, response) => {
    response.render('index');
  },

  aboutPage: (request, response) => {
    response.render('about');
  },

  flavoursPage: (request, response) => {

    const icePops = require('data.json');
    // console.log(icePops);


    response.render('flavours');
  }

};

module.exports = mainController;
