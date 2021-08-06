#!/bin/sh

# Abort this script if any commands fail.
set -e

# Currently (August, 2021), Lerna does not update yarn.lock files when dependencies between
# monorepo packages increment. See https://github.com/lerna/lerna/issues/1171. This causes failures
# on CI builds because of the `--immutable` flag we use when installing deps on CI, since Yarn
# wants to update the lock file for the updated inter-package dependencies.
#
# To work around that, we manually install deps so that the lock file gets updated. This should run
# in a Lerna "version" lifecycle hook. See https://github.com/lerna/lerna/tree/a47fc294393a3e9507a8207a5a2f07648a524722/commands/version#lifecycle-scripts.
#
# Another workaround would be to use Yarn workspace ranges to specify dependencies between
# packages. See https://yarnpkg.com/features/workspaces/#workspace-ranges-workspace.
# Unfortunately, Lerna also doesn't support those - https://github.com/lerna/lerna/issues/2564.
#
# If either of these Lerna issues are resolved, we should remove this hack.
yarn install
git stage yarn.lock
