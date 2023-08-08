function slide1diagramChange(text) {
	$("#slide2description").fadeOut(1000);
	$("html, body").animate({ scrollTop: "1200" }, 1000, function(){
		document.getElementById("slide2description").innerHTML = text;
		$("#slide2description").fadeIn(1000);
	});
}

function slide1diagramWSSB() {
	var text = "<h3>Wheel Speed Sensors</h3><br><p>The Repeat Rover is equipped with two wheel speed sensors. Each wheel speed sensor will contain a hall effect sensor to read wheel speed from a custom designed reluctor embedded inside of the rear wheels of the vehicle. When rotating with the wheel, each of the reluctor’s 24 magnetic poles will induce a pulse current across the hall effect sensor, to be decoded by the microcontroller. Wheel speed is used to determine the distance traversed by the vehicle and verify the actions of the Repeat Rover.</p>";
	slide1diagramChange(text);
}

function slide1diagramMAGB() {
	var text = "<h3>Magnetometer Digital Compass</h3><br><p>The Repeat Rover is equipped with a 3-axis magnetometer to determine vehicle bearing. The magnetometer determines the bearing at which the vehicle is pointed by comparing it to true north with a sensitive hall effect sensor. The sensor used by the Repeat Rover project communicates with the microcontroller using I2C and can operate at a maximum frequency of 400kHz. Vehicle bearing is used to determine the rotation traversed by the vehicle and verify the actions of the Repeat Rover.</p>";
	slide1diagramChange(text);
}

function slide1diagramBLEB() {
	var text = '<h3>Bluetooth IoT Communication</h3><br><p>The Repeat Rover is operated wirelessly over Bluetooth. Bluetooth is used to receive and transmit commands and status signals to a controlling device. Commands can be sent from a mobile phone or computer when paired with the Repeat Rover. Commands are in the form of a three letter prefix followed by a number quantifying the prefix. Below is a table listing the commands which can be sent to the Repeat Rover.</p><br><br><table><tbody><tr><th colspan="2">Repeat Rover Control Commands</th></tr><tr><th>Command</th><th>Outcome</th></tr><tr><td>SPD#</td><td>Sets the vehicle speed to # mm/s</td></tr><tr><td>FWD#</td><td>Moves the vehicle # mm forward.</td></tr><tr><td>REV#</td><td>Moves the vehicle # mm in reverse.</td></tr><tr><td>RCW#</td><td>Rotates the vehicle # deg clockwise.</td></tr><tr><td>RCC#</td><td>Rotates the vehicle # deg counterclockwise.</td><tr></tbody></table>';
	slide1diagramChange(text);
}

function slide1diagramMCUB() {
	var text = "<h3>Project Description</h4><br><p>Repeat Rover is an automated domestic item delivery system which can remember a user driven path. This will be useful when paired with an automatic item reloader at its home dock that loads items to be delivered onto the car, and a remote device which signals to the car when it is being called. Upon first setup, the user will drive the rover using a bluetooth transceiver app on a phone transferring the desired path using bluetooth while the microcontrollers record the speed and direction of the rover using wheel mounted hall effect sensors and onboard magnetometers respectively. With this data stored in the onboard SD card, the rover will be able to deliver things from its home dock to the end of the user generated path. When called by the user's remote summoning device, the microcontroller on Repeat Rover will start up and translate the stored data into movement of the wheels and steering direction. Once delivery is complete, the rover will turn around 180 degrees and do the inverse of the actions it just completed to accurately return back to its loading station. The Repeat Rover would be reset with user need in order to change the desired path.</p><br><br><h3>Project Specific Success Criteria</h3><ol><li>PSSC #1 (Hardware): An ability to interface the microcontroller with the RC car's motors and control ICs.</li><li>PSSC #2 (Hardware): An ability to store and retrieve wheel speed and direction data for 100 movement instructions in an SD card using SPI.</li><li>PSSC #3 (Hardware): An ability to track the distance traversed by measuring wheel speed using a hall effect sensor interfaced with the microcontroller using GPIO.</li><li>PSSC #4 (Hardware): An ability to track the direction of the vehicle with a magnetometer communicating through I2C during a user's control session.</li><li>PSSC #5 (Software): An ability to calculate and accurately drive the car using a planned path constructed from wheel and direction data.</li></ol>";
	slide1diagramChange(text);
}

function slide1diagramMOTB() {
	var text = "<h3>Motor Control</h4><br><p>Repeat Rover is equipped with two brushed DC motors, which drive the left and right set of wheels respectively. These motors will be controlled via an H-Bridge circuit. The H-Bridge circuit will use four transistor switches to determine motor direction, while recieving a pulse-width modulation signal from the microcontroller to drive the motor. The rate of the pulse will ultimately determine motor speed. All transistor switching will be controlled by the microntroller.</li></ol>";
	slide1diagramChange(text);
}

function slide1diagramPWRB() {
	var text = "<h3>Power Supply</h4><br><p>Repeat Rover is equipped with a lithium-ion battery to power the microcontroller and it's peripherals. The lithium-ion battery will supply a 3.3 V charge needed to sustain opperations, while conserving power.</li></ol>";
	slide1diagramChange(text);
}

function slide1diagramSTOB() {
	var text = "<h3>Data Storage</h4><br><p>Repeat Rover is equipped with  on-board storage in the form of an SD card. The memory on the SD card will accomodate the storage of command data sent with Bluetooth for use when repeating a path.</li></ol>";
	slide1diagramChange(text);
}