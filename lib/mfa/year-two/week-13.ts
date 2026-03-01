import type { WeekData } from "@/lib/mfa/types";

export const week13Data: WeekData = {
  weekNumber: 13,
  totalWeeks: 36,
  semesterLabel: "Fall Semester",
  phaseLabel: "Specialization",
  title: "Writing the Other — Ethics, Craft & the Limits of Imagination",
  emphasizedWord: "Limits of Imagination",
  deck: "Literary imagination has no inherent borders. A writer can imagine their way into any consciousness — that has always been fiction's most radical claim. But the exercise of imagination across significant lines of difference carries craft and ethical responsibilities that this generation of writers has brought into sharp critical focus. What we call 'craft' is never neutral — it is always embedded in specific cultural assumptions about whose stories matter and how they should be told.",
  meta: [
    { label: "Commitment", value: "12–18 hrs" },
    { label: "Program Week", value: "49 of 108" },
    { label: "Craft Focus", value: "Ethics & Representation" },
    { label: "Grammar", value: "Phase 4 · Polysyndeton" },
    { label: "Thesis Target", value: "1,500–2,000 words" },
  ],
  sections: [
    {
      id: "lecture",
      label: "Craft Lecture",
      title: "The Craft of Imaginative Inhabitation",
      blocks: [
        {
          type: "paragraph",
          content: [
            "The argument for writing across difference is identical to the argument for fiction itself: the imagination can go where the body cannot, and the capacity to render consciousness from inside another life is what makes the novel a moral instrument — a device for expanding the reader's sense of what it is like to be someone other than themselves. If this argument holds, then writers should write whoever they need to write to make the work fully realized. If the argument does not hold — if imagination is bounded by experience in ways that make cross-cultural invention presumptuous or harmful — then the entire tradition of literary fiction in which a white male novelist renders a Black woman's interior, or a contemporary writer inhabits a medieval consciousness, or any writer crosses any significant line of difference is ethically compromised.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "The resolution to this tension is not a position but a practice. The question is not whether to write across difference — every writer writing characters who differ from them, whether by gender or generation or class or culture, is already doing it — but ",
            { text: "how", emphasized: true },
            " to do it with the craft precision and ethical seriousness the act requires. Matthew Salesses's *Craft in the Real World* makes the foundational argument: craft criteria are not neutral. They are embedded in specific cultural assumptions — about whose interiority is legible, whose vernacular is 'correct,' whose narrative arc constitutes meaningful growth, whose story is 'universal' and whose is 'niche.' The writer who applies these criteria without examining them may be producing technically accomplished prose that is, at a deeper level, a failure of imagination — work that sees the other from outside and calls that vision a portrait.",
          ],
        },
        {
          type: "pullquote",
          quote: "The most reliable indicator of inadequately imagined cross-cultural character writing is generalization: the character who represents their community rather than being a specific individual from it.",
          cite: "— craft principle",
        },
        {
          type: "card",
          title: "Five Craft Failures and Their Corrections",
          paragraphs: [
            "The representative character — a character who exists as a type rather than an individual: the Black character who is always articulating the Black experience, the immigrant character who is always struggling with assimilation, the working-class character who is always burdened by economic precarity. The correction is radical specificity: this character, from this specific family, in this specific neighborhood, with this specific relationship to their culture — not 'an immigrant' but this woman who came from Guadalajara at thirty-two, who is ambivalent about the food she misses, who has a complicated relationship with her daughter's Americanness. Specificity is not research signaling; it is the same particularity you would provide for any character.",
            "The serving character — a character who exists primarily to serve the protagonist's arc rather than having autonomous interiority: the mentor who exists to teach, the victim who exists to motivate, the community member who exists to represent what the protagonist is escaping. The correction requires giving the secondary character a complete interior life, desires and resistances and contradictions that are not organized around the protagonist's journey. Ask: what does this character want when the protagonist is not in the room? If you cannot answer, the character is a function, not a person.",
            "The ventriloquized character — a character who speaks and thinks in the author's cultural register, with the author's cultural assumptions, despite being from a different culture: the dialect that is phonetically marked but intellectually unspecific, the interiority that uses the vocabulary of the dominant culture's psychology even when the character would not frame their experience that way. The correction requires both research and a quality of imaginative attention that asks: how would this person, from this specific background, in this specific historical moment, actually think? Not how would I think if I were them — how do they think?",
            "The explained character — a character whose difference is explained to the reader through exposition, as though the reader is presumed to be from the dominant culture and the character's background requires translation: 'In her culture, it was customary to...' or 'As a [ethnicity/religion/class], she had always been taught...' The correction is to write from inside the character's perspective without translation — to assume a reader who will meet the character on the character's terms, not the dominant culture's. The explanation signals to the reader that the character is being looked at rather than inhabited.",
            "The redemption arc that requires the other's suffering — the narrative structure in which the character from a marginalized position exists primarily to demonstrate their resilience, or to be saved by the protagonist, or to die in ways that motivate the protagonist's growth. This is the structural version of the serving character problem, operating at the level of plot rather than scene. The correction requires asking whether the character's story has a destination that is theirs — that serves their development, their interiority, their stakes — rather than a destination that serves the protagonist's arc or the narrative's need for emotional weight.",
          ],
        },
        {
          type: "paragraph",
          content: [
            "Kiese Laymon's essay 'How to Slowly Kill Yourself and Others in America' is this week's primary example of what the correction looks like in practice: writing from inside a specific cultural particularity with the precision and interiority that makes the work both deeply particular and fully legible to readers who do not share that particularity. The essay does not explain its cultural context; it inhabits it. The reader who does not share the cultural background is not translated for — they are invited to move toward the work rather than having the work move toward them. That invitation, and the craft precision that makes it possible, is what successful cross-cultural writing produces.",
          ],
        },
      ],
    },

    {
      id: "cross-genre",
      label: "Cross-Genre Note",
      title: "Representation Across Forms",
      blocks: [
        {
          type: "genreGrid",
          items: [
            {
              badge: "Literary Fiction",
              variant: "lf",
              text: "Every fictional character who differs significantly from the author requires research, imagination, and a specific quality of humility — not the humility that produces hedged, cautious writing, but the humility that produces listening. The standard for success is not whether the writer tried hard enough but whether the character has full interiority, complexity, and agency consistent with their humanity. The character who is well-researched but whose interiority still sounds like the author's filtered through a cultural lens has not been inhabited — they have been reported on. The practical tools: read first-person accounts by people with the character's background before and during drafting; identify the specific cultural assumptions in your prose and interrogate each one; find readers with insider knowledge before the draft is considered complete.",
            },
            {
              badge: "Screenwriting & Playwriting",
              variant: "sp",
              text: "Hollywood's history of representation failures is extensive, well-documented, and ongoing. The question for the screenwriter is not whether to write across difference but how to do it with research, consultation, and craft precision — and how to navigate the industry's structural incentives toward certain kinds of representation failures (the 'magical Negro,' the model minority, the exotic other whose function is to illuminate the protagonist's journey). For playwrights, the history of representation is bound up with casting: who will perform this character, and how does that affect what the writing should and should not assume? The consultation imperative is particularly pressing in screenwriting because the scale of potential harm — a film seen by millions — amplifies the consequences of representational carelessness.",
            },
            {
              badge: "Creative Nonfiction & Memoir",
              variant: "cnf",
              text: "In memoir and CNF, 'writing the other' usually means writing about real people — family, community, subjects of research or journalism. The ethical considerations here involve truth, privacy, and the power dynamic between the writer who controls the narrative and the person who is represented in it. The subject who becomes a character in the memoirist's book has no editorial control over how they are rendered — they cannot revise the paragraph that diminishes them or the scene that reduces them to a type. The memoirist's obligation is not to protect subjects from unflattering portrayal — it is to render them with the full complexity of their humanity, including their contradictions, their failings, and their perspective on events the memoirist also narrates.",
            },
          ],
        },
      ],
    },

    {
      id: "grammar",
      label: "Grammar & Style",
      title: "Phase 4 · Topic 4 — Polysyndeton: The Rhetoric of Accumulation",
      blocks: [
        {
          type: "grammar",
          title: "Phase 4 · Topic 48 of 60 — Polysyndeton: Weight, Ritual, and the Breathless Catalogue",
          intro: [
            "Polysyndeton adds a conjunction between every item in a series — where standard prose would write 'She took her coat, hat, gloves, and umbrella,' polysyndeton writes 'She took her coat and her hat and her gloves and her umbrella.' The difference is not grammatical correctness but rhetorical effect. The standard form with its single 'and' before the final item moves efficiently; polysyndeton slows and weights each item, giving each one a pause and a consideration that the standard form does not allow.",
            "The two primary effects of polysyndeton are excess and ceremony — and the writer's task is to know which the passage requires. Hemingway uses polysyndeton for its listing quality, the sense of one thing following another in the world without causal hierarchy: 'and in the fall the war was always there but we did not go to it any more.' The items accumulate without urgency or priority. The King James Bible uses polysyndeton for ceremonial weight: 'And God said, Let there be light: and there was light.' Each 'and' is a beat of deliberation. The figure can produce exhaustion, accumulation, ritual, or a catalogue of equivalences — the choice of content determines which effect dominates.",
          ],
          rule: "The diagnostic question for polysyndeton: does this passage benefit from each item being given equal weight and individual attention, or does it benefit from the efficient forward momentum of standard listing? Polysyndeton serves excess — the character overwhelmed by the multiplicity of what they must do or feel or carry. It serves ceremony — the moment whose solemnity demands that each element be named with deliberation. It serves accumulation — the sense that items are being added one by one to a pile that is becoming heavier. It does not serve passages where the list is incidental to the main action, where the items are not equivalent in importance, or where forward momentum is the passage's governing need.",
          examples: [
            {
              label: "Polysyndeton producing exhaustion and excess",
              text: "'She had cleaned the kitchen and bathed the children and answered the emails and made the calls and put dinner on the table and listened to her husband's account of his day and she had done it all without being asked and without complaint and she was so tired.' [The accumulating 'ands' perform the exhaustion — the reader feels the weight of each item being added to the pile. The final item ('she was so tired') arrives with the force of everything that preceded it.]",
            },
            {
              label: "Polysyndeton producing ceremonial weight",
              text: "'He had been her friend and her confessor and her adversary and, at the end, the person she called when she had run out of everyone else to call.' [Each 'and' makes a pause around the role being named — friend, confessor, adversary are each given individual weight. The final item earns its length because the polysyndeton has established a rhythm that makes the longer phrase feel like an arrival.]",
            },
            {
              label: "Hemingway's polysyndeton — equivalence without hierarchy",
              text: "From *A Farewell to Arms*: 'and the dust they raised powdered the leaves of the trees.' Hemingway's characteristic polysyndeton (accumulated throughout the novel in extended passages) creates the sense that events follow events in the world without the author imposing causal hierarchy — things happen and then things happen, and the 'and' is the only connective tissue. The effect is both restraint and a specific philosophical position: the narrator sees but does not interpret.",
            },
            {
              label: "The contrast with asyndeton (next week's figure)",
              text: "Polysyndeton: 'She ran and fell and got up and kept running.' [Each event is given equal weight; the reader inhabits each moment.] Asyndeton: 'She ran, fell, got up, kept running.' [The events rush past each other; the reader experiences the sequence as continuous forward motion rather than individual moments. The choice between the two is a choice between inhabiting and observing, between weight and speed.]",
            },
          ],
          outro: [
            "The connection between polysyndeton and this week's ethics of representation is the connection between accumulation and equality: polysyndeton treats each item in the series as equally worth naming, equally deserving of attention and weight. The writer who uses polysyndeton to list a character's experiences — their losses, their labors, their obligations — is making a formal argument that each item deserves to be noticed, not passed over in a comma-separated list. The figure is a craft tool for representing what it feels like to carry multiple things simultaneously, which is always the situation of characters at the margins of the stories that center others.",
            "Next week introduces asyndeton — polysyndeton's formal opposite — and the two figures in combination give the writer complete control over the rhetorical weight and speed of any list or accumulation.",
          ],
          exercise:
            "Write two polysyndeton passages of at least five items each, using subjects from your thesis. The first should create exhaustion or excess — the sense of too much being carried or demanded. The second should create ceremonial weight or reverence — the sense that each item is being named with deliberation because each matters. After writing both, identify the specific content and structural choices that produce each effect. Then locate one passage in your current thesis draft where a standard comma-series list could be rewritten as polysyndeton to produce greater weight or accumulation — and try it.",
        },
      ],
    },

    {
      id: "reading",
      label: "Core Reading",
      title: "This Week's Texts",
      blocks: [
        {
          type: "readingList",
          items: [
            {
              number: "01",
              title: "Craft in the Real World",
              author: "Matthew Salesses",
              href: "https://bookshop.org/p/books/craft-in-the-real-world-matthew-salesses/15199901",
              note: "Purchase. Full reading this week — move through the complete book, which is short and dense and argument-driven throughout. Salesses's central claim — that workshop craft criteria are culturally embedded and often penalize writing from non-dominant subject positions — should be read not as an argument against craft but as an argument for examining the assumptions embedded in specific craft criteria before applying them. Read with the question: which of the craft criteria this program has introduced are genuinely neutral tools, and which are culturally specific preferences? Apply this question to your own thesis work.",
              badge: "Purchase",
            },
            {
              number: "02",
              title: '"How to Slowly Kill Yourself and Others in America"',
              author: "Kiese Laymon",
              href: "https://www.kieselaymon.com",
              note: "Widely available in Laymon's essay collection *How to Slowly Kill Yourself and Others in America* (purchase) or in various anthologies. The essay is this week's primary model of writing from inside a specific cultural particularity with the precision and interiority that makes the work both deeply particular and fully legible to readers who do not share that particularity. Read for: what does the essay assume about its reader? How does it handle cultural context — does it explain or inhabit? What is the relationship between the essay's formal choices and its cultural content?",
              badge: "Purchase",
            },
            {
              number: "03",
              title: "Introduction to Best American Short Stories 2018",
              author: "Roxane Gay",
              href: "https://bookshop.org/p/books/the-best-american-short-stories-2018/7348891",
              note: "Purchase or library. Gay's introduction addresses representation in contemporary fiction with the precision of an editor who has read thousands of stories: what she sees that fails, what she sees that succeeds, and what she believes the fiction writer owes the communities they represent. Read it alongside Salesses as a practitioner's account of what the ethics of representation looks like from inside the editorial process.",
              badge: "Purchase / Library",
            },
          ],
        },
      ],
    },

    {
      id: "exercise",
      label: "Writing Exercise",
      title: "The Cross-Cultural Scene + Thesis Session 13",
      blocks: [
        {
          type: "exercise",
          paragraphs: [
            "Part One — The Cross-Cultural Scene with Reflection (700–900 words + 300 words): Write a scene from the perspective of a character who differs from you in a significant way — culturally, historically, racially, by class, by disability, by sexuality, by historical period, or by any combination of these. Choose a character who is relevant to your thesis project or one you have been considering but avoiding.",
            "Before writing: spend one hour in research specific to that character's world — not general background reading but targeted research into the specific details, textures, and interior logic of this person's life. Identify one assumption you have been making about this character that the research complicates or corrects.",
            "While writing: apply the five craft corrections from the lecture. Is this character a specific individual, not a representative? Does this character have autonomous interiority not organized around the protagonist's journey? Does this character's interior voice use the vocabulary and framing they would actually use? Is the writing inhabiting rather than explaining? Does this character's story have a destination that belongs to them?",
            "After writing: produce a 300-word honest reflection — not a defense of the choices made but an examination of them. What are the specific craft decisions you made and why? What research gaps remain that would need to be filled before this passage could be considered complete? What consultation should you seek? What remains genuinely uncertain? The reflection should be specific, honest, and uncomfortable where the work requires discomfort.",
            "Part Two — Thesis Session 13 (1,500–2,000 words): Write the next section of the thesis. If the thesis involves characters who differ significantly from you, write with the cross-cultural craft corrections active. Record in the session log: which, if any, of the five craft failures was present in the session's pages, and how you addressed or deferred it.",
          ],
          target: "700–900 words (scene) + 300 words (reflection) + 1,500–2,000 words (thesis session)",
        },
      ],
    },

    {
      id: "ai",
      label: "AI Workshop",
      title: "Exercise 25 — The Bias Detector",
      blocks: [
        {
          type: "ai",
          tool: "Tool: Claude or ChatGPT",
          intro:
            "Paste the cross-cultural scene you wrote for this week's exercise — or a scene from your thesis draft that involves representation across significant lines of difference. The AI's task is to read for potential failures of imaginative inhabitation: the specific craft markers that signal the author is looking at the character rather than being inside them.",
          prompt:
            "Read this scene for potential failures of representation. Identify any moments where the character representing a different cultural, racial, social, or historical position: (1) functions as a type or representative rather than a specific individual with autonomous interiority; (2) exists primarily to serve the protagonist's narrative rather than having their own stakes and direction; (3) speaks or thinks in ways that reflect the author's cultural assumptions rather than the character's specific experience and framing; (4) is described or rendered in ways that imply the author's cultural perspective is the default and the character's is the deviation that requires explanation. For each problem you identify, name the specific passage or choice and explain what it signals about the imaginative stance behind it. Then identify one moment in the scene where the imaginative inhabitation is most successful — where the character is most fully a specific person rather than a representative — and explain what the writing is doing at that moment that it is not doing in the problem passages.",
          questions: [
            "Where does the AI's bias assessment match what you identified in your own 300-word reflection — and where does it diverge? When the AI sees a problem you didn't identify, go back to the passage: is the AI right? What would correcting the problem require?",
            "The AI's identification of the moment where imaginative inhabitation is most successful: what is the writing doing at that moment? Can you identify the specific craft choice — the specificity of detail, the interior framing, the choice of what the character notices — that produces the success? Can that choice be replicated in the problem passages?",
            "Now discuss the limits of the AI's ability to detect these problems. The AI has read widely but does not have lived experience. What can it see that you cannot? What can it not see that a reader with insider knowledge would immediately notice? This meta-question is part of the exercise: understanding what the AI is and is not equipped to assess is part of understanding how to use it responsibly.",
            "Apply the AI's five findings — problems and the one success — as a revision checklist for the scene. Make one specific revision that addresses the most significant problem identified. Record what you changed and why in the session log.",
          ],
          note: "The Bias Detector exercise (Exercise 25 in the program's 28-exercise AI sequence) is one of the few exercises in the program where the AI's limits are as instructive as its findings. The AI can identify patterns of representation failure that match those in its training data — the five craft failures named in the lecture, the structural problems of the serving character and the representative character — but it cannot substitute for consultation with a person who has lived experience of the world being represented. The exercise's final question is designed to make this distinction explicit: the AI is a first pass, not a final judgment. After completing the exercise, identify one person with insider knowledge of the character's world who could read the scene before it is considered complete.",
        },
      ],
    },

    {
      id: "tip",
      label: "Editorial Tip",
      title: "The Specificity Test for Cross-Cultural Writing",
      blocks: [
        {
          type: "tip",
          icon: "🔬",
          name: "The Character Who Represents Their Community Has Not Yet Been Written",
          paragraphs: [
            "The most reliable indicator of inadequately imagined cross-cultural character writing is generalization: the character who represents their community rather than being a specific individual from it. Every character — regardless of their background, regardless of whether the author shares that background — should have a specific family structure, a specific neighborhood with specific sounds and smells, a specific relationship to their culture that includes ambivalence and contradiction alongside identification and pride. Not 'a Mexican-American character' but this woman, from this family, from this specific block in this specific city, who has this specific relationship to the Spanish her grandmother spoke and the English her children prefer. Specificity is not research signaling. It is not the display of cultural details to demonstrate that the author did their homework. It is the same particularity you would provide for any character — the particularity that makes a character a person rather than a type.",
            "The test: take any secondary character in your draft who differs significantly from you. Ask: what does this character want when the protagonist is not in the room? What is this character's relationship to their own family — not to the protagonist's family or the protagonist's story, but to the people they came from and the people they are responsible for? What specific sensory detail of their daily life could only belong to them and not to any other character in the work? If you cannot answer these questions, the character has not yet been written — they have been placed.",
          ],
        },
      ],
    },

    {
      id: "journal",
      label: "Journal Prompt",
      title: "The Story That Isn't Yours to Tell",
      blocks: [
        {
          type: "journal",
          title: "The Story That Isn't Yours to Tell",
          question:
            "Whose story do you most want to tell that isn't yours to tell — the story from a life significantly different from your own that you keep returning to, that feels essential to the work you are trying to make, but that you approach with a mixture of desire and trepidation? What would you need to do — what research, what consultation, what specific quality of imaginative attention and humility — to earn the right to try? And: what does your relationship to that story tell you about your own position — what does it mean that this story calls to you, from this specific background and experience, in this specific historical moment? Write for twenty minutes without stopping. Do not decide in advance whether the story is yours to tell — write your way toward that question rather than away from it.",
        },
        {
          type: "paragraph",
          className: "italic text-muted",
          content: [
            "The journal prompt this week is deliberately unresolved. The question of whether any specific story is 'yours to tell' cannot be answered in a journal entry — it is answered over the course of the drafting, the research, the consultation, and the revision. What the journal entry can do is make visible the writer's relationship to the material: the desire, the trepidation, the specific quality of the pull toward the story, and the specific quality of the uncertainty about the writer's position relative to it. Both are information. Neither should be suppressed.",
          ],
        },
      ],
    },

    {
      id: "summary",
      label: "Week in Summary",
      title: "What You've Built",
      blocks: [
        { type: "divider" },
        {
          type: "paragraph",
          content: [
            "By the end of this week you should have: written the 700–900-word cross-cultural scene with one hour of targeted prior research; written the 300-word honest post-writing reflection on craft decisions, research gaps, and remaining uncertainties; written 1,500–2,000 words of thesis in Session 13 with the five craft corrections active and recorded in the session log; read Salesses's *Craft in the Real World* in full and applied his critique to this program's craft criteria; read Laymon's essay for how cultural particularity is inhabited rather than explained; read Roxane Gay's introduction for a practitioner editor's account of representation failures and successes; completed the Bias Detector exercise (Exercise 25) and written one specific revision based on the most significant problem identified; identified one reader with insider knowledge of the cross-cultural scene's world who can read it before it is considered complete; written the two polysyndeton passages (exhaustion/excess and ceremonial weight) with effect analysis.",
          ],
        },
        {
          type: "card",
          title: "Looking Ahead to Week 14",
          paragraphs: [
            "Week 14 is Voice Development — Finding the Frequency Only You Can Transmit. In Year One you studied voice analytically — identified its components, imitated other writers' voices, began to notice your own habitual choices. In Year Two you begin to develop it consciously: to make it less a byproduct of habit and more the expression of a governing aesthetic vision. Week 14 moves from imitation to synthesis — identifying what is irreducibly yours and amplifying it. It also introduces asyndeton, polysyndeton's formal opposite, completing the pair.",
          ],
        },
      ],
    },
  ],
};
