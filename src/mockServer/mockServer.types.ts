import type { Server as ServerType } from "miragejs";
import { FactoryDefinition, ModelDefinition, Registry } from "miragejs/-types";
import { ServerConfig } from "miragejs/server";

import { ResolversParentTypes } from "../generated";
import { OmitGQLServiceTypes, UncapitalizeKeys } from "../shared/utils";

type MockServerModels = {
	[k in UncapitalizeKeys<
		OmitGQLServiceTypes<ResolversParentTypes>
	>]: ModelDefinition<ResolversParentTypes[Capitalize<k>]>;
};

export type MockServerFactories = Partial<{
	[k in UncapitalizeKeys<
		OmitGQLServiceTypes<ResolversParentTypes>
	>]: FactoryDefinition<ResolversParentTypes[Capitalize<k>]>;
}>;

type ServerRegistry = Registry<MockServerModels, MockServerFactories>;

export type MockServerType = ServerType<ServerRegistry>;

export type GraphqlResolverCtx = {
	mirageSchema: MockServerType["schema"];
};

export type MockServerConfig = ServerConfig<
	MockServerModels,
	MockServerFactories
>;
