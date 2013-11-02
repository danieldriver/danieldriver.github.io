---
layout: post
title: 'New Fonts and RTL Script Support in OS X 10.9 Mavericks'
date: 2013-11-02
category: type
---

There have been plenty of [complaints][unhappy] about the loss of
features in Apple's 2013 rewrite of iWork, which has been called a
[regression][] and a [disaster][]. As someone who has never put any work
into automating Keynote, Numbers or Pages, however, I would like to call
out a feature that counts as a major advance in my line of work: support
for right-to-left scripts.

[unhappy]: http://www.macrumors.com/2013/10/25/some-power-users-are-unhappy-with-lost-features-in-the-new-iwork/
[regression]: http://www.libertypages.com/clarktech/?p=6597
[disaster]: http://www.betalogue.com/2013/10/24/pages-5-disaster/

The first hint of deeper system support for RTL scripts came in the App
Store, which offered a new version of iTunes as soon as I upgraded to
Mavericks. The new version (11.1.2) "now supports OS X Mavericks," it
announced, and "also adds support for Arabic and Hebrew."

![RTL support in iTunes](/img/rtl-itunes.png)

Shortly thereafter I noticed that the number of pre-installed fonts had
changed, and so I compared the font libraries in a clean install of
Mavericks to notes I had made about system fonts last year, after making
a clean install of Mountain Lion. Mavericks comes with 207 font
families, according to the Font Book app, up from 176 fonts in Mountain
Lion. Since I like to know what fonts I have at my disposal, I decided
to take a closer look. Happily for someone who is teaching a course in
biblical Hebrew, several changes seem to reflect the attention Apple's
engineers have paid to Hebrew language support in particular.

OS X puts fonts in two places, and the number of fonts in both
directories is higher. Here's a summary of the changes I note.

System Font Library (net +4)
----------------------------

The `/System/Library/Fonts/` folder nets four more items (up to 43 in
Mavericks from 39 in Mountain Lion). The number includes five new
TrueType Collection files (`.ttc`) and a compression of two TrueType
font files (`.ttf`) from OS 10.8 into one `.ttc` file in OS 10.9. All
additions are promoted from the larger computer font library.

### Promotions (+5)

- Avenir Next Condensed.ttc
- Avenir Next.ttc
- Avenir.ttc
- Optima.ttc
- Palatino.ttc

These promotions certainly make sense. Avenir, Optima and Palatino all
have a rightful spot in the list of the [100 Best Typefaces of All
Times][100best] (ranked 65th, 11th and 38th, respectively). Until now I
had not noticed that Apple offers its users both the original Optima,
designed by Adrian Frutiger in 1988, and its 2004 revision by Akira
Kobayashi. I know that Avenir Next adds the small caps that its
predecessor lacks. Having both together invites further comparison.

[100best]: http://www.100besttypefaces.com/

![Frutiger and Kobayashi in 2004](/img/Frutiger2004.jpg)

### Compressions (-1)

- Thonburi.ttc
    * The typeface now includes Light, Regular and Bold.
    * The font file subsumes Thonburi.ttf and ThonburiBold.ttf from 10.8.

Otherwise the core system fonts for 10.8 and 10.9 are identical.

Computer Font Library (net +27)
-------------------------------

The `/Library/Fonts/` folder nets 27 more items (up to 230 in Mavericks
from 203 in Mountain Lion). This difference actually masks the gross
number of new typefaces since, compared with OS 10.8, the number of
files is reduced in three ways in OS 10.9. There are removals for
promotion to the system library, compressions of `.ttf` files into
`.ttc` collections, and outright deletions.
 
### Removals for Promotion (-5)

See the list promotions, above.

### Compressions of Hebrew Fonts (-6)

- ArialHB.ttc
    * The typeface now includes Light, Regular and Bold.
    * The font file subsumes ArialHB.ttf and ArialHBBold.ttf from 10.8.
- Corsiva.ttc
    * The typeface includes Regular and Bold.
    * The font file subsumes Corsiva.ttf and CorsivaBold.ttf from 10.8.
- NewPeninimMT.ttc
    * The typeface includes Regular, Inclined, Bold and Bold Inclined.
    * The font file subsumes NewPeninimMT.ttf, NewPeninimMTInclined.ttf, NewPeninimMTBold.ttf and NewPeninimMTBoldInclined.ttf from 10.8.
- Raanana.ttc
    * The typeface includes Regular and Bold.
    * The font file subsumes Raanana.ttf and RaananaBold.ttf from 10.8.

### Deletions (-4)

- 宋体.ttc 
- 楷体.ttc
- 雅痞-简.otf
- 雅痞-繁.otf

### Additions (+42)

- Al Nile.ttc
- Al Tarikh.ttc
- Athelas.ttc
- Baoli.ttc
- Beirut.ttc
- Charter.ttc
- DIN Alternate Bold.ttf
- DIN Condensed Bold.ttf
- Diwan Kufi.ttc
- Diwan Thuluth.ttc
- Farah.ttc
- Farisi.ttc
- Hannotate.ttc
- Hanzipen.ttc
- Iowan Old Style.ttc
- Kaiti.ttc
- Lantinghei.ttc
- Libian.ttc
- Mishafi.ttc
- Muna.ttc
- PTMono.ttc
- PTSerif.ttc
- PTSerifCaption.ttc (all PTs augmenting PTSans.ttc in 10.8)
- Sana.ttc
- Savoye LET.ttc
- Seravek.ttc
- SnellRoundhand.ttc
- Songti.ttc
- SuperClarendon.ttc
- Waseem.ttc
- WawaSC-Regular.otf
- WawaTC-Regular.otf
- WeibeiSC-Bold.otf
- WeibeiTC-Bold.otf
- Xingkai.ttc
- Yu Gothic Bold.otf
- Yu Gothic Medium.otf
- Yu Mincho Demibold.otf
- Yu Mincho Medium.otf
- Yuanti.ttc
- YuppySC-Regular.otf
- YuppyTC-Regular.otf

The missing Chinese fonts have been replaced with many newer options
(Baoli SC, Hanzipen, Kaiti, Lantinghei, Libian, Songti, Wawati, Weibei,
Xingkai, Yuanti, Yuppy). Add to this the reorganization of the Hebrew
fonts, and the addition of no less than a dozen fonts that support
Arabic (Al Nile, Al Tarikh, Beirut, Diwan Kufi, Diwan Thuluth, Farah,
Farisi, Kaiti, Mishafi, Muna, Sana, Waseem), and I begin to suspect that
OS X Mavericks represents a systematic expansion of language support,
which of course has always been one of Apple's strengths.

And I am happy to report that these fonts are far more usable in iWork
-- at least in case of Arabic and Hebrew.

RTL Scripts in iWork
--------------------

Up to now, when making documents with Hebrew on my Mac, I have had to
use fairly obscure apps, like [Mellel][], or more recently, the
cost-prohibitive InDesign, which finally got RTL support in [CS6][].
(I'd often prefer to use LaTeX, but that is another story.) It is a
relief to be able to have RTL functionality in Pages. For the first time
I have been able to make handouts and quizzes for my Hebrew students
without resorting to apps for which I have little or no regular use.

[Mellel]: http://www.mellel.com
[CS6]: http://helpx.adobe.com/indesign/using/arabic-hebrew.html

Here, for instance, is a file with name cards for my students.
To now, Mellel has been the only other word that makes switching from
LTR to RLT and back as obvious and easy.

![RTL support in Pages](/img/rtl-names.png)

Again, in my line of work this is a very tangible and welcome advance. I
haven't generally used iWork for "serious" work, but the addition of RTL
script support in the most recent update has already started to change
that.