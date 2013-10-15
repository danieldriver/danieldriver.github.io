---
layout: post
title: "Needless Rebuild 6.0: The Faster, Simpler, Responsive Edition"
date: 2011-09-03 23:17:29
Use numbered headers: true
tags: [information management, web admin, design, type, html, css, markdown]
---

There is nothing like an approaching deadline to make me feel like building or rebuilding a website. And so, just in time for the Fall 2011 semester --- because in term time there is no time for coding frivolity --- my home on the web gets a total renovation.

#### Overview ####

* [Three Visuals](#visuals)
* [The Guts: MultiMarkdown](#guts)
* [Comments](#comments)

### Three Visual Representations of `\renewcommand{cms,html,css}{alreadynew}` {#visuals}

This section goes out to everyone who remembers that the last big iteration happened not so long ago. What was wrong with the last site?

Baroque is the word that comes to mind. Not as in needs fixing, but rather as in needless complexity. This was true on the back end and the front.

![Two up: left is the older site, dynamically rendered by ExpressionEngine; right is the latest release, served up "[baked](http://www.leancrew.com/all-this/2011/04/baked-or-fresh/)"](/img/2011/two-up.png)

Stylistically I have kept De Walpergen Pica and other elements from the Fell types, bequeathed to Oxford by [John Fell, D.D.](http://iginomarini.com/fell/), in 1686, and digitized by Igino Marini last decade. The new text face, [Skolar](http://typekit.com/fonts/skolar-web), is one I have used before. It's a better companion to DW Pica than the last one, and it has been retooled for the web since the last time I tried it.

Yet I have taken pains to simplify content and presentation. There are now three menu items instead of four (plus a goofy search bar). Also, though the new layout has variety, there is much greater consistency. If you know about arranging html divs with css, consider how much relative and absolute positioning is involved in the layout on the left. Be sure not to underestimate the nested divs needed to display images with [`jQuery.popeye`](http://dev.herr-schuessler.de/jquery/popeye/). (Non-coders, treat the following strictly as a visual.) The markup for the blue image box alone --- to say nothing of the css behind four style variations --- looks like this:

	<div class="ppy" id="ppy3"> 
		<ul class="ppy-imglist"> 
			<li> 
				<a href="img.jpg"><img src="img_thumb.jpg" alt="{title}" /></a>
			</li>
			<li> 
				<a href="img2.jpg"><img src="img2_thumb.jpg" alt="{title}" /></a>
			</li>
		</ul> 
		<div class="ppy-outer"> 
			<div class="ppy-stage"> 
				<div class="ppy-counter"> 
					<strong class="ppy-current"></strong>
					<strong class="ppy-total"></strong>
				</div>
				<div class="ppy-nav"> 
					<div class="nav-wrap">
						<a class="ppy-prev" title="Previous">Previous</a> 
						<a class="ppy-switch-enlarge" title="Enlarge">Enlarge</a> 
						<a class="ppy-switch-compact" title="Close">Close</a> 
						<a class="ppy-next" title="Next">Next</a> 
					</div> 
				</div> 
			</div> 
		</div> 
	</div>

A framed image, of course, doesn't require any more markup than this:

	<figure>
		<img src="img.jpg" />
	</figure>

Now I've got nothing against complexity --- quite the reverse. The lightbox alternative is admirably clever. But it comes with a lot of overhead. (Same goes for [ExpressionEngine](http://expressionengine.com/), wonderful as it is.) The point is that, having gone through its Rococo period, this site is now much simpler, inside and out. There are times when one really should heed the *lex parsimoniae*.

In addition to being elaborate, `jQuery.popeye` locked me in to a *fixed width* layout. Which brings me to the first of two main attractions: the new *responsive* layout. If that's a new concept, it's easier to show than to explain.

![Eight up: the old and new sites at widths of 385, 680, 900 and 1150 pixels](/img/2011/eight-up.png)

Think of a smart phone's 3.5 or 4 inch screen, think of a tablet oriented both vertically and horizontally, think of a full-fledged browser at various widths, and you can immediately see the power of [responsive web design](http://www.alistapart.com/articles/responsive-web-design/).

Most fluid layouts seem to owe a debt to [Ethan Marcotte](http://unstoppablerobotninja.com/). Mine is further indebted to [Joni Korpi's templates](http://jonikorpi.com/projects/), especially his golden grid system. It adds complexity to the back end, yes, but it's lightweight (my css file weighs 16 kb), and it's entirely elegant. Compare the [media queries](http://mediaqueri.es/popular/) approach to the invasive, annoying use of Onswipe by Slate.com, Forbes, or ten thousand Wordpress blogs.

Go ahead, try it out. If you're on a desktop, change the width of your browser. Use the full range, from min to max. If you're on a tablet, rotate from landscape to portrait and back again.[^bug] If you're on a smart phone, appreciate the custom fit. It's like black magic, no?

[^bug]: Mobile Safari currently has a [bug](http://filamentgroup.com/examples/iosScaleBug/) that causes the page to zoom past %100 when rotating from portrait to landscape (though not the reverse). For now you either have to zoom back out manually, or I have to turn off zooming on this site completely. Requiring a few extra taps is the lesser evil, I think.

### The Guts: MultiMarkdown {#guts}

Responsive layout: that's the first major attraction. The second hides on the back end, but it's consistent with the design aesthetic of graceful simplicity. In a word, it's markdown.

To see it, compare the markup of this page --- command-option-U on a Mac --- with the plain text file from which it was generated, and which sits beside it on the server at [/2011/09/needless-rebuild.md](needless-rebuild.md). The only threat to intelligibility is the html I've cited. Add `.md` to practically any URL on this site (or `index.md` in some cases) to look behind the scenes.

If markdown is unfamiliar, you can learn more about it [here](http://daringfireball.net/projects/markdown/) and [there](http://macpowerusers.com/2010/11/mpu-037-markdown-and-multimarkdown/). In a nut, instead of the awkwardness of hyper-text mark*up*, markdown lets a person turn minimally formatted plain text files into html. So this site mirrors a hierarchy of html-generating plain text files that sits on my hard drive, much in the way that I keep my other work.

So what? The selling point for me is that, thanks to two robust extensions of the original MD script, [MultiMarkdown](http://fletcherpenney.net/multimarkdown/) and [pandoc](http://johnmacfarlane.net/pandoc/), you can also generate PDFs (via LaTeX), and half a dozen other useful formats. In short, I can write up a syllabus in MD, and, from the same source file, can then distribute it on the web and on paper. Or, to take another example, I could produce an online journal in the same two formats, print and web, and only shepherd one master file through the editorial process. I plan to do exactly this, in fact. But I'm getting ahead of myself.

Pandoc's [John MacFarlane](https://github.com/jgm/yst) and MMD's [Fletcher Penney](https://github.com/fletcher/MultiMarkdown-CMS) have each shared the code they use to render websites from markdown. For several reasons I've adapted Fletcher's kit. It makes this site light weight and, now that it's set up, wonderfully easy to maintain.

To summarize new features, then, we have:

* Responsive layout
* MultiMarkdown
* Static files (faster, less liable to be [slashdotted](http://en.wikipedia.org/wiki/Slashdot_effect) or [fireballed](http://fireballed.org/))
* Draft environment on my computer
* Git repository for history and an off-site backup

To use Marco Arment's words for his own personal brew of markdown CMS, [Second Crack](http://www.marco.org/secondcrack), this thing is "unsuitable and unnecessary for nearly everyone, but I like it."

### Comments {#comments}

Comments are entirely welcome, though some time back I turned off the the comments section. That remains true here. Tweet at me or send an email. I may even post your feedback as an addendum.
