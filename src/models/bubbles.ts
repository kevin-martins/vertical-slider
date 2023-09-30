export type BubblesProps = {
  color?: ColorProps
  text?: TextProps,
  size?: SizeProps
}

type ColorProps = {
  default?: string,
  current?: string,
  hover?: string
}

type TextProps = {
  value: string,
  color: string
}

type SizeProps = {
  default?: string,
  current?: string,
  hover?: string
}