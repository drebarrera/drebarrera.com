import modules as mx
import sys
import os
import importlib
homedir = os.getcwd() + r'/files/477grp16/'
sys.path.append(homedir)
data = mx.Data()
body = mx.Body()
from header import *
importlib.reload(sys.modules['header'])
from buttons import *
importlib.reload(sys.modules['buttons'])
from content import *
importlib.reload(sys.modules['content'])
from tiles import *
importlib.reload(sys.modules['tiles'])

data.title = "Repeat Rover"
base = mx.X()
base.content = '<base href="https://engineering.purdue.edu/477grp16/"/>'

### OBJECTS
page = Page()
slide = Slide()
tileSlide = Tile_Slide()
tileStatic = Tile()
tileAbout = Tile()
tileContact = Tile()
tileDocuments = Tile()
tileGitHub = Tile()
tileTeam = Tile()
tile477 = Tile()
overlay = mx.C()
title = mx.T()
subtitle = mx.T()
roverDomain = mx.C()
rover = mx.Image()

header.logo_name = None

### CONTENT
body.content = [base, header, page, subtitle, title, roverDomain]
page.content = [slide]
slide.content = [[[tileSlide,overlay]]]
title.content = 'Repeat Rover'
subtitle.content = 'Welcome. Click on a blue tile to begin.'
roverDomain.content = [rover]
rover.src = 'images/rover.png'

# SLIDE 2
tileSlide.content = [[None,None,tileStatic,None],[None,None,tileStatic,None],[None,None,tileStatic,tileStatic,tile477,None],[None,None,tileGitHub,tileStatic,tileStatic,None],[None,None,tileDocuments,tileTeam,tileStatic,None],[None,None,None,tileAbout,tileStatic,None],[None,None,None,tileStatic,tileStatic,None],[None,None,None,tileStatic,None,None],[None,None,None,tileStatic,None],[None,None,None,tileStatic,None]]

# SLIDE 2
slide.height = 'auto'
slide.id = 'slide2'
tileStatic.color2 = '#36687d'
tileStatic.color3 = '#F35046'
tileAbout.color1 = '#002233'
tileAbout.color2 = '#005580'
tileAbout.color3 = '#36687d'
tileAbout.static = False
tileAbout.id = 'about-tile'
tileAbout.icon = "url('images/vector_about.png')"
tileAbout.link = "https://engineering.purdue.edu/477grp16/about.html"
tileGitHub.color1 = '#002233'
tileGitHub.color2 = '#005580'
tileGitHub.color3 = '#36687d'
tileGitHub.static = False
tileGitHub.id = 'github-tile'
tileGitHub.icon = "url('images/vector_github.png')"
tileGitHub.link = "https://github.com/drebarrera/Repeat-Rover.git"
tileDocuments.color1 = '#002233'
tileDocuments.color2 = '#005580'
tileDocuments.color3 = '#36687d'
tileDocuments.static = False
tileDocuments.id = 'documents-tile'
tileDocuments.icon = "url('images/vector_documents.png')"
tileDocuments.link = "https://engineering.purdue.edu/477grp16/Files/documents.html"
tileTeam.color1 = '#002233'
tileTeam.color2 = '#005580'
tileTeam.color3 = '#36687d'
tileTeam.static = False
tileTeam.id = 'team-tile'
tileTeam.icon = "url('images/vector_team.png')"
tileTeam.link = "https://engineering.purdue.edu/477grp16/Team/team.html"
tile477.color1 = '#002233'
tile477.color2 = '#005580'
tile477.color3 = '#36687d'
tile477.static = False
tile477.id = '477-tile'
tile477.icon = "url('images/vector_477.png')"
tile477.link = "https://engineering.purdue.edu/ece477/"
tileContact.color1 = '#002233'
tileContact.color2 = '#005580'
tileContact.color3 = '#36687d'
tileContact.static = False
tileContact.id = 'contact-tile'
tileContact.icon = "url('images/vector_contact.png')"
tileContact.link = "https://engineering.purdue.edu/477grp16/Team/contact.php"
overlay.background = 'linear-gradient(rgba(21,41,49,1) 0%,rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255, 255, 255, 1) 100%)'
overlay.background_size = '100% 100%'
overlay.cl = 'tile_slide_overlay'
title.id = 'title'
title.position = 'fixed'
title.type = 'h1'
subtitle.id = 'subtitle'
subtitle.position = 'fixed'
subtitle.type = 'h2'
subtitle.font_weight = '300'
roverDomain.id = 'rover_domain'
roverDomain.position = 'fixed'
roverDomain.display = 'flex'
roverDomain.justify_content = 'center'
rover.id = 'rover'

### BUILD
slide.build()
