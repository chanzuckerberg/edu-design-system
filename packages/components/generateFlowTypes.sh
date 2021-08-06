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
    npx flowgen $i -o $NAME.flow.js
done
