# Mentor Management Guide

## 📁 **Where to Upload Images**

### **Image Location:**
- **Folder**: `assets/mentors/` (create this folder if it doesn't exist)
- **Example path**: `assets/mentors/sarah-chen.jpg`

### **Recommended Image Specifications:**
- **Size**: 400x400 pixels (square format)
- **Format**: JPG or PNG
- **Quality**: High resolution (at least 300 DPI)
- **File size**: Under 500KB for web optimization
- **Style**: Professional headshots with clean backgrounds

## 🖼️ **Image Requirements**

### **Technical Specs:**
```
Dimensions: 400x400 pixels (1:1 aspect ratio)
Format: JPG or PNG
File size: < 500KB
Background: Clean, professional
Lighting: Well-lit, professional photography
```

### **Content Guidelines:**
- Professional headshots only
- Clean, neutral backgrounds
- Good lighting and clarity
- Professional attire
- Friendly, approachable expression

## 👥 **How to Add/Replace Mentors**

### **Step 1: Add Images**
1. Create folder: `assets/mentors/`
2. Upload mentor images with descriptive names:
   - `sarah-chen.jpg`
   - `marcus-johnson.jpg`
   - `elena-rodriguez.jpg`

### **Step 2: Update Mentor Data**
Edit the `MENTORS_DATA` array in `app.js` (lines 2-93):

```javascript
const MENTORS_DATA = [
  {
    id: 1,                    // Unique ID (increment for new mentors)
    name: "Sarah Chen",       // Full name
    role: "Senior Software Engineer",  // Job title
    company: "Google",        // Company name
    background: "Computer Science, Stanford University",  // Education
    image: "assets/mentors/sarah-chen.jpg",  // Image path
    expertise: ["Software Development", "System Architecture"],  // Skills array
    experience: "8+ years",   // Years of experience
    description: "Brief description for cards",  // Short description
    bio: "Detailed bio for mentor detail page",  // Long bio
    mentoring: "Mentoring experience description",  // Mentoring background
    philosophy: "Mentoring philosophy",  // Approach to mentoring
    linkedinUrl: "https://www.linkedin.com/in/sarahchen"  // LinkedIn URL
  },
  // Add more mentors here...
];
```

## 📝 **Mentor Data Fields Explained**

### **Required Fields:**
- `id`: Unique number (1, 2, 3, etc.)
- `name`: Full name
- `role`: Job title
- `company`: Company name
- `background`: Education/qualifications
- `image`: Path to image file
- `linkedinUrl`: LinkedIn profile URL

### **Optional Fields:**
- `expertise`: Array of skills (e.g., `["Skill 1", "Skill 2"]`)
- `experience`: Years of experience (e.g., "8+ years")
- `description`: Short description for cards
- `bio`: Detailed bio for mentor detail page
- `mentoring`: Mentoring experience
- `philosophy`: Mentoring approach

## 🔄 **How to Replace Existing Mentors**

### **Method 1: Replace Image Only**
1. Keep the same filename in `assets/mentors/`
2. Replace the image file
3. No code changes needed

### **Method 2: Update All Data**
1. Change the `image` path in the mentor object
2. Update other fields as needed
3. Save the file

## ➕ **How to Add New Mentors**

### **Step-by-Step Process:**

1. **Add Image:**
   ```
   assets/mentors/new-mentor-name.jpg
   ```

2. **Add to MENTORS_DATA array:**
   ```javascript
   {
     id: 7,  // Next available ID
     name: "New Mentor Name",
     role: "Job Title",
     company: "Company Name",
     background: "Education Background",
     image: "assets/mentors/new-mentor-name.jpg",
     expertise: ["Skill 1", "Skill 2", "Skill 3"],
     experience: "X+ years",
     description: "Brief description for mentor cards",
     bio: "Detailed bio for mentor detail page",
     mentoring: "Mentoring experience and background",
     philosophy: "Approach to mentoring and guidance",
     linkedinUrl: "https://www.linkedin.com/in/mentor-profile"
   }
   ```

3. **Insert in MENTORS_DATA array** (before the closing `];`)

## 🎨 **Display Behavior**

### **Homepage (Featured Mentors):**
- Shows first 3 mentors from the array
- Displays: Name, Company, Education, LinkedIn icon
- No role/title shown (as per your requirements)

### **Mentors Page:**
- Shows all mentors in grid layout
- Same card format as featured mentors
- Box-style cards with hover effects

### **Mentor Detail Page:**
- Shows full mentor information
- Image on left, details on right
- LinkedIn button and "Request Session" button

## 🛠️ **Quick Reference**

### **File Locations:**
- **Mentor data**: `app.js` (lines 2-93)
- **Images**: `assets/mentors/` folder
- **Styling**: `style.css` (mentor-related classes)

### **Key Functions:**
- `renderMentorsDirectory()`: Renders mentors page
- `renderMentorDetail()`: Renders individual mentor page
- `renderFeaturedMentors()`: Renders homepage mentors

### **Testing:**
1. Add/update mentor data
2. Save `app.js`
3. Refresh browser
4. Check homepage, mentors page, and mentor detail pages

## 📋 **Example: Adding a New Mentor**

```javascript
{
  id: 7,
  name: "Dr. Maria Garcia",
  role: "Chief Technology Officer",
  company: "Tesla",
  background: "PhD Computer Science, MIT",
  image: "assets/mentors/maria-garcia.jpg",
  expertise: ["AI/ML", "Autonomous Systems", "Team Leadership"],
  experience: "12+ years",
  description: "CTO at Tesla leading autonomous vehicle technology development.",
  bio: "Dr. Maria Garcia is a technology leader with over 12 years of experience in AI and autonomous systems. At Tesla, she leads the development of next-generation autonomous vehicle technology.",
  mentoring: "Mentored 35+ engineers transitioning into AI and autonomous systems roles.",
  philosophy: "Technology should solve real-world problems while advancing human capabilities.",
  linkedinUrl: "https://www.linkedin.com/in/mariagarcia"
}
```

## ⚠️ **Important Notes**

1. **Image paths**: Always use `assets/mentors/filename.jpg`
2. **Unique IDs**: Each mentor needs a unique ID number
3. **File names**: Use lowercase with hyphens (e.g., `sarah-chen.jpg`)
4. **Backup**: Always backup your `app.js` file before making changes
5. **Testing**: Test on both desktop and mobile after changes

## 🚀 **Quick Start Checklist**

- [ ] Create `assets/mentors/` folder
- [ ] Upload mentor images (400x400px, <500KB)
- [ ] Update `MENTORS_DATA` array in `app.js`
- [ ] Test homepage (first 3 mentors)
- [ ] Test mentors page (all mentors)
- [ ] Test mentor detail pages
- [ ] Verify LinkedIn links work
- [ ] Check mobile responsiveness
