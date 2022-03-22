# django-portfolio

[(DJANGO)](https://github.com/django/django)

## Django

### User/Auth

### Products

### APIs

### Structure

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
