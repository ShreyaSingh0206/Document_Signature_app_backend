# Document Signature App — Backend

Backend service for the Document Signature App, a web-based application for uploading PDF documents, managing user authentication, and supporting electronic document signing.

Built with Node.js and Express.js, the backend handles API requests, document uploads, and cloud-based file storage.

**[Frontend Repository](https://github.com/ShreyaSingh0206/Document_Signature_app_frontend) · [Live Demo](https://document-signature-app-frontend-green.vercel.app) · [Demo Video](https://youtu.be/Quk01K6kmHU)**

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend Architecture](#backend-architecture)
- [Document Upload Workflow](#document-upload-workflow)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend Repository](#frontend-repository)
- [Key Technical Highlights](#key-technical-highlights)
- [Security Considerations](#security-considerations)
- [Author](#author)

---

## Demo

[▶ **Watch the Document Signature App Demo**](https://youtu.be/Quk01K6kmHU)

---

## Features

- **Authentication APIs** — Handle user registration, login, and protected operations.
- **Document APIs** — Manage document-related requests through Express routes and controllers.
- **File Uploads** — Process uploaded documents using Multer middleware.
- **Cloud Storage** — Store uploaded documents using Cloudinary.
- **PDF Integration** — Provide document access to the frontend for browser-based PDF viewing.
- **Middleware-Based Architecture** — Separate authentication and upload handling from route and controller logic.
- **REST API Integration** — Provide endpoints for communication between the frontend and backend.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB, if used by the current implementation |
| **File Uploads** | Multer |
| **Cloud Storage** | Cloudinary |
| **Authentication** | Based on the implemented authentication mechanism |
| **API Architecture** | REST APIs |

---

## Backend Architecture

```text
             React Frontend
                   │
                   │ HTTP Requests
                   ▼
             Express Server
                   │
                   ▼
                API Routes
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
   Auth Middleware    Upload Middleware
          │                 │
          ▼                 ▼
   Auth Controller    Document Controller
                            │
                            ▼
                         Multer
                            │
                            ▼
                       Cloudinary
                            │
                            ▼
                Document URL / Response
                            │
                            ▼
                     React Frontend
                            │
                            ▼
                        PDF Viewer
```

---

## Document Upload Workflow

1. The user selects a PDF document in the frontend.
2. The frontend sends the file to the backend through an API request.
3. Multer processes the incoming file.
4. The backend uploads the file to Cloudinary.
5. The resulting file URL is returned or stored according to the application's implementation.
6. The frontend uses the document URL to display the PDF and support the signing workflow.

---

## Project Structure

```text
backend/
├── controllers/
│   ├── authController.js
│   └── docController.js
├── middlewares/
│   ├── auth.js
│   └── upload.js
├── models/
├── routes/
│   ├── auth.js
│   └── docRoute.js
├── uploads/
├── utils/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js
- npm
- Cloudinary account
- Database connection, if required by the application

### Installation

Clone the backend repository:

```bash
git clone https://github.com/ShreyaSingh0206/Document_Signature_app_backend.git
cd Document_Signature_app_backend
npm install
```

### Environment Variables

Create a `.env` file containing the credentials and configuration required by the backend.

Example:

```env
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Add any database or authentication variables required by your actual code.

> ⚠️ **Never commit your `.env` file or expose API credentials in the repository.**

### Run Locally

Use the development command defined in `package.json`. For example:

```bash
npm run dev
```

---

## Frontend Repository

The React frontend provides the document viewer, signature creation interface, and drag-and-drop signing workflow.

**[View Frontend Repository →](https://github.com/ShreyaSingh0206/Document_Signature_app_frontend)**

---

## Key Technical Highlights

- Developed REST APIs using Node.js and Express.js.
- Implemented file upload handling using Multer middleware.
- Integrated Cloudinary for cloud-based document storage.
- Organized authentication and document functionality into separate controllers, routes, and middleware.
- Connected backend document operations with a React-based PDF signing interface.

---

## Security Considerations

- Store credentials in environment variables.
- Validate uploaded file types and sizes.
- Protect private document URLs and restrict unauthorized access.
- Apply authentication and authorization to protected document operations.
- Ensure sensitive documents are not exposed through public links unintentionally.

---

## Author

**Shreya Kumari**
B.Tech Information Technology

[GitHub Profile](https://github.com/ShreyaSingh0206)
