/* eslint-disable @typescript-eslint/no-explicit-any */

import { Background, BackgroundProps } from "@/once-ui/components";
import { effects } from "@/resources";

export function NormalBackground(props: BackgroundProps) {
  return (
    <Background
      className="z-[-1] fixed inset-0"
      mask={{
        cursor: effects.mask.cursor,
        x: effects.mask.x,
        y: effects.mask.y,
        radius: effects.mask.radius,
        ...props.mask,
      }}
      gradient={{
        display: effects.gradient.display,
        x: effects.gradient.x,
        y: effects.gradient.y,
        width: effects.gradient.width,
        height: effects.gradient.height,
        tilt: effects.gradient.tilt,
        colorStart: effects.gradient.colorStart,
        colorEnd: effects.gradient.colorEnd,
        opacity: effects.gradient.opacity as
          | 0
          | 10
          | 20
          | 30
          | 40
          | 50
          | 60
          | 70
          | 80
          | 90
          | 100,
        ...props.gradient,
      }}
      dots={{
        display: effects.dots.display,
        color: effects.dots.color,
        size: effects.dots.size as any,
        opacity: effects.dots.opacity as any,
        ...props.dots,
      }}
      grid={{
        display: effects.grid.display,
        color: effects.grid.color,
        width: effects.grid.width as any,
        height: effects.grid.height as any,
        opacity: effects.grid.opacity as any,
        ...props.grid,
      }}
      lines={{
        display: effects.lines.display,
        opacity: effects.lines.opacity as any,
        ...props.lines,
      }}
    />
  );
}
