# CVPrep — AI-Powered CV & Interview Coach

CVPrep helps job seekers land their dream role by analyzing their CV against job descriptions, generating tailored interview questions, writing cover letters, and tracking applications — all powered by AI.

## Features

- **CV Analyzer** — Paste your CV and a job description to get a match score, ATS compatibility breakdown, skill gap analysis, and personalized recommendations
- **Interview Prep** — Generates 5 tailored interview questions with suggested answers based on your CV and the target role
- **Cover Letter Generator** — Produces a personalized cover letter matched to the job description
- **CV Scorer** — Scores your CV across key sections (experience, skills, formatting) and suggests improvements
- **CV Regenerator** — Rewrites your CV incorporating all recommended improvements
- **Job Tracker** — Kanban board to track applications across Wishlist → Applied → Interview → Offer → Rejected
- **Dashboard** — Overview of your analyses, average match scores, and recent activity

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, Radix UI, Lucide React |
| Auth & Database | Supabase (Auth + Postgres) |
| AI — Analysis | Groq API (`llama-3.3-70b-versatile`) |
| AI — CV Generation | Google Generative AI |
| PDF Parsing | pdfjs-dist, unpdf |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Groq](https://console.groq.com) API key
- A [Google AI](https://aistudio.google.com) API key

### Installation

```bash
git clone https://github.com/AqeelAroos/prepwise.git
cd prepwise
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_api_key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
```

### Database

Run the following in the Supabase SQL editor to create the required tables:

```sql
-- Analyses table
create table analyses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  job_title text,
  company text,
  match_score integer,
  created_at timestamp with time zone default now()
);

-- Job applications table
create table job_applications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  job_title text,
  company text,
  status text default 'wishlist',
  match_score integer,
  notes text,
  created_at timestamp with time zone default now()
);
```

Enable Row Level Security (RLS) and add policies so users can only access their own rows.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout & metadata
│   ├── dashboard/        # User dashboard
│   ├── analyze/          # CV + JD analyzer
│   ├── cv-score/         # CV scorer & regenerator
│   ├── tracker/          # Job application tracker
│   ├── auth/             # Login & signup
│   └── api/
│       ├── analyze/      # Groq-powered analysis endpoint
│       ├── score-cv/     # CV scoring endpoint
│       └── generate-cv/  # CV rewrite endpoint
```

## Built By

Aqeel Aroos — © 2026 CVPrep
