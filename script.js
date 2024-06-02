document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('prediction-form');
    const resultDiv = document.getElementById('prediction-result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const beds = document.getElementById('bed').value;
        const baths = document.getElementById('bath').value;
        const houseSize = document.getElementById('house_size').value;
        const acreLot = document.getElementById('acre_lot').value;

        const data = {
            bed: beds,
            bath: baths,
            house_size: houseSize,
            acre_lot: acreLot
        };

        fetch('my_app/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `<p>Predicted Price: $${data.prediction.toFixed(2)}</p>`;
            console.log("testing")
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = `<p>Error making prediction. Please try again.</p>`;
        });
    });
});
