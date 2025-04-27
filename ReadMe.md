# Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, and services with an interactive contact form.

## Features

### Main Sections
- Home: Introduction and quick links
- About: Personal background and skills
- Services: Offered services with descriptions
- Projects: Portfolio of completed projects
- Contact: Interactive contact form

### Design Elements
- Responsive design for all devices
- Modern gradient effects
- Smooth scrolling
- Interactive hover effects
- Mobile-friendly navigation

### Contact Form
- Client-side validation
- Server-side processing
- Database storage
- Real-time feedback

## Technologies Used

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL
- Boxicons (for icons)

## Setup

1. Clone the repository
2. Set up a local web server (e.g., XAMPP, WAMP)
3. Create MySQL database:
   ```sql
   CREATE DATABASE portfolio_contacts;
   ```
4. Update database credentials in `process_form.php` if needed
5. Place files in your web server directory

## Project Structure

```
portfolio/
├── index.html          # Main website file
├── style.css           # All styles
├── script.js           # JavaScript functionality
├── process_form.php    # Contact form processing
├── Pics/              # Image assets
└── README.md          # This file
```

## Features in Detail

### Navigation
- Sticky header
- Mobile-responsive menu
- Smooth scroll to sections

### Home Section
- Personal introduction
- Social media links
- Call-to-action buttons

### Services Section
- Three main services
- Interactive service cards
- Icon-based design

### Projects Section
- Project cards with images
- Detailed project descriptions
- Interactive hover effects

### Contact Form
- Form validation:
  - Name (5+ characters)
  - Phone (10 digits)
  - Email validation
  - Required fields
- Database storage
- Success/error messages

## Customization

### Colors
Main colors can be modified in `style.css`:
```css
:root {
    --bg-color: #080808;
    --second-bg-color: #101010;
    --text-color: white;
    --main-color: #ea580c;
}
```

### Images
Replace images in the `Pics/` directory with your own:
- Profile pictures
- Project screenshots
- Service icons

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
© 2023 Leul Negesse. All rights reserved. 