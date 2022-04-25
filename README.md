# Real Estate App

## Description

A full stack real estate application that built with a Django backend and a React frontend using docker to connecting them together. This app currently is not live and is for the developer to learn how to stand a full stack app up and test it on a local server. Below is an example environmental variables so that way this project can be replicated on your own local server.

## Project Replication

To replicate this project sample images and a sample `.env` has been provided. In the documentation you can find examples of what variables to start this project locally.

### Clone the Repo

- `git clone https://github.com/FancyKat/Real-Estate-App`
- `cd Real-Estate-App`

### Creating a virtual environment

- `python3.10 -m venv venv`
- `source venv/bin/activate`

### Install Dependacy

- `pip3 install -r requirements.txt`

### Create Missing Folders

- `mkdir logs mediafiles staticfiles htmlcov`

### Create the .envs

#### root directory

- `touch .env`
- Store you unique values

#### client directory

- `touch .env`
- Store values in the documentation pertain to the client

### Building with Docker

- `make build`
The site is now locally hosted on `localhost:8080`

## File Directory

```bash
.
├── apps
│   ├── common
│   │   └── migrations
│   ├── enquiries
│   │   └── migrations
│   ├── profiles
│   │   └── migrations
│   ├── properties
│   │   └── migrations
│   ├── ratings
│   │   └── migrations
│   └── users
│       └── migrations
├── client
│   ├── docker
│   │   └── local
│   ├── public
│   └── src
│       ├── app
│       ├── components
│       ├── features
│       │   ├── auth
│       │   └── properties
│       ├── images
│       └── pages
├── docker
│   └── local
│       ├── django
│       │   └── celery
│       │       ├── flower
│       │       └── worker
│       └── nginx
├── hmtlcov
├── logs
├── mediafiles
├── real_estate
│   └── settings
├── sample_images
├── staticfiles
└── tests
    ├── profiles
    └── users
```

## Environment Variables

## Global .env

```bash
SECRET_KEY="Your Key"
DEBUG=True
ALLOWED_HOSTS="localhost 127.0.0.1 [::1] api"
POSTGRES_ENGINE=django.dbbackends.postgresql
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin1234
POSTGRES_DB=estate
PG_HOST=postgres-db
PG_PORT=5432
SIGNING_KEY="Your Key"
EMAIL_HOST="Your Email Service"
EMAIL_PORT="Email Service Port"
EMAIL_HOST_USER="Your User"
EMAIL_HOST_PASSWORD="Your Password"
DOMAIN=localhost:8080
CELERY_BROKER=redis://redis:6379/0
CELERY_BACKEND=redis://redis:6379/0
```

## Client .env

```bash
WDS_SOCKET_PORT=0
```

## Technology Stack

### Backend

![Python](https://img.shields.io/badge/Python-074COO?style=for-the-badge&logo=python&logoColor=black)
![Django](https://img.shields.io/badge/Django-2F1C53?style=for-the-badge&logo=django&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
<br>

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Front End

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) <br>
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/redux-074COO?style=for-the-badge&logo=redux&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) <br>

- [JavaScript](https://www.javascript.com/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/Css/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Bootstrap](https://getbootstrap.com/)

### Third Party Software

![Nginx](https://img.shields.io/badge/Nginx-F7DF1E?style=for-the-badge&logo=nginx&logoColor=black)
![Celery](https://img.shields.io/badge/Celery-E34F26?style=for-the-badge&logo=celery&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-1572B6?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-563D7C?style=for-the-badge&logo=docker&logoColor=white) <br>

- [Nginx](https://nginx.org/en/)
- [Celery](https://docs.celeryq.dev/en/stable/)
- [Redis](https://redis.io/docs/getting-started/)
- [Docker](https://www.docker.com/)
