---
layout: post
title: "Nerd Tools: Filing with custom ordinal date stamps"
date: 2011-06-10 03:47 pm
tags: [RICE, archival, scripts]
---

Since late last year, when I closed some threads on my first book and started thinking more seriously about the next one, I have undertaken some self-improvement projects in the areas of data storage and backup. Part of this has meant reforming my digital filing system, and I settled on (managed) hordes of text files and PDFs marked with two sets of identifiers.

### Archiving text files and PDFs with RICE ###

1. The first is a 9-digit date and time stamp with the pattern YYDDDHHMM, where DDD = the day of the year out of 365 (or 366 in leap years). Today, for example, is the 161st day of 2011. The hour and minute are the hour and minute in which this post began (a text file's date created).
	* If you ever ride public transit in Toronto, the ticket you get has a big number printed at the top. Today, that number is also 161.
	* This way of counting time for files is useful for a quick reckoning of mental debts --- I think of text notes like obligations in a 30/60/90 day billing cycle --- and I settled on it only after a trial run of 10-digit codes with MMDD instead of a straight ordinal day count (sometimes, I think erroneously, called a Julian date). I think I made up my mind about the convention while riding the subway.
	* The date stamp goes two places in my system:
		- It is the first part of the filename.
		- Prefixed with `id` (for a .txt and .md file) or `pdf` (for a .pdf, of course), it goes into  an appropriate keyword field. With MultiMarkdown there's a place in the document preamble. With PDFs there's a field in the document metadata.
	* Thus this file's name begins with `111611306-` and its body contains the keyword `id111611306`. A Spotlight (or Google Desktop) search for either will turn up only this file on my computer, unless I've used `id111611306` as a cross-reference in some other file.

2. Along with the date ID is a keyword string inspired by that of [AmberV][8] over at the Scrivener forums. It consists of a letter, a number, a second number, and a single keyword identifier, all set in curly brackets.  The tag for this post, for example, is `{C2.1.OccPub}`. Tokens go from broad to specific.
	* There are only four letters, one for each of the four main classes of files:
		- `R` = **Record**, for all records of things I observe, in me, in research, in books, whatever.
		- `I` = **Information**, for more strictly factual knowledge, typically filed for reference purposes.
		- `C` = **Communication**, which includes everything from letters and email to forum and blog posts. (C1 is private, C2 is public. A C1.1 or C2.1 originates with me, and a C1.2 or C2.2 is received. Hence this post is a C2.1. Write a response on your site and I will file it as a C2.2.)
		- `E` = **Exposition**, for things put forth formally. `E` goes beyond most blog posts; although the distinction from `C` is slightly arbitrary, it reflects a class of work that is more creative, formal, and (ideally) recursive.
	* The letter also goes in the filename, after the date stamp, thus: `111611306-C-`.
	* I call the whole thing the RICE archival system.

Getting all that metadata into PDFs is not uniformly easy. [Hazel][1] will automatically rename files with their date created, but the keyword field is not readily accessible, and my second string takes some manual input anyway.

Martin Michel's [Natina][2] scriptlet presented a likely solution. His command line utility was ready to go, but it meant reworking his AppleScript framework to make it a pdf RICEr (not for potatoes). One problem in particular took some thought.

### Ordinal ("Julian") dates in AppleScript ###

So but here's the part some Googling stranger might find useful. I could adapt the AppleScript easily enough, but how to build in my custom date stamp? It's no problem at the command line, and if the current date were all I needed I could just do this:

	set datekey to do shell script "date +\"%y%j%H%M\""

However, I needed to get a consistent 9-digit date from a variable in AppleScript. With some help from a Québécois scripter called [Pierre][3], I managed to get the same result for the current date without recourse to a shell script.

	set x to current date

	set year_number to year of x
	if year_number > 1999 then
		set year_number to year_number - 2000
	else
		set year_number to year_number - 1900
	end if
	if year_number < 10 then set year_number to "0" & year_number

	copy x to y
	set day of y to 1
	set month of y to 1
	set day_number to (x - y) div days + 1
	if day_number < 10 then
		set day_number to "00" & day_number
	else if (day_number < 100) and (day_number > 9) then
		set day_number to "0" & day_number
	end if

	set SS to time of x -- in seconds
	set HH to SS div 3600
	set SS to SS mod 3600
	set MM to SS div 60
	set SS to SS mod 60
	if HH < 10 then set HH to "0" & HH
	if MM < 10 then set MM to "0" & MM
	if SS < 10 then set SS to "0" & SS -- not used in my stamp
	
	-- test that results are identical
	display dialog datekey & return & year_number & day_number & HH & MM

It's quite a circumlocution, but with the benefit that the `x` variable works on any date you might pass it in AppleScript.

### NerdTool ###

One more thing. In addition to the homebrew nerd tools above, [NerdTool][4] is a great way to get any time and date stamp you might like onto your desktop. If you work for the TTC, all you might want is `date +'%j'`. To show the present moment's unique ID, I tell it: `date +'at %H:%M = id%y%j%H%M'`.

![Desktop screen grab on 10 June 2011][screen]

Here's what my current desktop looks like, *hommage à* [Brett Terpstra][5], [Dr Drang][6] and the [Hubble telescope][7]. Note the bottom left corner.

[1]: http://www.noodlesoft.com/hazel.php
[2]: http://www.macionette.com/blog/?p=78
[3]: https://discussions.apple.com/thread/2748731
[4]: http://mutablecode.com/apps/nerdtool
[5]: http://brettterpstra.com/my-desktop-february-2011/
[6]: http://www.leancrew.com/all-this/2011/03/nerdtool-picts-and-buddhism/
[7]: http://www.spacetelescope.org/images/heic0706a/
[8]: http://www.literatureandlatte.com/forum/viewtopic.php?p=16277#p16277
[screen]: /storage/Desktop_10June2011.png "Desktop screen grab on 10 June 2011"