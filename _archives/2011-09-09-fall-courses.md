---
layout: post
title: Fall 2011 syllabi are going up today, in several formats
date: 2011-09-09 10:32:07
tags: [syllabi, markdown, LaTeX, GitHub]
---

Final revisions of syllabi for the Fall 2011 are going up today. Students, welcome back.

Plain text enthusiasts, this is the first time I have produced these documents fully from markdown. (Since my school has a MS Word syllabus template I needed to work up a little LaTeX styling, but that has been done now.) The benefit of abandoning Word? My content appears exactly as I wish, in several formats simultaneously.

Take Hebrew 201 for example. You can access:

1. The [web version](/resources/syllabi/2011/hebr201), which should serve up well on everything from your iPod to a computer lab PC.
2. The [PDF version, hebr201.pdf](/resources/syllabi/2011/hebr201.pdf), for printing or offline access.
3. The [LaTeX file, hebr201.tex](/resources/syllabi/2011/hebr201.tex), by which the PDF was made.
4. The master file that generates all of the above, written in MultiMarkdown: [hebr201.md](/resources/syllabi/2011/hebr201.md).

If you want any of these, the easiest thing is to follow links to the page you're after, and then click through to the PDF, or add the appropriate extension --- `.pdf`, `.tex`, `.md`,  `.etc`.

Did I mention that the whole site is now staged with a git repository?

Versioning is, for present purposes, probably most important with the syllabi. A syllabus is something I take to be a kind of contract, but one which must sometimes be amended in the course of a semester. (In my case that's part of the contract.)

![GitHub for Mac: Even when you can't sync (like if your private repositories are not on GitHub), you can browse](/img/2011/GitHub-for-Mac.png)

Since I'm already building everything from the command line, it's wonderful to be able to wrap up with a commit to my local repository and the simple words `$ git push web`.