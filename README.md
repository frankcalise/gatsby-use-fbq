<div align="center">
<h1>gatsby-use-fbq</h1>

<p>A reusable hook and higher order component to give access to Facebook Pixel's track event method when using gatsby-plugin-pixel</p>

</div>

<hr />

## The Problem

In my Gatsby projects, I wanted to use Facebook Pixel for tracking events. The [gatsby-plugin-facebook-pixel](https://github.com/gabefromutah/gatsby-plugin-facebook-pixel) easily adds the Pixel script to your site and automatically triggers the `ViewContent` event via onRouteUpdate. However, there is no support for [Standard Events](https://developers.facebook.com/docs/facebook-pixel/reference) as documented in one of the current [issues](https://github.com/gabefromutah/gatsby-plugin-facebook-pixel/issues/4) with the plugin.

## This Solution

The author of the plugin describes the way to do this as

> It might be best to call the fbq global from the specific page, through `componentDidMount` or `useEffect`.

This solution provides a Hook and Higher-Order Component to do just that. It checks for the global being available due to SSR and has an option to enable logging since tracking isn't available for localhost testing with the plugin.

## Installation

`npm install --save gatsby-use-fbq`

## Usage

### Hook

```javascript
import React from "react";
import useFbq from "../../hooks/useFbq";

function MyComponent() {
  const fbq = useFbq();

  fbq("AddToCart", {
    content_ids: ['product-id'],
    num_items: 1,
    currency: "USD",
    value: 10.00
  });

  // ...
}
```

### Higher-Order Component

Coming soon :)
