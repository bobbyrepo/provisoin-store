// import React from "react";

// function About() {
//   return (
//     <div>
//       <h1>About Provision Store E-shop</h1>
//       <p>
//         Welcome to the Provision Store E-shop, a virtual marketplace where users
//         can buy various provision products. This project was developed as a part
//         of a placement test.
//       </p>

//       <h2>Project Structure</h2>
//       <p>
//         The project is organized into various components and pages. The main
//         components include Navbar, Login, Home, About, FilteredProduct, and
//         ProductList. These components are utilized to create a seamless and
//         user-friendly experience for navigating and interacting with the
//         application.
//       </p>

//       <h2>Challenges Faced</h2>
//       <p>
//         During the development of this project, certain challenges were
//         encountered. These challenges included implementing secure user
//         authentication, integrating with external APIs for product information,
//         and designing a responsive and visually appealing user interface.
//       </p>

//       <h2>Getting Started</h2>
//       <p>
//         To run this project locally, follow these steps:
//         <ol>
//           <li>Clone the project repository.</li>
//           <li>Install the necessary dependencies using npm or yarn.</li>
//           <li>Start the development server.</li>
//           <li>Access the application in your web browser.</li>
//         </ol>
//       </p>

//       <p>
//         We hope you enjoy using Provision Store E-shop. Feel free to explore the
//         product list, search for specific items, and learn more about the
//         project.
//       </p>
//     </div>
//   );
// }

// export default About;

import React from "react";

function About() {
  const h2css = "md:text-2xl sm:text-xl text-lg font-medium sm:mt-6 mt-4";
  const pcss = "md:text-[20px] sm:text-[19px] text-[17px] sm:mt-2 mt-1";
  return (
    <div className="w-[80%] mx-auto mt-8 mb-20">
      <h1 className="text-center md:text-3xl sm:text-2xl text-xl font-medium">
        About Provision Store E-shop Website
      </h1>
      <p className={`${pcss}`}>
        Welcome to the Provision Store E-shop website, a virtual provision
        marketplace where users can buy various types of provision products.
      </p>

      <h2 className={`${h2css}`}>Folder Structure:</h2>
      <p className={`${pcss}`}>
        {" "}
        The project follows a standard React project structure with components,
        pages, and styles folders. Here's a brief overview:
      </p>

      <ul className="sm:text-lg text-md">
        <li>
          <code>src/</code>
        </li>
        <li>
          <code>├── components/ </code>
          <ul>
            <li>
              <code>│ ├── Navbar.js</code> - The navigation bar component is
              used for navigation across the application.
            </li>
            <li>
              <code>│ ├── FilteredProduct.js </code> - Component for displaying
              filtered products.
            </li>
            <li>
              <code>│ ├── ProductList.js</code> - Component for displaying a
              list of products.
            </li>
          </ul>
        </li>
        <li>
          <code>├── pages/ </code>
          <ul>
            <li>
              <code>│ ├── Login.js</code> - The login page component is
              displayed when the user opens the website.
            </li>
            <li>
              <code>│ ├── Home.js</code> - The home page component is accessible
              after successful login and displays product information.
            </li>
            <li>
              <code>│ ├── About.js</code> - The about page component provides
              information about the project structure.
            </li>
          </ul>
        </li>
        <li>
          <code>├── css/ </code>
          <ul>
            <li>
              <code>│ ├── login.css</code> - Stylesheet for styling the login
              component.
            </li>
          </ul>
        </li>
        <li>
          <code>├── assets/ </code>
          <ul>
            <li>
              <code>└─── storeImg.jpg</code> - The background image used in
              styling components.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className={`${h2css}`}>Development Challenges:</h2>

      <p className={`${pcss}`}>
        <strong className="font-[500]">User Authentication API:</strong>{" "}
        Integration with the login API was a challenge. Ensuring the proper
        format for the request body and setting the correct headers were crucial
        for successful user authentication.
      </p>

      <h2 className={`${h2css}`}>Getting Started:</h2>
      <p className={`${pcss}`}>
        To run the project locally, follow these steps:
        <ol>
          <li>
            Clone the project repository: `git clone
            https://github.com/bobbyrepo/provisoin-store`
          </li>
          <li>Install dependencies: `npm install`</li>
          <li>Start the development server: `npm start`</li>
        </ol>
        Open your browser and go to `http://localhost:3000` to view the
        application.
      </p>
    </div>
  );
}

export default About;
