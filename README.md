# hps-javascript-mocha

[![Build Status](https://travis-ci.org/hiptest/hps-javascript-mocha.svg?branch=master)](https://travis-ci.org/hiptest/hps-javascript-mocha)

Hiptest publisher samples with Javascript/Mocha

In this repository you'll find tests generated in Javascript/Mocha format from [Hiptest](https://hiptest.net), using [Hiptest publisher](https://github.com/hiptest/hiptest-publisher).

The goals are:

 * to show how tests are exported in Javascript/Mocha.
 * to check exports work out of the box (well, with implemented actionwords)

System under test
------------------

The SUT is a (not that much) simple coffee machine. You start it, you ask for a coffee and you get it, sometimes. But most of times you have to add water or beans, empty the grounds. You have an automatic expresso machine at work or at home? So you know how it goes :-)

Update tests
-------------


To update the tests:

    hiptest-publisher -c mocha.conf --only=tests

The tests are generated in the [``test``](https://github.com/hiptest/hps-javascript-mocha/tree/master/test) directory.

Run tests
---------


To build the project and run the tests, use the following command:

    mocha test --recursive --reporter mocha-junit-reporter

The SUT implementation can be seen in [``src/coffee_machine.js``](https://github.com/hiptest/hps-javascript-mocha/blob/master/src/coffee_machine.js)

The test report is generated in ```test-results.xml```
