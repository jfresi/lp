Funktion: 

 - Der User zählt ein Foto aus und lädt es in die Seite. Foto wird angezeigt und kann durch den Upload-Button hochgeladen werden.

 - Das Foto wird hochgeladen und in einer Datenbank auf dem Server eingepflegt. Alle Bilder erhalten einen Wert mit dem Timestamp. (Datenbank mit MySQL warscheinlich)

 - Nun wird das chronologisch vorletzte Bild von der Datenbank ausgewählt und zum User geschickt. Dieses Bild wird dann angezeigt


 
 - Der Switch soll regulieren ob der User das chronologisch vorletzte Bild runtergeladen bekommt, oder ein zufälliges aus der Datenbank


- Über den Upload-Button kann der Nutzer eine .jpg/.png/(WELCHE DATEIETYPEN?)- Datei von seinem Computer auswählen und hochladen.
  Die Datei wird an die Datenbank übergeben und bekommt einen Zeitstempel-Wert hinzugefügt. 
  
- Danach wird das chronologisch vorletzte Bild von der Datenbank ausgewählt(oder durch eine Anfrage an die Datenbank ausgewählt)      und im Bilderrahmen für den Nutzer angezeigt.

- Solls einen Downloadbutton geben?

- 



<b> TO-DO</br>
- [ ] Datenbank erstellt
- [ ] Bilder werden hochgeladen
- [ ]  Bilder werden in die Datenbank eingepflegt

- [ ] Checker gegen Spambots
- [ ]  Checker gegen Viren etc.
- [ ]  Widerdingsbumserklärung, dass niemand für inhalte verantwortlich sind( kann ja alles mögliche hochgeladen werden, da muss man aufpassen, dass nichts illegaes passieren kann)
- [ ]  Dateifilter beim upload, Typ und Größe
- [ ]  Datenbankarchitektur und Schnittstellen festlegen
