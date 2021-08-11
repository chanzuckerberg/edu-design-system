#!/bin/sh

for i in $(find lib/* -name "*.d.ts"); do
    if  [ ! -f "$i" ] || \
        [[ "$i" == *".stories."* ]] || \
        [[ "$i" == *".spec."* ]]
    then
        continue
    fi
    NAME=${i%%.*}
    echo "Generating flowtype for $NAME"
    npx flowgen --add-flow-header $i -o $NAME.js.flow
    # passing an empty string after -i tells OS X to skip creating a backup file
    sed -i '' 's/^import React from "react"/import * as React from "react"/' $NAME.js.flow
done
