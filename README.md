# Task Management API (Backend)

A Nest.js-based backend API for managing tasks with authentication and PostgreSQL database integration. The API supports user registration, login, and CRUD operations on tasks.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)   
- [Project Structure](#project-structure)  
 

---

## Features

- User registration and login with JWT authentication  
- Create, Read, Update, Delete tasks  
- PostgreSQL database with TypeORM integration  
- Input validation and error handling  
- Easily extendable and maintainable  

---

## Tech Stack

- **Backend:** Nest.js  
- **Database:** PostgreSQL  
- **ORM:** TypeORM  
- **Authentication:** JWT (JSON Web Tokens)  
- **Validation:** class-validator  

---

## Getting Started

### Prerequisites

- Node.js >= 18  
- PostgreSQL >= 12  
- npm or yarn  

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd backend

Install dependencies:

npm install
# or
yarn install

Create a .env file in the root:

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=taskdb

JWT_SECRET=mySuperSecretKey123
JWT_EXPIRES_IN=86400
PORT=3000

API Endpoints
Auth
Method	      Endpoint	Description
POST	        /auth/register	Register a user
POST	        /auth/login	Login a user

Tasks (Protected — Requires JWT)
Method	      Endpoint	Description
POST	        /tasks	Create a new task
GET	          /tasks	Get all tasks for the user
GET	          /tasks/:id	Get a single task by ID
PUT	          /tasks/:id	Update a task by ID
DELETE	      /tasks/:id	Delete a task by ID
