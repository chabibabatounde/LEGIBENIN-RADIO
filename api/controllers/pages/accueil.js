/**
 * Module dependencies
 */

// ...


/**
 * pages/accueil.js
 *
 * Accueil pages.
 */
module.exports = async function accueil(req, res) {
  let variables = {};
  variables.alaune = await Programme.find({}).populate('emission').sort('id DESC').limit(100);
  return res.view('restPages/accueil', variables);
};
