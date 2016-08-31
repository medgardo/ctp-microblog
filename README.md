![](https://travis-ci.com/DonatoM/CUNYTechPipeline.svg?token=PVCqhzNMfi8LeQhYz7N2&branch=master)

# Blog

Blog created using Node, Express, and PostgreSQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisities

VirtualBox Version 5.0.10

Vagrant Version 1.8.0 or newer

> If you setup vagrant and virtualbox during the summer orientation session then you are ready to run this application.

### Running the Blog

1) Clone this repository to your host computer.
```
git clone https://github.com/medgardo/ctp-microblog.git
```

2) Change into the env directory of the repository
```
cd ctp-microblog/env/
```

3) Boot up your local environment 
```
vagrant up
```

> This step may take a few minutes. It will create a new vagrant box for the application. It will then install the necessary packages and software to run the application.

4) SSH into the vagrant box once it's set up
```
vagrant ssh
```

5) Start the application
```
$ cd /opt/apps/blog/
$ npm start
```

6) See the application by entering this in your web browser address bar
```
192.168.33.10:3000
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
