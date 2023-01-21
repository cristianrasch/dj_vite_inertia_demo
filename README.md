## Docker setup instructions

0. Make sure you have the latest stable version of Docker and docker compose installed on your computer.
1. To take advantage of the new BuildKit front-end, append the following lines to your
   ~/.bashrc file

```bash
echo 'export DOCKER_BUILDKIT=1' >> ~/.bashrc
echo 'export COMPOSE_DOCKER_CLI_BUILD=1' >> ~/.bashrc
```

2. Clone the project and cd into that directory
3. Build your containerized env for the first time:

`docker compose build --build-arg USER_ID=$(id -u) --build-arg GROUP_ID=$(id -g) --progress plain`

4. Boot up your new dev env with:

`docker compose up`

5. Migrate your dev db:

`docker compose exec web ./manage.py migrate`

6. Visit the app [here](http://localhost:8000/)

To launch the Django shell simply type:

`docker compose exec web ./manage.py shell_plus`

To stop all the containers managed by compose, just press ctrl+c or alternative, switch
to another terminal and run:

`docker compose stop`

To get rid of the entire setup, simply run this command:

`docker compose down --volumes`

followed by:

```bash
docker rmi django_vite_inertia-vite django_vite_inertia-web
  && docker system prune --force
```

to clean up all the app images created.
