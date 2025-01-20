from flask import Flask, request, jsonify
from flask_cors import CORS
from prompt import response#, save_data_for_matlab

app = Flask(__name__)
CORS(app)  # Allow CORS for all domains and routes

@app.route('/run-model', methods=['POST'])
def run_model():
    data = request.json
    location = data.get('location')

    if not location:
        return jsonify({"error": "Location not provided"}), 400

    try:
        # Run the ML model (OpenAI)
        regions, output = response(location)

        # Save data for MATLAB processing
        # save_data_for_matlab(regions)

        return ({"regions": output})
    except Exception as e:
        return jsonify({"error": "Internal server error", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001, debug=True)