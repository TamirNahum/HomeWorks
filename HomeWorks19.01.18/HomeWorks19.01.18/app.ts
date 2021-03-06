﻿let pilot: Pilot = new Pilot();
let traveler: Traveler = new Traveler();
let landAttendant: LandAttendant = new LandAttendant();
let flightAttendant: FlightAttendant = new FlightAttendant();

pilot.firstName = "Tamir";
pilot.lastName = "Nahum";
pilot.licenceYears = 5;
pilot.seniority = 3;

traveler.firstName = "Bob";
traveler.lastName = "Cohen";
traveler.passportNumber = "123456789";

landAttendant.firstName = "Alice";
landAttendant.lastName = "Levi";
landAttendant.landWork = "cleaner";
landAttendant.originCountry = "Israel";
landAttendant.seniority = 4;

flightAttendant.firstName = "Aviad";
flightAttendant.lastName = "Mizrachi";
flightAttendant.originCountry = "USA";
flightAttendant.seniority = 5;
flightAttendant.unit = "first class";

pilot.printInfo();
flightAttendant.printInfo();
landAttendant.printInfo();
traveler.printInfo();
