"use client";
import { useState } from "react";
import photo from './assets/photo.jpeg'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Нет",
      "Ты уверена?",
      "А если я попрошу очень вежливо??",
      "Ну пожалуйста",
      "С меня милый торт с пирожным)",
      "Что насчет твоего любимого кофе",
      "ПОЖАЛУЙСТА МИЛАЯ",
      "Но :*(",
      "Я умруу",
      "Все, умер(",
      "Окей, ты разговариваешь с призраком Димаша.",
      "Пж сладкая",
      ":((((",
      "Прошуу",
      "I am dead",
      "Нееет :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={photo} className="h-[500px] w-auto absolute" style={{zIndex: 0, top: 150, opacity: 0.6}} />
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style={{zIndex: 1}} />
          <div style={{zIndex: 1}} className="my-4 text-4xl font-bold">ЕЕЕЕЕЕЕ!!! Люблю тебя жаныым!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Будешь моей валентинкой?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Да
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Нет" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
