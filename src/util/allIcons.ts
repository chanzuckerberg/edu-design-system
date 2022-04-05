export const ALL_ICONS: Array<string> = require
  .context('../icons', false, /\.svg$/)
  .keys()
  .map((path) => path.match(/([\w\s-]*)\.svg$/)[1]);
