// Risograph lesson illustrations from Dataslope, picked by hand across its 32 courses
// (source: public/images/<id>-cutout.webp and data/illustration-prompts.json in the
// Dataslope repo). Files are in public/media/dataslope/riso/, sized for their slot at 2x:
// 520px wide in the grids, 240px tall in the strips; w and h are the file's pixel size.

export type Riso = { file: string; w: number; h: number; alt: string };

/** The Illustrations grid: four rows of six. */
export const WALL: Riso[] = [
  { file: "c-functions-anatomy-function", w: 520, h: 189, alt: "A machine shown in cross-section, its input opening, its inner works and its output chute all visible at once." },
  { file: "cs-higher-order-functions-pattern-before-name", w: 520, h: 218, alt: "A machine with an empty bracket on its side, three different small tools each able to clip into that bracket." },
  { file: "python-history-first-release", w: 520, h: 152, alt: "A lone figure at a desktop computer in a snowy bay window, a parcel travelling along a wire to three more computers in a row." },
  { file: "pandas-concat-vs-merge-concat-shapes-match", w: 520, h: 190, alt: "Two boards of identical width stacked one directly onto the other so their columns line up into one taller board." },
  { file: "pl-data-types-and-schemas", w: 520, h: 219, alt: "A rack of column slots each cut to a different profile, and a matching set of column blocks being lowered so each fits only its own slot." },
  { file: "cpp-types-and-values-ariane-5", w: 520, h: 258, alt: "A launcher lifting off from a coastal tower and tipping hard off its climb as a red burst breaks from its flank, a tracking dish watching from the ground." },
  { file: "db-the-relational-revolution-race-ibm-lost", w: 520, h: 169, alt: "Published drawings pinned openly on one wall while a small workshop across the way builds from them first." },
  { file: "fp-evolution-of-complexity-from-scripts-systems", w: 520, h: 201, alt: "One short strip of instructions on a bench beside a wall of interlocking frames built from many such strips." },
  { file: "viz-a-brief-history-of-data-pictures-from-parliamentary-foldouts", w: 520, h: 213, alt: "A large folded paper chart opened out on a table beside a small glowing panel showing the same shape." },
  { file: "mcs-rise-of-oop-oop-became-dominant", w: 520, h: 165, alt: "A workshop where every job arrives already boxed with its own tools, and the benches are built to take boxes." },
  { file: "lite-why-sqlite-destroyer", w: 520, h: 233, alt: "The deck of a grey warship with one small file block on a console, and an empty bolted footprint where a server cabinet would have stood." },
  { file: "sql-numbers-and-casting-rounding-family", w: 520, h: 214, alt: "One block carried up onto four different steps of the same short staircase, each by its own separate ramp." },
  { file: "web-html-images-media", w: 520, h: 155, alt: "A page panel with a picture plate mounted in it and a small play tab on a second plate below." },
  { file: "rlang-why-r-matters-today-r-unusually-good-at", w: 520, h: 190, alt: "A bench with a plotting arm on one side and a rack of statistical gauges on the other, both fed from the same tray." },
  { file: "java-java-conquers-the-world-free-but-corporate", w: 520, h: 191, alt: "A machine handed out freely from a counter while its mould stays bolted behind the counter." },
  { file: "ml-why-machine-learning-exists-rules-break-down", w: 520, h: 197, alt: "A tower of hand-cut rule cards leaning and starting to slip." },
  { file: "gg-interesting-discussions-where-r-came", w: 520, h: 174, alt: "A workbench in a research lab with statistical tools already bolted to it." },
  { file: "nlp-discussions-eliza", w: 520, h: 215, alt: "A figure sitting on a low couch at the left facing a teletype terminal on a small table, an empty armchair standing behind the terminal, and one plain speech bubble rising from its screen." },
  { file: "ml-linear-regression-ceres", w: 520, h: 195, alt: "A telescope aimed across a dark band where a small rock passes, and a sheet with one smooth curve marking where the rock will reappear." },
  { file: "oopj-composition-first-example-car", w: 520, h: 222, alt: "A vehicle body with an engine block fitted inside it, the two joined permanently." },
  { file: "rlang-statistics-before-computers-craft-built-around", w: 520, h: 226, alt: "A desk holding a mechanical adding machine and one guarded column of solid filled cells." },
  { file: "fp-effect-management", w: 520, h: 149, alt: "A sealed line of machines with all its hoses, taps and wires gathered at one end and plugged into a single marked panel." },
  { file: "rx-context-for-shared-state-three-pieces-create-provide", w: 520, h: 226, alt: "A supply line run through the walls of a house, any room able to tap it without a pipe being handed down room by room." },
  { file: "stat-sampling-and-bias-survivorship-bias-most-famous", w: 520, h: 242, alt: "An aircraft outline marked only where the returning ones were hit, the ones that never came back absent from the bench." },
];

/** The Lessons strip. */
export const LESSONS: Riso[] = [
  { file: "fp-roots-of-functional-thinking-lambda-calculus-math", w: 601, h: 240, alt: "A plain sheet of hand-drawn marks on a bench with a working machine built directly on top of it." },
  { file: "pandas-history-of-data-visicalc", w: 917, h: 240, alt: "A small personal computer showing an empty grid with one cell lit, and a row of blocks tipping into one another across the grid beside it." },
  { file: "js-asynchronous-thinking-async-exists-at", w: 890, h: 240, alt: "A single counter where one slow order blocks a long queue behind it, and beside it the same counter with the slow order set aside to one side while the queue moves." },
  { file: "c-pointers", w: 921, h: 240, alt: "A long row of mail slots, a card in one slot pointing its arrow at another further down, and a figure following the arrow." },
  { file: "rx-props", w: 505, h: 240, alt: "A parent panel handing a sealed tray down to a child panel below, the child able to read the tray but not to alter it." },
  { file: "sysc-structs-and-unions", w: 964, h: 240, alt: "A tray with three separate compartments beside a tray of the same size whose one compartment three parts take turns occupying." },
  { file: "js-closures-simplest-closure", w: 580, h: 240, alt: "A figure carrying a small sealed box out through a doorway, one block from the room still visible inside the box, the room and its shelves filling the rest of the frame." },
  { file: "rx-handling-events", w: 952, h: 240, alt: "A button pressed on a panel, a short cord carrying the press to a small handler box behind it." },
  { file: "viz-a-brief-history-of-data-pictures-first-picture-disagreement", w: 641, h: 240, alt: "An early printed chart pinned to a board with two figures pointing at different parts of the same line." },
  { file: "python-control-flow-real-world-impact", w: 570, h: 240, alt: "A rail with points and a loop, carts routed differently at each pass." },
  { file: "duck-why-window-functions-problem-group-by", w: 1074, h: 240, alt: "Chips collapsing into one summary block on one bench, and on the next the chips still standing, each with its own tag." },
  { file: "scipy-math-meets-computation-wrong-floating-point", w: 563, h: 240, alt: "A caliper measuring a tiny gap between a mark and where a block actually sits." },
  { file: "gg-plotting-systems-that-dont-scale-draw-one-thing", w: 721, h: 240, alt: "A figure setting one block at a time onto an inked panel, a long queue of blocks still waiting in a tray beside them." },
  { file: "tsa-acf-and-pacf-watch-cheat-sheet", w: 840, h: 240, alt: "A wave laid over the four reference shapes, one of them matching it exactly." },
  { file: "cs-functional-design-patterns-pattern-2-result-either", w: 846, h: 240, alt: "A load taking one of two chutes at each station, the lower chute carrying the first fault straight to the end untouched." },
  { file: "lite-data-exploration", w: 674, h: 240, alt: "A crate opened and its first rows fanned across a bench for a first look." },
  { file: "web-how-the-web-works", w: 658, h: 240, alt: "A laptop sending a folded note along a cable to a server drum, which sends a larger page back along the same cable." },
  { file: "ml-ensembles-and-random-forests-trick-one-bootstrap", w: 705, h: 240, alt: "Several scoops taken from one bin with replacement, each scoop feeding its own small machine." },
];

/** The Challenges grid: two rows of six. */
export const CHALLENGES: Riso[] = [
  { file: "pl-joins-row-multiplication-trap", w: 520, h: 190, alt: "Two boards joined where one key matches three rows on the far side, the tray between them filling with more rows than either board held." },
  { file: "rlang-interpreting-plots", w: 520, h: 211, alt: "A chart on a stand with a hand tracing its shape and a magnifier held over two marks that break the pattern." },
  { file: "python-sets-sets-work", w: 520, h: 202, alt: "A bin with a narrow mouth accepting a block once and rejecting an identical second." },
  { file: "sql-subqueries", w: 520, h: 208, alt: "A small machine inside the hopper of a larger one, making a tray of blocks that the larger machine then works on." },
  { file: "java-interfaces", w: 520, h: 227, alt: "Three different machines fitted with the same front plate and handle, so one hand works all three the same way." },
  { file: "sysc-disasters-therac-25", w: 520, h: 247, alt: "A large blue radiation therapy machine with a heavy rotating head standing over a flat empty treatment couch on the left, a stylized operator seated at a small terminal on the right, one narrow red beam falling on the couch, and a yellow safety latch lying detached on the floor between them." },
  { file: "tsx-utility-types", w: 520, h: 195, alt: "One crate passing through three small presses that make it partial, then read-only, then narrower, each leaving a visibly changed crate." },
  { file: "oopj-encapsulation", w: 520, h: 191, alt: "A sealed cabinet with its works hidden inside and two clean handles on its face, a figure using only the handles." },
  { file: "tsx-discriminated-unions", w: 520, h: 232, alt: "Three sealed boxes with differently shaped tags, a sorter reading only the tag to send each down its own chute." },
  { file: "scipy-limits-of-manual-calculation-three-walls", w: 520, h: 219, alt: "A figure at a desk facing three walls closing in, each taller than the last." },
  { file: "cpp-data-structures-intuition-associative-containers", w: 520, h: 218, alt: "A wall of small drawers each with a keyhole, a key going straight to one drawer." },
  { file: "sns-facets-and-grids", w: 520, h: 152, alt: "Four small panels in a row over one continuous axis rule, with a single key block at the right serving every panel." },
];

/** The Playgrounds strip. */
export const STRIP: Riso[] = [
  { file: "c-computational-thinking-four-habits-computational", w: 518, h: 240, alt: "Four small tools hanging above a bench, each one shown taking a different bite out of the same awkward slab." },
  { file: "cs-ienumerable-and-iteration-interface-itself", w: 634, h: 240, alt: "A sealed drum with one crank and one chute, handing out a single block per turn." },
  { file: "pl-missing-data-finding-them", w: 581, h: 240, alt: "A board passed under a lamp that lights only the covered cells, leaving the filled ones dark." },
  { file: "db-from-ingres-to-postgresql-berkeley-reads-papers", w: 570, h: 240, alt: "A plain bound paper open on a workbench with a half-built machine taking shape beside it." },
  { file: "fp-composable-architecture-picture", w: 681, h: 240, alt: "A wall assembled from interchangeable panels, one panel lifted out and a differently shaped one dropped into the gap." },
  { file: "llm-sampling-softmax-turns-scores", w: 709, h: 240, alt: "A row of chips of different heights fed into a machine that hands back a spinner with wedges of matching sizes." },
  { file: "viz-best-practices-hierarchy-clarity", w: 594, h: 240, alt: "A stack of four plates, the boldest mark on top and the faintest ornament at the bottom." },
  { file: "sql-grouping-data", w: 1141, h: 240, alt: "A scatter of mixed blocks being raked into three neat piles, and one tall summary block standing beside each pile." },
  { file: "web-css-getting-started-three-selectors-ll", w: 525, h: 240, alt: "Three stencils hanging above a board of mixed shapes, each cut to catch a different kind." },
  { file: "jcol-the-collections-framework-two-big-ideas", w: 669, h: 240, alt: "One standard fitting and one standard crank shown together on the front of several different containers." },
  { file: "dsa-why-cpp-for-dsa-language-landscape", w: 871, h: 240, alt: "Three benches side by side, each one quickest at a different stage of the same job." },
  { file: "css-transforms-hover-interaction", w: 737, h: 240, alt: "A flat card tilting up on one edge as a hand passes over it, its footprint on the page unchanged." },
  { file: "rlang-sampling-and-distributions", w: 684, h: 240, alt: "A scoop taken from a large bin, the scoop's chips poured into bins that build a small mound." },
  { file: "scipy-discussions-patriot-missile", w: 602, h: 240, alt: "A large clock face on the left whose hand has slipped just past its mark, a round radar screen in the middle showing a single blip, and a track passing wide of that blip on the right." },
  { file: "sns-figure-level-vs-axes-level", w: 633, h: 240, alt: "One panel drawn alone on a bench, and a whole grid of such panels built in one stroke beside it." },
  { file: "lite-grouping-data-one-result-row-per", w: 556, h: 240, alt: "Three bins filled from a single pile, each bin handing one summary card up to the rail above it." },
  { file: "stat-continuous-distributions", w: 667, h: 240, alt: "A smooth unbroken ramp lying over a rail, its height varying with no steps or gaps along its length." },
  { file: "tsx-scalable-architecture-application-layer-use-cases", w: 638, h: 240, alt: "An inner ring holding the rules with every outside connection plugged into its rim rather than reaching through it." },
];

/** The closing grid: four rows of six. */
export const CLOSING: Riso[] = [
  { file: "js-debugging-and-reasoning-debugging-really", w: 520, h: 197, alt: "A figure holding a lamp to a machine that has stopped, the lamp lighting one jammed part rather than the whole machine." },
  { file: "cs-composing-pipelines-every-pipeline-value", w: 520, h: 234, alt: "A whole chain of joined machines lifted as one piece and set into a larger machine's slot." },
  { file: "cs-birth-of-linq-shape-problem", w: 520, h: 189, alt: "The same awkward shape of hand-built machinery repeated on four benches, each built slightly differently." },
  { file: "mcs-anders-and-birth-of-csharp-short-biography-anders", w: 520, h: 184, alt: "A workbench carrying three finished machines in a row, each built by the same hand and clearly related." },
  { file: "jcol-equality-and-hashing-hashcode", w: 520, h: 195, alt: "A block dropped into a mixing machine whose chute swings to one of several bins." },
  { file: "java-exception-handling-exception", w: 520, h: 180, alt: "A block leaving a belt mid-run and falling toward a padded basket held beneath." },
  { file: "ml-regression-classification-clustering", w: 520, h: 146, alt: "Three benches, one fitting a ramp to chips, one sorting chips into two bins, one grouping chips with no bins given." },
  { file: "gg-origins-layered-grammar", w: 520, h: 178, alt: "Three transparent sheets held apart in a stepped stack on the right, each carrying a different mark, and a figure at the left lowering the topmost sheet onto the others." },
  { file: "nlp-frequency-distributions-lexical-diversity-varied", w: 520, h: 202, alt: "Two racks of tiles of the same total height, one made of many distinct kinds and one of few repeated." },
  { file: "nlp-what-is-nlp-rules-versus-learning-brief", w: 520, h: 155, alt: "A hand-cut stencil beside a machine cutting its own stencil from a pile of worked examples." },
  { file: "oopj-packages-and-architecture-tiny-many-classes-example", w: 520, h: 181, alt: "A set of parts kept in one flat tray but grouped by color into the layers they would otherwise live in." },
  { file: "oopj-gang-of-four-small-responsibility-puzzle", w: 520, h: 186, alt: "Seven cards on a table, each holding some of the knowledge and some of the work, being sorted into who does what." },
  { file: "python-syntax-and-indentation-blocks-indentation", w: 520, h: 239, alt: "A stack of shelves where the depth of a shelf alone says what belongs on it, with no brackets anywhere in sight." },
  { file: "python-exceptions-happens-exceptions-are", w: 520, h: 148, alt: "A block falling past every basket on a bench and off the end onto the floor." },
  { file: "rx-context-for-shared-state-prop-drilling-problem", w: 520, h: 186, alt: "A tray handed down through five nested frames, each pair of hands only passing it on." },
  { file: "rx-components-and-jsx", w: 520, h: 229, alt: "One page assembled from separate framed panels that each clip in and out, one panel lifted out to show the socket beneath." },
  { file: "scipy-discussions-eniac-forecast", w: 520, h: 184, alt: "A room-sized cabinet computer hung with patch cables on the left, a coarse square grid laid over a plain map of North America in the middle, and a cloud with a wind arrow standing over that grid at the right." },
  { file: "sns-visual-storytelling-choosing-right-chart", w: 520, h: 217, alt: "One tray of chips with four chart frames fanned above it and a hand reaching for the fitting one." },
  { file: "duck-olap-vs-oltp-two-jobs-one", w: 520, h: 214, alt: "A counter handling one parcel at a time beside a warehouse aisle being swept end to end." },
  { file: "duck-why-duckdb", w: 520, h: 190, alt: "A heavy remote strongroom with a long pipe on one bench, and on the next a compact engine sitting right beside the workbench." },
  { file: "lite-filtering-rows", w: 520, h: 173, alt: "A board of rows passing a gate that swings open only for rows carrying a matching notch." },
  { file: "stat-ab-testing-randomization-licenses-causal", w: 520, h: 205, alt: "A mixed heap of chips split by a spinner rather than by hand, the two halves visibly alike." },
  { file: "sysc-memory-bugs-2-double-free", w: 520, h: 161, alt: "A crate handed back over a counter twice, the counter clerk holding out empty hands the second time." },
  { file: "tsx-static-analysis-in-action-compiler-proves", w: 520, h: 188, alt: "A shaped gate stopping a mismatched block before the belt has started moving." },
];
