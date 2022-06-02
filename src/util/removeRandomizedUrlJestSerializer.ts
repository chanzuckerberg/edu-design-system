/**
 * Serializer that removes attribute values that use a google search url.
 *
 * We're generating randomized urls for href attributes in links in order to make it easier
 * to test both visited and unvisited link styles. Because the attributes are randomized,
 * they'll trigger a snapshot change on every snapshot update. Removing the values entirely
 * circumvents the issue, and those values weren't important to test anyway.
 */
expect.addSnapshotSerializer({
  test: (value) => {
    return (
      typeof value === 'string' &&
      value.includes('https://www.google.com/search?q=')
    );
  },
  print() {
    return `"/"`;
  },
});
