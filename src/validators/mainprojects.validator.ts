import { object, string, TypeOf } from "zod";
export const MainProjectSchema = object({
  body: object({
    code: string({
      required_error: "Project code is required",
      invalid_type_error: "Project code must be String",
    }),
    contract: string({
      required_error: "Project contract is required",
      invalid_type_error: "Project contract must be String",
    }),
    name: string({
      required_error: "Project name is required",
      invalid_type_error: "Project name must be String",
    }),
    type: string({
      required_error: "Project type is required",
      invalid_type_error: "Project type must be either Fraame or Frarmeless",
    }),
    line: string({
      required_error: "Project libe is required",
      invalid_type_error: "line must be String",
    }),
  }),
});

export type createProjectInput = TypeOf<typeof MainProjectSchema>;
