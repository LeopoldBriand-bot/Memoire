#!/bin/bash

if [ -x "$(command -v docker)" ]; then
    for file in ./Experiments/*; do
        filename=$(basename $file) 
        echo $filename
        docker build -t api:$filename -f ./Experiments/$filename .
    done
    docker images api --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}\t{{.Size}}" | (read -r; printf "%s\n" "$REPLY"; sort -k 3 )
else
    echo "Docker need to be installed"
fi
