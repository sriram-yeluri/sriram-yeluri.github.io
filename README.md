# KnowledgeHub

This is a knowledge Hub site created for self learning

### How to initiate Hugo Modules
hugo mod init github.com/sriram-yeluri.github.io
go mod tidy
hugo mod get github.com/google/docsy@v0.10.0
hugo mod graph


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
[creating-a-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
[hosting-on-github](https://gohugo.io/hosting-and-deployment/hosting-on-github/)


