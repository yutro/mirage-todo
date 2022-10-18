import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../../shared/const";
import { Lists } from "./Lists";
import { ListTasks } from "./ListTasks";

export const ListsRouting = (): JSX.Element => (
	<Routes>
		<Route path={routes.lists.byId.relative} element={<ListTasks />} />
		<Route path="*" element={<Lists />} />
	</Routes>
);
