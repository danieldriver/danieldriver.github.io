---
layout: post
title: Getting Spotlight to index markdown files in Lion
date: 2011-09-20 17:49:40
tags: [tech, OS X, Spotlight, markdown]
---

After performing a clean install of OS X 10.7, Spotlight refused to index my markdown files, even with a QLMarkdown plugin derived from the one that [Brett][terpstra] says does the trick for him. Following [two][macosxtips] similar [sets][macworld] of instructions, I was able to get the Spotlight index working again by adding the markdown file format to the `.plist` file located here:

	/System/Library/Spotlight/RichText.mdimporter/Contents/Info.plist

Depending on how you get there, it may be necessary to right click and "Show Package Contents" for `RichText.mdimporter`.

What I did from there:

1. Note the correct UTI, which [for Markdown][md-uti] is `net.daringfireball.markdown`.

	In Terminal you can get this for any file type by using the command `mdimport -n -d1 somefile.ext`, which in the present case returns: `Imported 'somefile.md' of type 'net.daringfireball.markdown' with no plugIn`.

2. Make a copy of `Info.plist` and then open it with a text editor or Xcode.

3. Add `net.daringfireball.markdown` as a string in the document content types array (detail below), and then swap out the modified `Info.plist` with the original.

4. In Terminal, give Spotlight a nudge to have it re-index your markdown files: `mdimport ~/PathTo/MarkdownFiles/*.md`

My modified `Info.plist` file looks like this:

	...
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>MDImporter</string>
			<key>LSItemContentTypes</key>
			<array>
				<string>net.daringfireball.markdown</string>
				<string>public.rtf</string>
				<string>public.html</string>
				...

Back in Terminal you can verify that the import works as it should with the command from step 1. It should now return something like:

	Imported '/Users/…/somefile.md' of type 'net.daringfireball.markdown' with plugIn /System/Library/Spotlight/RichText.mdimporter.

That's it. I don't know why [QLMultiMarkdown][qlmm] wasn't doing the necessary, but as MMD's papa suspects some issues with it, I'm glad to have Spotlight indexing work independently of it.

[terpstra]: http://brettterpstra.com/a-bash-function-for-markdown-bloggers/#fn:spot
[macosxtips]: http://www.macosxtips.co.uk/index_files/terminal-commands-for-improving-spotlight.php
[macworld]: http://hints.macworld.com/article.php?story=2005052015041510
[md-uti]: http://daringfireball.net/linked/2011/08/05/markdown-uti
[qlmm]: https://github.com/fletcher/qlmultimarkdown/