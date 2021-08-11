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
    npx flowgen --add-flow-header $i -o $NAME.js.flow

    # manually replace options that flowgen doesn't handle
    REACT_SUB_PATTERN='s/^import React from "react"/import * as React from "react"/'

    if [[ "$OSTYPE" == "darwin"* ]]; then
        # passing an empty string after -i tells OS X to skip creating a backup file
        sed -i '' -e "$REACT_SUB_PATTERN" $NAME.js.flow
    else
        sed -i -e "$REACT_SUB_PATTERN" $NAME.js.flow
    fi
done
