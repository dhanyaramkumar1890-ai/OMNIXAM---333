# ExamHub India - Complete Exam Information Portal

A comprehensive web application for competitive exams, state entrance exams, study materials, and coaching information across Tamil Nadu, Kerala, and Karnataka.

## Features

✅ **User Authentication**
- Firebase Authentication (Email/Password)
- User registration and login
- Secure session management

✅ **Exam Information**
- Detailed exam information for 10+ major exams
- State-wise filtering (Tamil Nadu, Kerala, Karnataka)
- Search functionality
- Exam details including:
  - Eligibility criteria
  - Age limits
  - Exam patterns
  - Syllabus
  - Important dates
  - Top colleges/universities
  - Recommended coaching centers

✅ **Database Integration**
- Firebase Firestore for data storage
- User data management
- Exam data management

## Setup Instructions

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" or "Create a project"
3. Enter project name (e.g., "examhub-india")
4. Click Continue and follow the setup wizard
5. Disable Google Analytics if you don't need it (or enable it)
6. Click "Create Project"

### Step 2: Enable Authentication

1. In Firebase Console, click "Authentication" in left sidebar
2. Click "Get Started"
3. Click on "Email/Password" under Sign-in method
4. Enable "Email/Password" toggle
5. Click "Save"

### Step 3: Create Firestore Database

1. Click "Firestore Database" in left sidebar
2. Click "Create database"
3. Select "Start in test mode" (for development)
4. Choose a location (e.g., asia-south1 for India)
5. Click "Enable"

### Step 4: Get Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "ExamHub Web")
6. Copy the Firebase configuration object

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "examhub-india.firebaseapp.com",
  projectId: "examhub-india",
  storageBucket: "examhub-india.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

### Step 5: Update the Code

1. Open `index.html` file
2. Find this section (around line 463):
```javascript
// Firebase configuration - REPLACE WITH YOUR CONFIG
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. Replace it with your actual Firebase config from Step 4

### Step 6: Deploy to Firebase Hosting (Recommended)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project folder:
```bash
cd exam-portal
firebase init hosting
```

4. When prompted:
   - Select your Firebase project
   - Enter `public` as your public directory
   - Configure as single-page app: Yes
   - Overwrite index.html: No

5. Create a `public` folder and move your `index.html` into it:
```bash
mkdir public
mv index.html public/
```

6. Deploy:
```bash
firebase deploy
```

7. Your site will be live at: `https://your-project-id.web.app`

## Alternative Deployment Options

### Option 1: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live!

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository or drag files
3. Deploy instantly

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select branch and save
5. Your site will be at `https://username.github.io/repo-name`

## Local Testing

To test locally:
1. Open `index.html` directly in a web browser, OR
2. Use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (install http-server first)
npx http-server
```

3. Open `http://localhost:8000` in your browser

## Firestore Security Rules (Important!)

Before going to production, update Firestore security rules:

1. Go to Firestore Database > Rules
2. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Exams collection - anyone can read, only authenticated users can write
    match /exams/{examId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## Database Structure

### Users Collection
```
users/
  {userId}/
    - name: string
    - email: string
    - createdAt: timestamp
```

### Exams Collection
```
exams/
  {examId}/
    - name: string
    - state: string
    - category: string
    - description: string
    - eligibility: string
    - ageLimit: string
    - examPattern: string
    - syllabus: array
    - importantDates: object
    - colleges: array
    - coachingCenters: array
```

## Features to Add Later

- [ ] Admin panel for adding/editing exams
- [ ] File upload for study materials
- [ ] Previous year papers download
- [ ] User profiles and preferences
- [ ] Exam notifications and reminders
- [ ] Mock tests and quizzes
- [ ] Discussion forums
- [ ] College comparison tool
- [ ] Coaching center reviews and ratings

## Expanding to More States

To add more states:

1. Add state to sidebar in HTML (around line 327)
2. Add exam data to `examsData` array (around line 485)
3. Follow the same structure as existing exams

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Firebase Authentication
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting / Netlify / Vercel

## Support

For issues or questions:
- Check Firebase documentation: https://firebase.google.com/docs
- Firebase Console: https://console.firebase.google.com/

## License

Free to use and modify for your educational portal.

---

**Important Notes:**
- Never share your Firebase config publicly if it contains sensitive data
- Always use environment variables for production
- Enable reCAPTCHA for authentication in production
- Set up proper security rules before going live
- Consider enabling email verification for new users
