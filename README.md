<!-- PROJECT SHIELDS -->
[![License][license-shield]][license-url]
[![Last commit][last-commit-shield]][last-commit-url]
[![Code size][code-size-shield]][code-url]
[![Awesome badges][awesome-badges-shield]][shields-url]
![Visitors][visitors-badge]

# **Tic Tac Toe**
The classic Tic Tac Toe game!  
This game currently has a single game mode:  
- Human vs. Human.  
- Human vs. AI **(To be added soon)**

This is a responsive web version of the game, you can find the CLI version of the game [here][py-tic-tac-toe-url] implemented in Python. 

<p align="center">
  <img src="tic-tac-toe - preview.png" alt="Tic Tac Toe Demo" width="650" height="400">
  <div align="center"><em>Tic Tac Toe Demo</em></div>
</p>

# **Usage**
Click [here][tic-tac-toe-url] to play now!

# **Project Technology Stack**
[![Figma][figma-shield]][figma-url]
[![HTML5][html5-shield]][html5-url]
[![CSS3][css3-shield]][css3-url]
[![React][react-shield]][react-url]
[![JavaScript][javascript-shield]][javascript-url]
[![TypeScript][typescript-shield]][typescript-url]

# **Project structure**
```bash
├──public
│  ├─── ...
│  └───index.html # Base HTML file.
└──src
   ├───assets
   │   └───images # default images (.webp)
   │       └───fallback # fallback images folder.
   ├───components
   │   ├───App
   │   │   ├───Button # New game component.
   │   │   ├───Card # Game stats card component.
   │   │   └───Toast # Game result banner component.
   │   └───Board
   │       └───Cell # Individual cell of the Board component.
   └───utils # Game functionality helper functions.
├──LICENSE.md
└──README.md
...

```

# **TODO**
- [ ] Add "Play vs AI" option (Minimax algorithm). 
- [ ] Add α-β optimization (Alpha-beta pruning). 
- [ ] Add Reinforcement learning AI.

<br>

<!-- FOOTER QUOTE -->
<div align="center">

  <a href="https://github.com/DAShaikh10">![Built with love][built-with-love-badge]</a>

</div>

<!-- MARKDOWN shields -->
[awesome-badges-shield]: https://img.shields.io/badge/badges-awesome-green.svg
[chrome-shield]: https://img.shields.io/badge/Browser-Chrome-red?style=flat&logo=google-chrome&logoColor=white
[code-size-shield]: https://img.shields.io/github/languages/code-size/DAShaikh10/Tic-Tac-Toe
[css3-shield]: https://img.shields.io/badge/CSS3-informational?style=flat&logo=css3&labelColor=1572b6&color=white
[editor-shield]: https://img.shields.io/badge/Editor-VS_Code-informational?style=flat&logo=visual-studio-code&logoColor=007acc&color=007acc
[figma-shield]: https://img.shields.io/badge/Figma-informational?style=flat&logo=figma&labelColor=white&color=f24e1e
[github-profile-shield]: https://img.shields.io/badge/Danish%20Ali-181717?style=flat&logo=github
[html5-shield]: https://img.shields.io/badge/HTML5-informational?style=flat&logo=html5&labelColor=white&color=e34f26
[javascript-shield]: https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&labelColor=gray&color=f7df1e
[last-commit-shield]: https://img.shields.io/github/last-commit/DAShaikh10/Tic-Tac-Toe
[license-shield]: https://img.shields.io/github/license/DAShaikh10/Tic-Tac-Toe
[react-shield]: https://img.shields.io/badge/React-informational?style=flat&logo=react&labelColor=black&color=white
[typescript-shield]: https://img.shields.io/badge/TypeScript-informational?style=flat&logo=typescript&labelColor=white&color=3178c6

<!-- MARKDOWN URL -->
[code-url]: https://github.com/DAShaikh10/Tic-Tac-Toe
[chrome-url]: https://www.google.com/intl/en_us/chrome
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[editor-url]: https://code.visualstudio.com
[figma-url]: https://www.figma.com
[github-profile-url]: https://github.com/DAShaikh10
[html5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[last-commit-url]: https://github.com/DAShaikh10/Tic-Tac-Toe
[license-url]: https://github.com/DAShaikh10/Tic-Tac-Toe/blob/main/LICENSE
[py-tic-tac-toe-url]: https://github.com/DAShaikh10/Py-Tic-Tac-Toe
[react-url]: https://reactjs.org
[shields-url]: https://shields.io
[tic-tac-toe-url]: https://dashaikh10.github.io/Tic-Tac-Toe
[typescript-url]: https://www.typescriptlang.org

<!-- MARDOWN BADGES -->
[built-with-love-badge]: http://ForTheBadge.com/images/badges/built-with-love.svg
[visitors-badge]: https://img.shields.io/endpoint?url=https://hits.dwyl.com/DAShaikh10/Tic-Tac-Toe.json&label=visitors&color=blue
