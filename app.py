from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load your trained model (assuming it's a pickle file)
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Extract the features from the request
    features = [data['bed'], data['bath'], data['house_size'], data['acre_lot']]
    # Make a prediction using your model
    prediction = model.predict([features])
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
