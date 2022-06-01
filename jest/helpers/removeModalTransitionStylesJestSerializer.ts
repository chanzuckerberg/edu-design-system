/**
 * Serializer that removes the transition classes from the Modal snapshots.
 *
 * This is needed because the Headless UI <Transition> component adds and removes
 * classes to power the enter and exit animations, and jest was not able to catch
 * the Modal at a consistent state, even when using waitFor to make it wait for the
 * transition classes to be removed.
 */
expect.addSnapshotSerializer({
  test: (value) => {
    return (
      value === 'modal modal__transition--enter modal__transition--enterFrom' ||
      value === 'modal modal__transition--leave modal__transition--leaveFrom'
    );
  },
  print() {
    return `"modal"`;
  },
});
