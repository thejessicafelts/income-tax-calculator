/*global document, window, alert, console, require, prompt*/


// Used for Creating a Line Break within the Function

var newLine = "\r\n";


// Variables that will be defined with User Input

var fromMichigan = prompt("Are you from Michigan?" + newLine);
    
if ((fromMichigan === "No") || (fromMichigan === "NO") || (fromMichigan === "no") || (fromMichigan === "N") || (fromMichigan === "n")) {
    alert(
        "Sorry! This app only works for Michigan Taxpayers." +
            newLine + "We hope to provide support to Residents of other States soon!" + newLine
    );
} else if ((fromMichigan === "Yes") || (fromMichigan === "YES") || (fromMichigan === "yes") || (fromMichigan === "Y") || (fromMichigan === "y")) {
    
    var filingStatus = prompt("Will you be filing taxes as a Single Individual?" +
                              newLine + "(Not \"Married\" or \"Head of Household\")" + newLine);
    
    if ((filingStatus === "No") || (filingStatus === "NO") || (filingStatus === "no") || (filingStatus === "N") || (filingStatus === "n")) {
        alert(
            "Sorry! This app only works for Single, Individual Taxpayers." +
                newLine + "We hope to provide support for \"Married\" and" + newLine + "\"Head of Household\" filers soon!" + newLine
        );
    } else if ((filingStatus === "Yes") || (filingStatus === "YES") || (filingStatus === "yes") || (filingStatus === "Y") || (filingStatus === "y")) {
        
        var selfEmployed = prompt(
            "Are you Self Employed?" +
                newLine + "Enter \"Yes\" or \"No\"." + newLine
        );
        
        if ((selfEmployed === "Yes") || (selfEmployed === "YES") || (selfEmployed === "yes") || (selfEmployed === "Y") || (selfEmployed === "y")) {
            alert(
                "Sorry! This app does not currently support Self Employed Taxpayers." +
                    newLine + "We hope to provide support to Self Employed Taxpayers soon!" + newLine
            );
        } else if ((selfEmployed === "No") || (selfEmployed === "NO") || (selfEmployed === "no") || (selfEmployed === "N") || (selfEmployed === "n")) {
            
            // Variables that will be defined with User Input

            var name = prompt("What is your name?" + newLine);
            var city = prompt(
                "What City do you Live in?" +
                    newLine + "Your City is used for calculating Local Income Tax." +
                    newLine + "Enter: Full City Name, capitalized." +
                    newLine
            );
            var annualIncome = prompt(
                "What is your Annual Income?" +
                    newLine + "Enter: Numbers Only." +
                    newLine + "DON\'T Enter: Spaces, Commas or Currency Symbols." +
                    newLine
            );
            var year = prompt("What Year is this Calculation for?" + newLine);


            // Federal Income Tax Calculations

            if (year === "2016") {
                if (annualIncome === 0) {
                    var federalIncomeTax = 0;
                } else if (annualIncome > 0 && annualIncome <= 9275) {
                    var federalIncomeTax = (
                        parseFloat(annualIncome * 0.10).toFixed(2)
                    );
                } else if (annualIncome > 9275 && annualIncome <= 37650) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 9275) * 0.15) + 927.50).toFixed(2)
                    );
                } else if (annualIncome > 37650 && annualIncome <= 91150) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 37650) * 0.25) + 5183.75).toFixed(2)
                    );
                } else if (annualIncome > 91150 && annualIncome <= 190150) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 91150) * 0.28) + 18558.75).toFixed(2)
                    );
                } else if (annualIncome > 190150 && annualIncome <= 413350) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 190150) * 0.33) + 46278.75).toFixed(2)
                    );
                } else if (annualIncome > 413350 && annualIncome <= 415050) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 413350) * 0.35) + 119934.75).toFixed(2)
                    );
                } else if (annualIncome > 415050) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 415050) * 0.396) + 120529.75).toFixed(2)
                    );
                } else {
                    var FileReader = "Oop! I think something went wrong!";
                }
            } else if (year === "2015") {
                if (annualIncome === 0) {
                    var federalIncomeTax = 0;
                } else if (annualIncome > 0 && annualIncome <= 9225) {
                    var federalIncomeTax = (
                        parseFloat(annualIncome * 0.10).toFixed(2)
                    );
                } else if (annualIncome > 9225 && annualIncome <= 37450) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 9225) * 0.15) + 922.50).toFixed(2)
                    );
                } else if (annualIncome > 37450 && annualIncome <= 90750) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 37450) * 0.25) + 5156.25).toFixed(2)
                    );
                } else if (annualIncome > 90750 && annualIncome <= 189300) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 90750) * 0.28) + 18481.25).toFixed(2)
                    );
                } else if (annualIncome > 189300 && annualIncome <= 411500) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 189300) * 0.33) + 46075.25).toFixed(2)
                    );
                } else if (annualIncome > 411500 && annualIncome <= 413200) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 411500) * 0.35) + 119401.25).toFixed(2)
                    );
                } else if (annualIncome > 413200) {
                    var federalIncomeTax = (
                        parseFloat(((annualIncome - 413200) * 0.396) + 119996.25).toFixed(2)
                    );
                } else {
                    var FileReader = "Oop! I think something went wrong!";
                }
            } else {
                var year = "The year you\'ve requested is not currently Supported! Please check back later!";
            }

            // Social Security Tax Calculations

            if ((year === "2015") || (year === "2016")) {
                if ((selfEmployed === "Yes") || (selfEmployed === "YES") || (selfEmployed === "yes") || (selfEmployed === "y") || (selfEmployed === "Y")) {
                    if (annualIncome <= 118500) {
                        var socialSecurityTax = parseFloat(annualIncome * 0.124).toFixed(2);
                    } else if (annualIncome > 118500) {
                        var socialSecurityTax = parseFloat(118500 * 0.124).toFixed(2);
                    } else {
                        var socialSecurityTax = "Oops...something seems to be wrong! Please try again!";
                    }
                } else if ((selfEmployed === "No") || (selfEmployed === "NO") || (selfEmployed === "no") || (selfEmployed === "n") || (selfEmployed === "N")) {
                    if (annualIncome <= 118500) {
                        var socialSecurityTax = parseFloat(annualIncome * 0.062).toFixed(2);
                    } else if (annualIncome > 118500) {
                        var socialSecurityTax = parseFloat(118500 * 0.062).toFixed(2);
                    } else {
                        var socialSecurityTax = "Oops...something seems to be wrong! Please try again!";
                    }
                } else {
                    var socialSecurityTax = "Oops...something seems to be wrong! Please try again!";
                }
            }


            // Medicare Tax Calculations

            if ((year === "2015") || (year === "2016")) {
                if ((selfEmployed === "Yes") || (selfEmployed === "YES") || (selfEmployed === "yes") || (selfEmployed === "y") || (selfEmployed === "Y")) {
                    if (annualIncome <= 118500) {
                        var medicareTax = parseFloat(annualIncome * 0.029).toFixed(2);
                    } else if (annualIncome > 118500) {
                        var medicareTax = parseFloat(118500 * 0.029).toFixed(2);
                    } else {
                        var medicareTax = "Oops...something seems to be wrong! Please try again!";
                    }
                } else if ((selfEmployed === "No") || (selfEmployed === "NO") || (selfEmployed === "no") || (selfEmployed === "n") || (selfEmployed === "N")) {
                    if (annualIncome <= 118500) {
                        var medicareTax = parseFloat(annualIncome * 0.0145).toFixed(2);
                    } else if (annualIncome > 118500) {
                        var medicareTax = parseFloat(118500 * 0.0145).toFixed(2);
                    } else {
                        var medicareTax = "Oops...something seems to be wrong! Please try again!";
                    }
                } else {
                    var medicareTax = "Oops...something seems to be wrong! Please try again!";
                }
            }


            // State Income Tax Calculations

            var stateIncomeTax = parseFloat(annualIncome * 0.0425).toFixed(2);


            // Local Income Tax Calculations

            if (city === "Albion") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Battle Creek") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Big Rapids") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Detroit") {
                var localIncomeTax = parseFloat(annualIncome * 0.025).toFixed(2);
            } else if (city === "Flint") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Grand Rapids") {
                var localIncomeTax = parseFloat(annualIncome * 0.013).toFixed(2);
            } else if (city === "Grayling") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Hamtramck") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Highland Park") {
                var localIncomeTax = parseFloat(annualIncome * 0.02).toFixed(2);
            } else if (city === "Hudson") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Ionia") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Jackson") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Lansing") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Lapeer") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Muskegon") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Muskegon Heights") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Pontiac") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Port Huron") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Portland") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Saginaw") {
                var localIncomeTax = parseFloat(annualIncome * 0.015).toFixed(2);
            } else if (city === "Springfield") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else if (city === "Walker") {
                var localIncomeTax = parseFloat(annualIncome * 0.01).toFixed(2);
            } else {
                var localIncomeTax = parseFloat(0).toFixed(2);
            }


            // Past or Present Tense of "Had" or "Will Have"

            if (year === "2016") {
                var hadWillHave = "will have";
            } else {
                var hadWillHave = "had";
            }


            // Past or Present Tense of "You will owe:" or "You owed:"

            if (year === "2016") {
                var YouWillOweYouOwed = ", you will owe:";
            } else {
                var YouWillOweYouOwed = ", you owed:";
            }

            // Function to be Displayed to User

            alert(
                "Annual Income Tax Calculator" +
                    newLine + newLine +
                    "Hello " + name + "!" +
                    newLine + newLine +
                    "You are from " + city + ", Michigan, and " + hadWillHave + " an Annual Income of $" + annualIncome + " in " + year + "!" +
                    newLine + newLine +
                    "For " + year + YouWillOweYouOwed +
                    newLine + "$" + federalIncomeTax + " in Federal Income Tax" +
                    newLine + "$" + socialSecurityTax + " in Social Security Tax" +
                    newLine + "$" + medicareTax + " in Medicare Tax" +
                    newLine + "$" + stateIncomeTax + " in State Income Tax" +
                    newLine + "$" + localIncomeTax + " in Local Income Tax" +
                    newLine + newLine +
                    "Keep up the Hard Work!" +
                    newLine + newLine
            );
            
        } else {
            alert("You've entered soemthing wrong...please try again!");
        }
    } else {
        alert("You've entered soemthing wrong...please try again!");
    }
} else {
    alert("You've entered soemthing wrong...please try again!");
}
