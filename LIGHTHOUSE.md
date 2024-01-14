# LIGHTHOUSE CORRECTIONS 

#### Trevor Rapp

<br/>

---

<br/>

### PERFORMANCE

**Original score:** 56%
**Improved score:**

*these are things I've done, just trying to figure out what category to put them in*

moved the js files so that they were in their proper of rendering
separated CSS style sheets into the most basic from what could be rendered later and made what could be rendered later load asynchronously
split out 800 lines of html from footer into it's own file that will only load when a user interacts with the link, thereby cleaning up the code and code splitting
added async to the html tags for the last three script tags so they wouldn't have to load synchronously
used a bundler to minify the code
To prevent FOIT: 

added following to preload:

  <link rel="preload" href="css/critical.css" as="style">
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap">

added font-display: optional;

 
##### First Contentful Paint

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Largest Contentful Paint

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Total Blocking Time

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Cumulative layout shift

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Speed Index

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### First Contentful Paint

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

---

<br/>

### ACCESSIBILITY

**Original score:** 97%
**Improved score:**

##### Navigation

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Audio and Video

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Strengths (passed without assistance of LightHouse reports)

- [X] [aria-hidden="true"] is not present on the document <body>
- [X] Buttons have an accessible name
- [X] Image elements have [alt] attributes
- [X] [user-scalable="no"] is not used in the <meta name="viewport"> element and the [maximum-scale] attribute is not less than 5.
- [X] Background and foreground colors have a sufficient contrast ratio
- [X] Document has a <title> element
- [X] [id] attributes on active, focusable elements are unique
- [X] <html> element has a [lang] attribute
- [X] <html> element has a valid value for its [lang] attribute
- [X] Links have a discernible name
- [X] Lists contain only <li> elements and script supporting elements (<script> and <template>).
- [X] List items (<li>) are contained within <ul>, <ol> or <menu> parent elements
- [X] Image elements do not have [alt] attributes that are redundant text.

<br/>

---

<br/>

### BEST PRACTICES

**Original score:** 95%
**Improved score:** 

##### General

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Trust and Safety

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Strengths (passed without assistance of LightHouse reports)

- [X] Uses HTTPS
- [X] Avoids deprecated APIs
- [X] Allows users to paste into input fields
- [X] Avoids requesting the geolocation permission on page load
- [X] Avoids requesting the notification permission on page load
- [X] Displays images with correct aspect ratio
- [X] Serves images with appropriate resolution
- [X] Page has the HTML doctype
- [X] Properly defines charset
- [X] Avoids unload event listeners
- [X] No issues in the Issues panel in Chrome Devtools
- [X] Page has valid source maps

##### Not Applicable

- [X] Fonts with font-display: optional are preloaded
- [X] Detected JavaScript libraries

<br/>

---

<br/>

### SEO

**Original score:** 83%
**Improved score:** 100%

##### Content Best Practices

- [X] fixed <a> tags so that they had proper descriptions of what they were linking to.
- [X] added a <meta> description tag with a proper call to action and description of the game.

<br/>

##### Strengths (passed without assistance of LightHouse reports)

- [X] Has a <meta name="viewport"> tag with width or initial-scale
- [X] Document has a <title> element
- [X] Page has successful HTTP status code
- [X] Links are crawlable
- [X] Page isn’t blocked from indexing
- [X] Image elements have [alt] attributes
- [X] Document has a valid hreflang
- [X] Document uses legible font sizes 100% legible text
- [X] Document avoids plugins
- [X] Tap targets are sized appropriately 100% appropriately sized tap targets

<br/>

##### Not Applicable

- [X] robots.txt is valid
- [X] Document has a valid rel=canonical

<br/>

##### Cumulative layout shift

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### Speed Index

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>

##### First Contentful Paint

- [X] 
- [X] 
- [X] 
- [X] 
- [X] 

<br/>