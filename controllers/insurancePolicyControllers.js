const mongoose = require('mongoose');
const { InsurancePolicySchema } = require('../models/insurancePolicyModel');

const InsurancePolicy  = mongoose.model('InsurancePolicyDetail', InsurancePolicySchema);

const getPolicyById = (req, res) => {
  InsurancePolicy.findById(req.params.policyId, (err, InsurancePolicy) => {
    if(err) {
      res.send(err);
    }
    res.json(InsurancePolicy);
  })
}

const updatePolicyById = (req, res) => {
  InsurancePolicy.findOneAndUpdate({ _id: req.params.policyId }, req.body, {new: true}, (err, InsurancePolicy) => {
    if(err) {
      res.send(err);
    }
    res.json(InsurancePolicy);
  })
}

const getPolicyByCustomerId = (req, res) => {
  InsurancePolicy.find({customerId: req.params.customerId}, (err, InsurancePolicy) => {
    if(err) {
      res.send(err);
    }
    res.json(InsurancePolicy);
  })
}

const filterPoliciesByRegionAndDate = (req, res) => {
  const query = {}
  const region = req.query.region
  const date = req.query.date

  if(date) {
    const [ year, month ] = date.split('-');

    query.dateOfPurchase = {
      $gte: new Date(year, Number(month) - 1, 1),
      $lt: new Date(year, Number(month), 1)
    }
  }

  if(region) {
    query.customerRegion = region
  }

  InsurancePolicy.find(query, (err, InsurancePolicy) => {
    if(err) {
      res.send(err);
    }
    res.json(InsurancePolicy);
  })
}

module.exports = {
  getPolicyById,
  updatePolicyById,
  getPolicyByCustomerId,
  filterPoliciesByRegionAndDate,
}
