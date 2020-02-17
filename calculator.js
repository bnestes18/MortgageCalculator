// Computes Mortgage Formula
function calculateMortgage() {
	// Loan amount
	let principal = document.getElementById('amount-text').value;
	// Rate in decimal form
	let ratePercent = document.getElementById('rate-text').value / 100;
	// Interest rate (monthly)
	let rate = ratePercent / 12;
	// Mortgage Period (years)
	let period = document.getElementById('period-amount').value;
	// Num of payments
	let numOfPayments = period * 12;

	// Checks for empty values
	if (principal == '' || rate == '') {
		alert('Please enter valid value in each text field');
	} else {
		let monthlyPayments =
			principal * (rate * Math.pow(1 + rate, numOfPayments)) / (Math.pow(1 + rate, numOfPayments) - 1);
		let totalCost = monthlyPayments * numOfPayments;
		document.getElementById('total-cost').textContent = `$${totalCost.toLocaleString('en', {
			maximumFractionDigits: 2,
		})}`;
		document.getElementById('payments').textContent = `$${monthlyPayments.toLocaleString('en', {
			maximumFractionDigits: 2,
		})}`;
	}
}

// Add event listener for Calculate Button
document.getElementById('calc-btn').addEventListener('click', calculateMortgage);
