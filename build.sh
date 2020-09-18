#!/usr/bin/env bash


export PORT_NUMBER='5001'

PS3='Select build type: '
options=("Local build" "Quit")
select option in "${options[@]}"
do
    case $option in
        "Local build")
            export MONGO_URI='mongodb+srv://'
            export MONGO_USER='stolar'
            export MONGO_PASSWORD='Pr0m01!.'
            export MONGO_DATABASE="promo_dev"
            export MONGO_HOST="cluster0.xihw6.mongodb.net"
            export MONGO_OPTIONS="w=majority&retryWrites=true"
            npm run dev
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
