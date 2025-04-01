document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const prompt = document.querySelector('.prompt');
    const terminal = document.querySelector('.terminal'); // Get the terminal container
    const initialPrompt = '<div class="prompt yellow">Portfolio@DavisLang ~&nbsp;</div>';

    const simpsonsEpisodes = [
        "S01E01 - Simpsons Roasting on an Open Fire",
        "S01E02 - Bart the Genius",
        "S01E03 - Homer's Odyssey",
        "S01E04 - There's No Disgrace Like Home",
        "S01E05 - Bart Gets an 'F'",
        "S01E06 - Moaning Lisa",
        "S01E07 - Homer's Night Out",
        "S01E08 - The Telltale Head",
        "S01E09 - Life on the Fast Lane",
        "S01E10 - Homer vs. Lisa and the 8th Commandment",
        "S01E11 - Krusty Gets Busted",
        "S01E12 - Some Enchanted Evening",
        "S02E01 - Bart Gets an 'F'",
        "S02E02 - Simpson and Delilah",
        "S02E03 - Treehouse of Horror",
        "S02E04 - Two Cars in Every Garage and Three Eyes on Every Fish",
        "S02E05 - Dancin' Homer",
        "S02E06 - Dead Putting Society",
        "S02E07 - Bart vs. Thanksgiving",
        "S02E08 - Lisa's Substitute",
        "S02E09 - Itchy & Scratchy & Marge",
        "S02E10 - Bart's Inner Child",
        "S02E11 - One Fish, Two Fish, Blowfish, Blue Fish",
        "S02E12 - The Way We Was",
        "S02E13 - Homer the Heretic",
        "S02E14 - Principal Charming",
        "S02E15 - Oh Brother, Where Art Thou?",
        "S02E16 - Bart's Dog Gets an F",
        "S02E17 - Old Money",
        "S02E18 - Mr. Lisa Goes to Washington",
        "S02E19 - Lisa's Substitute",
        "S02E20 - The War of the Simpsons",
        "S02E21 - Three Men and a Comic Book",
        "S02E22 - Blood Feud",
        "S03E01 - Stark Raving Dad",
        "S03E02 - Mr. Lisa Goes to Washington",
        "S03E03 - When Flanders Failed",
        "S03E04 - Bart the Lover",
        "S03E05 - Homer vs. Lisa and the 8th Commandment",
        "S03E06 - Treehouse of Horror II",
        "S03E07 - The Simpsons: The Movie",
        "S03E08 - The Bart Gets an F",
        "S03E09 - A Star is Born",
        "S03E10 - Last Exit to Springfield",
        "S03E11 - Bart Gets an 'F'",
        "S03E12 - Simpson's Day of Terror",
        "S03E13 - The Fool Monty",
        "S03E14 - Homer the Heretic",
        "S03E15 - Lisa the Greek",
        "S03E16 - Bart the Mother",
        "S03E17 - Homer’s Night Out",
        "S03E18 - Lisa’s First Word",
        "S03E19 - Marge in Chains",
        "S03E20 - The Last Temptation of Homer",
        "S03E21 - Stark Raving Dad",
        "S03E22 - Colonel Homer",
        "S03E23 - Homer vs. the 18th Amendment",
        "S03E24 - The Springfield Connection",
        "S03E25 - Bart Gets a F",
        "S03E26 - Homer’s Barbershop Quartet",
        "S04E01 - Kamp Krusty",
        "S04E02 - A Streetcar Named Marge",
        "S04E03 - Homer the Heretic",
        "S04E04 - Lisa’s First Word",
        "S04E05 - Marge vs. the Monorail",
        "S04E06 - Last Exit to Springfield",
        "S04E07 - Krusty Gets Kancelled",
        "S04E08 - Treehouse of Horror IV",
        "S04E09 - Mr. Plow",
        "S04E10 - Selma’s Choice",
        "S04E11 - The Front",
        "S04E12 - Homie the Clown",
        "S04E13 - Burns, Baby Burns",
        "S04E14 - I Love Lisa",
        "S04E15 - The Two Mrs. Nahasapeemapetilons",
        "S04E16 - Marge vs. the Monorail",
        "S04E17 - Last Exit to Springfield",
        "S04E18 - Homie the Clown",
        "S04E19 - The Springfield Files",
        "S04E20 - Marge Gets a Job",
        "S04E21 - Behind the Laughter",
        "S04E22 - Who Shot Mr. Burns?",
        "S05E01 - Homer's Barbershop Quartet",
        "S05E02 - The Last Temptation of Homer",
        "S05E03 - Homer and Apu",
        "S05E04 - Treehouse of Horror V",
        "S05E05 - Bart Gets an F",
        "S05E06 - Simpson’s Day of Terror",
        "S05E07 - I Am Not a Fan",
        "S06E01 - Marge’s Crisis",
        "S06E02 - The Homer Simpson Files"
    ];


    input.addEventListener('keydown', function (event) {
        // Remove this line:
        // input.setPointerCapture(event.pointerId);

        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = '';
            handleCommand(command);
        }
    });


    function handleCommand(command) {
        switch (command) {
            case 'about':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'about: <i>I am a designer, developer, and computer enthusiast based in Melbourne, Australia. My passion for design and interaction stems from audio. I studied a diploma of Sound Production when I first left high school in 2014. Through a journey of discovering ways to make interactive audio experiences, my passion for design and computers blossomed. After some self-learning and discovery, I decided to study Digital Media at RMIT, focusing on frontend web development, game design, cybersecurity, and computer architecture. Additionally, in my final year, I undertook a major project called DangerLine. Currently, I am actively creating projects while seeking opportunities to break into the IT or design industry.</i></div>';
                break;
            /* case 'projects':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'projects:</br><ul>' +
                    '<li><a href="#" target="_blank">Yummy Tummy (W.I.P)</a>: recipe website.</li>' +
                    '<li><a href="#" target="_blank">Bored</a>: Online JavaScript Games.</li>' +
                    '<li><a href="https://dangerline.deno.dev/" target="_blank">DangerLine</a>: A first-person stealth game where sound and lighting guide the player through a heavily surveilled cityscape.</li>' +
                    '</ul></div>';
                break;

            case 'services':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'services:</br><ul><li>Web Design and Development</li><li>Graphic Design</li><li>Game Design</li><li>Sound Design</li></ul></div>';
                break; */
            case 'skills':
                output.innerHTML += '<div class="command-output">' + initialPrompt + 'skills:</br><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>C#</li><li>Bootstrap</li><li>Adobe Suite</li><li>Sound Design</li><li>Computer Architecture</div>';
                break;
            case 'contact':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'contact: davislang303@gmail.com</div>';
                break;
            case 'help':
                output.innerHTML += '<div class="command-output">' + initialPrompt + 'list of available commands:</br><ul><li>about</li><li>skills</li><li>contact</li><li>episode - random simpsons episode</li><li>clear</li></ul></div>';
                break;
            case 'episode': // New case for displaying a random Simpsons episode
                const randomIndex = Math.floor(Math.random() * simpsonsEpisodes.length);
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'episode: ' + simpsonsEpisodes[randomIndex] + '</div>';
                break;
            case 'clear':
                output.innerHTML = '';
                break;
            default:
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'Command not found. Type "help" to see a list of commands.</div>';

        }
        // Scroll the terminal to the bottom after adding new content
        terminal.scrollTop = terminal.scrollHeight;
    }

    // Display the initial help message
    output.innerHTML += '<div class="command-output">' + initialPrompt + 'Welcome to my Terminal style web portfolio, type "help" to see a list of commands.</div>';
});
