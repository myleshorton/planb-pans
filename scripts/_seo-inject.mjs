import fs from 'node:fs'
import path from 'node:path'

const BASE = 'https://planbforpans.com'
const PUB = path.join(process.cwd(), 'public')

// title = the page's real <title> text (canonical, kept as-is)
// desc  = UNIQUE ~150-char, search-intent meta description written from page content
const META = {
  'bee-venom.html': {
    title: 'Bee Venom Therapy, Deconstructed — Plan B for PANS',
    desc: 'Bee venom therapy for PANS and Lyme in kids: how melittin kills Borrelia, the real risks of anaphylaxis, and why it sits at the dangerous end of the menu.',
  },
  'biomagnetism.html': {
    title: 'Biomagnetism, Deconstructed — Plan B for PANS',
    desc: 'Biomagnetism (BPT) for PANS kids, honestly assessed: what magnet-pair therapy claims for chronic infection load, the evidence, and where it actually fits.',
  },
  'brain-retraining-kids.html': {
    title: 'Brain Retraining for Kids, Deconstructed — Plan B for PANS',
    desc: 'Brain retraining for a PANS child stuck in fight-or-flight: limbic-system programs (DNRS, Gupta) adapted for kids, what helps, and what it cannot fix alone.',
  },
  'camel-donkey-milk.html': {
    title: 'Camel & Donkey Milk, Deconstructed — Plan B for PANS',
    desc: 'Camel and donkey milk for PANS and autism: the immune and gut claims parents keep hearing, the thin science behind them, and whether it is worth trying.',
  },
  'deconstructing-pans.html': {
    title: 'Plan B — What is PANS/PANDAS, and how we fix it',
    desc: 'What is PANS/PANDAS? A plain-English map of the infections, immune dysfunction, and detox bottlenecks behind sudden OCD, rage, and regression in children.',
  },
  'diet.html': {
    title: 'Diet & Nutrition, Deconstructed — Plan B for PANS',
    desc: 'The PANS diet, deconstructed: which foods flare a child, the gut-brain and inflammation levers that actually work, and what the evidence does and does not support.',
  },
  'disulfiram.html': {
    title: 'Disulfiram (Antabuse) for Lyme, Deconstructed — Plan B for PANS',
    desc: 'Disulfiram (Antabuse) for chronic Lyme in kids: the Johns Hopkins persister finding, real dosing and neuropathy risks, and whether it belongs in a child protocol.',
  },
  'find-mold.html': {
    title: 'Find Mold Yourself — Plan B for PANS',
    desc: 'How to find mold in your home yourself when it is flaring your PANS child: DIY testing, ERMI vs plates, and how to skip the overpriced inspection industry.',
  },
  'fmt.html': {
    title: 'Fecal Microbiota Transplant (FMT), Deconstructed — Plan B for PANS',
    desc: 'FMT for PANS and autism: what fecal microbiota transplant can do for a wrecked gut-brain axis, the autism trial data, the FDA limits, and why DIY is dangerous.',
  },
  'folate-frat.html': {
    title: 'Folate & the FRAT Test, Deconstructed — Plan B for PANS',
    desc: 'Folate receptor antibodies and the FRAT test in PANS and autism: how blocked folate to the brain drives symptoms, and the leucovorin few families are told about.',
  },
  'gut.html': {
    title: 'Gut & Microbiome, Deconstructed — Plan B for PANS',
    desc: 'The gut-brain axis in PANS: why the microbiome is often the root, the stool tests worth running, and how to rebuild a child gut without chasing every supplement.',
  },
  'hbot.html': {
    title: 'Hyperbaric Oxygen (HBOT), Deconstructed — Plan B for PANS',
    desc: 'HBOT for PANS kids: how hyperbaric oxygen calms brain inflammation, hard vs soft chambers, realistic session counts, and what the evidence actually shows.',
  },
  'helminths.html': {
    title: 'Helminthic Therapy, Deconstructed — Plan B for PANS',
    desc: 'Helminthic therapy for PANS and autoimmunity: the immune logic behind giving a child benign worms, the safety questions, and where it sits on the menu.',
  },
  'homeopathy.html': {
    title: 'Homeopathy, Deconstructed — Plan B for PANS',
    desc: 'Homeopathy for PANS, the honest version: the three kinds, which to start with, what has helped real children, and where the evidence genuinely stands.',
  },
  'hyperthermia.html': {
    title: 'Hyperthermia for Lyme, Deconstructed — Plan B for PANS',
    desc: 'Whole-body hyperthermia for Lyme: heating the body to a controlled fever to kill Borrelia, the German clinics, the real results, and the real risks for kids.',
  },
  'ivig.html': {
    title: 'IVIG, Deconstructed — Plan B for PANS',
    desc: 'IVIG for PANS/PANDAS, deconstructed: how it works for the immune-driven child, what infusion day is really like, side effects, and how it gets insurance-covered.',
  },
  'ldn.html': {
    title: 'Low-Dose Naltrexone (LDN), Deconstructed — Plan B for PANS',
    desc: 'Low-dose naltrexone (LDN) for PANS and mold kids: how it calms an overactive immune system, pediatric dosing, compounding, and what to expect starting it.',
  },
  'lyme.html': {
    title: 'Lyme & Co-infections, Deconstructed — Plan B for PANS',
    desc: 'Lyme and Bartonella behind PANS rage and tics: the testing that actually works, the antibiotic-vs-herbal debate, and the full kill-menu for co-infected kids.',
  },
  'mcas.html': {
    title: 'MCAS & Histamine, Deconstructed — Plan B for PANS',
    desc: 'MCAS and histamine in PANS: when a child flushes, hives, reacts to half their food, and spirals into anxiety — how to recognize mast cell activation and calm it.',
  },
  'methylation.html': {
    title: 'Methylation & Detox, Deconstructed — Plan B for PANS',
    desc: 'Methylation and detox in PANS: the overlooked bottleneck that explains why some kids cannot clear infections, MTHFR/COMT testing, and how to support the engine.',
  },
  'methylene-blue.html': {
    title: 'Methylene Blue, Deconstructed — Plan B for PANS',
    desc: 'Methylene blue for Lyme, Bartonella, and mitochondrial support in kids: how this old dye works, real dosing, the serotonin-syndrome caution, and the evidence.',
  },
  'mold-protocol.html': {
    title: 'Mold — the Full Treatment Protocol, Deconstructed — Plan B for PANS',
    desc: 'The full mold treatment protocol for a PANS child who cannot tolerate it: binders, drainage, antifungals, and the sequencing that prevents a brutal Herx.',
  },
  'nasal-immunoglobulins.html': {
    title: 'Intranasal Immunoglobulins, Deconstructed — Plan B for PANS',
    desc: 'Intranasal immunoglobulins for PANS: what nasal IgG/IgA sprays actually are, how they differ from IVIG and SBI, and where they fit for sinus and immune issues.',
  },
  'nathan-vs-shoemaker.html': {
    title: 'Nathan vs. Shoemaker — the two mold/CIRS protocols, compared — Plan B for PANS',
    desc: 'Nathan vs Shoemaker mold/CIRS protocols compared: how the two leading approaches to mold illness differ, and which fits a sensitive PANS child better.',
  },
  'nervous-system.html': {
    title: 'Nervous-System Regulation, Deconstructed — Plan B for PANS',
    desc: 'Calming a dysregulated PANS nervous system: vagus nerve work, polyvagal tools, and the daily regulation practices that help a child out of constant fight-or-flight.',
  },
  'ozone.html': {
    title: 'Ozone Therapy, Deconstructed — Plan B for PANS',
    desc: 'Ozone therapy for chronic Lyme and PANS: how oxidative ozone (10-pass, EBOO, insufflation) is used in kids, the claims, the real evidence, and the safety limits.',
  },
  'peptides.html': {
    title: 'Peptide Therapies, Deconstructed — Plan B for PANS',
    desc: 'Peptide therapies for PANS kids: how BPC-157, thymosin, and other signaling peptides support gut, immune, and tissue repair, with dosing and real-world caveats.',
  },
  'phage.html': {
    title: 'Phage Therapy, Deconstructed — Plan B for PANS',
    desc: 'Phage therapy for antibiotic-resistant infections in PANS kids: how targeted bacteriophages work, where to access it (Eliava, UCSD), and where it stands.',
  },
  'serum-immunoglobulins.html': {
    title: 'Serum Immunoglobulins (SBI), Deconstructed — Plan B for PANS',
    desc: 'Serum-derived bovine immunoglobulins (SBI) for the PANS gut: how this beige powder binds toxins and calms gut immunity, who it helps, and how to use it.',
  },
  'sot.html': {
    title: 'SOT (Supportive Oligonucleotide Technique) for Lyme, Deconstructed — Plan B for PANS',
    desc: 'SOT for Lyme and Bartonella in kids: how supportive oligonucleotide technique targets a bug genetic code over months, the cost, the clinics, and the evidence.',
  },
  'tree.html': {
    title: 'The PANS Tree — Plan B for PANS',
    desc: 'The PANS Tree: a visual map of every root driver — infections, immune, gut, mold, methylation — branching into the symptoms and the treatments that address each.',
  },
  'understanding-pans.html': {
    title: 'Understanding PANS — Plan B',
    desc: 'Understanding PANS/PANDAS for parents: why your child changed overnight, what is happening in the immune system and brain, and the first steps to take now.',
  },
  'yeast.html': {
    title: 'Yeast & Candida, Deconstructed — Plan B for PANS',
    desc: 'Yeast and Candida overgrowth in PANS: why this common driver gets missed, the testing that catches it, and how to clear it without flaring a sensitive child.',
  },
}

const files = fs.readdirSync(PUB).filter((f) => f.endsWith('.html')).sort()

let done = 0
const missing = []
for (const file of files) {
  const meta = META[file]
  if (!meta) {
    missing.push(file)
    continue
  }
  const fp = path.join(PUB, file)
  let html = fs.readFileSync(fp, 'utf8')

  // Idempotency: skip if we already injected our marker.
  if (html.includes('<!-- seo:planb -->')) {
    done++
    continue
  }

  const url = `${BASE}/${file}`
  const desc = meta.desc
  const titleAttr = meta.title

  const esc = (s) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: titleAttr,
    description: desc,
    url,
    publisher: { '@type': 'Organization', name: 'Plan B for PANS' },
  }

  const block = `<!-- seo:planb -->
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(titleAttr)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Plan B for PANS">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>
`

  // Inject immediately before </head>, touching nothing in <body>.
  const idx = html.indexOf('</head>')
  if (idx === -1) {
    console.error(`NO </head> in ${file}`)
    continue
  }
  html = html.slice(0, idx) + block + html.slice(idx)
  fs.writeFileSync(fp, html)
  done++
}

console.log(`injected/ok: ${done} of ${files.length}`)
if (missing.length) console.log('MISSING META:', missing.join(', '))
