# Next.js Practice Project 2

This project serves as a comprehensive practice ground for building a full-stack web application using Next.js 16 (App Router) with a focus on modern web development practices, authentication, and cloud integration. It demonstrates key concepts such as user authentication, profile management, secure data handling, and efficient database interactions in a serverless environment.

## 🚀 Features

*   **User Authentication:**
    *   **Email/Password Registration & Login:** Secure user registration and login using credentials.
    *   **Google Authentication:** Seamless sign-in/sign-up using Google OAuth.
    *   **Session Management:** Robust session handling with NextAuth.js (JWT strategy).
    *   **Logout Functionality:** Securely terminate user sessions.
*   **User Profile Management:**
    *   **View Profile:** Display authenticated user's name and profile image.
    *   **Edit Profile:** Update user's name and profile picture.
    *   **Image Upload:** Integrate with Cloudinary for efficient and scalable image storage.
*   **Protected Routes:** Implement route protection using Next.js 16's proxy (middleware) to ensure only authenticated users can access specific pages.
*   **Global State Management:** Utilize React Context API for managing and sharing authenticated user data across the application.
*   **Secure Data Handling:**
    *   **Password Hashing:** Store user passwords securely using `bcryptjs`.
    *   **Environment Variables:** Proper use of environment variables for sensitive information (API keys, database URLs).
*   **Efficient Database Interaction:**
    *   **MongoDB Integration:** Connect to and interact with a MongoDB database using Mongoose.
    *   **Serverless-friendly DB Connection:** Implement a cached database connection strategy to optimize performance and prevent connection overhead in Next.js serverless functions.
*   **Modern UI/UX:**
    *   **Tailwind CSS:** Styled with Tailwind CSS for a utility-first approach to rapid UI development.
    *   **Responsive Design:** Built with responsiveness in mind for various screen sizes.

## 🛠️ Technologies Used

*   **Frontend:**
    *   [Next.js 16](https://nextjs.org/) (App Router) - React framework for building full-stack applications.
    *   [React 19](https://react.dev/) - JavaScript library for building user interfaces.
    *   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
    *   [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library.
    *   [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
*   **Backend/API:**
    *   [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) - For creating server-side API endpoints.
    *   [NextAuth.js v4](https://next-auth.js.org/) - Flexible authentication for Next.js applications.
    *   [Mongoose](https://mongoosejs.com/) - MongoDB object data modeling (ODM) for Node.js.
    *   [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Library for hashing passwords.
    *   [Cloudinary](https://cloudinary.com/) - Cloud-based image and video management.
*   **Database:**
    *   [MongoDB](https://www.mongodb.com/) - NoSQL document database.
*   **Development Tools:**
    *   [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static types.
    *   [ESLint](https://eslint.org/) - Pluggable JavaScript linter.
    *   [PostCSS](https://postcss.org/) - Tool for transforming CSS with JavaScript.

## 📂 Project Structure

```
.
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore file
├── eslint.config.mjs        # ESLint configuration
├── next-auth.d.ts           # NextAuth.js TypeScript declarations
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── proxy.ts                 # Next.js 16 proxy (middleware) for route protection
├── README.md                # Project README file
├── tsconfig.json            # TypeScript configuration
├── types.d.ts               # Global TypeScript type declarations
├── app/
│   ├── favicon.ico          # Favicon
│   ├── globals.css          # Global CSS styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main application page (dashboard)
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts # NextAuth.js API route
│   │   │   └── register/route.ts      # User registration API
│   │   ├── edit/route.ts              # User profile edit API
│   │   └── user/route.ts              # Fetch user details API
│   ├── edit/page.tsx                  # User profile edit page
│   ├── login/page.tsx                 # Login page
│   └── register/page.tsx              # Registration page
├── components/
│   └── ClientProvider.tsx   # NextAuth.js SessionProvider wrapper
├── context/
│   └── UserContext.tsx      # React Context for global user state
├── lib/
│   ├── auth.ts              # NextAuth.js configuration options
│   ├── cloudinary.ts        # Cloudinary upload utility
│   └── db.ts                # MongoDB connection utility with caching
├── model/
│   └── user.model.ts        # Mongoose User schema definition
└── public/                  # Static assets
```

## ⚡ API Endpoints

This project exposes several API endpoints for user authentication, profile management, and data retrieval.

### 1. User Registration

*   **Endpoint:** `/api/auth/register`
*   **Method:** `POST`
*   **Description:** Registers a new user with email and password.
*   **Request Body:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "securepassword123"
    }
    ```
*   **Success Response (201 Created):**
    ```json
    {
        "_id": "...",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "createdAt": "...",
        "updatedAt": "...",
        "__v": 0
    }
    ```
*   **Error Responses:**
    *   `400 Bad Request`: "User already exist!" or "Password must be at least 6 characters!"
    *   `500 Internal Server Error`: "Register error: ..."

### 2. NextAuth.js Authentication

*   **Endpoint:** `/api/auth/[...nextauth]`
*   **Methods:** `GET`, `POST`
*   **Description:** Handles all authentication-related operations managed by NextAuth.js, including:
    *   **Sign In:** Initiates the login process (e.g., credential login, Google OAuth).
    *   **Sign Out:** Terminates the user session.
    *   **Session Management:** Provides session details for authenticated users.
*   **Usage:** This endpoint is primarily used internally by NextAuth.js client-side functions (e.g., `signIn`, `signOut`, `useSession`). Direct interaction is generally not required.

### 3. Fetch User Profile

*   **Endpoint:** `/api/user`
*   **Method:** `GET`
*   **Description:** Retrieves the profile details of the currently authenticated user.
*   **Authentication:** Requires an active user session (JWT token).
*   **Success Response (200 OK):**
    ```json
    {
        "_id": "...",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "image": "https://res.cloudinary.com/...",
        "createdAt": "...",
        "updatedAt": "...",
        "__v": 0
    }
    ```
*   **Error Responses:**
    *   `400 Bad Request`: "User does not have session" or "User not found"
    *   `500 Internal Server Error`: "Get user error: ..."

### 4. Update User Profile

*   **Endpoint:** `/api/edit`
*   **Method:** `POST`
*   **Description:** Updates the authenticated user's name and/or profile image.
*   **Authentication:** Requires an active user session (JWT token).
*   **Request Body (FormData):**
    *   `name`: (string, optional) The new name for the user.
    *   `file`: (File, optional) The new profile image file.
*   **Success Response (200 OK):**
    ```json
    {
        "_id": "...",
        "name": "Jane Doe",
        "email": "john.doe@example.com",
        "image": "https://res.cloudinary.com/new-image-url...",
        "createdAt": "...",
        "updatedAt": "...",
        "__v": 0
    }
    ```
*   **Error Responses:**
    *   `400 Bad Request`: "User does not have session" or "User not found"
    *   `500 Internal Server Error`: "Edit error: ..."


## 💡 Learning Points & Best Practices Demonstrated

*   **Next.js App Router:** Understanding and utilizing the new App Router for routing, layouts, and server components/actions.
*   **NextAuth.js Integration:** Implementing robust authentication flows with multiple providers and custom callbacks.
*   **Serverless Database Connections:** Best practices for managing MongoDB connections in a serverless environment to avoid performance bottlenecks.
*   **Image Upload Workflows:** Integrating third-party services like Cloudinary for media management.
*   **Global State with Context API:** Effective use of React Context for application-wide state management without external libraries like Redux.
*   **Middleware for Authentication:** Protecting routes and handling redirects based on user authentication status.
*   **TypeScript for Type Safety:** Enhancing code quality and maintainability with strong typing.
*   **Environment Variable Management:** Securely handling sensitive credentials.


## ⚙️ Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/saksham2882/nextjs-practice-project-2.git
    cd nextjs-practice-project-2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add the following environment variables. You can use `.env.example` as a template.

    ```env
    MONGODB_URL="your_mongodb_connection_string"
    NEXT_AUTH_SECRET="a_long_random_string_for_nextauth_jwt_signing"
    GOOGLE_CLIENT_ID="your_google_oauth_client_id"
    GOOGLE_CLIENT_SECRET="your_google_oauth_client_secret"
    CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
    ```
    *   **`MONGODB_URL`**: Your MongoDB connection string (e.g., from MongoDB Atlas).
    *   **`NEXT_AUTH_SECRET`**: A strong, random string used to encrypt and sign tokens/cookies for NextAuth.js. Generate a strong one (e.g., using `openssl rand -base64 32`).
    *   **`GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`**: Obtain these from the Google Cloud Console for OAuth authentication.
    *   **`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`**: Obtain these from your Cloudinary dashboard for image uploads.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## 🤝 Contributing

This project is primarily for learning and practice. However, feel free to fork the repository, experiment, and suggest improvements!
