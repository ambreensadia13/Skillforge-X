# SkillForge-X

### AI-Powered Career Intelligence and Job Matching System

SkillForge-X is a career intelligence platform designed to help university students and fresh graduates in Pakistan discover relevant job opportunities, analyze their resumes, and develop the skills needed to achieve their career goals.

The platform aims to simplify the career development process by bringing job matching, resume analysis, personalized learning roadmaps, and career insights into one place.

## Overview

SkillForge-X focuses on helping students and fresh graduates find internships, trainee programs, and entry-level jobs that match their skills, qualifications, and career interests.

The frontend provides a modern, responsive interface with an Ivory + Burgundy design theme, creating a professional and user-friendly experience.

## Key Features

- **Career Dashboard:** A central workspace for accessing career development tools.
- **AI Resume Analyzer:** Analyze resumes and identify skills, strengths, and areas for improvement.
- **AI Career Roadmap Generator:** Generate personalized learning roadmaps based on career goals and skill gaps.
- **Intelligent Job Matching:** Find relevant job opportunities based on a user's skills, qualifications, and interests.
- **Job Recommendations:** Discover suitable internships, trainee programs, and entry-level positions.
- **Career Analytics:** Track career development progress and skill improvement.
- **Responsive Interface:** Access the platform through desktop and mobile browsers.

*Note: These are the planned platform capabilities. Features requiring backend or AI integration may not be functional in the current frontend version.*

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building reusable user interface components |
| Vite | Frontend development and build tool |
| React Router | Client-side navigation |
| JavaScript | Application functionality |
| CSS | Styling and responsive design |
| Lucide React | Interface icons |

## Project Structure

```text
SkillForge-X/
├── public/
│   └── logo.png
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

The structure above is a simplified overview. Additional components, pages, and styles may be organized in separate folders.

## Getting Started

Follow these instructions to run the frontend locally.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/skillforge-x.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Navigate to the Project

```bash
cd skillforge-x
```

### 3. Install Dependencies

```bash
npm install
```

This command installs the dependencies listed in `package.json`.

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for Production

To create a production-ready frontend build:

```bash
npm run build
```

Vite generates the production files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The frontend is designed to be deployed using [Vercel](https://vercel.com/).

To deploy:

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Select Vite as the framework preset.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Click Deploy.

Vercel will build and publish the frontend. Once deployment is complete, the application will be accessible through a public URL.

## Future Development

The project is intended to evolve into a full-stack career intelligence platform.

Planned development includes:

- Backend API development
- Database integration
- Secure user authentication
- User profiles and career preferences
- AI-powered resume analysis
- Personalized career roadmap generation
- Intelligent job matching and recommendations
- Career analytics and progress tracking

## Project Information

**Project Name:** SkillForge-X  
**Project Type:** AI-Powered Career Intelligence Platform  
**Project Focus:** Career Development, Resume Analysis, and Job Matching  
**Target Audience:** University Students and Fresh Graduates in Pakistan  
**Frontend:** React + Vite

## Author

**Ambreen Sadia**

BS Information Technology  
University of the Punjab

GitHub: [GitHub Profile](https://github.com/)

LinkedIn: [Ambreen Sadia](https://www.linkedin.com/in/ambreen-sadia-482657419/)

---

*SkillForge-X — Empowering students and fresh graduates to build smarter career paths.*
