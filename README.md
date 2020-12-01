## About

This project was created as a training project to demonstrate programming skills and looking for job ;)

The project allows user to get info about yourself from social network "VKontakte", get music tracks, compose own playlist and can download them by one, also can download all playlist.

Be careful: the policy of "VKontakte" can block some music track and there is no possibility to get it. This applies to some regions.

Demo is accessible on https://vk.furry-totem.by:24527/
Warning! Download is not working in demo version. It is caused by security issues with CORS.

Run local and enjoy your music :)

## How to run

Node v12.18.2 required to run server!

1. Clone the project from repository
2. Go to "vk-tools"
3. Run npm install
4. Build frontend (npm run build)
5. Go to vk-tools/server 
6. Run npm install
7. You must fill the file "authorization.json": write login, password, user ID (information of VK account which will be used for getting music) and path to your browser.
8. Build backend (npm run build)
9. Run server (node dist/bundle.js)
10. Navigate to localhost:4201

## For developers

Angular CLI v10.1.7

For correct working in debug mode of this project needs to run frontend and backend separately.

