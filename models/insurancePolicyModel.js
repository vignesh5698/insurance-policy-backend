const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InsurancePolicySchema = new Schema({
  _id: String,
  dateOfPurchase: Date,
  customerId: String,
  fuel: String,
  vehicleSegment: String,
  premium: Number,
  bodilyInjuryLiability: Number,
  personalInjuryProtection: Number,
  propertyDamageLiability: Number,
  collision: Number,
  comprehensive: Number,
  customerGender: String,
  customerIncomeGroup: String,
  customerRegion: String,
  customerMaritalStatus: Number,
});

module.exports = {
  InsurancePolicySchema
}
