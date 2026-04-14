# HideActiveNow

A [BetterDiscord](https://betterdiscord.app/) plugin that removes the **Active Now** panel on the right side of Discord — no more seeing who's in which server, playing what game, or sharing their screen.

---

## Info

| Field | Value |
|-------|-------|
| Version | 1.0.0 |
| Author | axralty |

---

## Features

- Hides the entire Active Now sidebar panel
- Lightweight — pure CSS injection, no performance impact
- Toggle on/off anytime from the BetterDiscord plugins menu

---

## Requirements

- [BetterDiscord](https://betterdiscord.app/) installed

---

## Installation

1. Download `HideActiveNow.plugin.js`
2. Open Discord
3. Go to **User Settings → BetterDiscord → Plugins**
4. Click **Open Plugins Folder**
5. Move `HideActiveNow.plugin.js` into that folder
6. Back in the Plugins list, toggle **HideActiveNow** on

---

## How It Works

The plugin injects a small CSS rule that targets the Active Now panel by its known class names and aria label, setting it to `display: none`. No DOM manipulation, no MutationObserver — just pure CSS, so it has zero performance impact.

When the plugin is disabled, the injected style tag is cleanly removed and the panel returns to normal.

---

## Changelog

### v1.0.0
- Initial release
