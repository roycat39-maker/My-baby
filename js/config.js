/* =========================================================
   EDIT THIS FILE. Change names, words, photos and music here.
   Keep the quotes "" and commas , exactly as they are.
   {her} and {him} are replaced by the names below.
   ========================================================= */
const CONFIG = {

  her: "Hiya",          // her name
  him: "Mon",         // your name

  pageTitle: "I have something to say 💜",

  /* Music plays in a loop after her first tap. Put your file in the music folder.
     Set file to "" if you don't want music. */
  music: { file: "music/song.mp3", volume: 0.5 },

  /* The first three screens. sticker = a file inside images/stickers/ */
  screens: [
    { sticker: "images/stickers/bear-panda.gif",
      title: "{her}… I have something to say 🥺",
      text: "I just want a chance to say this properly.",
      button: "Hear me out 💗" },

    { sticker: "images/stickers/crying-hug.gif",
      title: "I know I hurt you",
      text: "That was never what I wanted. Seeing you upset is the last thing I ever want.",
      button: "Next" },

    { sticker: "images/stickers/bunny-hug.gif",
      title: "You mean everything",
      text: "I never say it enough, but you are the best part of my days.",
      button: "Next" }
  ],

  /* The letter screen */
  letter: {
    sticker: "images/stickers/cats.gif",
    greeting: "Hi {her} 💙",
    text: "I let my ego talk when I should have listened. You deserved patience and I gave you pride. I'm sorry, and I'm going to do better, starting today.",
    button: "Next"
  },

  /* Photo stack: she taps a photo to see the next one.
     Put your pictures in images/photos/ and list them here.
     Add or remove lines as you like. Use items: [] to skip this screen. */
  photos: {
    title: "You have no idea what this means 💙",
    button: "Continue",
    items: [
      { src: "images/photos/photo1.jpg", caption: "The day I knew 💜" },
      { src: "images/photos/photo2.jpg", caption: "Your smile, always ❤️" },
      { src: "images/photos/photo3.jpg", caption: "Us, being silly 💕" },
      { src: "images/photos/photo4.jpg", caption: "My favourite place: next to you 💗" },
      { src: "images/photos/photo5.jpg", caption: "Time may shape the world, yet our love will quietly outlive it. 💝💖" }
    ]
  },

  /* The last screen */
  final: {
    sticker: "images/stickers/bear-panda.gif",
    title: "I'm truly sorry",
    quote: "Loving someone isn't about never messing up. It's about always coming back. 🙏",
    yesButton: "Forgive me? 💜",
    noButton: "Let me think…",
    noGaveUp: "Okay okay… yes 💜",
    thanksSticker: "images/stickers/love-you.gif",
    thanksTitle: "Thank you, {her}",
    thanksText: "I love you. Always coming back to you.\n— {him}"
  }
};
