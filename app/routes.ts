import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home/pages/HomePage.tsx"),

	route("about/", "routes/about/pages/AboutPage.tsx"),
	route("services/", "routes/services/pages/ServicesPage.tsx"),
	route("support/", "routes/support/pages/SupportPage.tsx"),
] satisfies RouteConfig;
