# KnowledgeHub


### Hugo Modules
hugo mod init github.com/sriram-yeluri.github.io
go mod tidy
hugo mod get github.com/google/docsy@v0.10.0
hugo mod graph


## Add docsy theme as a submodule

```sh
git submodule add https://github.com/google/docsy.git themes/docsy
echo 'theme = "docsy"' >> config.toml
git submodule update --init --recursive

# to uninstall module
git submodule deinit --all
git rm --cached themes/docsy
rm -rf .git/modules/path_to_submodule
git commit -m "Removed submodule <name>"
rm -rf path_to_submodule
```
## Google Search
```
http://www.google.com/ping?sitemap=https://sriram_yeluri.gitlab.io/sitemap.xml
```

## Site generator
```
https://www.xml-sitemaps.com/
```

## HUGO shortcodes

### Alerts

{{< alert >}}This is an alert.{{< /alert >}}
{{< alert title="Note" >}}This is an alert with a title.{{< /alert >}}
{{% alert title="Note" %}}This is an alert with a title and **Markdown**.{{% /alert %}}
{{< alert color="success" >}}This is a successful alert.{{< /alert >}}
{{< alert color="warning" >}}This is a warning.{{< /alert >}}
{{< alert color="warning" title="Warning" >}}This is a warning with a title.{{< /alert >}}

### Definition lists can be used with Markdown syntax. Definition headers are bold.

Name
: Godzilla

Born
: 1952

Birthplace
: Japan

Color
: Green


To hide a page or section from the menu, set toc_hide: true in front matter.

### Disabling the sidebar search box
By default, the search box appears in both the top navigation bar and at the top of the sidebar left navigation pane. If you don’t want the sidebar search box, set sidebar_search_disable to true in config.toml
`sidebar_search_disable = true`

### Docsy Documentation
Docsy has its own user guide. use Hugo to generate and serve a local copy of the guide.

```sh
cd docsy/userguide/
hugo server --themesDir ../..
```

### References
[docsy-theme](https://themes.gohugo.io/docsy/)
[docsy](https://www.docsy.dev/docs/getting-started/)
[docsy-example](https://github.com/google/docsy-example)
[hugo-modules](https://www.docsy.dev/docs/updating/convert-site-to-module/)

