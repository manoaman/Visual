# Three.js Interactive 3D Scene

A modern, interactive 3D web application built with Three.js and Vite. This project demonstrates various Three.js concepts including 3D geometry, lighting, shaders, user interaction, and responsive design.

## ✨ Features

- **Interactive 3D Scene**: A complete 3D environment with multiple objects
- **Real-time Shader Effects**: Animated sphere with custom GLSL shaders
- **User Interaction**: Mouse and keyboard controls for interactive elements
- **Responsive Design**: Automatically adapts to different screen sizes
- **Modern Lighting**: Ambient and directional lighting with toggle controls
- **Smooth Animations**: 60fps animation loop with proper timing

## 🎮 Controls

- **Mouse Movement**: Move your mouse to rotate the interactive cube
- **L Key**: Toggle directional light on/off
- **C Key**: Change the cube's color randomly
- **Mouse Drag**: Orbit around the scene (with OrbitControls)

## 🏗️ Scene Objects

- **Interactive Cube**: Blue cube that responds to mouse movement
- **Shader Sphere**: Animated sphere with custom color-shifting shaders
- **Torus Knots**: Six colorful torus knot geometries arranged in a circle
- **Ground Plane**: Dark ground surface for better depth perception
- **Dynamic Lighting**: Adjustable lighting system

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd three-day1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Three.js** - 3D graphics library
- **Vite** - Fast build tool and dev server
- **GLSL** - Custom shaders for visual effects
- **ES6 Modules** - Modern JavaScript features

## 📁 Project Structure

```
three-day1/
├── src/
│   ├── main.js          # Main application logic
│   ├── style.css        # Styling
│   └── ...
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

The scene is highly customizable. You can easily:
- Change colors and materials
- Add new 3D objects
- Modify shader effects
- Adjust lighting parameters
- Add new interactive features

## 🌟 Key Three.js Concepts Demonstrated

- **Scene Management**: Creating and organizing 3D scenes
- **Camera Controls**: Perspective camera with OrbitControls
- **Geometry & Materials**: Various 3D shapes and materials
- **Lighting**: Multiple light types and positioning
- **Shaders**: Custom GLSL vertex and fragment shaders
- **Animation Loop**: RequestAnimationFrame with proper timing
- **Event Handling**: Mouse and keyboard interactions
- **Responsive Design**: Dynamic resizing and aspect ratio handling

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: WebGL support is required.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy 3D Coding! 🎮✨**

