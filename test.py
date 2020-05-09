from __future__ import print_function
import eel
from scraping import scraping_facebook
# set web file
eel.init('web')


@eel.expose()
def passKeywordToPython(key):
    scraping_facebook(key)


eel.start("index.html", size=(800, 600))
