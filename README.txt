FOR HER: how to edit and use
=============================

OPEN IT
  Double-click index.html. It opens in your browser. (Needs internet once for the fonts; it still works without.)

FOLDERS
  index.html          the page (don't need to edit)
  css/style.css       colours and look (optional)
  js/config.js        EDIT THIS: names, all the words, photo list, music
  js/app.js           the engine (don't need to edit)
  images/stickers/    the cartoon stickers (replace or add your own .gif/.png)
  images/photos/      PUT YOUR PHOTOS HERE
  music/              PUT YOUR SONG HERE

1) CHANGE THE NAMES
  Open js/config.js in Notepad / any text editor.
  Change her: "Sara" and him: "Kabir" at the top. {her} and {him} everywhere else update by themselves.

2) CHANGE THE WORDS
  Everything she reads is in js/config.js: titles, lines, the letter, the quote, button text.
  Keep the "quotes" and commas exactly as they are.

3) ADD YOUR PHOTOS
  - Copy your pictures into images/photos/ (jpg, png or webp).
  - In js/config.js, edit the photos > items list so each src matches your file name, e.g.
      { src: "images/photos/us-goa.jpg", caption: "Goa 💜" },
  - Add or delete lines for more or fewer photos. Use items: [] to skip the photo screen.
  - Tip: resize photos to about 1000 pixels wide so the page loads fast on her phone.
  If a file name doesn't match, a 💜 placeholder shows instead.

4) ADD MUSIC (plays on a loop)
  - Copy an .mp3 into the music/ folder and name it song.mp3 (or change the name in config.js: music > file).
  - It starts when she first taps the screen (phones don't allow music to start by itself).
  - A round 🔊 / 🔇 button at the top right lets her turn it off.
  - No music? Set file: "" in config.js.
  - Use a song you have the right to use. Royalty-free sites like Pixabay Music or the YouTube Audio Library are safe
    if you plan to put the page online.

5) CHANGE OR ADD STICKERS
  Drop your .gif/.png files into images/stickers/ and point to them in config.js, e.g.
      sticker: "images/stickers/my-bear.gif"

SHARING IT WITH HER
  The whole folder has to travel together (photos and music are separate files).
  - Easiest: go to app.netlify.com/drop, drag this whole folder in, and you get a link to send her.
  - Or upload the folder to GitHub Pages / any web host.
  - Or send the zip and ask her to unzip it and open index.html (works, but a link is nicer).
  Only people with the link can find it. Don't share a link that has private photos with anyone else.
