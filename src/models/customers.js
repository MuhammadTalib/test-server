const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// repeated schemas used in actual
const kycDetails = new Schema({
  purposeOfAccount: String,
  expectedMonthlyTrasanctions: String,
  dominantsModeOfDeposits: String,
  dominantsModeOfWithdrawals: String,
  politicalRelation: String,
  politicalPersonName: String,
});

const addressDetails = new Schema({
  address: String,
  country: String,
  city: String,
});

const personalInformation = new Schema({
  fullName: String,
  fatherName: String,
  motherName: String,
  gender: String,
  countryOfBirth: String,
  cityOfBirth: String,
  countryOfResidence: String,
  landlineNumber: String,
  iDExpiryDate: String,
  dateOfBirth: String,
  purposeOfAccount: String,
  nextOfKinDetails: {
    nomineesName: String,
    identityType: String,
    nomineesIdNumber: String,
    relationshipWithAccountHolder: String,
    nomineesMobileNumber: String,
    nomineesResidentialAddress: String,
    contactDetails: String,
  },
  address: {
    currentResidentialAddress: addressDetails,
    permanentResidentialAddress: addressDetails,
  },
  otherInformation: {
    areYouDualNational: Boolean,
    otherNationality: String,
    areYouUsCitizen: Boolean,
    wereYouBornInUS: Boolean,
    assigningASignatoryAuthority: Boolean,
    awareOtherInformationThatLinksUS: Boolean,
    crsInformation: {
      socialSecurityNo: String,
      EmployerIdentificationNo: String,
    },
  },
});

const occupationDetail = new Schema({
  isSalariedAccount: Boolean,
  salaried: {
    nameOfEmployer: String,
    profession: String,
    otherSourceOfIncome: String,
    sourceOfIncome: String,
    kycDetails: kycDetails,
    officeAddress: addressDetails,
  },
  other: {
    dependentOnforIncome: String,
    profession: String,
    expectedMonthlySalary: String,
    expectedGeographicalTransations: [],
    politicalRelation: String,
    politicalPersonName: String,
    kycDetails: kycDetails,
    detailsOfFundProviders: {
      name: String,
      idNumber: String,
      dateOfBirth: String,
    },
  },
});

const bankingService = new Schema({
  accountType: String,
  accountTitle: String,
  productCurrency: String,
  prefferedMailingAddress: String,
  prefferedCityToOpenAccount: String,
  branch: String,
  holdMail: Boolean,
  doYouWantDebitCard: String,
  nameOfCard: String,
  cardType: String,
  availChequeBook: Boolean,
  frequencyOfEStatement: String,
  availSmsAlert: Boolean,
});

const documentsUpload = new Schema({
  proofOfAddress: String,
  proofOfIncome: String,
  proofOfBusiness: String,
  electronicSignature: String
})

//Main Schema
const CustomerSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  personalInformation,
  occupationDetail,
  bankingService,
  documentsUpload
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);
module.exports = CustomerModel;