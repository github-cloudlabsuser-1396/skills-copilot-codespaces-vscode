def calculator():
    """
    This script provides a simple calculator program that allows the user to perform
    basic arithmetic operations: addition, subtraction, multiplication, and division.

    Functions:
        calculator():
            Prompts the user to select an arithmetic operation and input two numbers.
            Performs the selected operation and displays the result. Handles invalid
            inputs and division by zero gracefully.

    Usage:
        Run the script and follow the prompts to perform calculations.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")

    # Take input from the user
    choice = input("Enter choice (1/2/3/4): ")

    if choice in ['1', '2', '3', '4']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"The result is: {num1 + num2}")
        elif choice == '2':
            print(f"The result is: {num1 - num2}")
        elif choice == '3':
            print(f"The result is: {num1 * num2}")
        elif choice == '4':
            if num2 != 0:
                print(f"The result is: {num1 / num2}")
            else:
                print("Error: Division by zero is not allowed.")
    else:
        print("Invalid input. Please select a valid operation.")
if __name__ == "__main__":
    calculator()