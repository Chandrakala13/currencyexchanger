document.getElementById("convertBtn").addEventListener("click", convertCurrency);

async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
    
    if (!amount) {
        document.getElementById("result").innerText = "Please enter an amount";
        return;
    }
    
    try {
       
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        let data = await response.json();
        
        const rate = data.rates[to];
        const converted = (amount * rate).toFixed(2);
        
        document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
    } 
    catch (error) {
        document.getElementById("result").innerText = "Error: " + error.message;
    }
}