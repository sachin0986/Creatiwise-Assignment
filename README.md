# Article Management Dashboard

A modern, responsive dashboard for managing articles with features like article generation, publishing, scheduling, and archiving. Built with React and TailwindCSS.

## 🔴 Live Demo

[View Live Demo](https://creatiwise-assignment-nu.vercel.app/)

## 🚀 Features

- 📱 Fully Responsive Design
- 📊 Article Management System
- 🔍 Search Functionality
- 📋 Pagination
- 📱 Mobile-Friendly Sidebar
- 🎨 Modern UI with TailwindCSS
- ⚡ Fast Performance with Vite
- 🔄 Real-time Updates

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/sachin0986/Creatiwise-Assignment
cd Creatiwise-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📦 Dependencies

### Core Dependencies
```json
{
  "@tailwindcss/forms": "^0.5.7",
  "lucide-react": "^0.294.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.3.5"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "autoprefixer": "^10.4.16",
  "eslint": "^8.53.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.4",
  "postcss": "^8.4.31",
  "vite": "^5.0.0"
}
```

## 🏗️ Project Structure

```
src/
├── Component/
│   ├── Dashboard.jsx    # Main dashboard component
│   └── Component.jsx    # Reusable components
├── Database/
│   └── DummyData.js    # Mock data for demonstration
├── assets/             # Static assets
├── App.jsx            # Root component
├── main.jsx          # Entry point
└── index.css        # Global styles
```

## 🎯 Features in Detail

### Article Management
- View all articles in a clean, organized table
- Filter articles by status (Generated, Published, Scheduled, Archived)
- Search articles by title or keywords
- Pagination with customizable entries per page

### Mobile Responsiveness
- Responsive design that works on all devices
- Mobile-friendly sidebar with smooth transitions
- Optimized table view for mobile devices
- Touch-friendly interface

### User Interface
- Clean and modern design
- Intuitive navigation
- Smooth animations and transitions
- Consistent styling with TailwindCSS

## 🔧 Configuration

### TailwindCSS
The project uses TailwindCSS for styling. Configuration can be found in:
- `tailwind.config.js`

### Vite
Vite configuration is in `vite.config.js`

## 📱 Mobile Support

The dashboard is fully responsive and supports:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Sachin Arora

## 🙏 Acknowledgments

- React Team
- TailwindCSS Team
- Lucide Icons
- Vite Team