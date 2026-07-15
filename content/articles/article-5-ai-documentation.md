---
title: "AI and NDIS Documentation: What Is Safe, What Is Risky, and What Actually Works"
slug: ndis-ai-documentation-safe-risky-what-works-2026
date: 2026-07-15
category: NDIS Productivity Series
series_position: 5
author: Sinclair Hurtis
description: "NDIS practitioners are using AI tools without realising the privacy risk. Learn what is safe, what is risky, and the two step workflow that keeps participant data off external servers. Article 5 of the NDIS Productivity Series."
---

This article publishes as the NDIS Commission releases its own AI
transparency statement, confirming it is already using large language
models to process complaints, incidents and audit reports. If the
regulator is using AI on your documentation, the question is no longer
whether AI belongs in NDIS services. The question is whether you are
using it safely.

[IMAGE 1]

*The difference between risky AI use and safe AI use in NDIS
documentation is not which tool you use. It is where your participant
data goes when you use it.*

It is a Tuesday afternoon. You have a complex Change of Circumstances
report due by Friday.

You open ChatGPT, paste in your case notes, and ask it to help you
structure the report.

It produces something useful in about forty seconds.

What you may not have considered is where those case notes went. The
participant's name. Their NDIS number. Their diagnosis. Their family
situation. Their address. All of it, sent to servers in the United
States, processed by a platform with no specific agreement covering
health information under Australian law.

You have just created a notifiable data breach.

Not intentionally. Not carelessly. But under the Privacy Act 1988 and
the NDIS Practice Standards, intent is not the test. Disclosure is.

This is the article many practitioners wish existed eighteen months
ago, before this problem became one worth solving properly.

## Is Using AI for NDIS Documentation Actually Legal?

The short answer is that it depends entirely on what data you put into
it and where that data goes.

When you paste participant information into a public AI tool like
ChatGPT, that data is sent to servers overseas. Depending on your
account settings, it may be used to improve the platform's models.
There is no isolation between your organisation and every other person
using the same platform.

NDIS providers in Australia are subject to strict privacy obligations
under both the Privacy Act 1988 and the NDIS Practice Standards,
requiring robust handling of participants' sensitive personal
information.

The NDIS Commission does not currently have AI specific rules for
providers. But the existing framework is clear enough. Australia does
not yet have AI specific laws. Instead, existing frameworks apply.
Providers must protect personal information under the Privacy Act,
avoid misleading or unfair practices under consumer law, and ensure AI
systems do not discriminate.

What this means practically is that using AI for NDIS documentation is
not prohibited. Using AI with identifiable participant data on public
platforms is.

**The legal test that matters:** Under the Privacy Act 1988, health
information is classified as sensitive information requiring a higher
standard of protection. The moment a participant's name, NDIS number,
diagnosis, address or family details reaches an external platform
without explicit consent and a formal data processing agreement, you
have a compliance problem regardless of the outcome.

A notifiable data breach must be reported to the Office of the
Australian Information Commissioner and affected individuals promptly.
The consequences can include compliance notices, banning orders and
cancellation of NDIS registration.

[IMAGE 2]

*Shadow AI, staff using tools like ChatGPT independently and without
oversight, creates liability the provider carries even when no one
intended harm.*

## What Is Shadow AI and Why Is It the Real Risk for NDIS Providers?

Most NDIS providers do not have a formal AI policy. That does not mean
their staff are not using AI. It means they are using it without
oversight.

There is the risk of shadow AI, where staff use tools like ChatGPT on
their own without management oversight. This creates unmanaged risks
that can turn into real liability if things go wrong. If staff share
participant data into public systems, this can breach privacy
obligations and the NDIS Code of Conduct.

The provider carries that liability. Not the staff member who opened
ChatGPT on their lunch break.

**Three shadow AI scenarios that happen in NDIS practices right now:**

**The well meaning support worker** pastes progress notes into ChatGPT
to clean up the grammar before submitting. Participant names and
support details go with it.

**The time poor coordinator** uploads a participant's assessment PDF to
an AI tool to extract key dates and goals. The PDF contains everything.

**The practice manager** uses an AI transcription tool during team
meetings where participant cases are discussed by name. The
transcription service stores the audio.

None of these people intended to breach privacy. All three created a
reportable incident.

## What Are the Different Types of AI Tools and Which Are Safe?

Not all AI tools carry the same risk. The determining factor is not the
brand name. It is the data architecture underneath.

**Public AI tools are high risk with participant data.** Tools like
ChatGPT on standard accounts, Google Gemini and Microsoft Copilot on
personal accounts process your inputs on shared infrastructure. Your
data may be used to improve the model. There is no formal data
processing agreement in place for health information. These tools are
not inherently unsafe. They are unsafe when participant data goes into
them.

**Closed AI tools carry lower risk with de-identified data.** Google
NotebookLM is an example of closed AI. It only works against trusted
sources and websites that you upload. It cannot reach outside the
documents you give it. Every answer it generates cites back to your
uploaded sources. This makes it far more defensible for NDIS
documentation work, provided the documents you upload do not contain
identifiable participant information.

**Enterprise or sector specific AI tools carry the lowest risk of the
paid options.** Platforms built specifically for NDIS with formal data
agreements, Australian data hosting and audit trails sit at the lower
end of the risk spectrum. They typically come at a cost and require
implementation work. For large providers, this is the right direction.
For sole traders and small practices, the economics rarely stack up.

**Local processing carries no network risk at all.** Tools that run
entirely on your own computer, with no internet connection required for
processing, carry the lowest data risk of all. The data never leaves
your device. There is no API call, no cloud upload, no third party
server involved.

[IMAGE 3]

*A two step workflow, de-identify first, then process through a closed
AI tool, keeps participant data off external servers at every stage.*

## What Does a Safe AI Workflow for NDIS Documentation Actually Look Like?

This is a workflow that works well on complex reports including Change
of Circumstances, behaviour support plans and functional assessments.

It has two steps. The sequence matters.

**Step 1: De-identify before anything goes near AI.** Before a clinical
document touches any AI tool, remove every piece of personally
identifiable information. This includes participant names, NDIS
numbers, dates of birth, addresses, family member names, provider
names, school and clinic names, and any other detail that could
identify the individual. Done manually, this takes fifteen to twenty
minutes per document and introduces human error. Done with a purpose
built de-identification tool, it takes under sixty seconds and is
consistent every time. The de-identified document is now safe to
process through any AI tool, because there is no participant data in
it.

**Step 2: Use closed AI against the de-identified document.** Upload
the de-identified document to NotebookLM alongside any relevant NDIS
legislation, practice standards or policy documents you want the AI to
reference. Ask it to draft sections of your report. Every answer it
gives you cites back to the sources you uploaded. It cannot hallucinate
beyond what you gave it, because it cannot access anything else.
Review, apply your clinical reasoning, re-personalise the output with
the participant's details, and verify before submitting.

The result is a fully defensible, citation backed draft. Two hours
instead of eight on a complex report. Participant data never left your
computer.

## How Does the NDIS Commission View AI in 2026?

The NDIS Commission published its own AI transparency statement in
February 2026. The Commission is already using large language models to
process text documents including complaints, reportable incidents and
audit reports. It states it is committed to using AI in a safe,
responsible and transparent way, with human oversight maintained at all
times. Information is processed in a secure internal environment.

The significance of this for providers is twofold.

First, the regulator has signalled that AI in NDIS administration is
legitimate and expected, provided it is governed properly.

Second, the bar for what properly governed looks like is rising. There
is a clear move towards more oversight, more frameworks, and sharper
accountability. Providers that prepare now will be better placed to
comply when rules tighten.

In December 2025, the National AI Plan confirmed that Australia will
rely on existing laws and sector regulators, supported by voluntary
guidance and a new AI Safety Institute, rather than introducing a
standalone AI Act or immediate mandatory guardrails. That will not
remain the position indefinitely.

From 10 December 2026, new obligations under the Privacy and Other
Legislation Amendment Act 2024 will require organisations to disclose
in their privacy policies the types of personal information used in
substantially automated decisions.

If you are using AI in your documentation workflow, you will need to
address this in your privacy policy before the end of 2026.

[IMAGE 4]

*A written AI policy does not need to be long. It needs to cover
approved tools, data handling, de-identification, human oversight and
transparency with participants.*

## What Should an NDIS Provider's AI Policy Actually Cover?

You do not need a 40 page document. You need a clear, practical policy
that your staff can actually follow.

Providers should avoid inputting identifiable participant data into AI
tools unless essential. All use of AI systems must align with the
Privacy Act 1988 and all relevant industry standards, rules, or codes.
Providers must inform participants when an AI system is used and
provide alternatives where possible. Providers have a duty to only
utilise secure platforms and restrict access to trained staff.

**The five things a minimum viable AI policy needs to cover:**

**Approved tools:** A list of AI tools staff are permitted to use and
the conditions under which they can be used.

**Data handling rules:** An explicit prohibition on inputting
identifiable participant data into any tool not covered by a formal
data processing agreement.

**De-identification requirement:** A requirement that participant data
be de-identified before AI processing, with a documented method for
doing so.

**Human oversight:** A requirement that AI generated content is
reviewed, verified and approved by a qualified practitioner before use.

**Transparency obligation:** A commitment to inform participants when
AI has been used in the preparation of their documentation.

This does not need to be complicated. It needs to be written down and
followed.

## What Will This Series Cover Next?

This is Article 5, the final article in the NDIS Productivity Series.
The full series covers the ethical operator's dilemma and why
productivity now matters more than ever (Article 1), what the May 2026
budget really means for small providers (Article 2), the productivity
paradox and why doing more manually is hurting participant care
(Article 3), seven practical productivity wins for NDIS providers
(Article 4), and this article on AI and NDIS documentation.

[Series links to be rendered as a linked list component pointing to
published articles at their /resources/articles/ slugs.]

## Want to Use AI Safely in Your Practice Right Now?

If you are an NDIS or Allied Health provider and you want to start
using AI safely in your documentation workflow today, here is where to
begin.

[Try MedPrivacy free for 30 days](https://medprivacy.com.au/founding-members):
A local de-identification tool built for NDIS documentation, so
participant data never leaves your device before it reaches an AI
tool.

[Book a free 30 minute consultation](/appt): No sales pitch. A
conversation about where your practice stands and what safe AI use
would actually look like for your team.

*Sinclair Hurtis is an active NDIS Support Coordinator, partnering with
My Ability Services in Melbourne, and the founder of CollabEdge
Solutions. He builds practical tools for ethical NDIS providers,
starting with the problems he encounters in his own practice.*

---

IMAGE MANIFEST

IMAGE 1
New file: public/images/blog/ndis-ai-safe-vs-risky-documentation-hero.webp
Alt: Split illustration comparing risky AI use uploading NDIS participant data to the cloud versus safe local AI processing with a privacy shield on the right

IMAGE 2
New file: public/images/blog/ndis-shadow-ai-risk-staff-chatgpt.webp
Alt: Staff member using a personal AI tool on a laptop without management oversight, representing shadow AI risk in NDIS provider workplaces

IMAGE 3
New file: public/images/blog/ndis-safe-ai-workflow-deidentification-steps.webp
Alt: NDIS practitioner following a two step safe AI workflow with de-identification of participant data before processing through a closed AI tool

IMAGE 4
New file: public/images/blog/ndis-provider-ai-policy-document-2026.webp
Alt: NDIS provider reviewing an AI policy document on screen showing governance requirements for safe use of artificial intelligence in participant documentation

THUMBNAIL (blog listing card)
New file: public/images/blog/ndis-ai-safe-vs-risky-documentation-hero.webp
Alt: AI and NDIS Documentation, what is safe, what is risky, and what actually works
