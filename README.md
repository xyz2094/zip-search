# **Zip Code Finder**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![ReactJS](https://img.shields.io/badge/Built_with-ReactJS-blue)

A simple application built in React to search and display address information from a Brazilian zip code (CEP \- Código de Endereçamento Postal). The project uses the public [ViaCEP](https://viacep.com.br/) API to query the data.

## **Features**

* **Search by Zip Code:** Allows the user to enter an 8-digit zip code for lookup.  
* **Address Display:** Shows the corresponding address details, such as street, neighborhood, city, and state.  
* **Simple Interface:** Clean and intuitive design for a straightforward user experience.  
* **Responsiveness:** Adapts to different screen sizes (desktop and mobile).

## **How to Run the Project**

To run this project locally, follow the steps below.

### **Prerequisites**

* [Node.js](https://nodejs.org/en/) (version 14 or higher)  
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### **Installation and Setup**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vittordallacqua/zip-code-finder.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd zip-code-finder
   ```
   
3. **Install the dependencies:**
   ```bash
   npm install
   ```

5. **Start the application:**
   ```bash 
   npm start
   ```

The application will start in development mode and will be available at http://localhost:3000 in your browser.

## **How to Use**

1. With the application open in your browser, you will see an input field with the title "Buscador de CEP" (Zip Code Finder).  
2. Type a valid zip code (numbers only) into the text field.  
3. Click the search icon to perform the lookup.  
4. The address information corresponding to the zip code will be displayed below.

## License

This project is licensed under the MIT License.
