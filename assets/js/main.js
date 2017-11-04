function calculate(){

  /* =============================================================================
      SETTING VARIABLES
  ============================================================================= */

  // User's Name
  var name = document.getElementById("userName").value;

  // Filing Year
  var filingYear = document.getElementById("filingYear").value;

  // Filing Status
  var filingStatus = document.getElementById("filingStatus").value;

  // Income
  var income = document.getElementById("incomeValue").value;

  // Pay Frequency
  var payFrequency = document.getElementById("payFrequency").value;

  // Residential Zipcode
  var residentialZipcode = document.getElementById("residentialZipcode").value;

  // Employment Zipcode
  var employmentZipcode = document.getElementById("employmentZipcode").value;

  // Employment Status
  var employmentStatus = document.getElementById("employmentStatus").value;

  console.log("Name: "+ name +", Filing Year: "+ filingYear +", Filing Status: "+ filingStatus +", Income: "+ income +", Pay Frequency: "+ payFrequency +", Residential Zipcode: "+ residentialZipcode +", Employment ZipCode: "+ employmentZipcode +", Employment Status: "+ employmentStatus);

  /* =============================================================================
      OASDI WITHHOLDINGS CALCULATIONS
  ============================================================================= */



  /* =============================================================================
      FEDERAL INCOME TAX CALCULATIONS
  ============================================================================= */



  /* =============================================================================
      STATE INCOME TAX CALCULATIONS
  ============================================================================= */



  /* =============================================================================
      LOCAL INCOME TAX CALCULATIONS
  ============================================================================= */



  /* =============================================================================
      RESULTS
  ============================================================================= */

};
