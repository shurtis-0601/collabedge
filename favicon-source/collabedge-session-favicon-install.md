# CollabEdge Solutions Claude Code Session
## Install pre-generated favicon files

Recommended model: Sonnet. Simple file placement and
metadata wiring, build-check only, no preview cycle
needed.

Read CLAUDE.md at the repo root first.

---

## CONTEXT

Favicon files have already been generated (cropped,
sized, and packaged outside this session) from a
provided CE mark source asset. This session only places
them correctly and wires up the Next.js metadata, no
image generation or extraction needed here.

The following files have been placed by the owner at
the repo root in a folder called favicon-source/ (or
wherever they were placed, check first):
favicon.ico, favicon-16x16.png, favicon-32x32.png,
favicon-48x48.png, apple-touch-icon.png, icon-192.png

---

## TASK

1. Move the files into the correct Next.js App Router
   locations:
   - favicon.ico goes to app/favicon.ico
   - icon-192.png goes to app/icon.png (Next.js App
     Router convention for the general icon)
   - apple-touch-icon.png goes to app/apple-icon.png
2. If this Next.js version requires explicit metadata
   icons entries rather than picking up the
   convention-based files automatically, add the
   appropriate icons entry to the metadata export in
   app/layout.tsx referencing these files.
3. Confirm the favicon-16x16.png and favicon-32x32.png
   files are referenced correctly too, either via the
   same convention-based pickup or an explicit link tag
   in metadata if this Next.js version needs it.
4. Remove the source folder these files were placed in
   once they are correctly relocated, so there is no
   duplicate copy left in the repo.

---

## DONE

Confirm:
1. Final file locations
2. Whether explicit metadata icon entries were needed or
   convention-based pickup worked automatically
3. That the favicon appears correctly in a local build
   check

