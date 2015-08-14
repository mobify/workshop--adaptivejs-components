# Part 1: Installing Components

Now that we understand what Adaptive and Stencil components are, let's get our hands dirty!


## Installing Stencil Components

Open up your Terminal and navigate to the project directory that we've pre-generated for you.

```
cd my-project
```

Let's install the Card and Tabs Stencil components using the following commands:

```
grunt component:install:card --branch dev
```

As well as...

```
grunt component:install:tabs --branch dev
```

> __Note__ *When Adaptive components are out of beta, the `--branch dev` flag won’t be needed. This is temporary and will not be used in ordinary circumstances.*
>
> *What does the flag do? When you install a Stencil component using the `grunt component:install:` the component is pulled down from it's Github repo. By default, the component is pulled down from it's master branch. As such, the `--branch` flag allows you to choose an altenative branch to pull from. So using `--branch dev` will pull the component down from the component's `dev` branch in Github.*

> __Note__ *The `grunt component` command must be executed from inside an Adaptive.js project*

The `grunt component:install:` command installs a Stencil component via Bower and "auto-magically" modifies the necessary files to ensure that the component can be used right away.


## Add the Stencils to a Template

Now that we've installed our two Stencil components, let's go ahead and add them to a template file.

Open `/my-project/app/pages/home/home.dust` in your text editor of choice and add the following:

```html
<div class="t-home__section">
    {@c-card title="My Card Title"}
        <p>Hello world!</p>
    {/c-card}
</div>

<div class="t-home__section">
    {@c-tabs}
    {:tabStrip}
        {@c-tabs__tab}Tab 1{/c-tabs__tab}
        {@c-tabs__tab}Tab 2{/c-tabs__tab}
    {:body}
        {@c-tabs__pane}Pane the first{/c-tabs__pane}
        {@c-tabs__pane}Pane the second{/c-tabs__pane}
    {/c-tabs}
</div>
```


## Preview the Installed Components

In the terminal, run the following command:

```
grunt preview
```

Open up your browser of choice and navigate to [this page](https://preview.mobify.com/?url=http%3A%2F%2Fwww.merlinspotions.com%2F&site_folder=http%3A%2F%2Flocalhost%3A8080%2Fadaptive.js&disabled=0&domain=&scope=1). Click the **"Preview"** button, as per the below screenshot:

![Screenshot of the Mobify Preview Form]
(https://dl.dropboxusercontent.com/u/4782540/Mobify/Workshop/mobify-preview-form-screenshot.png)

Once the preview site loads, you should see the homepage template fully rendered along with the two Stencil components we added above!


## Component Dust Helper Syntax

You may be wondering what all the above weird looking Dust markup is all about. Well, it's a Dust helper that we created to make components easier to work with. The `@` symbol is Dust's way of using helpers, and the text that follows it is what helper is being invoked. For example, `{@getUrl path="..."}` is how you invoke the `getUrl` helper, to which you pass data through parameters like `path`. Likewise, our component Dust helper is the same! `{@c-my-component /}` invokes the component Dust helper which is calling the `my-component` component.

Before creating the component helper, Dust did not have a good way to reuse component markup. Dust does have partials (i.e. `{>'path/to/partial/template' /}`), but partials lack power and features, such as the ability to isolate component context from page context.

We'll learn in the upcoming steps the many ways we can use the component helper to great effect!


## Done! Onward!

1. Enter following command on the command line in Terminal:

    ```
    git reset --hard HEAD && git clean -df
    ```

    This command resets the branch so that you can start fresh at the next step of the workshop.

2. Now run the following command to proceed to the next topic in the workshop:

    ```
    git checkout part-2-customize-markup
    ```


3. Proceed to [Customizing Markup](https://github.com/mobify/workshop--adaptivejs-components/blob/part-2-customize-markup/README.md), the second topic in the workshop!
