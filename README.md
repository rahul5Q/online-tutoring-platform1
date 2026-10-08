# Learnify — Online Tutoring Platform

## 📌 Overview
Learnify is a modern, responsive single-page static frontend for an online tutoring and EdTech platform. It showcases a premium visual experience designed to attract students and tutors, featuring an animated "Floating Learning Desk" hero section, smooth CSS animations, and a polished glassmorphism UI. The project serves as a comprehensive portfolio piece demonstrating advanced frontend layout, responsive design, and CSS keyframe animation techniques.

## ✨ Features
- **Responsive Navigation:** Fixed glass header with scroll-aware styling and a mobile hamburger menu.
- **Hero Section:** A rich visual introduction with a custom radial glow and an animated dot-grid background.
- **Floating Learning Desk:** Animated, semi-transparent glass cards representing courses that float around the hero text.
- **Courses Section:** Grid layout highlighting available subjects (Mathematics, Science, Programming, English) with icons and descriptions.
- **Pricing Section:** Fully responsive pricing tier cards with a highlighted "Popular" plan.
- **Contact Form:** A client-side form interface for students to reach out.
- **Social Links:** Direct links to the author's Facebook and LinkedIn profiles.
- **Mobile Layout:** Carefully tailored responsive experience down to 360px without horizontal overflow.
- **Accessibility:** Built-in `prefers-reduced-motion` support that safely falls back to a beautiful static composition.

## 🎨 UI/UX Highlights
- **Glassmorphism Cards:** Course cards and navigation menus utilize `backdrop-filter: blur()` and semi-transparent backgrounds to create a modern, layered glass effect.
- **Floating Elements:** CSS transforms and keyframes create a gentle, unsynchronized floating motion for course cards.
- **Gradient Backgrounds:** Deep multi-stop radial and linear gradients create lighting and depth behind the main hero text.
- **Responsive Layout:** The design adapts gracefully across seven distinct breakpoints, intelligently hiding or resizing complex visual elements on small screens.
- **Hover Effects:** Smooth transitions on buttons, navigation links, and feature cards provide satisfying visual feedback.
- **Scroll Reveals:** Sections fade and slide into view as the user scrolls down the page using the Intersection Observer API.

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and content layout. |
| **CSS3** | Styling, flexbox/grid layouts, gradients, and custom properties (variables). |
| **Vanilla JavaScript** | Hamburger menu toggling, smooth scrolling, and scroll-reveal observers. |
| **CSS Animations** | Keyframe-based floating card movements, glow pulses, and fade-in effects. |

## 📂 Project Structure
```text
online-tutoring-platform1/
├── index.html      # Main HTML structure and content
├── styles.css      # Core styling, responsive breakpoints, and animations
├── getstared.js    # Client-side interactivity (nav, scroll observer)
└── README.md       # Project documentation
```

## 🚀 How to Run Locally
This project is a static frontend and does not require a backend, server, or database.

1. **Clone or Download** the repository to your local machine.
2. **Open the folder** (`online-tutoring-platform1`) in your preferred code editor, such as VS Code.
3. **Launch the project:** 
   - Right-click `index.html` and select **Open with Live Server** (if using the VS Code extension).
   - *OR* simply double-click `index.html` to open it directly in your web browser.

## 🧪 Testing
When reviewing or modifying the project, ensure the following are tested:
- **Desktop Layout (1440px+):** Verify all four glass cards float smoothly in the hero section.
- **Tablet Layout (768px - 1024px):** Verify the hamburger menu appears and the glass cards are reduced to two.
- **Mobile Layout (≤ 480px):** Check that horizontal overflow is prevented and hero spacing is compact.
- **Navigation:** Test the hamburger menu toggle and ensure links smoothly scroll to sections.
- **Buttons:** Verify the hero "Get Started Free" button properly scrolls to the Pricing section, and pricing "Get Started" buttons scroll to the Contact section.
- **Contact Form:** Check that input focus states are visible and submit triggers the client-side confirmation.
- **Accessibility:** Enable "Reduce Motion" in your OS settings and verify all floating animations stop instantly.

## 📱 Responsive Design
The project uses specific media queries defined in `styles.css` to handle various device sizes:
- `max-width: 1200px` (Large Laptop)
- `max-width: 1024px` (Tablet / Laptop)
- `max-width: 768px`  (Tablet / Large Mobile)
- `max-width: 480px`  (Mobile)
- `max-width: 390px`  (Intermediate Mobile / iPhone 12-14)
- `max-width: 375px`  (Small Mobile)
- `max-width: 360px`  (Tiny Mobile)

## 🎬 Animation System
The "Floating Learning Desk" is powered entirely by CSS keyframes. The following animations are used:
- `@keyframes fadeUp`: Smooth entrance for hero typography.
- `@keyframes cardFadeIn`: Independent opacity fade for glass cards.
- `@keyframes cardFloat1` to `cardFloat4`: Unique, unsynchronized vertical floating rhythms for each glass card.
- `@keyframes glowPulse`: A subtle breathing scale effect for the hero's radial background glow.
- `@keyframes liveDotPulse`: An attention-grabbing pulse for the "Live Session" card indicator.

## 🔗 Social Links
- [Facebook](https://www.facebook.com/share/1CzUeXBBHb/)
- [LinkedIn](https://www.linkedin.com/in/rahul-chatterjee-173b43321/)

## 📸 Screenshots
*(Project screenshots can be added here once formally deployed. Suggested captures: Desktop Hero, Mobile Hero, Pricing Grid, and Contact Section).*

## 🔮 Future Improvements
As this is currently a static frontend prototype, future iterations could include:
- Backend server integration and database architecture.
- Real user authentication (Student/Tutor logins).
- Dynamic course management and video delivery.
- Active tutor booking and calendar systems.
- Payment gateway integration for the pricing tiers.
- Form endpoint integration for the contact form.

## 👨💻 Author
**Rahul Chatterjee**

## 📄 License
License information can be added when the project is formally released.