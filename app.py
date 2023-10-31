from flask import Flask, request

app = Flask(__name__)

@app.route('/endpoint', methods=['POST'])
def handle_post_request():
    data = request.json
    # Process the data from the POST request
    return 'Received POST request with data: {}'.format(data)

if __name__ == '__main__':
    app.run(debug=True)

