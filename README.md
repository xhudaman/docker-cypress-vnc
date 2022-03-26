# Docker x Cypress x VNC

## Description

This repo is a proof of concept for adding VNC to a Docker container running Cypress.

This allows you to run the Cypress GUI using the command `cypress open` and access it through your host machine.

The container for the `cypress-testing` package contained within, is built based off `cypress/included:6.4.0` but should be possible to run with newer versions of Cypress as well.

This project uses the Express and React apps from my [Docker workshop repo](https://github.com/xhudaman/docker-workshop-node-react), that I created for my _Docker Basics_ workshop that I hosted at Thrive Career Wellness, as the services to test.
