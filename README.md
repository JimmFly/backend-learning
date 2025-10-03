# Backend Learning - Todo Application

A full-stack todo application built with Node.js, Express.js, SQLite, and JWT authentication. This project demonstrates modern backend development practices with TypeScript.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Password Security**: Passwords are hashed using bcrypt
- **Todo Management**: Create, read, update, and delete todos
- **User-specific Data**: Each user can only access their own todos
- **SQLite Database**: Lightweight database with foreign key constraints
- **TypeScript**: Full type safety throughout the application
- **Responsive UI**: Clean and modern frontend interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript
- **SQLite** - Lightweight database
- **better-sqlite3** - SQLite driver for Node.js
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

### Frontend
- **HTML5** - Markup language
- **CSS3** - Styling
- **Vanilla JavaScript** - Client-side logic
- **Font Awesome** - Icons

### Development Tools
- **tsx** - TypeScript execution engine
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **pnpm** - Package manager

## 📁 Project Structure

```
backend-learning/
├── src/
│   ├── db.ts                    # Database configuration and schema
│   ├── server.ts                # Main server file
│   ├── middleware/
│   │   └── auth-middleware.ts   # JWT authentication middleware
│   └── routes/
│       ├── auth-routes.ts       # Authentication routes
│       └── todo-routes.ts       # Todo CRUD routes
├── public/
│   ├── index.html              # Frontend HTML
│   ├── styles.css              # Custom styles
│   └── fanta.css               # Additional styling
├── .env.example                # Environment variables template
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JimmFly/backend-learning.git
   cd backend-learning
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your JWT secret:
   ```
   JWT_SECRET=your-super-secret-jwt-key-here
   PORT=3000
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📝 API Endpoints

### Authentication Routes (`/auth`)

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| GET | `/auth` | Get all users (development only) | - |
| POST | `/auth/register` | Register a new user | `{username, password}` |
| POST | `/auth/login` | Login user | `{username, password}` |
| DELETE | `/auth/delete-account` | Delete user account | `{username, password}` |

### Todo Routes (`/todos`) - Protected

| Method | Endpoint | Description | Body | Headers |
|--------|----------|-------------|------|---------|
| GET | `/todos` | Get all user's todos | - | `Authorization: <token>` |
| POST | `/todos` | Create a new todo | `{task}` | `Authorization: <token>` |
| PUT | `/todos/:id` | Update a todo | `{task?, completed?}` | `Authorization: <token>` |
| DELETE | `/todos/:id` | Delete a todo | - | `Authorization: <token>` |

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
```

### Todos Table
```sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  task TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 🧪 Testing

You can test the API endpoints using the included `test.rest` file with the REST Client extension in VS Code, or use tools like Postman or curl.

### Example Registration Request
```http
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "username": "your-username",
  "password": "your-password"
}
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: Prepared statements protect against SQL injection
- **Foreign Key Constraints**: Database integrity with proper relationships

## 📜 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build the project for production
- `pnpm start` - Start the production server
- `pnpm check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**JimmFly**
- GitHub: [@JimmFly](https://github.com/JimmFly)

## 🙏 Acknowledgments

- Express.js community for excellent documentation
- SQLite for providing a lightweight database solution
- The TypeScript team for making JavaScript development more robust

---

⭐ If you found this project helpful, please give it a star!