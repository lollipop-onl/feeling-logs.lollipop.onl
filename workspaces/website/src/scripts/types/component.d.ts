/** コンポーネントのベースProps */
export type ComponentProps<P extends Record<string, unknown> = {}> = {
  className?: string;
} & P;
