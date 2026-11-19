// Instruction-style drawings for the service process steps (00 preparation + 4 steps).
// Oblique projection: u along the slab (0–1), v depth (0 = front cut, 1 = back), h px above the top surface.

export type Shape = { tag: 'polygon' | 'path' | 'ellipse' | 'circle' | 'rect'; [attr: string]: string | number };

export const INK = '#1a1815';
const TOOL = '#33608e';
const TOOL_LIGHT = '#a9c0d8';
const WET = '#8f8f8b';
const SCREEDED = '#b5b5b1';
const SMOOTH = '#dadad6';
const FRONT = '#c9c9c5';
const COLOUR = '#c39a78';
const JOINT = '#7a5a40';

const T = 40;
const r1 = (n: number) => Math.round(n * 10) / 10;
const pt = (u: number, v: number, h = 0) => `${r1(50 + 340 * u + 70 * v)},${r1(200 - 56 * v - h)}`;
const rel = (du: number, dv: number, h = 0) => `${r1(340 * du + 70 * dv)},${r1(-56 * dv - h)}`;
const top = (u0: number, u1: number, v0 = 0, v1 = 1, h = 0) =>
  [pt(u0, v0, h), pt(u1, v0, h), pt(u1, v1, h), pt(u0, v1, h)].join(' ');
const sideU = (u: number, v0: number, v1: number, h0 = -T, h1 = 0) =>
  [pt(u, v0, h1), pt(u, v1, h1), pt(u, v1, h0), pt(u, v0, h0)].join(' ');
const sideV = (v: number, u0: number, u1: number, h0 = -T, h1 = 0) =>
  [pt(u0, v, h1), pt(u1, v, h1), pt(u1, v, h0), pt(u0, v, h0)].join(' ');
const box = (u0: number, u1: number, v0: number, v1: number, h0: number, h1: number, light = TOOL_LIGHT, dark = TOOL) => [
  poly([rel(u1, v0, h1), rel(u1, v1, h1), rel(u1, v1, h0), rel(u1, v0, h0)].join(' '), { fill: dark }),
  poly([rel(u0, v0, h1), rel(u1, v0, h1), rel(u1, v0, h0), rel(u0, v0, h0)].join(' '), { fill: dark }),
  poly([rel(u0, v0, h1), rel(u1, v0, h1), rel(u1, v1, h1), rel(u0, v1, h1)].join(' '), { fill: light }),
];

const poly = (points: string, attrs: Record<string, string | number> = {}): Shape => ({ tag: 'polygon', points, ...attrs });
const path = (d: string, attrs: Record<string, string | number> = {}): Shape => ({ tag: 'path', d, ...attrs });
const at = (anchor: string, shapes: Shape[]) => shapes.map((s) => ({ ...s, transform: `translate(${anchor})` }));
const handle = (from: string) => [
  path(`M${from}l-60-62`, { fill: 'none', 'stroke-width': 6 }),
  path(`M${from}l-60-62`, { fill: 'none', stroke: '#fff', 'stroke-width': 3 }),
];

// Walk-behind handlebar: two rails from points a and b ("x,y"), crossbar with rubber grips.
// Returned in two parts so the left rail can be drawn behind the machine body.
const handlebarParts = (a: string, b: string) => {
  const [ax, ay] = a.split(',').map(Number);
  const [bx, by] = b.split(',').map(Number);
  const rail = (d: string) => [
    path(d, { fill: 'none', 'stroke-width': 6 }),
    path(d, { fill: 'none', stroke: '#fff', 'stroke-width': 3 }),
  ];
  const grips = `M${r1(ax - 72)},${r1(ay - 62)}L${r1(ax - 56)},${r1(ay - 62)}M${r1(bx - 64)},${r1(by - 62)}L${r1(bx - 48)},${r1(by - 62)}`;
  return {
    left: rail(`M${ax},${ay}l-60-62`),
    rest: [
      ...rail(`M${bx},${by}l-60-62M${ax - 60},${ay - 62}L${bx - 60},${by - 62}`),
      path(grips, { fill: 'none', 'stroke-width': 9 }),
      path(grips, { fill: 'none', stroke: '#3d3f3a', 'stroke-width': 6 }),
    ],
  };
};
const handlebar = (a: string, b: string): Shape[] => {
  const { left, rest } = handlebarParts(a, b);
  return [...left, ...rest];
};

let seed = 11;
const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// ---------- Slab ----------

const MESH = -26;
const meshU = Array.from({ length: 14 }, (_, i) => (i + 0.5) / 14);
const base: Shape[] = [
  poly(top(-0.03, 1.05, 0, 1.12, -T), { fill: '#fff' }),
  poly(top(-0.03, 1.05, 0, 1.12, -T), { fill: 'url(#pd-gravel)', stroke: 'none' }),
  poly(sideV(0, -0.03, 1.05, -T - 22, -T), { fill: '#f1f0ec' }),
  poly(sideV(0, -0.03, 1.05, -T - 22, -T), { fill: 'url(#pd-gravel)', stroke: 'none' }),
  poly(sideU(1.05, 0, 1.12, -T - 22, -T), { fill: '#dcdbd6' }),
  poly(sideV(1, 0, 1), { fill: '#f1f0ec' }),
  poly(sideU(0, 0, 1), { fill: '#fff' }),
  poly(top(-0.018, 1.018, 1, 1.05), { fill: '#fff' }),
  poly(top(-0.018, 0, 0, 1.05), { fill: '#fff' }),
  poly(sideV(0, -0.018, 0), { fill: '#fff' }),
];
const mesh: Shape[] = [
  path(
    [0.2, 0.5, 0.8].flatMap((u) => [0.3, 0.7].map((v) => `M${pt(u, v, -T)}L${pt(u, v, MESH)}`)).join(''),
    { 'stroke-width': 2.6 },
  ),
  path(
    meshU.map((u) => `M${pt(u, 0.06, MESH)}L${pt(u, 0.94, MESH)}`).join('') +
      [0.1, 0.3, 0.5, 0.7, 0.9].map((v) => `M${pt(0.02, v, MESH)}L${pt(0.98, v, MESH)}`).join(''),
    { fill: 'none', 'stroke-width': 2.4 },
  ),
];
const rightBoard: Shape[] = [
  poly(top(1, 1.018, 0, 1.05), { fill: '#fff' }),
  poly(sideU(1.018, 0, 1.05), { fill: '#dcdbd6' }),
  poly(sideV(0, 1, 1.018), { fill: '#fff' }),
];

const lumps = Array.from({ length: 24 }, (_, i) => ({ u: (i + 0.3 + rand() * 0.4) / 24, v: 0.15 + rand() * 0.7 }));

// Fresh concrete slumps at the pour front: wavy top edge, rounded shoulder, spread foot.
const slumpTop = (f: number, v: number) => f + 0.012 * Math.sin(v * 17 + 1);
const slumpFoot = (f: number, v: number) => f + 0.075 + 0.015 * Math.sin(v * 11 + 2);
const slumpV = Array.from({ length: 21 }, (_, k) => k / 20);

function slab(f: number, s: number, surface: Shape[], notch: boolean): Shape[] {
  if (f === 0) return [];
  const partial = f < 1;
  const edge = partial ? slumpTop(f, 0) : 1;
  const topFace = partial ? [pt(0, 0), ...slumpV.map((v) => pt(slumpTop(f, v), v)), pt(0, 1)].join(' ') : top(0, 1);
  const shapes: Shape[] = [
    poly(topFace, { fill: WET, stroke: 'none' }),
    poly(top(0, s), { fill: SCREEDED, stroke: 'none' }),
    poly(top(0, s), { fill: 'url(#pd-pores)', stroke: 'none' }),
    ...surface,
    ...lumps
      .filter(({ u }) => u > s + 0.015 && u < f - 0.01)
      .flatMap(({ u, v }) =>
        at(pt(u, v, 1), [
          { tag: 'ellipse', cy: 1, rx: 9, ry: 3.4, fill: '#6f6f6b', stroke: 'none' },
          { tag: 'ellipse', cy: -0.8, rx: 8, ry: 3, fill: '#a3a39f', stroke: 'none' },
        ]),
      ),
    poly(topFace, { fill: 'none' }),
  ];
  if (partial) {
    const foot0 = slumpFoot(f, 0);
    const front = `M${pt(0, 0)}L${pt(edge, 0)}Q${pt(edge + 0.7 * (foot0 - edge), 0, -T * 0.3)} ${pt(foot0, 0, -T)}L${pt(0, 0, -T)}Z`;
    shapes.push(
      poly([...slumpV.map((v) => pt(slumpTop(f, v), v)), ...[...slumpV].reverse().map((v) => pt(slumpFoot(f, v), v, -T))].join(' '), { fill: '#7d7d79' }),
      path(front, { fill: FRONT }),
      path(front, { fill: 'url(#pd-aggregate)', stroke: 'none' }),
    );
  } else {
    shapes.push(poly(sideV(0, 0, 1), { fill: FRONT }), poly(sideV(0, 0, 1), { fill: 'url(#pd-aggregate)', stroke: 'none' }));
  }
  for (const u of meshU.filter((u) => u < Math.min(1, f + 0.04))) {
    const [cx, cy] = pt(u, 0, MESH).split(',');
    shapes.push({ tag: 'circle', cx, cy, r: 2.2, fill: INK, stroke: 'none' });
  }
  if (notch) shapes.push(poly(sideV(0, 0.495, 0.505, -T / 4), { fill: INK, stroke: 'none' }));
  if (f > s) {
    let d = `M${pt(s, 0)}`;
    for (let u = s; u < edge; u += 0.01) d += `L${pt(u, 0, 1.5 + 1.8 * Math.abs(Math.sin(u * 55)))}`;
    shapes.push(path(`${d}L${pt(edge, 0)}Z`, { fill: WET }));
  }
  return shapes;
}

type Scene = { f?: number; s?: number; surface?: Shape[]; notch?: boolean; tool?: Shape[] };
const scene = ({ f = 1, s = 1, surface = [], notch = false, tool = [] }: Scene): Shape[] => [
  ...base,
  ...(f < 1 ? mesh : []),
  ...slab(f, s, surface, notch),
  ...rightBoard,
  ...tool,
];

// ---------- Surfaces (drawn on the top face, u from 0 to `to`) ----------

const fill = (to: number, colour: string, pattern?: string): Shape[] => [
  poly(top(0, to), { fill: colour, stroke: 'none' }),
  ...(pattern ? [poly(top(0, to), { fill: `url(#${pattern})`, stroke: 'none' })] : []),
];
const smooth = (to: number) => fill(to, SMOOTH);
const stippled = (to: number) => fill(to, '#c2c2be', 'pd-stipple');
const ground = (to: number) => fill(to, '#d6d6d2', 'pd-exposed');
const coloured = (to: number) => fill(to, COLOUR, 'pd-pores');
const seal = (to: number) => [poly(top(0, to), { fill: TOOL, 'fill-opacity': 0.22, stroke: 'none' })];
const cut = () => [path(`M${pt(0.5, 0)}L${pt(0.5, 1)}`, { 'stroke-width': 2.4 })];

// Broom lines: 6 strokes of 12 lines; `start(band)` is where each stroke begins in v (1 = not brushed).
const broomed = (start: (band: number) => number) => [
  path(
    Array.from({ length: 72 }, (_, i) => {
      const v0 = start(Math.floor(i / 12));
      const u = (i + 0.5) / 72;
      return v0 < 1 ? `M${pt(u, Math.max(v0, 0.005))}L${pt(u, 0.995)}` : '';
    }).join(''),
    { fill: 'none', 'stroke-width': 0.9, 'stroke-opacity': 0.55 },
  ),
];

// Stamped stone pattern: 6 rows, staggered joints.
const stamped = (to: number) => {
  let d = '';
  for (let r = 0; r < 6; r++) {
    if (r > 0) d += `M${pt(0, r / 6)}L${pt(to, r / 6)}`;
    for (let u = (r % 2) * 0.045 + 0.09; u < to; u += 0.09) d += `M${pt(u, r / 6)}L${pt(u, (r + 1) / 6)}`;
  }
  return [...coloured(to), path(d, { fill: 'none', stroke: JOINT, 'stroke-width': 1.4 })];
};

// ---------- Tools ----------

const chute = (u: number) =>
  at(pt(u, 0.5), [
    path('M0-50l200-88', { 'stroke-width': 16, 'stroke-linecap': 'butt' }),
    path('M0-50l200-88', { stroke: TOOL_LIGHT, 'stroke-width': 11, 'stroke-linecap': 'butt' }),
    path('M2-52l198-87', { stroke: WET, 'stroke-width': 5, 'stroke-linecap': 'butt' }),
    { tag: 'rect', x: -5, y: -50, width: 10, height: 51, rx: 4, fill: WET },
  ]);

const screed = (u: number) =>
  at(pt(u, 0), [
    path(`M${rel(0.014, 0, 2.5)}L${rel(0.014, 1, 2.5)}`, { stroke: '#6f6f6b', 'stroke-width': 4.5 }),
    path(`M${rel(0, -0.06, 4)}L${rel(0, 1.06, 4)}`, { 'stroke-width': 9 }),
    path(`M${rel(0, -0.06, 4)}L${rel(0, 1.06, 4)}`, { stroke: TOOL, 'stroke-width': 5.5 }),
  ]);

const float = (u: number, v: number) =>
  at(pt(u, v), [
    poly([rel(-0.09, -0.11, 2.5), rel(0.09, -0.11, 2.5), rel(0.09, -0.11), rel(-0.09, -0.11)].join(' '), { fill: TOOL }),
    poly([rel(-0.09, -0.11, 2.5), rel(0.09, -0.11, 2.5), rel(0.09, 0.11, 2.5), rel(-0.09, 0.11, 2.5)].join(' '), { fill: TOOL_LIGHT }),
    path(`M${rel(0, 0, 2.5)}L${rel(0, 0, 9)}`, { 'stroke-width': 6 }),
    ...handle(rel(0, 0, 9)),
  ]);

const broom = (u: number, v: number) =>
  at(pt(u, v), [
    path(Array.from({ length: 15 }, (_, k) => -0.07 + k * 0.01).map((x) => `M${rel(x, 0, 7)}L${rel(x, 0.035, 0)}`).join(''), { 'stroke-width': 1.2 }),
    ...box(-0.075, 0.075, -0.03, 0.03, 7, 14),
    ...handle(rel(0, 0, 14)),
  ]);

const roller = (u: number) =>
  at(pt(u, 0), [
    path(`M${rel(0, 0.5, 6)}l-8-16l-60-62`, { fill: 'none', 'stroke-width': 6 }),
    path(`M${rel(0, 0.5, 6)}l-8-16l-60-62`, { fill: 'none', stroke: '#fff', 'stroke-width': 3 }),
    path(`M${rel(0, 0.06, 6)}L${rel(0, 0.94, 6)}`, { 'stroke-width': 14 }),
    path(`M${rel(0, 0.06, 6)}L${rel(0, 0.94, 6)}`, { stroke: TOOL_LIGHT, 'stroke-width': 10 }),
  ]);

// Curing: surface tinted wet.
const wet = poly(top(0, 1), { fill: TOOL, 'fill-opacity': 0.15, stroke: 'none' });

// Bush-hammering machine: chassis on wheels, motor on top, toothed drum underneath, two-rail handlebar.
const bushHammerMachine = (u: number, v: number) => {
  let teeth = `M${rel(-0.07, -0.13, 6)}`;
  for (let k = 0; k < 14; k++) teeth += `L${rel(-0.07 + (k + 0.5) * 0.01, -0.13)}L${rel(-0.07 + (k + 1) * 0.01, -0.13, 6)}`;
  const wheel = (cv: number) =>
    poly(Array.from({ length: 20 }, (_, k) => rel(0.072, cv + 0.078 * Math.cos((k / 20) * 2 * Math.PI), 7 + 7 * Math.sin((k / 20) * 2 * Math.PI))).join(' '), { fill: '#3d3f3a' });
  return at(pt(u, v), [
    path(`${teeth}Z`, { fill: '#3d3f3a' }),
    ...box(-0.07, 0.07, -0.13, 0.13, 6, 24),
    wheel(-0.07),
    wheel(0.07),
    ...box(-0.035, 0.035, -0.07, 0.07, 24, 40, '#6f6f6b', '#3d3f3a'),
    ...handlebar(rel(-0.05, -0.13, 24), rel(0.05, -0.13, 24)),
  ]);
};

// Scoop broadcasting colour hardener onto the fresh surface.
const scatter = (u: number) =>
  at(pt(u + 0.05, 0.5), [
    ...Array.from({ length: 16 }, (_, k): Shape => {
      const t = (k + 0.5) / 16;
      return { tag: 'circle', cx: r1((rand() - 0.5) * 34 * t - 8 * t), cy: r1(-40 + 40 * t), r: 1.8, fill: COLOUR, stroke: 'none' };
    }),
    path('M-17-62h32l-7 17h-18Z', { fill: TOOL_LIGHT }),
    path('M-17-56l-44-26', { fill: 'none', 'stroke-width': 6 }),
    path('M-17-56l-44-26', { fill: 'none', stroke: '#fff', 'stroke-width': 3 }),
  ]);

// Two stamp mats laid ahead of the stamped area.
const stampMats = (u: number) =>
  at(
    pt(u + 0.005, 0),
    [
      [0.04, 0.48],
      [0.52, 0.96],
    ].flatMap(([v0, v1]) => [
      ...box(0, 0.13, v0, v1, 0, 5),
      path(`M${rel(0, (v0 + v1) / 2, 5)}L${rel(0.13, (v0 + v1) / 2, 5)}M${rel(0.065, v0, 5)}L${rel(0.065, (v0 + v1) / 2, 5)}M${rel(0.03, (v0 + v1) / 2, 5)}L${rel(0.03, v1, 5)}M${rel(0.1, (v0 + v1) / 2, 5)}L${rel(0.1, v1, 5)}`, {
        fill: 'none',
        stroke: TOOL,
        'stroke-width': 1.4,
      }),
    ]),
  );

// Upright cylinder drawn face-on (not projected) so it reads as round: ellipse rx × ry, height h, sitting on y = y0.
const cylinder = (rx: number, ry: number, y0: number, h: number, side: string, lid: string): Shape[] => [
  { tag: 'ellipse', cy: y0, rx, ry, fill: side },
  { tag: 'rect', x: -rx, y: y0 - h, width: 2 * rx, height: h, fill: side, stroke: 'none' },
  path(`M${-rx},${y0}V${y0 - h}M${rx},${y0}V${y0 - h}`, { fill: 'none' }),
  { tag: 'ellipse', cy: y0 - h, rx, ry, fill: lid },
];

// Floor grinder: round grinding head with a round motor on top; left handle rail passes behind the motor.
const grinder = (u: number, v: number) => {
  const bar = handlebarParts('-9,-20', '9,-20');
  return at(pt(u, v), [
    ...cylinder(32, 15, 0, 12, TOOL, TOOL_LIGHT),
    ...bar.left,
    ...cylinder(14, 6.5, -12, 22, '#3d3f3a', '#6f6f6b'),
    ...bar.rest,
  ]);
};

// ---------- Steps per service ----------

const POUR = 0.78;
const SCREED = 0.42;
const SEAL = 0.55;
const preparation = scene({ f: 0 });
const pouring = scene({ f: POUR, s: SCREED, tool: [...chute(POUR), ...screed(SCREED)] });
const curing = scene({ surface: [...smooth(1), wet] });
const grinding = scene({ surface: [...smooth(1), ...ground(0.5)], tool: grinder(0.53, 0.5) });

export const drawings: Record<string, Shape[][]> = {
  'metlicen-beton': [
    preparation,
    pouring,
    scene({ surface: smooth(0.69), tool: float(0.6, 0.45) }),
    scene({ surface: [...smooth(1), ...broomed((b) => (b < 3 ? 0 : b === 3 ? 0.4 : 1))], tool: broom(3.5 / 6, 0.4) }),
    scene({ surface: [...smooth(1), ...broomed(() => 0), ...cut(), ...seal(SEAL)], notch: true, tool: roller(SEAL) }),
  ],
  'stokan-beton': [
    preparation,
    pouring,
    curing,
    grinding,
    scene({ surface: [...ground(1), ...stippled(0.5)], tool: bushHammerMachine(0.57, 0.5) }),
    scene({ surface: [...stippled(1), ...cut(), ...seal(SEAL)], notch: true, tool: roller(SEAL) }),
  ],
  'tiskan-beton': [
    preparation,
    pouring,
    scene({ surface: [...smooth(1), ...coloured(0.5)], tool: scatter(0.5) }),
    scene({ surface: [...coloured(1), ...stamped(0.45)], tool: stampMats(0.45) }),
    scene({ surface: [...stamped(1), ...cut(), ...seal(SEAL)], notch: true, tool: roller(SEAL) }),
  ],
  'brusen-beton': [
    preparation,
    pouring,
    curing,
    grinding,
    scene({ surface: [...ground(1), ...seal(SEAL)], tool: roller(SEAL) }),
  ],
};
