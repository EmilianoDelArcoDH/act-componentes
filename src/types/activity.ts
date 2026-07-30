import type { ReactNode } from "react";

export type ValidationResult = {
  success: boolean;
  messages: string[];
};

export type Validator = (code: string) => ValidationResult;

export type GuideSlug =
  | "componentes"
  | "template-html"
  | "includes-html"
  | "utilidades-css"
  | "insertar-plantillas"
  | "ui-reutilizable";

export type ActivityMeta = {
  id: string;
  guideSlug: GuideSlug;
  activitySlug: `actividad-${1 | 2 | 3}`;
  title: string;
  objective: string;
  route: string;
  order: number;
};

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  order: number;
};

export type ActivityShellProps = {
  activityId: string;
  title: string;
  subtitle?: string;
  objective?: string;
  instructions?: string;
  initialCode: string;
  preview: ReactNode;
  validate: Validator;
  successMessage: string;
  errorMessages: string[];
  progressLabel?: string;
  guideTitle?: string;
  progressPercent?: number;
};
