// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrderManagement {
    // Struct to represent an order
    struct Order {
        uint256 orderId;
        string productName;
        uint256 quantity;
        uint256 price;
    }

    // Array to store orders
    Order[] public orders;

    // Event emitted when a new order is created
    event OrderCreated(uint256 indexed orderId, string productName, uint256 quantity, uint256 price);

    // Function to create a new order
    function createOrder(uint256 orderId, string memory productName, uint256 quantity, uint256 price) public {
        // Create a new order
        Order memory newOrder = Order(orderId, productName, quantity, price);
        // Add the new order to the array
        orders.push(newOrder);
        // Emit an event for the new order
        emit OrderCreated(orderId, productName, quantity, price);
    }

    // Function to get all orders
    function getOrders() public view returns (Order[] memory) {
        return orders;
    }

    // Function to update an order
    function updateOrder(uint256 orderId, uint256 newQuantity, uint256 newPrice) public {
        // Loop through orders to find the specified order
        for (uint256 i = 0; i < orders.length; i++) {
            if (orders[i].orderId == orderId) {
                // Update the order's quantity and price
                orders[i].quantity = newQuantity;
                orders[i].price = newPrice;
                break; // Exit loop once order is updated
            }
        }
    }

    // Function to delete an order
    function deleteOrder(uint256 orderId) public {
        // Loop through orders to find the specified order
        for (uint256 i = 0; i < orders.length; i++) {
            if (orders[i].orderId == orderId) {
                // Remove the order from the array by shifting elements
                if (i < orders.length - 1) {
                    orders[i] = orders[orders.length - 1];
                }
                orders.pop(); // Remove the last element (which is a duplicate now)
                break; // Exit loop once order is deleted
            }
        }
    }

    // Function to get the total number of orders
    function getTotalOrders() public view returns (uint256) {
        return orders.length;
    }

    // Function to get the details of a specific order by its index
    function getOrderDetails(uint256 index) public view returns (uint256, string memory, uint256, uint256) {
        require(index < orders.length, "Index out of bounds");
        return (orders[index].orderId, orders[index].productName, orders[index].quantity, orders[index].price);
    }

    // Function to search for orders by product name
    function searchOrdersByProductName(string memory _productName) public view returns (uint256[] memory) {
        // Array to store indices of matching orders
        uint256[] memory matchingIndices = new uint256[](orders.length);
        uint256 matchingCount = 0;

        // Loop through orders to find matching orders
        for (uint256 i = 0; i < orders.length; i++) {
            if (keccak256(abi.encodePacked((orders[i].productName))) == keccak256(abi.encodePacked((_productName)))) {
                matchingIndices[matchingCount] = i;
                matchingCount++;
            }
        }

        // Trim the array to remove excess empty elements
        uint256[] memory result = new uint256[](matchingCount);
        for (uint256 j = 0; j < matchingCount; j++) {
            result[j] = matchingIndices[j];
        }

        return result;
    }

    // Function to check if an order with a given ID exists
    function orderExists(uint256 _orderId) public view returns (bool) {
        // Loop through orders to find the specified order
        for (uint256 i = 0; i < orders.length; i++) {
            if (orders[i].orderId == _orderId) {
                return true;
            }
        }
        return false;
    }

    // Function to get the total quantity of a product sold
    function getTotalQuantitySold(string memory _productName) public view returns (uint256) {
        uint256 totalQuantity = 0;
        // Loop through orders to calculate total quantity sold for the specified product
        for (uint256 i = 0; i < orders.length; i++) {
            if (keccak256(abi.encodePacked((orders[i].productName))) == keccak256(abi.encodePacked((_productName)))) {
                totalQuantity += orders[i].quantity;
            }
        }
        return totalQuantity;
    }

    // Function to get the average price of a product sold
    function getAveragePrice(string memory _productName) public view returns (uint256) {
        uint256 totalQuantity = 0;
        uint256 totalPrice = 0;
        // Loop through orders to calculate total quantity and price for the specified product
        for (uint256 i = 0; i < orders.length; i++) {
            if (keccak256(abi.encodePacked((orders[i].productName))) == keccak256(abi.encodePacked((_productName)))) {
                totalQuantity += orders[i].quantity;
                totalPrice += orders[i].quantity * orders[i].price;
            }
        }
        // Calculate average price
        if (totalQuantity > 0) {
            return totalPrice / totalQuantity;
        } else {
            return 0;
        }
    }

    // Function to check if a product is in stock
    function isInStock(string memory _productName) public view returns (bool) {
        uint256 totalQuantity = 0;
        // Loop through orders to calculate total quantity for the specified product
        for (uint256 i = 0; i < orders.length; i++) {
            if (keccak256(abi.encodePacked((orders[i].productName))) == keccak256(abi.encodePacked((_productName)))) {
                totalQuantity += orders[i].quantity;
            }
        }
        // Check if total quantity is greater than zero
        return totalQuantity > 0;
    }

    // Function to get the total value of orders
    function getTotalOrderValue() public view returns (uint256) {
        uint256 totalValue = 0;
        // Loop through orders to calculate total value
        for (uint256 i = 0; i < orders.length; i++) {
            totalValue += orders[i].quantity * orders[i].price;
        }
        return totalValue;
    }
}
