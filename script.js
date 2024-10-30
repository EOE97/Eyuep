"use strict";
const sound1 = new Audio('Sounds/Tipp_Feedbacksound.wav'); // Pfad zu Sound 1
const sound2 = new Audio('Sounds/Beschleunigungssound.wav'); // Pfad zu Sound 2
const sections = {
    "ueber-mich": {
        title: "",
        content: `
            <div class="center-content">
                <img src="Pics/Bewerbungsfoto.png" alt="Foto" class="profile-pic">
                <p class="about-text">Hi! Ich bin Eyüp und entwickle kreative und innovative Lösungen für Projekte 
                an der Schnittstelle verschiedener Mediendisziplinen. Seit Oktober 2024 bin ich Absolvent des Bachelorstudiengangs Medienkonzeption. 
                Während meines Studiums an der Hochschule Furtwangen konnte ich an vielen spannenden Projekten von der Konzeption bis zur Umsetzung mitwirken. 
                Hier findest du einige dieser Projekte sowie weitere wertvolle Erfahrungen, die ich sammeln durfte.   
                </p>
            </div>`
    },
    "3d": {
        title: "",
        content: `
            <div class="banner" style="background-image: url('Pics/Impact.png');">
                <div class="banner-title">IMPACT</div>
            </div>
            <p>Im Rahmen des Projektstudiums im vierten und fünften Semester habe ich ein eigenes Projekt initiiert: 
            Gemeinsam mit vier Kommilitonen entstand dabei der 3D-Animationsfilm IMPACT. 
            <br>
            <i>Es ist das Jahr 2638. 
            Der Krieg gegen die Khaz-I-Klone wütet seit über 400 Jahren. 
            Es ist ein Zeitalter der Märtyrer und Helden.
            Die Menschheit kämpft ums Überleben und steht kurz vor der Auslöschung. </i> </p>
            
            <h3>Meine 3D-Modelle:</h3>
            <br>


            <div class="media">
            
            <img src="Pics/Jaeger1.png" alt="Jäger der Menschen">
                <p>Jäger der Menschen</p>
                <br>
                <img src="Pics/bombe2.png" alt="Seismic Charge">
                <p>Seismic Charge Bomb </p>
                <br>
                <img src="Pics/rk3.png" alt="Rettungskapsel">
                <p>Rettungskapsel</p>
            <div class="section-separator" </div>
            </div>
            <h3>Meine Animationen:</h3>
            <br> 
            <div class="media">
            <iframe src="https://drive.google.com/file/d/1LPyAPr2cjhVeKiXiBEfJvblmhnb5IbdO/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>                
            <p>Unter meinen Sound-Design-Projekten findest du den gesamten Film vertont. Schau mal rein!</p>
            </div>`
    },
    "sound-design": {
        title: "",
        content: `
            <div class="banner" style="background-image: url('Pics/Impact.png');">
                <div class="banner-title">IMPACT</div>
            </div>
            <p>Im Projektstudium war ich zusammen mit einem Teammitglied für das Sound-Design unseres Animationsfilms IMPACT verantwortlich. 
            In der Postproduktion übernahm ich außerdem den Schnitt und die visuellen Effekte (VFX). Sieh dir das Endergebnis an: 
            <div class="media">
                <iframe src="https://drive.google.com/file/d/1OP0OTqzrDl8xi5svubo4a-TavVStqlP6/preview" width="640" height="480" allow="autoplay"></iframe>
                <p>
                Terra ist gefallen, der Krieg neigt sich dem Ende zu. 
                Nach einem kurzen aber zerstörerischen Gefecht mit einer Patrouille der Khaz-I, 
                nahe des umkämpften Sirius Systems, kämpft die Besatzung der Terras Rache verzweifelt darum 
                die Schäden am Hyperraumantrieb zu reparieren.</p>
            </div>
           <div class="divider"> </div>
            <div class="banner" style="background-image: url('Pics/Escape.png');">
                <div class="banner-title">Escape</div>
            </div>
            <p>Im Rahmen der Veranstaltung Kreativkonzeption entwickelte ich zusammen mit einem Kommilitonen ein interaktives Hörspiel. 
            Dabei war ich für das Konzept und Drehbuch, die Regie bei den Tonstudio-Aufnahmen und die Entwicklung der Anwendung verantwortlich.
            Inhaltlich geht es darum, dass Menschen aufgrund eines Bürgerkriegs aus Deutschland flüchten müssen. 
            Der Protagonist wird auf der letzten Etappe seiner Flucht mit schwierigen Entscheidungen konfrontiert, 
            die ihn oder andere in Gefahr bringen könnten. Die Grenze zwischen richtig und falsch ist oft schmaler, als man denkt. 
            Entscheidungen müssen schnell getroffen werden, um ein vorzeitiges Ende der Flucht zu vermeiden.
            Unser Ziel war es, Empathie zu erzeugen und zum Umdenken anzuregen. 
            Zu oft bilden Menschen sich eine Meinung, ohne sich in die Lage anderer hineinzuversetzen. 
            Statt Hass und Angst zu schüren, sollten wir den Dialog miteinander suchen.
            Die Anwendung ist sowohl mobil als auch im Web nutzbar.
            <div class="section-separator2" </div>
            <b>Triggerwarnung! Im Hörspiel werden Themen wie Krieg, Tod und Gewalt behandelt.</b></p> 
            <a href="https://eyuep06.github.io/ESCAPE/ESCAPE.html" class="btn" target="_blank">Probiere es aus!</a>`
    },
    "online-marketing": {
        title: "",
        content: `
            <div class="banner" style="background-image: url('Pics/Prax.png');">
                <div class="banner-title">Praxissemester</div>
            </div>
            <p>Im Grundstudium konnte ich ein solides Fundament im Marketing aufbauen, 
            weshalb ich mein Praxissemester im Online-Marketing bei einem Start-up absolvierte. 
            Dort war ich hauptsächlich für das Content-Marketing verantwortlich.
            <br> <br>Meine Aufgaben waren: 
            <br>
            &#128231; <i>Schreiben des Newsletters</i> <br>
            &#127916; <i>Video Editing</i><br>
            &#128187; <i>Erstellung von Landingpages und anderen Websites</i><br>
            &#128247; <i>Grafikdesign</i><br>
            &#9997; <i>Copywriting</i><br>
            &#129470; <i>Optimierung der Kunden-LinkedIn-Accounts</i>
            
            <br><br>
            Absolvierte Kurse in: <br>
            &#127891; <i>Copywriting</i><br>
            &#127891; <i>Growing a Small Business</i><br>
            &#127891; <i>Launch und Verkauf digitaler Produkte</i><br>
            &#127891; <i>Youtube-Marketing</i>
            </p>`
    },
    "ux": {
        title: "",
        content: `
            <div class="banner" style="background-image: url('Pics/UX.png');">
                <div class="banner-title">Bachelorarbeit</div>
            </div>
            <p> 
            In Lehrveranstaltungen wie User Experience Design, Interface Design und User Research lernte ich, Zielgruppen zu analysieren, 
            Nutzerbedürfnisse zu erkennen sowie Projekte zu konzipieren, prototypisch umzusetzen und durch User-Tests zu evaluieren.
            Die positiven Erfahrungen, die ich dabei sammelte, führten dazu, dass ich meine Bachelorarbeit zum Thema
            "<i>Optimierung der Nutzererfahrung in Elektroautos. Eine UX-basierte Analyse und Gestaltung multifunktionaler Klänge</i>"  
            verfasste. Darin untersuchte ich, welche synthetischen Sounds in modernen Elektrofahrzeugen integriert sind und 
            wie diese die Wahrnehmung und Nutzererfahrung beeinflussen. 
            Zudem entwickelte ich eine eigene Lösung mit einer Auswahl an verschiedenen Sounds. 

            <div class="media">
            
            <img src="Pics/Collage.png" alt="Thesis Collage">
            </div>
            <div class="section-separator2" </div>
            Hör dir gern zwei meiner erstellten Sounds an und verschaffe dir einen ersten Eindruck:
            <!-- Füge diese Buttons irgendwo in den sound-design Abschnitt ein -->
            <div class="play-buttons">
                <button id="play-sound1" class="play-button">Interface-Interaktion</button>
                <button id="play-sound2" class="play-button">Beschleunigungssound</button>
            </div>
</p>`
    }
};
// Funktion zum Laden des Inhalts
function loadSection(section) {
    const mainContent = document.getElementById('main-content');
    if (mainContent && sections[section]) {
        const { title, content } = sections[section];
        mainContent.innerHTML = `<h1>${title}</h1> ${content}`;
        const playButton1 = document.getElementById('play-sound1');
        const playButton2 = document.getElementById('play-sound2');
        playButton1?.addEventListener('click', () => sound1.play());
        playButton2?.addEventListener('click', () => sound2.play());
    }
}
// Event Listener für die Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('data-section');
            if (section) {
                // Entferne die Klasse "active" von allen Links
                navLinks.forEach(nav => nav.classList.remove('active'));
                // Füge die Klasse "active" zum geklickten Link hinzu
                link.classList.add('active');
                // Lade die entsprechende Sektion
                loadSection(section);
            }
        });
    });
    // Lade den Standardinhalt "Über mich"
    loadSection('ueber-mich');
});
//# sourceMappingURL=script.js.map