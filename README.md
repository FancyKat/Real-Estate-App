# Portfolio

## User/Auth

Users are set inside the project directory this allows the admin to have full scope on all the users passing in and out and also allowing access to the users to other minor microservice apps. This is can be useful when using the directory to initialize the project to become the main router for all the user pages. This then can be used for user specific pages and also allow microservices to call the user base.




```bash
.
├── users
│   ├── __pycache__
│   ├── adapters.py
│   ├── admin.py
│   ├── apps.py
│   ├── context_processors.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   ├── views.py
│   │   
git ├── migrations
│   │   └── ...
│   ├── api
│   │   ├── serializers.py
│   │   └── views.py
│   ├── tests
│   │   └── ...
└── utils


```

## Products

This is going to be built as a microservice

## APIs

Soon to be information on Serializing

[Django REST framework](https://www.django-rest-framework.org/)

## Structure

I modeled the tree so that way I can have more control and organization over the whole structure itself. I opted to have all my different Dockerfiles for Django in the the compose folder. This allows me to manage each docker file to build out my processes to be more regulated and easily found in one section. Though the tree may look imtimidating at first it is not at all with a simple explanation.

You `local.yml` allows you to build the file locally this give the flexibility to build a contatiner locally on docker or on a your own computer by changing the config file and editing the `base.py` this is seperate from the `local.py` but allows you to run it locally. Also changing the boolean of this block of code will change which envs are being used in a local environment instead of the docker container environment.

```python
READ_DOT_ENV_FILE = env.bool("DJANGO_READ_DOT_ENV_FILE", default=True)
if READ_DOT_ENV_FILE:
    # OS environment variables take precedence over variables from .env
    env.read_env(str(ROOT_DIR / ".env"))
```

```bash
.
└── config
    ├── __pycache__
    └── settings
        ├── __init__.py
        ├── __pycache__
        │   ├── __init__.cpython-38.pyc
        │   ├── base.cpython-38.pyc
        │   └── local.cpython-38.pyc
        ├── base.py
        ├── local.py
        ├── production.py
        └── test.py
```

## Full Tree Structure

```bash
.
└── project
    ├── calc
    │   └── migrations
    ├── compose
    │   ├── local
    │   │   └── django
    │   └── production
    │       ├── aws
    │       │   └── maintenance
    │       ├── django
    │       ├── postgres
    │       │   └── maintenance
    │       │       └── _sourced
    │       └── traefik
    ├── config
    │   ├── __pycache__
    │   └── settings
    │       └── __pycache__
    ├── project
    │   ├── __pycache__
    │   ├── contrib
    │   │   ├── __pycache__
    │   │   └── sites
    │   │       ├── __pycache__
    │   │       └── migrations
    │   │           └── __pycache__
    │   ├── static
    │   │   ├── css
    │   │   ├── fonts
    │   │   ├── images
    │   │   │   └── favicons
    │   │   └── js
    │   ├── templates
    │   │   ├── account
    │   │   ├── pages
    │   │   └── users
    │   ├── users
    │   │   ├── __pycache__
    │   │   ├── api
    │   │   │   └── __pycache__
    │   │   ├── migrations
    │   │   │   └── __pycache__
    │   │   └── tests
    │   └── utils
    └── requirements

```

## Resources

- [Django documentation](https://docs.djangoproject.com/en/4.0/#the-model-layer)
- [Cookiecutter Django 2022.12.1 documentation](https://cookiecutter-django.readthedocs.io/en/latest/)
- [Django REST framework](https://www.django-rest-framework.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Django Debug Toolbar](https://django-debug-toolbar.readthedocs.io/en/1.8/)
