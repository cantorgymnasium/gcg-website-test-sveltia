const Card = (child, opts = { vertical: false }) =>
  h(
    "span",
    {
      className:
        "relative flex border border-slate-400 focus-within:border-blue-800 dark:focus-within:border-blue-100 focus-within:bg-slate-100 dark:focus-within:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 pb-3 cursor-text group/active top-3 bottom-3" +
        (opts.vertical ? " flex-col" : ""),
    },
    child
  );

export default Card;
