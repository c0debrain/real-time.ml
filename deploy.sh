git subtree push --prefix api heroku master
git push

cd stream
docker-compose down
docker-compose up --build -d
