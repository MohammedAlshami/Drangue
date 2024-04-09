from flask import Flask, request, jsonify
from web3 import Web3
from contract_utils import create_order
from payment_handler import process_payment

# Initialize Flask app
app = Flask(__name__)

w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/AFMB9987N'))

contract_abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "productName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "createOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

contract_bytecode = "0x123456789ABCDEF"

# Initialize contract instance
contract = w3.eth.contract(abi=contract_abi, bytecode=contract_bytecode)

# Route for creating orders
@app.route('/api/v1/create_order', methods=['POST'])
def create_order_route():
    try:
        order_data = request.get_json()

        # Validate order data
        if not order_data or 'amount' not in order_data or 'cryptocurrency' not in order_data:
            return jsonify({'status': 'failed', 'error': 'Invalid order data'}), 400

        # Process payment
        payment_status = process_payment(order_data['amount'], order_data['cryptocurrency'])

        if payment_status:
            # Create order
            order_id = create_order(order_data)
            return jsonify({'status': 'success', 'order_id': order_id})
        else:
            return jsonify({'status': 'failed', 'error': 'Payment processing failed'}), 400

    except Exception as e:
        return jsonify({'status': 'failed', 'error': str(e)}), 500

# Route for health check
@app.route('/health', methods=['GET'])
def health_check():
    return 'Service is up and running.'

# Dummy function to simulate order creation
def create_order(order_data):
    # Simulate order creation
    return '12345'

# Dummy function to simulate payment processing
def process_payment(amount, cryptocurrency):
    # Simulate payment processing
    return True

if __name__ == '__main__':
    app.run(debug=True)
