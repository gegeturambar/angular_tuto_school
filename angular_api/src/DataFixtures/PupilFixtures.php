<?php

namespace App\DataFixtures;

use App\Entity\Pupil;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class PupilFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $i = 0;
        for($i = 0;$i <= 50;$i++){
            $pupil = new Pupil();
            $pupil->setFirstname("firstname_$i");
            $pupil->setLastname("lastname_$i");
            $pupil->setEmail("pupil_$i@gmail.com");
            $manager->persist($pupil);
        }
        $manager->flush();
    }
}
