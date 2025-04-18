import { effects } from "@/app/resources";
import { Background } from "@/once-ui/components";

export default function DefaultBackground() {
  return (
    <Background
      mask={{
        cursor: effects.mask.cursor,
        x: effects.mask.x,
        y: effects.mask.y,
        radius: effects.mask.radius,
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
      }}
      dots={{
        display: effects.dots.display,
        color: effects.dots.color,
        size: effects.dots.size as any,
        opacity: effects.dots.opacity as any,
      }}
      grid={{
        display: effects.grid.display,
        color: effects.grid.color,
        width: effects.grid.width as any,
        height: effects.grid.height as any,
        opacity: effects.grid.opacity as any,
      }}
      lines={{
        display: effects.lines.display,
        opacity: effects.lines.opacity as any,
      }}
    />
  );
}
