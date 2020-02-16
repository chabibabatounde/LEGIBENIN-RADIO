/**
 * Module dependencies
 */

// ...


/**
 * pages/emission.js
 *
 * Emission pages.
 */
module.exports = async function emission(req, res) {
  let variables = {};
  variables.emission = await Emission.find({id:req.param('page')}).populate('podcast');
  variables.emission = variables.emission[0]
  return res.view('restPages/emission', variables);
};
