# GirlsAskGuys Interview

This project is a frontend developer interview provided by **GirlsAskGuys**. 

# About the Project
This project is built using HTML, SCSS, and JavaScript. The styling is handled using Sass with various mixins for typography and icons.

This project is designed to offer a seamless user experience with a focus on aesthetics and functionality. I utilize SCSS for styling to maintain modular and reusable CSS, making the development process efficient and the codebase easy to maintain.

**Usage**
<br />
To customize the project, modify the SCSS files located in the src/styles directory. These files include mixins and variables that help you maintain a consistent design throughout the application.

**Features**
<br />
Responsive Design: Adapts to various screen sizes for optimal viewing on any device.
Modular SCSS: Organized SCSS files for easy maintenance and scalability.
Icon Support: Built-in mixins for various icon sizes.
Typography Mixins: Predefined typography styles to ensure design consistency.

**SCSS Structure**
<br />

**Typography**
<br />
The `typography.scss` file contains mixins for different text styles. 

Example:
```scss

@mixin header-font {
    @include font-roboto();
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: $white-color;
    
    @media (max-width: 900px) {
        font-size: 13px;
    }
```
**Variables**
<br />
Define your color scheme in variables.scss for easy theme customization:

Example:
```scss
$mainHeader: #7545ff;
$bodyBackground: #f3f3f3;
$card-background: #ffffff;
```

**Icons**
<br />
Use the mixins in icons.scss to add icons to your project.

Example:
```scss
  @mixin icon {
    background-repeat: no-repeat;
    background-size: cover;
    width: 24px;
    height: 24px;
}

@mixin icon-xl {
    background-repeat: no-repeat;
    background-size: cover;
    width: 32px;
    height: 32px;
}

@mixin icon-mobile {
    background-size: cover;
    width: 18px;
    height: 18px;
}

**Example Usage**
.example-icon {
    @include icon;
    background-image: url('path/to/icon.svg');
}



```
Thank you for visiting my project!
