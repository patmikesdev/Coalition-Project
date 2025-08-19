# Coalition Project Changelog

## Project Overview
A full-stack web application using modern cloud services.

### Architecture
- **Frontend**: React + Vite → Deployed on Netlify
- **Backend**: Express.js → Deployed on Render
- **Database**: MongoDB Atlas (M0 Free Tier)

---

## Phase 1: Initial Setup and Basic API

### Server Setup
- Initialized Express.js server in `/server` directory
- Created basic REST API with mock data:
  - `GET /` - Welcome message
  - `GET /api/status` - Server status endpoint
  - `GET /api/users` - Returns mock users
  - `POST /api/users` - Creates mock user
- Added error handling middleware
- Added npm start script

### Dependencies Added
- express: ^5.1.0
- cors: ^2.8.5
- dotenv: ^17.2.1

---

## Phase 2: Frontend Deployment Configuration

### Netlify Setup
- Created `netlify.toml` configuration file
- Configured build settings:
  - Base directory: `client/`
  - Build command: `npm run build`
  - Publish directory: `dist`
- Added SPA redirect rules for React Router
- Added security headers

### Environment Variables (Client)
- Created `.env` for local development
- Created `.env.production` for production builds
- Added `VITE_API_URL` environment variable
- Updated React app to fetch API status

---

## Phase 3: Backend Deployment and CORS

### Render Deployment
- Configured Render for Express app deployment
- Set root directory to `server/`
- Added environment variables in Render dashboard

### CORS Configuration
- Installed `cors` package
- Configured CORS to use `CLIENT_URL` from environment
- Fixed cross-origin requests between Netlify and Render

### Environment Variables (Server)
- Added `.env` and `.env.example` files
- Variables configured:
  - `NODE_ENV`
  - `PORT`
  - `CLIENT_URL`
  - `MONGODB_URI` (added later)

---

## Phase 4: MongoDB Atlas Integration

### Database Setup
- Created MongoDB Atlas M0 free cluster
- Created application user (app-user) with read/write permissions
- Configured network access (0.0.0.0/0 for development)

### Server MongoDB Integration
- Installed `mongoose`: ^8.17.0
- Created database connection module (`db.js`)
- Created User model with schema validation
- Updated all API endpoints to use MongoDB:
  - `GET /api/users` - Fetch all users from database
  - `POST /api/users` - Create user with validation
  - `GET /api/users/:id` - Get single user
  - `DELETE /api/users/:id` - Delete user
- Added proper error handling for database operations

### Frontend Updates
- Complete UI redesign for user management
- Added form to create new users
- Display users from MongoDB with creation date
- Added delete functionality with confirmation
- Added loading states and error handling
- Added connection info display

---

## Phase 5: Production Configuration

### Environment Variable Updates
- Updated MongoDB connection string to include database name
- Configured environment variables in Render dashboard
- Removed `.env.production` approach in favor of platform environment variables

### GitHub Integration Fix
- Installed Render GitHub app for auto-deploy
- Fixed webhook permissions for automatic deployments

---

## Key Learning Points

1. **Environment Variables**:
   - Client-side variables are baked in at build time
   - Server-side variables are read at runtime
   - Use platform dashboards for production secrets

2. **Security Best Practices**:
   - Separate database users for applications
   - Never commit credentials to Git
   - Use environment variables for all sensitive data

3. **Deployment Architecture**:
   - Static sites (React) → CDN hosting (Netlify)
   - Dynamic APIs (Express) → Container hosting (Render)
   - Databases → Managed cloud services (MongoDB Atlas)

4. **CORS Configuration**:
   - Essential for frontend-backend communication
   - Configure allowed origins based on environment

---

## Current Status
✅ Full-stack application successfully deployed
✅ Frontend: https://courageous-pixie-fb7609.netlify.app/
✅ Backend: https://deployment-test-942h.onrender.com/
✅ Database: MongoDB Atlas cluster connected
✅ Auto-deploy enabled for both services
✅ Complete CRUD operations working with real database