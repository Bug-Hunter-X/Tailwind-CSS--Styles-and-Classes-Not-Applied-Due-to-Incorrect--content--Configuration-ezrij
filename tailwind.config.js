```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: [ 
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#007bff', // Example custom color
      }
    },
  },
  plugins: [],
};
```
This configuration only includes the `src` directory.  If your HTML files or components live elsewhere, you must include those directories as well. For example if you have templates in a `templates` folder, include that too.

```javascript
module.exports = {
  // ... other configurations ...
  content: [
    './src/**/*.{html,js}',
    './templates/**/*.{html,js}', // Add this if you have templates
  ],
  // ... rest of the config
};
```
Failure to do this causes Tailwind to miss classes in your project.