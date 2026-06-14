import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-headings": "#111827",
            "--tw-prose-body": "#374151",
            "--tw-prose-links": "#4f46e5",
            "--tw-prose-bold": "#111827",
            "--tw-prose-bullets": "#a5b4fc",
            "--tw-prose-quotes": "#4b5563",
            "--tw-prose-quote-borders": "#c7d2fe",
            "--tw-prose-hr": "#e5e7eb",
            "--tw-prose-code": "#1f2937",
            "--tw-prose-pre-bg": "#0f172a",
            "--tw-prose-pre-code": "#e2e8f0",
            h2: {
              fontWeight: "700",
              letterSpacing: "-0.01em",
              marginTop: "2.25em",
              marginBottom: "0.75em",
              paddingBottom: "0.35em",
              borderBottom: "1px solid #e5e7eb",
            },
            h3: {
              fontWeight: "700",
              marginTop: "1.75em",
              marginBottom: "0.5em",
            },
            a: {
              fontWeight: "500",
              textDecoration: "none",
              borderBottom: "1px solid #c7d2fe",
              transition: "color .15s, border-color .15s",
              "&:hover": {
                color: "#4338ca",
                borderBottomColor: "#4f46e5",
              },
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.15em 0.4em",
              borderRadius: "0.35em",
              fontWeight: "500",
              fontSize: "0.9em",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              borderRadius: "0.75em",
              padding: "1em 1.25em",
              fontSize: "0.9em",
              lineHeight: "1.6",
            },
            blockquote: {
              fontStyle: "normal",
              borderLeftWidth: "4px",
              paddingLeft: "1em",
              color: "#4b5563",
            },
            "blockquote p:first-of-type::before": { content: '""' },
            "blockquote p:last-of-type::after": { content: '""' },
            hr: {
              marginTop: "3em",
              marginBottom: "3em",
            },
            "ul > li::marker": { color: "#6366f1" },
            "ol > li::marker": { color: "#6366f1", fontWeight: "600" },
            img: {
              borderRadius: "0.75em",
            },
            table: {
              fontSize: "0.95em",
            },
            "thead th": {
              borderBottomColor: "#d1d5db",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
