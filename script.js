<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meine Website</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Globale Stile */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Stile für Header */
    header {
      background-color: #333;
      color: #fff;
      padding: 20px;
    }

    nav {
      text-align: center;
    }

    nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    nav li {
      display: inline-block;
      margin-right: 10px;
    }

    nav a {
      text-decoration: none;
      color: #fff;
      padding: 5px;
    }

    nav a:hover {
      background-color: #555;
    }

    /* Stile für Hauptinhalt */
    main {
      padding: 20px;
    }

    h1 {
      color: #333;
    }

    p {
      color: #555;
    }

    button {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #555;
    }

    /* Stile für Footer */
    footer {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
    }

    /* Responsive Design */
    @media only screen and (max-width: 600px) {
      header {
        padding: 10px;
      }

      nav {
        text-align: left;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Startseite</a></li>
        <li><a href="#">Über uns</a></li>
        <li><a href="#">Leistungen</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Willkommen auf unserer Website</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor justo vel massa eleifend hendrerit.</p>
    <button id="myButton">Klick mich</button>
    <form id="feedbackForm">
      <label for="feedback">Dein Feedback:</label>
      <textarea id="feedback" rows="4" cols="50"></textarea>
      <button type="submit">Absenden</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2023 Meine Website. Alle Rechte vorbehalten.</p>
  </footer>

  <script>
    // Das Skript wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", function() {
      // Hier kannst du den Code schreiben, der ausgeführt werden soll

      // Beispiel: Ändere den Text eines Elements
      var myElement = document.getElementById("myElement");
      myElement.textContent =
