# Agile Project Setup Plan for Coalition Project

## 1. GitHub Project Structure

### Create GitHub Project Board
- Use GitHub Projects (v2) with custom fields
- Create columns: Backlog, Ready, In Progress, Review, Done
- Add custom fields: Story Points, Sprint, Epic

### Create Milestones (Phases)
1. **MVP Launch** (4 weeks) - Core functionality
2. **Content Integration** (2 weeks) - Pages and content
3. **Action Network Integration** (3 weeks) - Forms and campaigns
4. **Polish & Launch** (2 weeks) - Testing and deployment

## 2. Epic Breakdown from Charter

### Epic 1: Core Infrastructure
- Setup responsive design framework
- Implement navigation and routing
- Create reusable component library
- Setup ADA compliance tools

### Epic 2: Content Management
- Homepage with featured campaigns carousel
- About section (4 sub-pages)
- Facts/Resources section (3 sub-pages)
- Blog functionality

### Epic 3: Campaign Features
- Interactive state map (25+ states)
- National campaigns section
- Featured campaigns carousel
- Campaign detail pages

### Epic 4: Action Network Integration
- Email capture pop-ups
- Donation page redirect
- Petition/letter campaign embeds
- Survey forms

### Epic 5: Social & Analytics
- Social media feed integration
- Google Analytics setup
- Facebook Pixel integration
- Newsletter signup

## 3. Issue Templates to Create

### Feature Template
```yaml
name: Feature Request
about: New feature or enhancement
labels: enhancement
body:
  - User Story
  - Acceptance Criteria
  - Technical Notes
  - Design Requirements
```

### Bug Template
```yaml
name: Bug Report
about: Report a bug
labels: bug
body:
  - Description
  - Steps to Reproduce
  - Expected vs Actual
  - Screenshots
```

### Task Template
```yaml
name: Task
about: Technical or administrative task
labels: task
body:
  - Description
  - Subtasks
  - Dependencies
```

## 4. Initial Backlog Items (First Sprint)

### High Priority User Stories:
1. **Homepage Layout** - As a visitor, I want to see featured campaigns and understand the organization's mission
2. **State Map Component** - As a visitor, I want to find campaigns in my state
3. **Email Capture** - As a visitor, I want to join the mailing list
4. **Mobile Navigation** - As a mobile user, I want easy navigation
5. **About Us Page** - As a visitor, I want to learn about the organization

### Technical Tasks:
1. Setup GitHub Actions for CI/CD
2. Configure staging environment
3. Setup component testing framework
4. Create design system documentation
5. Implement responsive grid system

## 5. Implementation Steps

1. Create `.github/ISSUE_TEMPLATE/` directory with templates
2. Create GitHub Project board via repository Settings
3. Create Milestones for each phase
4. Create Labels (epic, frontend, backend, design, etc.)
5. Generate issues from charter requirements
6. Assign issues to first sprint
7. Create a CONTRIBUTING.md with workflow guidelines

## 6. Agile Workflow

- **Sprint Length**: 2 weeks
- **Ceremonies**: Sprint planning, daily standups, retrospectives
- **Story Points**: Use Fibonacci (1, 2, 3, 5, 8)
- **Definition of Done**: Code reviewed, tested, deployed to staging
- **Branch Strategy**: feature branches → main

This structure will turn the charter requirements into actionable, trackable work items with clear priorities and sprint goals.