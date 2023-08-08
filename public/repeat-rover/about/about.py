import modules as mx
import sys
import os
import importlib
homedir = os.getcwd() + r'/files/477grp16/'
sys.path.append(homedir)
data = mx.Data()
body = mx.Body()
from buttons import *
importlib.reload(sys.modules['buttons'])
from header import *
importlib.reload(sys.modules['header'])
from content import *
importlib.reload(sys.modules['content'])

data.title = 'Repeat Rover | About'
base = mx.X()
base.content = '<base href="https://engineering.purdue.edu/477grp16/"/>'

### OBJECTS ###
page = Page()
slide1 = Slide()
slide1title = mx.T()
slide1caption = mx.T()
slide1logo = mx.Image()
slide1diagramC = mx.C()
slide1diagram = mx.Image()
slide1diagramWSSB = mx.C()
slide1diagramMAGB = mx.C()
slide1diagramBLEB = mx.C()
slide1diagramMOTB = mx.C()
slide1diagramMCUB = mx.C()
slide1diagramPWRB = mx.C()
slide1diagramSTOB = mx.C()

slide1button = Button('link','Portfolio',link_url="https://www.drebarrera.com",radius='rounded')
slide2 = Slide()

### BUTTON BAR ###
buttons = list()
button_names = ['Home','Team','Documentation','GitHub','Contact']
button_actions = ["window.open('https://engineering.purdue.edu/477grp16/','_self');", "window.open('https://engineering.purdue.edu/477grp16/Team/team.html','_self');", "window.open('https://engineering.purdue.edu/477grp16/Files/documents.html','_self');", "window.open('https://github.com/drebarrera/Repeat-Rover','_self');", "window.open('https://engineering.purdue.edu/477grp16/Team/contact.php','_self');"]
for x in range(len(button_names)):
    buttons.append(('func',button_names[x],button_actions[x]))
button_bar = Header(branding='left',menubar='center')
button_bar.logo_height='75px'
button_bar.buttons=buttons
button_bar.primary_color=''
button_bar.accent_color='#005580'
button_bar.button_style='rounded'
button_bar.button_colors='#005580 rgb(250,250,250)'
button_bar.button_width='auto 50px'
button_bar.button_padding='10px'
button_bar.nav_switch='0'
button_bar.id = 'button_bar'
button_bar.build()

slide2description = mx.X()

### CONTENT ###
body.content = [base, header, page]
page.content = [slide1,slide2]

# SLIDE 1
slide1.content = [[[slide1title]],[[slide1caption]],[[button_bar]],[[]],[[]],[[]],[[slide1diagramC]],[[]],[[]],[[]]]
slide1title.content = "REPEAT ROVER"
slide1caption.content = "Repeat Rover is a remote-programmable automated R/C vehicle designed for resource delivery in repeated process environments."
slide1diagramC.content = [slide1diagramWSSB,slide1diagramMAGB,slide1diagramBLEB,slide1diagramMOTB,slide1diagramMCUB,slide1diagramPWRB,slide1diagramSTOB,slide1diagram]
slide1diagram.src = 'images/component_diagram.webp'
slide1logo.src = 'images/logo.webp'

# SLIDE 2
slide2.content = [[[slide2description]]]
slide2description.content = "<div id='slide2description'><em><p>Click on a component of the graphic above to learn more about the project.</p></em><br><br><h3>Project Description</h3><br><p>Repeat Rover is an automated domestic item delivery system which can remember a user driven path. This will be useful when paired with an automatic item reloader at its home dock that loads items to be delivered onto the car, and a remote device which signals to the car when it is being called. Upon first setup, the user will drive the rover using a bluetooth transceiver app on a phone transferring the desired path using bluetooth while the microcontrollers record the speed and direction of the rover using wheel mounted hall effect sensors and onboard magnetometers respectively. With this data stored in the onboard SD card, the rover will be able to deliver things from its home dock to the end of the user generated path. When called by the user's remote summoning device, the microcontroller on Repeat Rover will start up and translate the stored data into movement of the wheels and steering direction. Once delivery is complete, the rover will turn around 180 degrees and do the inverse of the actions it just completed to accurately return back to its loading station. The Repeat Rover would be reset with user need in order to change the desired path.</p><br><br><h3>Project Specific Success Criteria</h3><ol><li>PSSC #1 (Hardware): An ability to interface the microcontroller with the RC car's motors and control ICs.</li><li>PSSC #2 (Hardware): An ability to store and retrieve wheel speed and direction data in an SD card using SPI communication.</li><li>PSSC #3 (Hardware): An ability to track the distance traversed by measuring wheel speed using a hall effect sensor interfaced with the microcontroller using GPIO.</li><li>PSSC #4 (Hardware): An ability to track the direction of the vehicle with a magnetometer communicating through I2C during a user's control session.</li><li>PSSC #5 (Software): An ability to calculate and accurately drive the car using a planned path constructed from wheel and direction data.</li></ol><br><br><h3>Strech Goals</h3><ol><li>Stretch Goal #1: The ability to interface with an ultrasonic sensor to detect objects in the rover's path and alert the user using sound and lights when there is an obstruction.</li><li>Stretch Goal #2: Develop an application to communicate between a device and the vehicle with user interface input.</li><li>Stretch Goal #3: The ability to interface with the RC car's dumping mechanism servo motor using PWM from the microcontroller.</li></ol></div>"


### PROPERTIES ###
slide1.height = "1200px"
slide1.background = 'linear-gradient(175deg, rgb(250,250,250) 0%, #edf9fe 55%, #76aac2 85%, #36687d 100%)'
slide1.id = 'slide1'
slide1title.type = 'h2'
slide1caption.id = 'slide1caption'
slide1diagram.id = 'slide1diagram'
slide1diagramWSSB.id = 'slide1diagramWSSB'
slide1diagramMAGB.id = 'slide1diagramMAGB'
slide1diagramBLEB.id = 'slide1diagramBLEB'
slide1diagramMOTB.id = 'slide1diagramMOTB'
slide1diagramMCUB.id = 'slide1diagramMCUB'
slide1diagramPWRB.id = 'slide1diagramPWRB'
slide1diagramSTOB.id = 'slide1diagramSTOB'
slide1diagramWSSB.cl = 'slide1diagramB'
slide1diagramMAGB.cl = 'slide1diagramB'
slide1diagramBLEB.cl = 'slide1diagramB'
slide1diagramMOTB.cl = 'slide1diagramB'
slide1diagramMCUB.cl = 'slide1diagramB'
slide1diagramPWRB.cl = 'slide1diagramB'
slide1diagramSTOB.cl = 'slide1diagramB'
slide1diagramWSSB.onclick = 'slide1diagramWSSB()'
slide1diagramMAGB.onclick = 'slide1diagramMAGB()'
slide1diagramBLEB.onclick = 'slide1diagramBLEB()'
slide1diagramMOTB.onclick = 'slide1diagramMOTB()'
slide1diagramMCUB.onclick = 'slide1diagramMCUB()'
slide1diagramPWRB.onclick = 'slide1diagramPWRB()'
slide1diagramSTOB.onclick = 'slide1diagramSTOB()'
slide1logo.id = 'slide1logo'
slide1button.id = 'slide1button'
slide1button.primary = '#F35046'
slide1button.accent = 'white'
slide1.build()
slide2.height = "300px"
slide2.id = 'slide2'
slide2.build()
