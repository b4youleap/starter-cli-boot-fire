# StarterCliBootFire

tl;dr - angular/cli 1.0, angular 4, Bootstrap 4, and Angular Fire. For the in-depth story scroll down past the
        run info below.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Here's the story...

My mission is to create a starter project that goes a step further than some of the better ones I've seen.
Ultimately I'd like to create multiple versions that are styled by Angular Material Design or go retro with Bootstrap 3. To begin though, it's Bootstrap 4.

## The biggest difference

What will separate this project from others is the use of a backend API provider for securing and providing data and access.

Most tutorials stop at the faux user service with an "isLoggedIn" boolean and frankly, that's where the 
tutorials should start.

Big Fortune 100 companies insist upon separating the client from the server and rightly so. It's something everyone should be doing but aren't, and that's where I wanted to be different.
