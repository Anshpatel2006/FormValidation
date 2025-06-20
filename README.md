# Form Validation Application

A modern, responsive form validation application built with HTML, CSS, and JavaScript (jQuery) that provides real-time validation and excellent user experience.

## Features

### ✅ Form Validation
- **Username**: 5-12 characters, alphanumeric and underscore only
- **Email**: Valid email format validation
- **Password**: Minimum 8 characters with complexity requirements (uppercase, lowercase, number, special character)
- **Confirm Password**: Must match the password field
- **Phone Number**: Exactly 10 digits only
- **Country**: Required selection
- **Gender**: Required selection

### ✅ User Experience
- **Real-time validation**: Fields are validated as users type/leave them
- **Password visibility toggle**: Show/hide password functionality
- **Error messages**: Clear, concise error messages displayed below each field
- **Success messages**: Green success box when form is valid
- **Form animations**: Shake animation for invalid submissions
- **Responsive design**: Works on all device sizes

### ✅ Visual Design
- **Modern UI**: Clean, professional design with gradient background
- **Centered layout**: Form is perfectly centered both vertically and horizontally
- **Color-coded feedback**: Red for errors, green for success
- **Smooth animations**: Hover effects and transitions

## File Structure

```
FormValidation/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript validation logic
└── README.md           # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and form structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Form validation and interactivity
- **jQuery**: DOM manipulation and event handling

## Validation Rules

### Username
- Required field
- 5-12 characters long
- Only letters, numbers, and underscores allowed

### Email
- Required field
- Must be a valid email format (user@example.com)

### Password
- Required field
- Minimum 8 characters
- Must contain:
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (@$!%*?&)

### Phone Number
- Required field
- Exactly 10 digits
- Numbers only (auto-filtered)

### Country
- Required selection from dropdown

### Gender
- Required selection (Male/Female/Other)

## How to Use

1. Open `index.html` in a web browser
2. Fill out the form fields
3. Real-time validation will show errors as you type
4. Use the eye icons to toggle password visibility
5. Submit the form when all validations pass
6. Use the Reset button to clear all fields

## Deployment on Netlify

### Method 1: Drag and Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Drag and drop your project folder to the deployment area
4. Your site will be live instantly

### Method 2: Git Integration
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically deploy your site

### Method 3: Manual Upload
1. Zip your project files
2. Upload the zip file to Netlify
3. Extract and deploy

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Future Enhancements

- Server-side validation
- Database integration
- Email verification
- Password strength meter
- File upload validation
- CAPTCHA integration

## License

This project is open source and available under the MIT License.

---

**Note**: This is a frontend-only application. For production use, always implement server-side validation as well. 