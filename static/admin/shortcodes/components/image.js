const Image = ({ label, assetSource, handleOpenMediaLibrary }) =>
	h(
		"span",
		{ className: "flex flex-col w-full" },
		h(
			"label",
			{
				className:
					"w-full flex text-xs font-bold dark:font-semibold group-focus-within/active:text-blue-500 group-hover/active:text-blue-500 cursor-text text-slate-500 dark:text-slate-400 px-3 pt-3",
			},
			label
		),
		h(
			"span",
			{ className: "flex flex-col gap-2 px-3 pt-2" },
			h(
				"span",
				{},
				h("img", {
					role: "presentation",
					src: assetSource,
					className: "object-cover max-w-full overflow-hidden",
				})
			),
			h(
				"span",
				{ className: "flex gap-2" },
				h(
					"button",
					{
						type: "button",
						onClick: handleOpenMediaLibrary,
						className: "btn btn-contained-primary",
					},
					"Bild auswählen"
				)
			)
		)
	);

export default Image;
