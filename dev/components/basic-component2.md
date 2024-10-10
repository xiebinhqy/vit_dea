---
layout: doc
title: Docs with VitePress 
titleTemplate: Vite & Vue powered static site generator
description: VitePress
editLink: true
lastUpdated: true
navbar: true
sidebar: true
footer: true
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---

{{ $frontmatter.title }}

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
这个是警告！！！！
:::

::: 危险
这个很危险
:::

::: details
This is a details block.
:::


Guide content


type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]


#  这个是大文件夹

this is big file_open


