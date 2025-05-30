#!/bin/bash
# Menu to choose push type
PS3="Select push type: "
options=("First Push" "Secondary Push" "Exit")
select opt in "${options[@]}"
do
    case $opt in
        "First Push")
            read -p "Enter remote repository URL: " remote
            git init
            git add .
            git commit -m "first commit"
            git branch -M main
            git remote add origin $remote
            git push -u origin main
            break
            ;;
        "Secondary Push")
            git add .
            commit_message=$(date +%Y-%m-%d)
            git commit -m "$commit_message"
            git push
            break
            ;;
        "Exit")
            exit
            ;;
        *) echo invalid option;;
    esac
done
