![](https://travis-ci.com/DonatoM/CUNYTechPipeline.svg?token=PVCqhzNMfi8LeQhYz7N2&branch=master)

# Blog

Blog created using Node, Express, and PostgreSQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisities

VirtualBox Version 5.0.10

Vagrant Version 1.8.0 or newer

> If you setup vagrant and virtualbox during the summer orientation session then you are ready to run this application.

**WINDOWS USERS:** The Vagrant/VirtualBox setup **will not** work for you without considerable modification. We recommend you follow the [Windows installation instructions here](install-node-postgres-on-windows.md).

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


## HELP!!! The steps above failed.

No worries! By using vagrant and virtual machines we have isolated our development environment from our host machines. That means we can remove everything and try again! 

The above steps can fail for various reasons. So you will want to ensure the following.

- Make sure you have a working internet connection
    + Even with a good connection, sometimes npm servers fail to respond, requiring a retry of the install.
- Make sure you have the latest code and that you have not modified package.json, prior to the first time you run `vagrant up`
- If the retrying 3 times does not work, please post your error screenshot to the troubleshooting channel on Slack.

**Resetting your environment**

Assuming you are in the `ctp-microblog/env` directory on your HOST (Windows/Mac/Linux) machine, do the following:

```
vagrant destroy
```

type `y` and press `ENTER`.

```
cd ../..
rm -r ctp-microblog
```

You can now start over at [step 1 above](#running-the-blog)

## Running the tests

Coming Soon

### Coding Style

**THIS FEATURE IS NOT ACTIVE YET**

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
