/**
 * Helper method for generating a randomized valid url string.
 *
 * This is useful for testing links that have a distinct visited style. If the link always has
 * the same href, you can only test the non-visited state once (unless you're using incognito
 * browser windows) because once you've visited the site, the link now uses the visited style.
 * And it needs to be a valid url in order to visit the site and trigger the visited state.
 */
const getRandomUrl = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < 50; i++) {
    const randomIndex = Math.floor(Math.random() * 25);
    randomString = randomString + alphabet[randomIndex];
    if (Math.random() > 0.7) {
      randomString = randomString + ' ';
    }
  }
  return `https://www.google.com/search?q=${randomString}`;
};

export default getRandomUrl;
