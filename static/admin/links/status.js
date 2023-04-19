const StatusPage = {
	id: "status",
	title: "Status",
	data: () =>
		h("iframe", {
			src: "https://grafana.cantorgymnasium.de/d/ni-7T-J4z/status?orgId=2&refresh=5s&kiosk",
			style: {
				width: "100%",
				height: "90vh",
			},
		}),
	options: {
		icon: "dash",
	},
};

export default StatusPage;
