const {
  getPolicyById,
  updatePolicyById,
  getPolicyByCustomerId,
  filterPoliciesByRegionAndDate
} = require('../controllers/insurancePolicyControllers');

const insurancePolicyRoutes = (app) => {
  app.route('/policy/:policyId')
    .get(getPolicyById)
    .put(updatePolicyById)

  app.get('/customer/:customerId', getPolicyByCustomerId)
  app.get('/filter-policy', filterPoliciesByRegionAndDate)
}

module.exports = { insurancePolicyRoutes }
