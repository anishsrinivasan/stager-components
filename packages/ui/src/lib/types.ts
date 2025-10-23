import { type ReactNode } from "react";

/**
 * Base props interface for all components
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Common variant types used across components
 */
export type Size = "sm" | "md" | "lg";
export type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

/**
 * Props for components that support variants
 */
export interface VariantProps {
  variant?: Variant;
  size?: Size;
}

/**
 * Props for form components
 */
export interface FormComponentProps extends BaseComponentProps {
  disabled?: boolean;
  required?: boolean;
}

/**
 * Props for interactive components
 */
export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
