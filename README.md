# React + TypeScript + Vite + Tailwind
# weather.app

Comprehensive, up-to-date documentation for the weather.app project.

This repository is a responsive, TypeScript React application built with Vite. It fetches current weather, multi-hour forecasts, and air-quality metrics (AQI) from the OpenWeatherMap API and presents the data in a mobile-first UI with a responsive desktop layout. The app uses React Context to manage global state (city, units, search, weather, forecast) and custom hooks for data fetching and shaping.

---

Table of contents
- Project summary
- Features
- Tech stack
- Quickstart (install, run, build)
- Configuration & environment variables
- Usage (what the UI provides)
- Architecture & file-by-file explanation
  - Project root
  - `src` overview (components, contexts, hooks, utils, types, styles)
- Development notes & best practices
- Troubleshooting & FAQ
- Contributing
- License

---

Project summary
---------------

`weather.app` is a clean, modular weather dashboard. It focuses on:
- Displaying the current weather for a selected city (temperature, description, icon, feels-like)
- Displaying near-term forecasts (today and tomorrow split) in 3-hour intervals
- Showing air quality information and other condition tiles (wind, humidity, visibility)
- Sunrise / sunset details and simple derived calculations such as day length
- Supporting unit switching (°C, °F, K) and dark/light theme preferences

The app organizes logic into context providers, presentational components, and small, testable utility modules.

Features
--------

- Current weather card (temp, feels like, weather description, icon)
- Forecast cards for today and tomorrow with time, temperature, wind, humidity
- Air Quality Index (AQI) display and related metrics
- Sunrise and sunset times (with day length and golden hour calculation)
- Geolocation-based first-run detection and saved last city fallback (localStorage)
- Unit switch between Celsius, Fahrenheit and Kelvin
- Theme toggle (light/dark) persisted across sessions
- Responsive, mobile-first UI built with Tailwind CSS

Tech stack
----------

- React 18+ with TypeScript
- Vite (fast dev server and build)
- Tailwind CSS for styling
- React Router for simple route management
- Vitest / React Testing Library can be used for tests (not included by default)

Quickstart
----------

Prerequisites
- Node.js (>=16 recommended)
- npm or yarn

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open the app in your browser (Vite default):

http://localhost:5173

Build and preview production

```bash
npm run build
npm run preview
```

Configuration & environment variables
-------------------------------------

The app uses OpenWeatherMap APIs for weather, forecast, and air quality. For production you must store your API key in an environment variable. Create a `.env` (not committed) in the project root and add:

```env
VITE_OPENWEATHER_KEY=your_openweather_api_key_here
```

Inside API hooks, read the key using Vite's env API:

```ts
const key = import.meta.env.VITE_OPENWEATHER_KEY;
```

Notes
- Never commit real API keys to the repository.
- After changing `.env` you must restart the dev server.

Usage (what the UI provides)
----------------------------

- Search for a city using the search input in the header. The app debounces requests and stores the last successful city in localStorage.
- The main dashboard shows current weather and a separate area for forecast cards.
- Switch units in the UI to convert temperatures globally.
- Open settings to toggle theme and other options.

Architecture & file-by-file explanation
---------------------------------------

This section explains the most important files and folders so you (or contributors) can quickly locate behavior and responsibilities.

Top-level files
- `package.json` - npm scripts and dependencies.
- `vite.config.ts` - Vite configuration.
- `tailwind.config.js` / `postcss.config.js` - Tailwind and PostCSS config.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` - TypeScript config files.
- `index.html` - Vite HTML entry.

src/ (application source)
- `main.tsx` - React DOM bootstrap, root provider composition.
- `App.tsx` - Top-level app shell. Wraps the app with context providers and contains the main route outlet.
- `index.css` - Tailwind directives and global CSS.

`src/com/` (components)
- `Semantic/`
  - `Header.tsx` - Top header / sidebar component. Contains search input and navigation to pages.
  - `Main.tsx` - Layout and route outlet for the dashboard and settings.

- `Weather/` (current weather)
  - `CurrentWeather.tsx` - Main weather card showing temperature, description and primary controls.
  - `CurrentWeatherConditions.tsx` - Smaller tiles for conditions such as humidity, wind, pressure, visibility.
  - `WeatherCityDetails.tsx` - City-related display pieces (clickable name, coordinates).
  - `WeatherErrorChecks.tsx` - Centralized error and loading display logic for weather area.

- `Forecast/`
  - `SeveralForecasts.tsx` - Container for Today/Tomorrow tabs and lists.
  - `ForecastCard.tsx` - Single forecast item card (time, icon, temp, wind).
  - `ForecastCityDetails.tsx` - Summary info for forecast area.

- `Settings/`
  - `Settings.tsx` - Page wrapper for settings
  - `SettingsDetails.tsx` - Settings content (theme toggle, information)

- Misc UI
  - `Input.tsx` - Reusable input component used for searching.
  - `Icon.tsx` - Reusable icon wrapper.
  - `SearchCity.tsx` - Search UI combined with city label and quick-actions.
  - `CurrentSun.tsx` - Sunrise / sunset UI.
  - `OneCondition.tsx` - Small tile component used across conditions.

`src/context/` (global state)
- `contexts/` - Exported React Context objects and their default values
  - `CityContext.ts` - Selected city state and updater.
  - `UnitContext.ts` - Current unit selection state.
  - `SearchContext.ts` - Search input state.
  - `WeatherContext.ts` - Current weather API state (data, loading, error).
  - `ForecastContext.ts` - Forecast API state.

- `giver/` - Providers that wrap children and supply context values
  - `CityContextGiver.tsx` - Implements logic for persisting city, reading from localStorage or geolocation.
  - `UnitContextGiver.tsx` - Persists unit choice in localStorage and exposes setter.
  - `SearchContextGiver.tsx` - Manages input debounce and query state.
  - `WeatherContextGiver.tsx` - Uses `useCurrentWeather` to fetch and store weather data in context.
  - `ForecastContextGiver.tsx` - Uses `useForecast` to fetch forecast data.

- `hooks/` - Small consumer hooks that `useContext(...)` and return typed values
  - `useCityContext.ts`, `useUnitContext.ts`, `useSearchContext.ts`, `useWeatherContext.ts`, `useForecastContext.ts`

`src/hooks/` (application hooks)
- `useEvents.ts` - Centralized event handlers (search submit, input change, keyboard interactions).
- `useCertainWeatherData.ts` - Aggregates data across contexts and utilities to produce display-ready values (min/max, feels-like formatting).
- `useCertainAirData.ts` - Pulls air pollution metrics into a shaped object for UI.

`src/hooks/Api/` (API data access)
- `useCurrentWeather.ts` - Fetch current weather by city (or coordinates). Wraps fetch + basic caching/retries.
- `useForecast.ts` - Fetch forecast list (3-hour intervals).
- `useAir.ts` - Fetch air pollution data by coordinates (AQI and components).
- `useUsersCity.ts` - Reverse-lookup or geolocation helper to get a user's city on first run.

`src/utils/` (pure helpers)
- `convertTemp.ts` - Convert between units.
- `convertStamp.ts` - Convert unix timestamp to readable time given timezone offset.
- `extractLocal.ts` - Extract local hour/min from forecast timestamp.
- `localOffset.ts` - Helpers for timezone offset handling.
- `minMaxValue.ts` - Extract min/max from forecast slices.
- `unitSymbols.ts` - Mapping of unit literal to display symbol.
- `forecastDateUtils/forecastTodayData.ts` & `forecastTomorrowData.ts` - Partitioning utilities for the Forecast UI.

`src/styles/` - Small React components that provide consistent card styles
- `CardFirstStyle.tsx` - Reusable card wrapper for consistent look and spacing.

`src/types/` - Type declarations for API shapes and internal structures
- `weather.d.ts`, `forecast.d.ts`, `forecastItem.d.ts`, `air.d.ts`, `unit.d.ts`, `input.d.ts`

Development notes & best practices
--------------------------------

- API Keys: Move any inlined keys to `import.meta.env.VITE_OPENWEATHER_KEY` and add `.env` to `.gitignore`.
- Small hooks: keep hooks single-responsibility. `Api` hooks should return { data, loading, error } and avoid side-effects outside fetching.
- Components: favor pure presentational components that receive shaped props, and keep composition in the `com` folder.
- Context: contexts provide reactive state; prefer `useXContext()` wrapper hooks to consume them and keep components decoupled.
- Styling: prefer Tailwind utility classes; use `CardFirstStyle` to enforce consistent card padding/margins.

Testing
-------

This project does not include tests by default. Recommended starting points:
- Add `vitest` and `@testing-library/react` to test components and hooks.
- Write a simple test for `convertTemp` and `minMaxValue` as examples of pure, fast unit tests.

Troubleshooting & FAQ
---------------------

Q: I see API 401 / invalid API key

A: Ensure `VITE_OPENWEATHER_KEY` is set and you restarted the dev server. Confirm the key is valid at OpenWeatherMap.

Q: Forecast times look wrong

A: Confirm the app uses the API-provided timezone offset when converting timestamps with `convertStamp`. If you pass coordinates directly, make sure they are correct.

Q: I changed TypeScript files and the app crashed

A: Run `npm run build` to surface type errors, or run an IDE TypeScript server to check for issues. Ensure `tsconfig.app.json` includes new folders if you add files outside `src`.

Contributing
------------

You are welcome to contribute. Suggested workflow:
1. Fork the repository.
2. Create a feature branch for a specific change.
3. Keep changes focused and create a clear PR description.
4. Add tests for new logic and document any public API changes.

If you add new environment variables, update `.env.example` (create one) with keys like `VITE_OPENWEATHER_KEY` and a short note.

License
-------

No license file is currently provided. If you intend to open-source this project, add a `LICENSE` (e.g., MIT) at the repository root.

Acknowledgements
----------------

- Built using Vite + React + TypeScript + Tailwind.
- OpenWeatherMap for weather and air quality data.

---

If you'd like, I can also:
- Create an `.env.example` containing `VITE_OPENWEATHER_KEY` and usage notes.
- Add a `CONTRIBUTING.md` and a small `docs/` folder with architecture diagrams.
- Add minimal unit tests for key utility functions and run them.

Next step: I will run a quick project error/issue scan to verify the README update didn't introduce errors (readme-only updates shouldn't change build behavior, but this is a quick sanity check).
