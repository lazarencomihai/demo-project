import { FunctionComponent, SVGProps } from "react";

export type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export type IconName =
  | "logo"
  | "search"
  | "dashboard"
  | "courses"
  | "settings"
  | "plus"
  | "show-actions"
  | "publish"
  | "archive"
  | "remove";

export type IconMap = { [K in IconName]: SVGIcon };
