<?php

use BoilerPlate\BoilerPlate;

class BoilerPlateTest extends PHPUnit_Framework_TestCase
{
    /**
     * Boiler plate instance.
     *
     * @var BoilerPlate\BoilerPlate
     */
    private $boiler;

    /**
     * Instantiate the BoilerPlate.
     */
    public function setUp()
    {
        // Create a new Boiler Plate instance.
        $this->boiler = new BoilerPlate();
    }

    /**
     * Ensure that the boiler plante can be resolved from the unit test
     */
    public function testBoilerPlateCanBeResolved()
    {
        $this->assertTrue($this->boiler instanceof \BoilerPlate\BoilerPlate);
    }

    /**
     * Ensure that Default value matches.
     */
    public function testDefaultValueMatches()
    {
        $result = $this->boiler->perform();
        $this->assertEquals('1', $result);
    }
}
