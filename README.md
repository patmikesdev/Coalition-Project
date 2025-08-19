# Coalition Project

A full-stack web application for the U.S. Campaign to End the Death Penalty, providing advocacy tools and campaign management features.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/patmikesdev/Coalition-Project.git
cd Coalition-Project

# Install dependencies
cd client && npm install
cd ../server && npm install

# Set up environment variables
# Create .env files in both client/ and server/ directories (see Environment Variables)

# Start development servers
# Terminal 1 - Backend
cd server && npm start

# Terminal 2 - Frontend  
cd client && npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:3000

## 📁 Project Structure

```
Coalition-Project/
├── client/              # React frontend
│   ├── src/            # React components and assets
│   └── package.json    # Frontend dependencies
├── server/             # Express backend
│   ├── models/         # MongoDB schemas
│   ├── db.js          # Database connection
│   └── index.js       # Server entry point
├── notes/             # Project documentation
└── .github/           # GitHub workflows and templates
```

## 🛠 Tech Stack

**Frontend**
- React 18 with Vite
- CSS Modules for styling
- Deployed on Netlify

**Backend**
- Express.js 5
- MongoDB with Mongoose
- Deployed on Render

**Infrastructure**
- MongoDB Atlas for database
- GitHub Actions for CI/CD
- Auto-deploy on push to main

## 🌐 Deployment

**Production URLs**
- Frontend: https://8th-coalition-project.netlify.app/
- Backend: https://deployment-test-942h.onrender.com/

**Environment Variables**

Frontend (`client/.env`):
```
VITE_API_URL=http://localhost:3000
```

Backend (`server/.env`):
```
NODE_ENV=development
PORT=3000
CLIENT_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
```

## 📋 Project Management

- **Project Board**: [GitHub Projects](https://github.com/users/patmikesdev/projects/4)
- **Current Sprint**: Sprint 1 (21 story points)
- **Timeline**: August - November 2025

### Active Development

View our active epics and current sprint progress on the [project board](https://github.com/users/patmikesdev/projects/4):
- Core Infrastructure
- Content Management  
- Campaign Features
- Action Network Integration
- Social & Analytics

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for our development process, coding standards, and how to submit pull requests.

### Development Workflow
1. Pick an issue from the current sprint
2. Create a feature branch: `feature/issue-{number}-description`
3. Make changes and test thoroughly
4. Submit a pull request linking to the issue
5. Request code review

## 📝 Documentation

- [Project Charter](notes/charter.md) - Full requirements specification
- [Agile Plan](plan/plan.md) - Sprint planning and epics
- [Contributing Guide](CONTRIBUTING.md) - Development guidelines
- [Changelog](changelog.md) - Project history and updates

## 🔒 Security

- Never commit `.env` files or credentials
- Use environment variables for all secrets
- Report security issues to project maintainers

## 📄 License

Proprietary - U.S. Campaign to End the Death Penalty

---

For questions or support, please open an issue or contact the development team.