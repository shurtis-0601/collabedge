# Lead Magnet Downloads

Each file in this folder defines one download card on the Downloads page. To add a new download:

1. Create a new JSON file following the existing pattern. Use a short, hyphenated id with no spaces.
2. Place the actual downloadable file in public/downloads/ with a clear filename.
3. Set file to the path /downloads/your-filename.pdf
4. Set status to "available" and immediateDelivery to true if the file should open immediately in the browser on form submission.
5. Set order to control where the card appears.
6. Commit and push. Vercel redeploys automatically.

No component editing is needed to add new downloads.
