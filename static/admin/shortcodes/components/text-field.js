const TextField = ({ label, value, onChange }) =>
	h(
		"span",
		{ key: "text-" + label, className: "flex flex-col w-full" },
		h(
			"label",
			{
				className:
					"w-full flex text-xs font-bold dark:font-semibold group-focus-within/active:text-blue-500 group-hover/active:text-blue-500 cursor-text text-slate-500 dark:text-slate-400 px-3 pt-3",
			},
			label
		),
		h("input", {
			className:
				"MuiInout-Input w-full h-6 px-3 bg-transparent outline-none text-sm font-medium text-gray-900 dark:text-gray-100 cursor-default",
			value,
			onChange,
		})
	);

export default TextField;
