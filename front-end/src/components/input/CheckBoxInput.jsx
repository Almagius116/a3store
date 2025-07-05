const CheckBoxInput = ({ label, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer relative appearance-none shrink-0 w-3 h-3 border-2 border-blue-200 rounded-xl bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-blue-500 checked:border
        disabled:border-steel-400 disabled:bg-steel-400"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default CheckBoxInput;
