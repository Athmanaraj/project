#CREATE A FOLDER IN FILE & UNDER THAT CREATE A FILE
#INSTALL
#EXTENSION : PYTHON
#1ST METHOD:
#IN TERMINAL : pip3 install beautifulsoup4
#version     :pip3 show beautifulsoup



import requests
from bs4 import BeautifulSoup

beauty = requests.get("https://www.w3schools.com/")
store = BeautifulSoup(beauty.content,"html.parser")  #The "html.parser" is simply telling BeautifulSoup to use Python's built-in tool to read and understand the HTML content.
print(store.prettify())     #The prettify() method adds line breaks and indentation, making the document easier to read and understand.

