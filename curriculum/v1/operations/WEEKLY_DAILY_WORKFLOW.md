# Start learning — one lesson at a time

> Version 1, 2026-11-27: bounded corrective revision after human-reported conditional independent approval. Curriculum architecture fixed for learning; local queues and learner evidence remain adaptive. Live GitHub integration awaits approval of this revised package.

**Today: START-01 below.** Only basic addition, subtraction, multiplication and division are assumed. Fractions, decimals, percentages, ratios, negative numbers, exponents and other arithmetic topics will be taught. No entrance exam, profile form, resource selection or curriculum redesign is needed.

The learner only needs the current lesson: **learn → try → check → next**. The tutor keeps the detailed curriculum/state in the background. A queue item may take several sessions. It is never a deadline to master a chapter in one day. Programming can continue while a mathematics subskill is being repaired.

## START-01 — today's complete lesson: what a fraction means

**Learn, on paper (about 15–20 minutes).** Open [OpenStax Prealgebra 2e §4.1, Visualize Fractions](https://openstax.org/books/prealgebra-2e/pages/4-1-visualize-fractions). Read only the subsections **Understand the Meaning of Fractions** and **Equivalent Fractions** today. Skip the readiness quiz, mixed-number material and any negative-number examples. You do not need to finish the section.

Use this explanation if the page is unavailable: one whole can be split into equal-sized parts. Three equal pieces make thirds. Taking one piece is written 1/3; the bottom number counts equal parts in a whole, and the top number counts the parts taken. Draw a rectangle split into three equal pieces and shade one. Split every piece into two equal pieces: the same shaded amount is now 2/6. Thus 1/3 and 2/6 name the same amount. Equal-sized parts and the same reference whole matter. A zero denominator is undefined; it does not name zero pieces of a valid whole.

**Practise, on paper (about 10 minutes).** Draw 2/3 of a rectangle; label what each number means. Draw 1/2 and 3/6 using equal-length rectangles. Explain why the shaded amounts agree. Discovery move: repartition a picture yourself and name the same quantity another way. A few matching pictures are examples; the general rule comes from splitting each original part into the same number of smaller equal parts.

**Optional parallel computer lesson (about 10 minutes).** Use the existing Python 3 interpreter (`python3` in an available terminal or a familiar notebook). Open [Python tutorial §3.1](https://docs.python.org/3/tutorial/introduction.html), numbers and assignment only. Here `parts` is a name holding a whole-number value; `print` displays a result. Predict, then type:

```python
parts = 8
print(parts + 4)
parts = 3
print(parts * 4)
```

Do not install a new platform to start. If no interpreter is immediately available, complete the paper lesson and leave executed-code evidence pending.

**Check LC-01, after learning (about 3–5 minutes).** Close the explanation and keep the [answer key](../assessment/DIAGNOSTIC_KEY.md) closed. (a) Draw 1/4 of a whole and explain top/bottom numbers. (b) Draw or explain why 1/2 and 2/4 represent the same amount. (c) If doing the computer lane, write your own code assigning 6 to a name, displaying that value plus 2, then changing it to 5 and displaying that value times 3. Paper understanding and actual code are separate evidence. No AI hints/solutions during this short attempt.

**If stuck:** use one fresh equal-parts drawing and explain it with the tutor, then try a changed picture independently. If the code fails, type one assignment/print and explain each symbol, then change the numbers. Repair this operation immediately; do not open an exam.

**If already fluent:** demonstrate two varied examples independently and explain them; skip repeated routine teaching and move on. Later retrieval is still useful. Do not infer all arithmetic mastery from this one topic.

**Next:** START-02 fraction operations. If today's meaning/equivalence still needs work, continue that exact part next time; the coding lane may progress independently. At the end, the tutor saves just the next lesson and any error/help used. The learner need not maintain a dashboard or calculate scores.

## First-week queue — fixed resources, adaptive pace

Use the next unfinished row, one small subskill at a time. “First week” supplies the first seven study visits; unfinished parts carry forward. The teacher may spread a row across visits, while a demonstrated skill can move faster. All listed practice/check tasks are original; book section numbers identify explanations, not fabricated book exercise numbers. Skip readiness quizzes and unrelated applications.

| Queue | Exactly what/where to learn | Paper/computer practice | Short independent check | Repair or accelerate; exact next |
|---|---|---|---|---|
| START-01 | Prealgebra §4.1 meaning/equivalence only; Python §3.1 assignment/output | Full lesson above; equal-parts discovery | LC-01 above | One changed picture/assignment; then START-02 |
| START-02 | [§4.2 simplify/multiply/divide](https://openstax.org/books/prealgebra-2e/pages/4-2-multiply-and-divide-fractions), [§4.4 same-denominator addition/subtraction](https://openstax.org/books/prealgebra-2e/pages/4-4-add-and-subtract-fractions-with-common-denominators), then [§4.5 different denominators](https://openstax.org/books/prealgebra-2e/pages/4-5-add-and-subtract-fractions-with-different-denominators). Take one operation at a time | Paper: simplify 2/4; model 1/2+1/4; calculate (2/3)×(3/5) and (1/2)÷(1/4). AI explains one worked example before each new operation. Python: own whole-number assignment/output variation | LC-02: 1/3+1/6; 3/4−1/4; (2/3)×(3/4); (3/4)÷(1/2); explain why 3/0 is undefined. Check only the operation just taught, not all five at once | If meaning fails, return to a drawing; if denominators fail, repartition the same whole. Skip only independently demonstrated operations; then START-03 |
| START-03 | [§5.1 decimal place value](https://openstax.org/books/prealgebra-2e/pages/5-1-decimals), [§5.2 operations](https://openstax.org/books/prealgebra-2e/pages/5-2-decimal-operations), [§5.3 fraction conversions only](https://openstax.org/books/prealgebra-2e/pages/5-3-decimals-and-fractions); Python [§3.1 lists](https://docs.python.org/3/tutorial/introduction.html) and [§4.2 for](https://docs.python.org/3/tutorial/controlflow.html) | Paper: explain 0.3=3/10; work 0.2+0.45, 0.4×0.5, 0.8÷0.2; convert 3/4. Computer: trace a worked loop summing [2,4,6], then vary it. Discover why 0.5 and 0.50 agree | LC-03: convert 1/4 to a decimal; 0.4+0.35; 0.6×0.5; 0.9÷0.3; own loop summing [1,3,5]. Sample each learned operation separately | Repair place value before operation rules; trace one list item at a time. No binary floating-point theory gate. Then START-04 |
| START-04 | [§5.6 ratios/unit rates](https://openstax.org/books/prealgebra-2e/pages/5-6-ratios-and-rate), [§6.1 percent meaning](https://openstax.org/books/prealgebra-2e/pages/6-1-understand-percent); Python [Defining Functions, Ch.4](https://docs.python.org/3/tutorial/controlflow.html) | Paper: 3 red and 2 blue tokens, compare red:blue and red:total; 10%=10/100. Find 10% of 60 by multiplying. Computer: learn a function returning 2*x+1 using whole-number inputs. Ask why a part:part ratio differs from part:whole | LC-04: with 2 red and 3 blue, give red:blue and red/total; convert 1/5 to decimal/percent; find 25% of 80. Own function returning 2*x+1 at x=4 | Repair the meaning of the compared quantities, then conversions. One changed independent example per failed subskill. Then START-05 |
| START-05 | [§3.1 integers/number line](https://openstax.org/books/prealgebra-2e/pages/3-1-introduction-to-integers), [§3.2 addition](https://openstax.org/books/prealgebra-2e/pages/3-2-add-integers), [§3.3 subtraction](https://openstax.org/books/prealgebra-2e/pages/3-3-subtract-integers), [§3.4 multiplication/division](https://openstax.org/books/prealgebra-2e/pages/3-4-multiply-and-divide-integers); Python [§4.1 if](https://docs.python.org/3/tutorial/controlflow.html) | Paper: locate −2 and 1; model −2+5 and 2−5 by number-line moves; learn sign rules with examples and distributive consistency. Computer: test if a number exceeds 3 | LC-05: −3+5; 4−7; (−2)×(−3); (−8)÷2; order −2 and −5; own condition identifying 5 as greater than 3 | Separate number-line meaning from sign rules; repair the exact operation. Then START-06 |
| START-06 | [Prealgebra §2.1 exponents and order of operations](https://openstax.org/books/prealgebra-2e/pages/2-1-use-the-language-of-algebra), those subsections only; Python §3.1 `**` and parentheses. Optional [Deep-ML Intuition](https://www.deep-ml.com/intuition) title Fair share, only after reading its actual prompt | Paper: expand 2³ as repeated multiplication; compare 2+3×4 and (2+3)×4. Distinguish −(2²) from (−2)². Optional mean task: share [2,4,9] equally; embedded fallback requires no platform access | LC-06: 3²; 2+3×4; (2+3)×4; −(2²) versus (−2)². If doing code, implement the mean of nonempty [2,4,9] with a loop | Repair repeated multiplication/parentheses first. Zero/negative exponents and roots remain later lessons, not assumed. Then START-07 |
| START-07 | [Elementary Algebra 2e §1.2 expression/equation definitions](https://openstax.org/books/elementary-algebra-2e/pages/1-2-use-the-language-of-algebra), [§2.1 first addition/subtraction equality example](https://openstax.org/books/elementary-algebra-2e/pages/2-1-solve-equations-using-the-subtraction-and-addition-properties-of-equality); optional [Deep-Path D003 Data, Splits and Baselines](https://www.deep-ml.com/deep-path) | Paper/AI: variable, 3x+2, substitute x=4; work x+5=12 by same operation on both sides. Computer: function counting list values greater than 3. Data toy when ready: A(x)=2x+1, B(x)=x+3; compare train pairs (0,1),(1,3),(2,5), then predict x=3 before y=7 is revealed | LC-07: distinguish 5z+1 from 5z+1=16 and evaluate at z=3; solve t+3=11 and check; count values >3 in [1,4,6]. For the optional toy compare new-point absolute errors and explain the limit of one example | Teach only notation/equality if new; use fresh examples after hints. Next is MAT-ALG items 1–2 and Elementary Algebra §2.2 multiplication/division equality, then §1.9 distribution and §2.3 both sides |

The first week **does not assert arithmetic completion**. Next arithmetic extensions have an explicit route in MAT-ARITH (mixed/improper fractions, rounding, percent change, zero/negative powers, roots and scientific notation). Study the next missing operation alongside elementary algebra as needed; never assume them from the four basic operations. The exact current task is selected from recorded performance by the tutor, not by daily learner browsing.

## Simple daily execution after this queue

1. Open the saved **next task**. Retrieve one small previously taught idea if due, then begin its explanation/example.
2. Practise the current operation. Try one brief changed task without hints. If stuck, get an explanation and retry a fresh variant.
3. End with one exact next action. The tutor updates a few lines; the learner does not complete an assessment form.

When both lanes are active, a practical starting budget is 20–30 minutes mathematics and 10–20 minutes programming, adjusted to available time/attention. Time ranges are planning choices, not evidence-based optima. If only 20 minutes are available, do the current mathematics lesson and resume coding next time. Independent mastery comes from actual performance and later fresh retrieval, not clock time or a platform badge.

Once a week use one suitable non-routine reasoning task and a short review of actual learning/errors. At the start, repartition a fraction picture or expose a false fraction-addition rule (1/2+1/2 is one whole, not 2/4). Later use the selected MathNet/AoPS/OTIS/Putnam sources as readiness permits. Keep reasoning recurring without turning the week into a test battery.

## Tutor/operator details — optional to read

Keep one private [learner state](../templates/LEARNER_STATE.md), ChatGPT, Anki and existing platforms. The [minimal AI engine](AI_LEARNING_ENGINE.md) handles focused explanation, misconception detection, evidence/help records and next actions. Record F01.basic_ops as assumed_self_report; fractions, decimals, percentages, ratios, negatives, exponents and every later topic start new. The optional DX bank remains available for relevant later samples, with a separate key and no preliminary-exam requirement. AI-assisted success is not independent mastery. No new software platform, resource-selection chore or automatic reminder is required.
