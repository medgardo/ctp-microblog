https://travis-ci.com/DonatoM/CUNYTechPipeline.svg?token=PVCqhzNMfi8LeQhYz7N2&branch=master

# Blog

Blog created using Node, Express, and PostgreSQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisities

Python Version 2.7.10

Pip Version 7.1.2
```
sudo easy_install pip==7.1.2
```

Ansible Version 1.9.4
```
sudo pip install ansible==1.9.4
```

VirtualBox Version 5.0.10

Vagrant Version 1.7.4

### Running the Blog

Change into the env directory
```
cd env/
```

Boot up your local environment 
```
vagrant up
```

See the application by entering this in your address bar
```
192.168.33.10:3000
```

SSH into your local environment once its set up
```
vagrant ssh
```

Change into the project's directory
```
cd /opt/apps/
```

## Running the tests

Coming Soon

### Coding Style

We use AirBnB JS coding style. You can check whether or not your code
is styled properly by checking it using eslint. You must be within your project directory (inside of blog)

```
./node_modules/.bin/eslint nameOfYourFile.js
```

## Deployment

Coming Soon

## Built With

* Node
* Express
* Postgres

## License

This project is licensed under the MIT License.
