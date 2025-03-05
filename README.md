# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Welcome to the Accessibility Menu!

The accessibility control menu built into this React app starter code works out of the box and provides you with explicit details to build out your project while maintaining accessibility compliance. React Router has also been installed in implemented to show you how to add additional features and test that accessibility controls are working across a single page application properly.

# Let's review the file structure from top to bottom:

/public - Holds two svg files that are used when the cursor size is increased via the accessibility menu controls, one for your default cursor and one for your cursor: pointer.

/src/components - The components folder holds the accessibility menu, AccessMenu.jsx and the individual toggles in the menu which are imported to the AccessMenu.jsx via Toggle.jsx .

/src/fonts - The fonts folder holds all of the fonts styles needed to switch your applications fonts to the OpenDyslexic font.

You can find more information about this font here:

- [OpenDyslexicFont](https://opendyslexic.org/)

  If you are using this starter code along with this font feel free to make a donation to OpenDyslexic here:

- [OpenDyslexicDonate](https://www.patreon.com/opendyslexic)

/src/layout - The layout folder holds the basic set up for your navbar and footer.

/src/styles - The styles folder holds css files for the styling of the application. This application uses module.css files to set unique styles for components and features AND two global css files, index.css & globalmenucontrols.ss

_NOTE_ globalmenucontrols.css must stay as is in order for the accessibility controls to work properly.

Two important points:

1. When creating new features make sure the return html in your jsx files is nested in parent tags like this <></> Refer to the code in features Home.jsx and TestPage.jsx. This ensures the <article> tag that is passed the accessibily controls and wraps the <Outlet /> can send the functionality to each feature, refer to Root.jsx

2. If you would like to adjust font sizing refer to _important for accessibility font reszing_ in globalmenucontrols.css . You may adjust or add to this to your liking but it is important to keep .appContainer at an rem and all other fonts at em. _WARNING_ If you add a specific font sizing to an element in a separate module.css file that element will not be changed by the font sizing control in the accessibility menu. Keep all your font sizing in em and in the globalmenucontrols.css file.

/src/Home.jsx - The Home.jsx is your main landing page starter code. It contains placeholder headers, images and paragraphs for you to test the accessibility menu, allow you to use the setup, and build out your project. Take note of alt text for images, roles and labels in the html which help screen readers and keyboard controls navigate your application.

/src/index.css - This global css file sets all the styles for your main semantic html, Flexbox is used in this starter code and in \* set your border to 1px to debug any styling layout issues.

/src/main.jsx - Holds your React Router set up, refer to the children value array of objects as a refernce on how to add additional features to your project.

/src/Root.jsx

/src/TestPage.jsx
