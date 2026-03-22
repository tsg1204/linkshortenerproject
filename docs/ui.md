# UI Components — shadcn/ui

All UI in this app is built exclusively with **shadcn/ui**. Never create custom components from scratch when a shadcn/ui component exists for the use case.

## Rules

- **shadcn/ui only.** Do not build custom UI primitives (buttons, inputs, dialogs, cards, etc.). Always use the shadcn/ui equivalent.
- **Components live in `components/ui/`** and are installed via `npx shadcn add <name>`.
- **Never modify installed shadcn/ui files** in `components/ui/` unless explicitly required. Keep them as close to the installed defaults as possible.
- **Use `cn()` from `@/lib/utils`** to conditionally merge Tailwind classes.
- **Icons come from `lucide-react`**, which is the icon set used by shadcn/ui.

## Adding a Component

Before building any UI element, check if a shadcn/ui component already covers the need:

```bash
npx shadcn add <name>   # e.g. npx shadcn add dialog
```

This installs the component into `components/ui/`. Import it with the `@/` alias:

```ts
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
```

## Styling

- Use **Tailwind CSS v4** utility classes for layout and spacing.
- Use the `cn()` utility for conditional or merged class strings:

```ts
import { cn } from '@/lib/utils';

<div className={cn('base-class', isActive && 'active-class')} />
```

- Do not write custom CSS unless Tailwind utilities genuinely cannot achieve the result.

## Common Components

| Use case         | shadcn/ui component           |
| ---------------- | ----------------------------- |
| Clickable action | `Button`                      |
| Text field       | `Input`                       |
| Popup / overlay  | `Dialog`                      |
| Notification     | `Toast` / `Sonner`            |
| Data container   | `Card`                        |
| Dropdown         | `DropdownMenu`                |
| Form             | `Form` (with React Hook Form) |
