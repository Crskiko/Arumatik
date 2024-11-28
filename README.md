# Arumatik Website

This is a React.js Vite project designed to showcase the products offered by the company. It includes static data stored in JSON files and uses React Context API and custom hooks for state management.

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Technology Stack](#technology-stack)  
4. [Setup Instructions](#setup-instructions)  
5. [Project Structure](#project-structure)  
6. [Data Management](#data-management)  
7. [Custom Hooks](#custom-hooks)  
8. [Utils Functions](#utils-functions)   
9. [Generate Documentation](#generate-documentation)  
10. [License](#license)

## Project Overview

This website has three pages:  
- **Home Page:** Provides a general introduction to the company and its offerings.  
- **Product List Page:** Displays a list of products available for customers.  
- **Product Detail Page:** Provides detailed information about a specific product, including features and specifications.  

### Key Goal:  
Encourage customers to order products by integrating **Call-to-Action (CTA)** buttons that link directly to the company's WhatsApp contact.  

- **CTA Button Locations:**  
  - In the Navbar for easy access.  
  - On the Product Detail Page for direct action.  

## Features

- Static product data stored in JSON files.  
- React Context API for managing product data.  
- Custom hooks for enhanced reusability and state handling.  
- Utility functions for common operations.  
- Responsive and user-friendly design.  
- Direct WhatsApp link for customer inquiries and orders.

## Technology Stack

- **Frontend:** React.js with Vite  
- **Routing:** React Router DOM
- **State Management:** React Context API  
- **Styling:** Tailwind CSS  
- **Prop Validation:** PropTypes
- **Data Handling:** Static JSON files  

## Setup Instructions

1. Clone the repository:  
   ```bash
   git clone https://github.com/Crskiko/Arumatik
   ```
2. Navigate to the project directory:  
   ```bash
   cd Arumatik
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Start the development server:  
   ```bash
   npm run dev
   ```
5. Open the project in your browser:  
   ```
   http://localhost:5173
   ```

## Project Structure

```
project/
├── public/
│   ├── icons/           # Public icons used on the website
│   ├── images/          # Images called from JSON data
├── src/
│   ├── assets/          # Images and other static assets
│       └── data/        # JSON files for product, category, and benefit data
│   ├── components/      # Reusable UI components
│   ├── containers/      # Logic-focused components
│   ├── contexts/        # React Context files
│   ├── hooks/           # Custom hooks for state and logic
│   ├── pages/           # Pages: Home, Product List, Product Detail
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Routing for the app
│   └── main.jsx         # Main application entry point
```

## Data Management

- **Static JSON Files:** All product-related data is stored in JSON files located in the `data/` directory.  
- **Context API:** Used for managing global state across the application.

## Custom Hooks

List your custom hooks and their purpose here:  
- `useFilterData`: Filters products by category and series. 
- `useMediaQuery`: Determines whether a given media query matches to the current viewport.
- `useScrollTop`: Scrolls the window to the top when the route changes.
- `useUniqueValue`: Extracts unique values from an array of objects.

## Utils Functions

List utility functions and their purposes:  
- `convertToSlug`: Converts a given text string into a URL-friendly slug.
- `convertToTitle`: Converts a JSON key to a title case string.
- `filterData`: Filters products by category and series.

## Generate Documentations

To generate the JSDoc documentation for this project, follow these steps:
1. Install dependencies:  
   ```bash
   npm install
   ```
2. Generate the JSDoc:  
   ```bash
   npx jsdoc
   ```
3. View the Documentation:  
   Open `docs/index.html` file in your browser.

## License

This project is proprietary and intended solely for Arumatik. Unauthorized use, distribution, or modification of this software is strictly prohibited.
