export const applogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yPxmHYHF8tgtmWhpC59Jk2PLpzbxaL-9bA&s";

export const reslogo =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/";

// 20.16.0

export const menuApiUrl =
  "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3182993&lng=78.5721999&restaurantId=";

export const resfetch =
  "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3182993&lng=78.5721999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Instructions to Github copilot

// When helping with code:

// 1. **Use existing code first** - Always check if current variables, functions, or state can solve the problem before adding new ones

// 2. **Simplest solution first** - Show me the most straightforward approach that works

// 3. **Don't make code bulky** - Keep changes minimal and focused on exactly what I asked for

// 4. **Avoid over-engineering** - Don't add extra features, complex patterns, or "what if" scenarios unless I specifically ask

// 5. **Production-ready thinking** - Start simple, suggest complexity only when absolutely necessary

// 6. **Tell me when simple isn't enough** - If a simple approach has limitations, mention it like: "This simple way works for now, but if you need [specific feature], we'd need to add [specific thing]"

// 7. **Incremental approach** - Solve the immediate problem first, suggest improvements later if needed

// 8. **Use what's already there** - Before creating new components, hooks, or state, see if existing ones can be modified

// 9. **Clear and effective** - Code should be easy to read and understand

// 10. **Step-by-step complexity** - Only move to the next level of complexity when the simple way genuinely can't work

/// lec 08

//  MOUNTING (initial render)
//  ┌─────────────────────────────────┐
//  │ constructor()                   │
//  │   ↓                             │
//  │ render()                        │
//  │   ↓                             │
//  │ React updates DOM               │
//  │   ↓                             │
//  │ componentDidMount()             │
//  └─────────────────────────────────┘

//  UPDATING (on state/props change)
//  ┌─────────────────────────────────┐
//  │ render()                        │
//  │   ↓                             │
//  │ React updates DOM               │
//  │   ↓                             │
//  │ componentDidUpdate(prevProps,   │
//  │                   prevState)    │
//  └─────────────────────────────────┘

//  UNMOUNTING (when removed)
//  ┌─────────────────────────────────┐
//  │ componentWillUnmount()          │
//  └─────────────────────────────────┘
