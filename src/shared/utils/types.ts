export type UncapitalizeKeys<T extends object> = Uncapitalize<keyof T & string>;
export type OmitGQLServiceTypes<T extends object> = Omit<
	T,
	"Query" | "Mutation" | "String" | "ID" | "Boolean" | "Int" | "Float"
>;
