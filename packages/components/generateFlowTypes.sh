#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo -e "\033[0;31mPlease enter a single Component name, e.g. 'Banner'\033[0m"
  exit 1
fi

NAME="packages/components/lib/${1}/${1}"
if [ ! -f "$NAME.d.ts" ]; then
  echo -e "\033[0;31mCould not find types in $NAME.d.ts. Please run 'yarn build:js' first.\033[0m"
  exit 1
fi

echo "🏃 Running flowgen"
npx flowgen --interface-records --no-inexact $NAME.d.ts -o $NAME.js.flow

echo "🏃 Manually replacing options that flowgen doesn't handle"
REACT_SUB_PATTERNS=(
    's/React.ReactNode/Node/g'
    's/ReactNode/Node/g'
    's/React$Node/Node/g'
    's/declare export default/declare module.exports:/'
)

for sub in "${REACT_SUB_PATTERNS[@]}"
do
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # passing an empty string after -i tells OS X to skip creating a backup file
        sed -i '' -e "$sub" $NAME.js.flow
    else
        sed -i -e "$sub" $NAME.js.flow
    fi
done

echo -e "\033[0;32mGenerated flowtypes in $NAME.js.flow\033[0m"
echo -e "Further manual edits may be needed. See \033[4mhttps://github.com/chanzuckerberg/edu-design-system/blob/main/packages/components/README.md#flow-types\033[0m"
