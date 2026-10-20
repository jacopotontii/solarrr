# Presentation assets

The public presentation uses Solarrr's approved solar banner, original brand assets and captures of its native apps. No app screen is an AI-generated mockup.

## Captures

Captured on 20 October 2026 from source revision `e4a2c87`:

| File | Capture |
| --- | --- |
| [iPhone feed](../assets/screens/iphone-feed.png) | Native iPhone app, demo feed |
| [iPhone reader](../assets/screens/iphone-reader.png) | Native article reader, demonstration story about an orbital telescope |
| [iPhone analysis](../assets/screens/iphone-analysis.png) | The same story's claim details and sources, scrolled in the app |
| [iPhone verification](../assets/screens/iphone-verify.png) | Verify tab, empty link input |
| [Mac feed](../assets/screens/mac-feed.png) | Native app window, demo feed |
| [Mac Daybreak](../assets/screens/mac-daybreak.png) | Native app window, Daybreak overview |

The iPhone app was built for Simulator and captured on a separate iPhone 18 Pro / iOS 27.0 simulator. The Mac app was built locally and captured using its window-capture harness in a separate app identity. The captures do not establish release, account, purchase, or live verification readiness.

Story text, publisher examples, scores and source lists in demo mode are illustrative. They do not represent findings, live news, or endorsements by the named publishers. Some development reports deliberately show an assessment as pending when a canonical result is unavailable. The screenshots preserve that behaviour.

The banner is the approved Solarrr composition from the profile. The original wordmark is reused as supplied by the app. Editorial photography visible inside the apps belongs to the demo content; it is not newly commissioned campaign photography.

## Editable compositions

[scenes.html](scenes.html) contains the presentation layouts, referencing the original captures. It is a set of artwork masters, not a website or a substitute app. Open it in a browser to inspect the compositions.

Typography: Helvetica Neue, Helvetica, Arial. Brand accent: `#FC7F2B`. The presentation alternates warm light canvases with near-black surfaces, keeping the native interface as the focal point.

To regenerate the exported panels, install Playwright in your development environment, start a local static server at the repository root, then run:

```sh
node design/render.mjs http://127.0.0.1:8767
```

The script uses a locally installed Chrome. The main panels use 1.5× output resolution, with separate compositions for narrow screens. The social image is 1280 × 640. Text outside the images, descriptive alternatives and original full-size captures remain available in the Markdown pages.

## Updating the presentation

Capture the real app using non-personal data. Keep the status of the build visible in the surrounding copy. Update the master, render the panels, and inspect the README on narrow and wide screens in both GitHub themes. Check relative links and image loading before publishing.

[Social preview asset](../assets/social.png) · [Back to Solarrr](../README.md)
