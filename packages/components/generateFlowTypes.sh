#!/bin/bash

for i in $(find lib/* -name "*.d.ts"); do
    if  [ ! -f "$i" ] || \
        [[ "$i" == *".stories."* ]] || \
        [[ "$i" == *".spec."* ]]
    then
        continue
    fi
    NAME=${i%%.*}
    echo "Generating flowtype for $NAME"
    npx flowgen --interface-records --no-inexact $i -o $NAME.js.flow

    # manually replace options that flowgen doesn't handle
    REACT_SUB_PATTERNS=(
        's/React.ReactNode/Node/g'
        's/ReactNode/Node/g'
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
done
