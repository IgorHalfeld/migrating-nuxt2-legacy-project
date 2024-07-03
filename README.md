### Migrating a Nuxt 2 legacy project to Nuxt 3

This is a sample project that shows how to migrate a Nuxt 2 (nuxt-bridge) w/ Vuetify 2 project to Nuxt 3

### How it works

1. Create a package with UI components using chadcn/vue and tailwind.
2. Use this package normally in the Nuxt 3 project.
3. Install tailwind and typescript to legacy project.
4. Use the new package in the legacy project normally.

### Setup

```bash
# run legacy project
pnpm --filter legacy-app dev

# run new project
pnpm --filter theplatform dev
```
