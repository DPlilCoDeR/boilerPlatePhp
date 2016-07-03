# Boiler Plate for a reusable php module with TDD & PHPUnit

## The code

This boilerplate provides you an existing structure to customise and make your code reusable in any modern php application. Just modify the composer.json file
in order to add the bits and pieces necesaries for your module.
This boilerplate uses no other code than phpunit and gulp in order to run the tests in the provided suite with TDD features like watching files.


## Develop with TDD
In order to use this boiler plate node should be installed.

1 Install composer dependencies
```
composer install
```
2 Install npm dependencies
```
npm install
```
3 Execute gulp
```
gulp
```

If everything went good, after running ```gulp``` the test suite provided should run two tests in green and keep the
execution alive watching for change in files.