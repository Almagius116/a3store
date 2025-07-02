const ValidationText = ({ children }) => {
  const exist = Boolean(children);
  return (
    <p
      className={`text-red-500 text-[10px] text-end ${
        exist ? "visible" : "invisible"
      }`}
    >
      {children || "false"}
    </p>
  );
};

export default ValidationText;
