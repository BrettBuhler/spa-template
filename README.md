# ReadMe - Portfolio SPA Template

This is a versatile Single Page Application (SPA) template that seamlessly integrates React and TypeScript. It provides a solid foundation for creating your personal portfolio or landing page. Whether you're a newcomer or an experienced React developer, this template is designed to be easy to use yet highly flexible.

## Customization Made Easy

With this template, customization is straightforward, and you can create a fantastic customized portfolio with minimal effort. Here's how you can personalize the template:

1. **Update Images:** Easily update the project images or any other visuals you want to use by placing them in the `assets` folder. Then, modify the file paths in the relevant sections of `App.tsx` to showcase your projects or add a background image to the Hero section.

2. **Theme Colors:** Tailwind CSS powers the template's styling, and you can effortlessly customize the theme colors by editing the `tailwind.config.js` file. Tailwind CSS's utility classes make it simple to achieve a visually appealing and cohesive design.

3. **Edit App.tsx:** The heart of your portfolio lies in `App.tsx`. This file contains comments that guide you on what to update, such as the About Section text, your skills, the projects you want to showcase, and links to your social profiles. Follow the instructions in the comments to customize each section to fit your needs.

## Table of Contents

- [Getting Started](#getting-started)
- [About the Template](#about-the-template)
- [Projects](#projects)
- [Customization](#customization)

## Getting Started

To create your own portfolio using this template, follow these steps:

1. **Clone the Repository:** Start by cloning this GitHub repository to your local machine.

    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies:** Navigate to the project's root folder and install the required dependencies using npm or yarn.

    ```bash
    cd <project-folder>
    npm install   # or 'yarn install'
    ```

3. **Run the Development Server:** Once the dependencies are installed, run the development server to preview your portfolio.

    ```bash
    npm run dev   # or 'yarn dev'
    ```

4. **Open in Browser:** Your portfolio should now be running on `http://localhost:3000`. Open your web browser and go to this address to see your portfolio.

## About the Template

The template is designed with the following sections:

- **TopBar:** The top navigation bar that displays the title, links to different sections, and buttons (e.g., Sign In, Sign Up). Customize the icons, links, and buttons to suit your needs. Also, TopBar displays a fixed dark mode toggle in desktop mode.

- **Hero Section:** A visually appealing section at the top with a background image, title, and subtitle.

- **About Section:** Introduce yourself and your skills in this section. Edit the text and skills (icons and display names) to showcase your expertise.

- **Projects Section:** Showcase your projects with images, titles, and descriptions. Add buttons to link to the live projects or their repositories.

- **Footer:** The footer section that appears at the bottom of the page.

- **SideBar:** A sidebar that displays on mobile screens, allowing navigation and dark mode toggle.

## Projects
The "Projects" section is designed to showcase your projects. Add your projects by modifying the `projectItems` array in the `App.tsx` file. Each project entry should have the following format:

```javascript
[
  // Image: A path to the project image
  'path-to-image.png',

  // Title: The project title
  'Project Title',

  // Description: A short description of the project
  'This is a brief description of the project.',

  // Inner Text: An array of strings with each string representing a line of text
  ['This is some project inner text.', 'You can add multiple lines.', 'And create new paragraphs if needed.'],

  // Buttons: An array of arrays with the button's display text and its link. A Project can have 0 - 3 buttons
  [['Live Demo', 'https://example.com/'], ['GitHub Repository', 'https://github.com/user/repo']]
]
```

## Customization

Customize the template to make it uniquely yours:

- **About Section:** Edit the `aboutText` array and `aboutSkills` array in the `App.tsx` file to introduce yourself and display your skills.

- **TopBar:** Modify the `topBarLinks` array in the `App.tsx` file to customize the navigation links.

- **Hero Section:** Replace the background image and modify the title and subtitle.

- **Footer:** Edit the text and links in the footer section.

- **Sidebar:** Customize the icons, links, and buttons in the sidebar.

Remember to add your own images and assets to the `assets` folder and update the file paths accordingly.

## JavaScript Animation Library

This template uses the AOS (Animate On Scroll) library for animations. The library is already configured, but you can modify the animation settings in the `App.tsx` file's `useEffect` hook.

## Credits

This template is built and maintained by Brett Buhler.

## License

This project is licensed under the MIT License
