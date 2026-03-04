# LABAC Website Modernization Plan

**Prepared for:** Los Angeles Bicycle Advisory Committee
**Date:** March 2026
**Status:** Draft for Committee Review

---

## 1. Project Overview

The current LABAC website (labikecommittee.org) runs on an aging WordPress installation that is slow, visually dated, and difficult to maintain. This plan outlines a path to launching a modern, fast, and easy-to-maintain replacement within 1–3 months on a minimal budget.

### Goals

- Fast, mobile-friendly site that looks professional and trustworthy
- Easy for non-technical committee members to post updates (either directly or through a lightweight workflow)
- Low or zero ongoing cost
- Minimal ongoing maintenance burden
- Better serve the LA cycling community with useful, up-to-date information

---

## 2. Platform Comparison

Three realistic options for LABAC's budget and needs:

### Option A: Astro + GitHub Pages (Recommended)

**Cost:** $0/month (free hosting, free domain via github.io — or ~$12/year for a custom domain)

Astro is a modern static site generator built on the JavaScript/Node.js ecosystem. It builds the site into plain HTML files that load extremely fast, with an "islands architecture" that only ships JavaScript when interactive components actually need it. GitHub Pages (or Netlify/Vercel/Cloudflare Pages) hosts the output for free.

| Pros | Cons |
|------|------|
| Completely free hosting | Requires someone technical (you) to set up initially |
| Extremely fast page loads (ships zero JS by default) | Non-technical members can't edit directly via a web UI without a CMS layer |
| No security vulnerabilities (no database, no PHP) | Content is written in Markdown files |
| Version-controlled content via Git | |
| Built-in content collections for structured Markdown content | |
| JavaScript/TypeScript ecosystem — familiar tooling (npm, VS Code, etc.) | |
| Can progressively add React/Vue/Svelte components if ever needed | |

**Non-technical posting workflow:** You could set up a simple system where committee members submit content (via email, a shared Google Doc, or a form), and either you or a Claude-powered agent converts it to a Markdown file and pushes it to the repo. Alternatively, tools like Decap CMS or Tina CMS add a web-based editor on top of Astro for free.

### Option B: Squarespace

**Cost:** $16–25/month

| Pros | Cons |
|------|------|
| Beautiful templates out of the box | Monthly cost adds up over time |
| Drag-and-drop editor anyone can use | Less flexible than code-based solutions |
| Built-in forms, calendars, and analytics | Vendor lock-in |
| SSL, hosting, and backups included | Some templates feel generic |

### Option C: WordPress.com (Managed)

**Cost:** $0–13/month (free tier is ad-supported; paid removes ads)

| Pros | Cons |
|------|------|
| Committee may already be familiar with WordPress | Free tier shows ads on your site |
| Huge ecosystem of plugins and themes | Can be slow without careful optimization |
| Easy content editing for non-technical users | Security/update maintenance if self-hosted |
| Massive community support | Repeats some of the problems you have now |

### Recommendation

**Astro + GitHub Pages** is the strongest fit. The site is small (under 10 pages), the budget is minimal, and you're the technical person maintaining it. Astro's JavaScript/TypeScript ecosystem means familiar tooling and a large community, and its content collections feature makes managing structured Markdown content straightforward. The result will be a site that loads near-instantly, costs nothing to host, and has zero security surface area. The one tradeoff — that non-technical members need a workflow for posting — is very solvable with a headless CMS or a simple agent-assisted process.

---

## 3. Design Direction

### Peer Committee Sites for Inspiration

These cities run effective bicycle advisory committee websites worth studying for layout and content ideas:

- **Portland BAC** (portland.gov/transportation/bicycle-committee) — Clean, government-style layout. Strong on meeting archives, agendas, and committee membership info.
- **San Francisco BAC** (sf.gov/departments--bicycle-advisory-committee) — Minimal, modern, easy to navigate. Good example of how little content you actually need to be effective.
- **Houston BAC** (houstonbikeplan.org/bac/) — Integrated into the broader bike plan site. Good example of connecting committee work to citywide goals.

### Design Principles

1. **Mobile-first.** Most visitors will be on phones looking up meeting info on the go.
2. **Clean and authoritative.** This is a city advisory committee — the design should feel official without being stuffy. Think clean sans-serif fonts, plenty of white space, a simple color palette (consider LA city blue/gold or cycling-themed greens).
3. **Information-dense homepage.** The most important things (next meeting date, how to attend, how to get involved) should be visible immediately without scrolling.
4. **Accessible.** High-contrast text, alt text on images, logical heading structure. This is both good practice and a legal requirement for government-adjacent bodies.

### Suggested Astro Themes to Evaluate

- **Astrowind** — Clean, fast, and well-structured. Built with Tailwind CSS, good for organizations and content sites.
- **Starlight** — Astro's official documentation theme. Excellent for organizing structured content like meeting archives, resources, and FAQs.
- **Astro Starter Kit: Blog** — Minimal official starter. Good foundation to build a custom design without fighting an opinionated theme.
- **Accessible Astro Starter** — Accessibility-first starter template. Strong fit given LABAC's public-facing, government-adjacent role.

---

## 4. Site Map — Pages to Keep, Update, or Add

### Pages to Migrate from Current Site

| Page | Status | Notes |
|------|--------|-------|
| Home | Redesign | Should prominently feature next meeting date and a clear "get involved" call to action |
| About / Mission | Keep & update | Explain what LABAC is, its history since 1975, and its advisory role |
| Meeting Schedule | Keep & update | Calendar of meetings (first Tuesday of every even month at 7 PM) |
| Meeting Agendas & Minutes | Keep & update | Archive of past meeting documents |
| Resources | Keep & update | Bicycle classifications, city bike plan links, etc. |
| Contact | Keep & update | How to reach the committee or attend a meeting |

### New Pages to Consider

| Page | Purpose |
|------|---------|
| **Current Members** | List of committee members by council district, with appointment info. Builds transparency and trust. |
| **How to Get Involved** | Clear, step-by-step guide for residents who want to participate — attending meetings, submitting public comment, requesting a topic be added to the agenda. |
| **News / Updates Blog** | Short posts about committee actions, city bike infrastructure updates, relevant LADOT announcements. This is where non-technical members would contribute. |
| **Projects & Priorities** | What is the committee currently working on? What has it recommended? This connects the committee to tangible outcomes. |
| **Safety Resources** | Bike safety tips, reporting infrastructure issues, links to LAPD bike theft reporting, etc. High-value content for the community. |
| **Maps & Routes** | Links to or embedded versions of LA's bike lane map, Metro bike share, and popular routes. |
| **FAQ** | Common questions: What does the committee do? How are members appointed? How do I request a bike lane? |
| **Events** | Community rides, open streets events, public comment opportunities. Could integrate with a Google Calendar embed. |

---

## 5. Content Migration Plan

Since the current site is small, migration is straightforward:

1. **Audit existing content.** Visit every page on labikecommittee.org and catalog what exists. Note what's outdated or broken.
2. **Export text content.** Copy or use a WordPress export tool (Tools → Export in WordPress admin) to get all posts and pages as XML.
3. **Convert to Markdown.** Use a tool like `wordpress-export-to-markdown` to convert the exported XML into Markdown files compatible with Astro's content collections.
4. **Review and edit.** Go through each converted file, update outdated information, add frontmatter for Astro's content collections schema, and fit it into the new site structure.
5. **Migrate media.** Download all images and documents from the WordPress media library and place them in Astro's `public/` directory.

---

## 6. Timeline

| Week | Milestone |
|------|-----------|
| **1** | Choose Astro theme/starter. Set up GitHub repo and basic site structure. Get the site skeleton running locally with `npm create astro@latest`. |
| **2–3** | Migrate existing content. Write new page content (About, How to Get Involved, FAQ). |
| **4–5** | Design refinements — colors, logo placement, mobile testing. Set up a headless CMS (e.g., Decap CMS, Tina) or define the posting workflow for other members. |
| **6–7** | Internal review — share staging site with committee members for feedback. |
| **8** | DNS cutover — point labikecommittee.org to GitHub Pages. Announce the new site. |

### Pre-Launch Checklist

- All existing content migrated and reviewed for accuracy
- Mobile responsiveness tested on iPhone and Android
- Accessibility audit (contrast ratios, heading structure, alt text)
- Google Analytics or Plausible Analytics set up
- Custom domain configured with SSL
- Old WordPress site backed up and archived
- Committee members briefed on how to request content updates

---

## 7. Ongoing Maintenance

With Astro + GitHub Pages, maintenance is minimal:

- **Occasional dependency updates** — running `npm update` periodically to keep Astro and its dependencies current (straightforward with npm)
- **No security patches** for the deployed site — static HTML has no attack surface
- **Content updates** are Markdown file edits pushed via Git (or submitted through a CMS/agent workflow)
- **Hosting is free** — GitHub Pages has no usage limits for sites this size
- **Domain renewal** — ~$12/year if using a custom domain

---

## 8. Next Steps

1. **Get committee buy-in** on the Astro + GitHub Pages approach (or discuss alternatives if there are concerns).
2. **Audit the current site** — catalog every page and piece of content.
3. **Pick a theme/starter** — set up test sites with 2–3 Astro starters and share screenshots with the committee.
4. **Define the posting workflow** — decide how non-technical members will submit content for publication.
5. **Start building** — follow the timeline above.

---

*This plan is a living document. Update it as decisions are made and the project progresses.*
