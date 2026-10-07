import { useEffect, useState } from "react";

/** Types out each word, pauses, deletes it, then moves to the next. */
export default function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === word) delay = 1500; // pause on the full word
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <>
      <span className="typed">{text}</span>
      <span className="caret" />
    </>
  );
}
