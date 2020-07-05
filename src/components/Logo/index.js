import React from "react";

export function Logo (props) {
  return (
    <svg
      width={300.72}
      height={70.839}
      viewBox="0.64 17.581 498.72 114.839"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-sticker-gradient"
          x1={0.5}
          y1={0.2}
          x2={0.5}
          y2={0.8}
        >
          <stop offset={0} stopColor="#ffc500" />
          <stop offset={1} stopColor="#ffc500" />
        </linearGradient>
        <filter
          id="prefix__editing-sticker"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feMorphology radius={1} in="SourceAlpha" result="alpha-erode" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            kernelMatrix="0 1 0 1 1 1 0 1 0"
            in="alpha-erode"
            result="alpha-round"
          />
          <feMorphology
            operator="dilate"
            radius={3.5}
            in="alpha-round"
            result="dilate-shadow"
          />
          <feGaussianBlur
            in="dilate-shadow"
            stdDeviation={1.5}
            result="shadow"
          />
          <feFlood floodColor="#fff" result="flood-sticker" />
          <feComposite
            operator="in"
            in="flood-sticker"
            in2="alpha-round"
            result="comp-sticker"
          />
          <feMorphology
            operator="dilate"
            radius={3}
            in="comp-sticker"
            result="morph-sticker"
          />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            kernelMatrix="0 1 0 1 1 1 0 1 0"
            in="morph-sticker"
            result="sticker"
          />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="sticker" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-sticker)">
        <path
          d="M29.44-44.03h0q4.1 0 7.3 1.89h0q3.2 1.88 4.99 5.18h0q1.79 3.3 1.79 7.39h0v.83h0q0 4.1-1.79 7.43h0q-1.79 3.33-4.99 5.21h0q-3.2 1.89-7.3 1.89h0-10.56V0H4.74v-44.03h24.7zM18.88-33.6v9.09h5.82q2.24 0 3.36-1.15h0q1.12-1.16 1.12-3.14h0v-.51h0q0-2.05-1.12-3.17h0q-1.12-1.12-3.36-1.12h0-5.82zm48.64-.96h0q8.9 0 13.98 4.51h0q5.09 4.51 5.09 13.15h0q0 8.64-5.09 13.16h0Q76.42.77 67.52.77h0q-8.9 0-13.95-4.48h0q-5.06-4.48-5.06-13.19h0q0-8.7 5.06-13.18h0q5.05-4.48 13.95-4.48h0zm0 8.64h0q-6.27 0-6.27 7.23h0v3.65h0q0 7.17 6.27 7.17h0q6.34 0 6.34-7.17h0v-3.65h0q0-7.23-6.34-7.23h0zm37.95 5.06l10.82-12.93h14.85l-12.48 13.63L131.46 0h-14.47l-7.1-11.58-4.42 4.28V0H92.74v-46.46h12.73v25.6zm47.43-13.7h0q9.28 0 14.17 4.35h0q4.9 4.35 4.9 13.31h0v2.18h-25.35 0q0 3.65 1.64 5.5h0q1.63 1.86 5.15 1.86h0q3.2 0 4.7-1.34h0q1.51-1.35 1.51-3.59h12.35q0 6.15-4.67 9.6h0Q162.62.77 153.66.77h0q-9.4 0-14.59-4.39h0Q133.89-8 133.89-16.9h0q0-8.7 5.05-13.18h0q5.06-4.48 13.96-4.48h0zm.51 8.13h0q-6.02 0-6.72 5.69h12.41q0-2.62-1.5-4.16h0q-1.5-1.53-4.19-1.53h0zm62.72-13.7h0q0 3.91-1.95 6.02h0q-1.96 2.11-5.86 3.13h0q1.86 1.41 2.91 3.3h0q1.06 1.89 1.06 4h0q0 5.38-4.07 8.13h0q-4.06 2.75-10.14 2.75h0-4.86 0q-4.04 0-4.04 1.86h0q0 .89.9 1.44h0q.9.54 3.14.54h11.52q5.63 0 8.51 2.94h0q2.88 2.95 2.88 7.88h0q0 3.64-1.92 6.27h0q-1.92 2.62-5.19 3.97h0q-3.26 1.34-7.1 1.34h0-18.82 0q-2.3 0-4.25-1.09h0q-1.95-1.09-3.11-2.97h0q-1.15-1.89-1.15-4.2h0q0-2.49 1.54-4.51h0q1.53-2.01 3.84-3.04h0q-1.54-1.09-2.43-2.62h0q-.9-1.54-.9-3.33h0q0-2.5 1.86-4.51h0q1.85-2.02 4.6-2.72h0q-2.49-1.6-3.96-3.68h0q-1.48-2.08-1.48-4.39h0q0-5.88 4.77-8.41h0q4.77-2.53 12.64-2.53h0q3.46 0 5.57.38h0q3.14-1.98 4.06-3.61h0q.93-1.63.93-2.34h10.5zM194.94-27.9h0q-2.11 0-3.45 1.08h0q-1.35 1.09-1.35 3.14h0q0 2.11 1.25 3.17h0q1.25 1.05 3.55 1.05h0q2.31 0 3.62-1.05h0q1.31-1.06 1.31-3.17h0q0-2.11-1.31-3.17h0q-1.31-1.05-3.62-1.05h0zM190.02 0h0q-1.48 0-2.4.8h0q-.93.8-.93 2.27h0q0 1.47.96 2.37h0q.96.9 2.37.9H200q1.41 0 2.4-.87h0q.99-.86.99-2.33h0q0-1.48-.96-2.31h0Q201.47 0 200 0h0-9.98zm51.32-34.62h0q1.48 0 2.63.35h0q1.15.35 1.15.41h0v10.69h-4.1 0q-3.96 0-5.72 2.05h0q-1.76 2.05-1.76 6.08h0V0H220.8v-33.79h10.43l.83 5.12h0q1.16-2.95 3.65-4.45h0q2.5-1.5 5.63-1.5h0zm24.58.06h0q7.74 0 12.61 2.59h0q4.86 2.59 4.86 8.42h0v13.18h0q0 1.09.51 1.79h0q.52.71 1.54.71h2.3v7.36h0q-.19.13-.99.41h0q-.8.29-2.27.58h0q-1.47.29-3.39.29h0q-3.71 0-6.11-1.12h0q-2.4-1.12-3.3-3.11h0q-2.43 1.92-5.44 3.08h0Q263.23.77 259.2.77h0q-11.9 0-11.9-9.47h0q0-4.93 2.65-7.52h0q2.66-2.6 7.65-3.56h0q4.99-.96 13.06-.96h0v-1.66h0q0-1.98-1.38-3.01h0q-1.38-1.02-3.55-1.02h0q-1.99 0-3.43.7h0q-1.44.71-1.44 2.24h0v.26h-12.54 0q-.06-.32-.06-.9h0q0-4.8 4.57-7.61h0q4.58-2.82 13.09-2.82h0zm4.74 19.84h0q-5.44 0-8.04 1.18h0q-2.59 1.19-2.59 3.17h0q0 3.2 4.35 3.2h0q2.5 0 4.39-1.34h0q1.89-1.35 1.89-3.33h0v-2.88zm66.11-19.84h0q5.76 0 8.64 3.3h0q2.88 3.29 2.88 9.37h0V0h-12.74v-20.35h0q0-2.18-1.05-3.49h0q-1.06-1.31-2.98-1.31h0q-2.24 0-3.65 1.53h0q-1.41 1.54-1.41 3.78h0V0h-12.73v-20.35h0q0-2.18-1.06-3.49h0q-1.05-1.31-2.97-1.31h0q-2.24 0-3.65 1.53h0q-1.41 1.54-1.41 3.78h0V0H291.9v-33.79h10.44l.83 5.05h0q1.92-2.68 5.09-4.25h0q3.16-1.57 6.68-1.57h0q7.62 0 10.24 5.82h0q1.99-2.68 5.09-4.25h0q3.11-1.57 6.5-1.57h0z"
          fill="url(#prefix__editing-sticker-gradient)"
          stroke="#004bb8"
          strokeWidth={2.5}
          transform="translate(73.485 104.833)"
        />
      </g>
      <style />
    </svg>
  )
}