import { join } from "path-browserify";

export const routes = {
	base: "/",
	lists: {
		base: {
			relative: "lists",
			absolute: () => join(routes.base, routes.lists.base.relative),
		},
		byId: {
			relative: ":listId",
			absolute: (listId = ":listId") =>
				join(routes.lists.base.absolute(), listId),
		},
		create: {
			relative: "create",
			absolute: () =>
				join(routes.lists.base.absolute(), routes.lists.create.relative),
		},
		update: {
			relative: "update",
			absolute: () =>
				join(routes.lists.base.absolute(), routes.lists.update.relative),
		},
	},
	tasks: {
		base: {
			relative: "tasks",
			absolute: () => join(routes.base, routes.tasks.base.relative),
		},
		byId: {
			relative: ":taskId",
			absolute: (taskId: ":taskId") =>
				join(routes.tasks.base.absolute(), routes.tasks.byId.relative, taskId),
		},
		create: {
			relative: "create",
			absolute: () =>
				join(routes.tasks.base.absolute(), routes.tasks.create.relative),
		},
		update: {
			relative: "update",
			absolute: () =>
				join(routes.tasks.base.absolute(), routes.tasks.update.relative),
		},
	},
};
