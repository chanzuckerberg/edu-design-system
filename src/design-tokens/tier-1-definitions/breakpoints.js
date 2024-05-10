//------------------------------------//
//   # BREAKPOINTS
//------------------------------------//

// 1) Breakpoints need to be defined as SCSS
//    variables since presently CSS custom
//    properties can't be used within media
//    query declarations
// sync with tailwind.config.ts

module.exports = {
  'eds-bp-xs': '0px',
  'eds-bp-sm': '600px',
  'eds-bp-md': '768px',
  'eds-bp-lg': '1040px',
  'eds-bp-xl': '1440px',
};
