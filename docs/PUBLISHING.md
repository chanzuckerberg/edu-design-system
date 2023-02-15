## Versioning

EDS uses [SemVer](https://semver.org/) semantic versioning to keep track of ongoing changes to the product. The three types of versions are:

- **Major (X.y.z)** - Major versions contain breaking changes to Education developers' builds.
- **Minor (x.Y.z)** - Minor versions add new features or deprecate existing features without breaking changes.
- **Patch (x.y.Z)** - Patch versions fix defects or optimize existing features without breaking changes.

Look to [this helpful document](https://designsystem.morningstar.com/getting-started/versioning-and-breaking-changes/) from the Morning Star design system for detailed guidance on versioning.

---

## Releasing a new version of EDS

_Before the first time you publish_, make sure to:

- set up Two Factor Authentication for your npm account
- run `npm login` in your terminal to generate an access token for publishing

### Publishing steps

We follow a [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) based model, where:

- Development happens on `next`
- Release branches are cut from `next`. Only bugfixes and documentation updates can be added to release branches.
- Release branches are merged back into `main` and `next` when ready

#### Cutting a release branch

_Warning: In step 4 you will see a message in your terminal with instructions on publising the package. Ignore the message in your terminal and follow the instructions in this guide instead. We send the release branch through the pull request review process before publishing._

1. Confirm that all checks are green on CI.
2. Run `git checkout next && git pull origin next` to ensure you have the most up-to-date changes.
3. Determine the next version that will be released. An easy way to do this is with `yarn release --dry-run`
4. Run `git checkout -b release-v<version>`
5. Run:

```
yarn release

# or, if there are breaking changes but
# they're not represented in the commit log

yarn release:major
```

We use [standard-version](https://github.com/conventional-changelog/standard-version) to increment the version number in `package.json`, create a git tag for the new release, and update `CHANGELOG.md` based on the commit log. The package is not published, yet. If needed, you can [make additional changes to the CHANGELOG now](#editing-the-changelog).

**NOTE**: running this command will print a command to run to complete the process. IGNORE THIS. Continue following the directions below.

5. Push the release branch up, including tags:

```
git push --follow-tags origin <branch>
```

#### Merging a release branch

6. Open a pull request for the release branch, merging into **`main`**. 

For the commit message, use the new version's content in the [CHANGELOG.md](../CHANGELOG.md) (e.g., all the changes for version 9.0.0).

Merge the PR through a **merge commit**:
   ![github user interface showing a dropdown with the different merge options. the option "create a merge commit" is highlighted](https://user-images.githubusercontent.com/15840841/170514789-4f936ba2-c63d-486c-827a-b9e9e86b612e.png)

7. Once that PR is merged, click "Restore branch" and open another pull request, this time merging the release branch into **`next`**. Again, merge the PR through a **merge commit**. This will make sure the release details are merged into `next` and keeps the contents of `next` and `main` in sync.

#### Publishing the package

8. Pull down the most up-to-date version of main: `git checkout main && git pull && yarn build`
9. Publish the package: `npm publish`
10. Communicate the changes via all appropriate channels (if this is a breaking package update that the broader team needs to know about):
    - Slack channels
      - #eng-announcements in the Summit Learning workspace
      - #eng-n00bs in the Summit Learning workspace
      - #proj-edu-design-system in the CZI Education workspace
    - next EDS newsletter
    - next "What's New" update in Zeroheight
11. Update the package in the main apps that use it
    - [Learning Platform](https://github.com/FB-PLP/traject)
    - (for major versions) [cra-template-edu](https://github.com/chanzuckerberg/frontend-libs/tree/main/packages/cra-template-edu) - in the template.json and package.json

#### Alpha release

For testing a release to build confidence.

1. Run `yarn release:alpha` to use `standard-version` to create appropriate tags and updates.
2. Run the last command output by `standard-version` as above. It will look something like:

```
git push --follow-tags origin <branch> && npm publish --tag alpha
```

#### Editing the CHANGELOG

1. Run `git log` and note the version tag on the latest (release) commit
2. Make any edits you want to `CHANGELOG.md`
3. Run `git add . && git commit --amend` to update the release commit
4. Remove the tag from the old commit: `git tag -d v<version>`
5. Re-tag the release commit: `git tag v<version>`
