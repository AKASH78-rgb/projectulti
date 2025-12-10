# JobNexus - Job Portal Application

## Overview
JobNexus is a full-featured job portal connecting job seekers and recruiters using the MERN stack.

## Prerequisites
Before running the project, ensure you have the following installed:
1.  **Node.js** (v14 or higher)
2.  **MongoDB** (Ensure it is running locally on port 27017 or update the `.env` file)

## Installation & Setup

### 1. Backend Setup
The backend runs on Node.js/Express and connects to MongoDB.

1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Environment Variables**: A `.env` file is already created with default local settings:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/jobnexus
    JWT_SECRET=supersecretkey123
    ```

### 2. Frontend Setup
The frontend is built with React + Vite.

1.  Open a **new terminal** and navigate to the client directory:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

You need to run both the backend and frontend simultaneously in **two separate terminals**.

### Terminal 1: Start Backend
```bash
cd server
npm run dev
```
*The server will start on [http://localhost:5000](http://localhost:5000)*

### Terminal 2: Start Frontend
```bash
cd client
npm run dev
```
*The frontend will start on [http://localhost:5173](http://localhost:5173)* (or 5174 if 5173 is busy).

## Usage
1.  Open the frontend URL in your browser.
2.  **Register** a new account:
    *   Select **"Job Seeker"** to likely see the Candidate Dashboard.
    *   Select **"Recruiter / Employer"** to see the Admin Dashboard.
3.  **Login** with your registered credentials to access your dashboard.

## Tech Stack
- **Frontend**: React.js, Vite, CSS Modules (Glassmorphism UI).
- **Backend**: Node.js, Express.js, MongoDB, Mongoose.
- **Auth**: JWT (JSON Web Tokens).
