/**
 * Module dependencies
 */

// ...


/**
 * app/accueil.js
 *
 * Accueil app.
 */
module.exports = async function accueil(req, res) {
  let variables = {};
  variables.alaune = await Programme.find({}).populate('emission').sort('id DESC').limit(100);
  return res.view('app/single-page', variables);
};
