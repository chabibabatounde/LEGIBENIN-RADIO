/**
 * Module dependencies
 */

// ...


/**
 * pages/emissions.js
 *
 * Emissions pages.
 */
module.exports = async function emissions(req, res) {

  let variables = {};
  variables.emissions = await Emission.find({}).sort('nomEmission ASC');
  return res.view('restPages/emissions', variables);

};
