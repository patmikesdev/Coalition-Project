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

## Phase 6: Project Transition - From Test to Production

### Repository Transformation (August 18, 2025)
- Transitioned from "Deployment-Test" to official "Coalition Project" repository
- Renamed repository to "Coalition-Project" on GitHub
- Updated project scope from deployment testing to full production application
- Preserved all deployment configurations and infrastructure learnings

### Project Charter Integration
- Imported official project charter (`notes/charter.md`)
- Charter defines comprehensive requirements for U.S. Campaign to End the Death Penalty website
- Created Agile implementation plan (`plan/plan.md`) translating charter into:
  - 5 development epics
  - 4 milestone phases (11 weeks total)
  - Sprint-based delivery approach

### Project Documentation Structure
- Added `CLAUDE.md` with project-specific instructions
- Created `notes/` directory for project documentation:
  - Charter requirements
  - MongoDB guides
  - Deployment guides
  - Environment configuration best practices
- Created `plan/` directory for Agile planning documents

### MCP (Model Context Protocol) Integration
- Configured MCP support for enhanced GitHub integration
- Created `.mcp.json` configuration file
- Added `github-mcp.sh` script for MCP server initialization
- Enabled direct GitHub API access through Claude for:
  - Issue creation and management
  - Pull request operations
  - Repository file operations
  - Project board integration
- This allows AI-assisted project management and code operations

---

## Phase 7: Agile Project Management Setup

### GitHub Project Infrastructure (August 18, 2025)

#### Issue Templates Created
- Created `.github/ISSUE_TEMPLATE/` directory with:
  - `feature_request.md` - User story template with acceptance criteria
  - `bug_report.md` - Bug reporting with reproduction steps
  - `task.md` - Technical/administrative tasks

#### Project Epics (5 Total)
Created comprehensive epics breaking down charter requirements:
- **Epic #3**: Core Infrastructure - Responsive design, navigation, components, ADA compliance
- **Epic #4**: Content Management - Homepage, About/Resources sections, blog functionality
- **Epic #5**: Campaign Features - Interactive state map, campaign sections, detail pages
- **Epic #6**: Action Network Integration - Email capture, donations, petitions, forms
- **Epic #7**: Social Media & Analytics - Social feeds, GA4, Facebook Pixel, tracking

#### Sprint 1 User Stories (21 Story Points)
- **Issue #8**: Homepage Layout (5 points) - Content Management
- **Issue #9**: State Map Component (8 points) - Campaign Features
- **Issue #10**: Email Capture Pop-up (3 points) - Action Network Integration
- **Issue #11**: Mobile Navigation (3 points) - Core Infrastructure
- **Issue #12**: About Us Page (2 points) - Content Management

#### Project Milestones
Created 4 development phase milestones:
1. **MVP Launch** - Due Sep 15, 2025 (4 weeks)
2. **Content Integration** - Due Sep 29, 2025 (2 weeks)
3. **Action Network Integration** - Due Oct 20, 2025 (3 weeks)
4. **Polish & Launch** - Due Nov 3, 2025 (2 weeks)

#### GitHub Project Board Configuration
- Created Project Board #4: "Coalition Project Board"
- Linked repository to project for automatic issue availability
- Configured Status columns: Backlog, Ready, In Progress, Review, Done
- Added custom fields:
  - Story Points (Number field)
  - Sprint (Single Select: Sprint 1-5)
  - Epic (Single Select: All 5 epics)

#### Project Automation
- Configured built-in workflows for automatic status updates
- Set up auto-add workflow for new issues
- Repository linked for seamless issue management

#### CLI Tools & Automation
- Installed GitHub CLI (`gh`) for project management
- Authenticated with project and repository scopes
- Used `gh` commands to:
  - Create milestones with due dates
  - Add labels for priority, components, and sprints
  - Set field values for all Sprint 1 items
  - Configure project board programmatically

#### Documentation
- Created `CONTRIBUTING.md` with:
  - Agile workflow (2-week sprints)
  - Story point system (Fibonacci: 1,2,3,5,8)
  - Definition of Done criteria
  - Branch strategy (feature → main)
  - Code standards and testing requirements

---

## Current Status

### Infrastructure (Proven & Ready)
✅ Full-stack application successfully deployed
✅ Frontend: https://8th-coalition-project.netlify.app/
✅ Backend: https://deployment-test-942h.onrender.com/
✅ Database: MongoDB Atlas cluster connected
✅ Auto-deploy enabled for both services
✅ Complete CRUD operations working with real database

### Project Management (Fully Configured)
✅ Transitioned from test project to Coalition Project production codebase
✅ Project charter and requirements documented
✅ Agile project management structure implemented
✅ GitHub Project Board configured with 12 issues, 5 epics, 4 milestones
✅ Sprint 1 ready to begin with 21 story points allocated
✅ 11-week development timeline established (Aug 2025 - Nov 2025)