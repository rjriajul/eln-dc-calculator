<div align="center">

# ⚡ ELN DC-to-DC Converter Calculator

### The Ultimate Slider Tool for Minecraft Electrical Age Mod

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue?style=for-the-badge&logo=github)](https://rjriajul.github.io/eln-dc-calculator/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/Built%20with-HTML%2FCSS%2FJS-orange?style=for-the-badge&logo=html5)](https://github.com/rjriajul/eln-dc-calculator)
[![Electrical Age](https://img.shields.io/badge/Mod-Electrical%20Age-yellow?style=for-the-badge)](https://www.curseforge.com/minecraft/mc-mods/electrical-age)

*Find the perfect Green/Yellow slider configuration for your Variable DC-to-DC Converter. No more guessing, no more blown cables.*

<br>

[**Try it live →**](https://rjriajul.github.io/eln-dc-calculator/)

</div>

---

## 📋 Table of Contents

- [What Is This?](#-what-is-this)
- [How the Converter Works](#-how-the-converter-works)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [How to Use](#-how-to-use)
- [Examples](#-examples)
- [FAQ](#-faq)
- [Known Limitations](#-known-limitations)
- [Contributing](#-contributing)
- [License](#-license)
- [Useful Links](#-useful-links)
- [Support](#-support)

---

## 🎯 What Is This?

The **ELN DC-to-DC Converter Calculator** is a free, open-source web tool designed for players of the [Electrical Age](https://www.curseforge.com/minecraft/mc-mods/electrical-age) Minecraft mod. It calculates the **optimal slider settings** for the in-game **Variable DC-to-DC Converter** block, helping you scale voltages up or down with the **least possible error**.

### Why You Need This

In Electrical Age, the Variable DC-to-DC Converter uses two sliders — a **Green Box** (input) and a **Yellow Box** (output) — to set a voltage transformation ratio. The problem? **Both sliders only accept integers between 1 and 16.** This means you can't always hit your exact target voltage.

For example, converting 220V to 500V requires a ratio of `25/11`, but `25` exceeds the slider limit of 16. This tool **brute-forces all 256 possible integer combinations** to find the closest match.

---

## ⚙️ How the Converter Works

### The Formula

```
Output Voltage = Input Voltage × (Yellow Value ÷ Green Value)
```

### Green Box vs Yellow Box

| Slider | Color | Role | Range | Connected To |
|--------|-------|------|-------|-------------|
| **Green Box** | 🟩 | Input side | 1–16 | Power source / generator |
| **Yellow Box** | 🟨 | Output side | 1–16 | Machine / load grid |

### Slider Constraints

- **Integers only** — No decimals, no fractions
- **Range: 1 to 16** — Both sliders are capped at 16
- **256 total combinations** — 16 × 16 possible ratios
- **No exact match possible** — When the ideal ratio can't be expressed with integers ≤ 16, this tool finds the closest approximation

---

## 🖥️ Features

| Feature | Description |
|---------|-------------|
| **Find Best Ratio** | Enter input + target voltage → get optimal Green/Yellow values |
| **Calculate Output** | Enter current sliders + input voltage → see actual output |
| **Visual Slider Display** | See recommended settings with color-coded bars |
| **Error Reporting** | Shows exact output, voltage difference, and percentage error |
| **Responsive Design** | Works on desktop, tablet, and mobile |
| **No Dependencies** | Pure HTML/CSS/JS — no frameworks, no build step |
| **GitHub Pages Ready** | Host directly from the repository |
| **Enter Key Support** | Press Enter to calculate instantly |

---

## 🚀 Quick Start

### Option 1: Live Demo (Recommended)

Visit the hosted version directly:

**🔗 [https://rjriajul.github.io/eln-dc-calculator/](https://rjriajul.github.io/eln-dc-calculator/)**

No installation required. Works in any modern browser.

### Option 2: Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rjriajul/eln-dc-calculator.git
   ```

2. **Navigate to the folder:**
   ```bash
   cd eln-dc-calculator
   ```

3. **Open `index.html` in your browser:**
   - Double-click `index.html`, OR
   - Right-click → "Open with" → your browser, OR
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js (if you have http-server installed)
     npx http-server

     # PHP
     php -S localhost:8000
     ```

4. **Visit `http://localhost:8000`**

---

## 📖 How to Use

### Find the Best Slider Ratio

Use this when you know your input voltage and want to reach a specific target voltage.

1. Click the **"Find Best Ratio"** tab (active by default)
2. Enter your **Input Voltage** — the voltage from your generator (e.g., `220`)
3. Enter your **Target Output Voltage** — what you need (e.g., `500`)
4. Click **"Calculate"** or press **Enter**
5. Read the results:
   - 🟩 **Green Box value** — set this on the input slider
   - 🟨 **Yellow Box value** — set this on the output slider
   - **Actual Output** — the voltage you'll get
   - **Difference** — how far off from your target
   - **Error %** — percentage error

### Calculate Output from Current Settings

Use this when you already have sliders set and want to know the output voltage.

1. Click the **"Calculate Output"** tab
2. Enter your **Input Voltage**
3. Enter your **Green Box** value (1–16)
4. Enter your **Yellow Box** value (1–16)
5. Click **"Calculate"** or press **Enter**
6. See the **Output Voltage**

---

## 📊 Examples

### Example 1: 220V → 500V (Step-Up)

| Step | Calculation |
|------|-------------|
| Target ratio | 500 ÷ 220 = **2.2727...** |
| Brute-force result | **Green 7 / Yellow 16** |
| Actual output | 220 × (16 ÷ 7) = **502.86V** |
| Difference | **+2.86V** (0.57% error) |

### Example 2: 400V → 12V (Step-Down)

| Step | Calculation |
|------|-------------|
| Target ratio | 12 ÷ 400 = **0.03** |
| Brute-force result | **Green 16 / Yellow 1** (closest) |
| Actual output | 400 × (1 ÷ 16) = **25V** |
| Difference | **+13V** |

*Note: Large step-down ratios can have significant error. Consider chaining multiple converters.*

### Example 3: 12V → 220V (Common Conversion)

| Step | Calculation |
|------|-------------|
| Target ratio | 220 ÷ 12 = **18.333...** |
| Brute-force result | **Green 1 / Yellow 16** (closest) |
| Actual output | 12 × (16 ÷ 1) = **192V** |
| Difference | **-28V** |

*Note: The 1:16 limit caps the max multiplier at 16. To reach 220V from 12V, consider using a 24V generator as input instead (24 × 16 = 384V).*

---

## ❓ FAQ

### What is the max voltage multiplier for the ELN DC-to-DC converter?

The maximum multiplier is **16×** (Yellow=16, Green=1). The minimum is **1/16×** (Yellow=1, Green=16).

### Can I use decimal or fractional values on the sliders?

**No.** The sliders only accept whole numbers (integers) between 1 and 16. This is a hard limit in the Electrical Age mod.

### Why can't I get my exact target voltage?

Because the ideal ratio often requires numbers greater than 16 or non-integer values. For example, 220V→500V needs `25/11`, but 25 exceeds the limit. The tool finds the closest integer approximation.

### How does the ELN DC-to-DC converter work?

It multiplies input voltage by a ratio set by two sliders: `Output = Input × (Yellow ÷ Green)`. The Green slider sets the input side, and the Yellow slider sets the output side.

### What are the green and yellow boxes in Electrical Age?

- **Green Box (🟩)** — The input side, connected to your power source/generator
- **Yellow Box (🟨)** — The output side, connected to your machine/load grid

### Is there a way to reduce voltage error?

Yes. Consider:
1. **Chaining converters** — Use two converters in sequence for better precision
2. **Changing your base voltage** — Use a generator with a different voltage that allows a cleaner ratio
3. **Accepting small errors** — Most machines tolerate voltage variations of ±5%

### Does this tool work for step-down voltage?

**Yes.** Enter a higher input voltage and a lower target voltage. The tool handles both step-up and step-down conversions.

### What happens if I set the wrong voltage in ELN?

Setting a voltage that's too high for your cables or machines can cause **explosions** and **fire damage**. Always double-check your calculations before connecting loads.

---

## ⚠️ Known Limitations

- **Slider cap at 16** — The mod limits both sliders to 1–16, making some exact conversions impossible
- **No multi-converter chaining** — The tool calculates a single converter; you'll need to manually chain converters for better precision
- **No cable/machine voltage limits** — The tool doesn't warn about maximum cable voltages (a feature for future updates)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "Add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

### Ideas for Contributions

- Cable voltage safety warnings
- Multi-converter chain calculator
- Dark/Light theme toggle
- Preset buttons for common voltage conversions
- Translation support

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

---

## 🔗 Useful Links

- [Electrical Age on CurseForge](https://www.curseforge.com/minecraft/mc-mods/electrical-age)
- [Electrical Age Wiki](https://electrical-age.net/)
- [Minecraft Forums - Electrical Age](https://www.minecraftforum.com/forums/mapping-and-modding/minecraft-mods/mods-minecraft-mods/2435852-electrical-age-1-7-10-electrical-engineering)

---

## ⭐ Support

If this tool helped you optimize your ELN power grid:

- Give it a ⭐ **Star** on GitHub
- Share it with your Minecraft server community
- Open an **Issue** if you find bugs or want features

---

<div align="center">

**Built with ❤️ for the Electrical Age mod community**

</div>
