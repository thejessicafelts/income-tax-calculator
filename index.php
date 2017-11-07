<?php include('variables/global.php'); ?>

<!DOCTYPE html>
<html lang="<?php echo $siteLang; ?>">
  <head>
    <meta charset="<?php echo $siteCharset; ?>">
    <title><?php echo $siteName; ?></title>
    <?php include('partials/head/stylesheets.php'); ?>
  </head>
  <body>
    <?php include('partials/global/nav.php'); ?>

    <!-- Form -->
    <div id="form" class="container">

        <div class="row">
          <div class="col-sm-6 left">

            <!-- Users Name -->
            <form class="userNameForm">
              <div class="form-group user-name">
                <label class="form-title" for="usersName">Your Name <i id="usrName-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
                <input id="userName" type="text" class="form-control" name="usersName">
              </div>
            </form>

            <!-- Filing Year -->
            <form class="filingYearForm">
              <label class="form-title">Filing Year <i id="filingYear-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
              <select id="filingYear" class="form-control">
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </select>
            </form>

            <!-- Filing Status -->
            <form class="filingStatusForm">
              <label class="form-title">Filing Status <i id="filingStatus-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
              <select id="filingStatus" class="form-control">
                <option value="single">Single</option>
                <option value="marriedJointly">Married, Filing Jointly</option>
                <option value="marriedSeperately">Married, Filing Seperately</option>
                <option value="headOfHousehold">Head of Household</option>
                <option value="widow">Qualifying Widow(er)</option>
              </select>
            </form>

            <!-- Income -->
            <form class="incomeForm">
              <div class="form-group user-name">
                <label class="form-title" for="usersName">Income <i id="incomeValue-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
                <input id="incomeValue" type="text" class="form-control" name="usersIncome">
              </div>
            </form>

          </div>
          <div class="col-sm-6 right">

            <!-- Pay Frequency -->
            <form class="payFrequencyForm">
              <label class="form-title">Pay Frequency <i id="payFrequency-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
              <select id="payFrequency" class="form-control">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="biWeekly">Bi-Weekly</option>
                <option value="semiMonthly">Semi-Monthly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="semiAnnually">Semi-Annually</option>
                <option value="annually">Annually</option>
              </select>
            </form>

            <!-- Residential Zip Code -->
            <form class="residentialZipcodeForm">
              <div class="form-group user-name">
                <label class="form-title" for="usersName">Residential Zipcode <i id="residentialZipcode-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
                <input id="residentialZipcode" type="text" class="form-control" name="residentialZipcode">
              </div>
            </form>

            <!-- Employment Zip Code -->
            <form class="employmentZipcodeForm">
              <div class="form-group user-name">
                <label class="form-title" for="usersName">Employment Zipcode <i id="employmentZipcode-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
                <input id="employmentZipcode" type="text" class="form-control" name="employmentZipcode">
              </div>
            </form>

            <!-- Filing Year -->
            <form class="employmentStatusForm">
              <label class="form-title">Employment Status <i id="employmentStatus-info" class="fa fa-info-circle" aria-hidden="true"></i></label>
              <select id="employmentStatus" class="form-control">
                <option value="employed">Employed</option>
                <option value="selfEmployed">Self Employed</option>
              </select>
            </form>

          </div>
        </div>

    </div>

    <!-- Submit -->
    <input type="button" id="submitForm" class="btn btn-lg form-submit" name="submit_tag" value="Submit" onclick="calculate();"/>

    <!-- Results -->
    <div id="results" class="container"></div>

    <!-- Reset -->
    <input type="button" id="resetForm" class="btn btn-lg form-reset" name="reset_tag" value="Reset Form" onclick="reset();"/>

    <?php include('partials/head/scripts.php'); ?>
  </body>
</html>
