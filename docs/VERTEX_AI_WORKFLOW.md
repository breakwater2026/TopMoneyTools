# Vertex AI Workflow - Construction to Styling Pipeline

## Overview

This guide walks you through using Vertex AI (Gemini models) to build your website from scripted content to polished, AdSense-optimized design.

## Prerequisites

- Google Cloud Project: `project-7ee9ba0e-6038-467d-83a`
- Access to [Vertex AI Studio](https://console.cloud.google.com/vertex-ai/generative/language)
- GenAI App Builder credits active
- Your website script (text content) ready

## Phase 1: Architect (Construction)

### Step 1a: Access Vertex AI Studio
1. Navigate to [Vertex AI Studio](https://console.cloud.google.com/vertex-ai/generative/language)
2. Click **"Create New"** > **"Freeform Prompt"**
3. Select **Model**: `Gemini 1.5 Pro`
4. Set Temperature: `0.7` (balanced creativity + consistency)
5. Set Max Output Tokens: `8000` (for detailed code output)

### Step 1b: Prepare Your Script
Gather all content from:
- `public/index.html` (homepage)
- `public/about/index.html`
- `public/tools/*/index.html` (calculator tools)
- Any other scripted content

### Step 1c: Run the Architect Prompt

Copy and paste this prompt into Vertex AI Studio, replacing `[YOUR_CONTENT]`:

```
You are an expert Full-Stack Web Developer specializing in responsive, 
high-performance financial websites.

I need you to architect a modern website structure from the following scripted content:

[PASTE YOUR HTML CONTENT HERE]

Create:

1. **HTML5 Structure**:
   - Semantic markup (header, nav, main, section, article, footer)
   - Accessibility best practices (ARIA labels, semantic elements)
   - Meta tags for SEO and AdSense compatibility

2. **Tailwind CSS Configuration**:
   - Mobile-first responsive design (breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
   - Professional color palette (blues, grays, whites for financial credibility)
   - Typography hierarchy with consistent sizing
   - Spacing system using Tailwind's scale (4px base unit)

3. **Layout Components**:
   - Hero section (prominent, above-the-fold)
   - Navigation bar (sticky, mobile-responsive)
   - Tool calculator cards (grid-based, interactive hints)
   - Content sections (readable, ~60-70 character line length)
   - Footer with links and company info

4. **AdSense Integration Points**:
   - Add HTML comments: <!-- ADSENSE_PLACEMENT: [LOCATION] -->
   - Identify 3-5 premium ad placements
   - Ensure minimum 125x125px spaces for responsive ads
   - Plan "above the fold" placements for max impressions

5. **Asset Organization**:
   - CSS file references: /assets/css/main.css
   - JS file references: /assets/js/main.js
   - Image path structure: /assets/images/[category]/[filename]

6. **Output Format**:
   - Provide complete HTML file with inline Tailwind classes
   - Include a separate CSS utility class reference document
   - Create a component map (JSON) showing reusable elements

Focus on:
- Mobile-first design (90%+ of users on mobile for financial tools)
- Fast load times (critical for AdSense CTR)
- Trust-building visual elements (for finance industry)
- Clear call-to-action buttons (lead to high-value ad placements)

Output the complete HTML code first, then the component map.
```

### Step 1d: Export the Output

Once Gemini responds:

1. Click the **download icon** in the response
2. Save the HTML output as `/src/index.html`
3. Create a new session and document the component map

### Step 1e: Save the Component Map

Ask Gemini:

```
From your previous response, provide a JSON component map with:
- Component name
- CSS class list
- Responsive behavior per breakpoint
- AdSense placement zones
- Reusability notes

Format as a JSON object.
```

Save the output as `/src/component-map.json`

---

## Phase 2: Handover (Serialization)

### Step 2a: Export to Portable Format

In the same Vertex AI session, ask:

```
Create a portable JSON export of the website structure including:

{
  "metadata": {
    "version": "1.0",
    "framework": "HTML5 + Tailwind CSS",
    "breakpoints": ["640px", "768px", "1024px", "1280px"]
  },
  "components": [
    {
      "name": "component-name",
      "html": "template code",
      "classes": ["list", "of", "tailwind", "classes"],
      "responsive": {
        "sm": "mobile behavior",
        "md": "tablet behavior",
        "lg": "desktop behavior"
      },
      "ads": ["zone_1", "zone_2"]
    }
  ],
  "adsensePlacements": [
    {
      "zone": "zone_1",
      "location": "above the fold",
      "dimensions": "responsive",
      "adType": "display"
    }
  ],
  "assets": {
    "colors": [...],
    "typography": [...],
    "spacing": [...]
  }
}

Provide complete valid JSON.
```

Save as `/src/website-structure.json`

---

## Phase 3: Stylist (Marketing & UX)

### Step 3a: Create New Vertex AI Session

1. Open Vertex AI Studio again
2. Click **"Create New"** > **"Freeform Prompt"**
3. Select **Model**: `Gemini 1.5 Flash` (faster, cost-efficient)
4. Set Temperature: `0.8` (creative for design suggestions)

### Step 3b: Load the Structure

Copy and paste the JSON from Phase 2 into the new session with this prompt:

```
You are an elite Digital Marketing and UI/UX Designer specializing in:
- High-conversion financial websites
- AdSense revenue optimization
- Trust-building design psychology

I'm providing the website structure from a financial tools website:

[PASTE YOUR COMPONENT MAP JSON HERE]

Analyze and enhance for maximum AdSense performance:

1. **Color Psychology**:
   - Choose colors that build trust in financial contexts
   - Blues: trust, stability, professionalism
   - Greens: growth, money, positivity
   - Avoid red (warning/risky appearance)
   - Ensure sufficient contrast for accessibility (WCAG AA minimum)

2. **Typography Strategy**:
   - Primary font: Clean sans-serif (Inter, Poppins)
   - Hierarchy: H1 (2rem) > H2 (1.5rem) > H3 (1.25rem) > body (1rem)
   - Line height: 1.6 for body text (readability)
   - Letter-spacing: 0.5px for headers (premium feel)

3. **AdSense Optimization**:
   - Primary placement: Hero section, right rail (above fold)
   - Secondary placement: Between tool sections (engagement)
   - Tertiary placement: Footer (long-form readers)
   - Use responsive sizes: 300x250, 728x90, 320x50
   - Ensure ads blend naturally (white background, border styling)
   - Avoid high-distraction animations near ads

4. **Layout Refinements**:
   - Whitespace: 20-30% of page should be empty (premium feel)
   - Grid alignment: 12-column layout for consistency
   - Visual hierarchy: Guide users to CTAs first, ads second
   - F-pattern scanning: Place important content in natural eye-flow

5. **Mobile-First Enhancements**:
   - Sticky header with logo + navigation (constant brand)
   - Collapsible menu on mobile (hamburger icon)
   - Thumb-friendly touch targets (48px minimum)
   - Lazy-load images below fold (faster load time = better AdSense CTR)

6. **Trust Signals**:
   - Badge/certification placement (top right)
   - Testimonial carousel (if available)
   - "Powered by [Your Brand]" footer
   - Copyright + compliance links

7. **Output Format**:
   - Provide complete CSS stylesheet with all custom properties
   - Include CSS custom properties (variables) for easy theming
   - Add animation library suggestions (e.g., Tailwind Motion)
   - Create a brand guidelines document
   - Provide high-resolution color palette codes (hex, RGB, HSL)

Focus Metrics:
- Load time: Target < 2 seconds (Critical for bounce rate)
- AdSense CTR: Optimize for 3-5% CTR (above average)
- Mobile usability: 95%+ readability on 320px viewports
- Accessibility: WCAG AA compliance

Provide the complete CSS code, then the brand guidelines.
```

### Step 3c: Implement the Styling

Once Gemini responds with the CSS:

1. Save the CSS as `/assets/css/main.css`
2. Update `public/index.html` to reference the new stylesheet
3. Save the brand guidelines as `/docs/BRAND_GUIDELINES.md`

### Step 3d: Create the Final Tailwind Config

Ask Gemini:

```
From your styling recommendations, create a complete tailwind.config.js file with:
- Custom color palette
- Custom typography scale
- Custom spacing scale
- Animation presets
- Plugin configurations

Provide complete, production-ready JavaScript object.
```

Save as `/tailwind.config.js`

---

## Integration into Your Project

### File Structure After Phase 3

```
public/
├── index.html                    # Updated with new structure
├── about/index.html
├── contact/index.html
├── tools/*/index.html
└── assets/
    ├── css/
    │   └── main.css             # From Stylist phase
    └── images/
        ├── hero/
        └── icons/

src/
├── index.html                    # Architect output (reference)
├── component-map.json            # Phase 1 output
└── website-structure.json        # Phase 2 output

docs/
├── BRAND_GUIDELINES.md           # Stylist output
└── IMPLEMENTATION_GUIDE.md

tailwind.config.js                # From Stylist phase
package.json                      # Update with Tailwind dependencies
```

### Update package.json

```json
{
  "dependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  },
  "scripts": {
    "build:css": "tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css",
    "watch:css": "tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --watch"
  }
}
```

---

## Testing Before Deployment

1. **Local Testing**:
   ```bash
   npm run build:css  # Compile Tailwind
   docker build -t topmoneytools .
   docker run -p 8080:8080 topmoneytools
   ```

2. **Responsive Testing**:
   - Chrome DevTools: Toggle mobile view (320px, 768px, 1024px)
   - Test all interactive elements
   - Verify ad placements are visible and properly sized

3. **AdSense Readiness**:
   - Run through Google AdSense Policy Checker
   - Ensure no policy violations (no click incentives near ads)
   - Verify unique, quality content

4. **Performance Testing**:
   - Lighthouse score target: 90+ (Performance)
   - Page Load Time: < 2 seconds (use Google PageSpeed)
   - CLS (Cumulative Layout Shift): < 0.1 (visual stability)

---

## Deployment

Once testing is complete:

```bash
# Commit the styled version
git add public/ assets/ tailwind.config.js package.json

git commit -m "feat: apply Vertex AI styling and AdSense optimization

- Implemented Gemini Stylist recommendations
- Added Tailwind CSS custom config
- Optimized ad placements for maximum CTR
- Ensured WCAG AA accessibility compliance
- Target mobile-first responsive design"

git push origin main  # Triggers automatic deployment to Cloud Run
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| CSS not loading | Verify `/assets/css/main.css` path in HTML |
| Tailwind classes not applied | Run `npm run build:css` to compile |
| Ad placements look broken on mobile | Test with Chrome DevTools mobile view, adjust `responsive` classes |
| Colors don't match brand | Update `tailwind.config.js` theme colors |
| Load time exceeds 2 seconds | Minify CSS, optimize images, lazy-load below-fold content |

---

## What's Next?

1. ✅ Architect Phase complete (structural foundation)
2. ✅ Handover Phase complete (portable format)
3. ✅ Stylist Phase complete (marketing design)
4. → Deploy to Cloud Run (see `IMPLEMENTATION_GUIDE.md`)
5. → Monitor AdSense performance (Google AdSense dashboard)

---

**Last Updated**: June 2026  
**Vertex AI Version**: Gemini 1.5 (Pro & Flash)  
**Credits Used**: GenAI App Builder Trial
