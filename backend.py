@app.route('/process_message', methods=['POST'])
def process_message():
    user_message = request.json['message']

    # Add your AI processing logic here
    ai_response = generate_response(user_message)

    return jsonify({"response": ai_response})

def generate_response(user_message):
    if "hello" in user_message.lower():
        return "Hello! How can I assist you?"
    elif "help" in user_message.lower():
        return "I'm here to help. What do you need?"
    else:
        return "I'm sorry, I didn't understand that."

import requests

url = 'http://localhost:5000/endpoint'
data = {'message': 'Hello, World!'}
headers = {'Content-Type': 'application/json'}

response = requests.post(url, json=data, headers=headers)

print(response.text)


@app.route('/process_message', methods=['POST'])
def process_message():
    user_message = request.json['message']

    # Add your AI processing logic here
    ai_response = generate_response(user_message)

    return jsonify({"response": ai_response})

def generate_response(user_message):
    if "hello" in user_message.lower():
        return "Hello! How can I assist you?"
    elif "help" in user_message.lower():
        return "I'm here to help. What do you need?"
    else:
        return "I'm sorry, I didn't understand that."
