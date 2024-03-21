document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const prompt = document.querySelector('.prompt');
    const terminal = document.querySelector('.terminal'); // Get the terminal container
    const initialPrompt = '<div class="prompt yellow">Portfolio@DavisLang ~&nbsp;</div>';

    const simpsonsEpisodes = [
        "S01E01 - Simpsons Roasting on an Open Fire",
        "S02E01 - Bart Gets an 'F'",
        "S03E01 - Stark Raving Dad",
        "S04E01 - Kamp Krusty",
        "S05E01 - Homer's Barbershop Quartet",
        "S06E01 - Bart of Darkness",
        "S07E01 - Who Shot Mr. Burns? (Part Two)",
        "S08E01 - Treehouse of Horror VII",
        "S09E01 - The City of New York vs. Homer Simpson",
        "S10E01 - Lard of the Dance",
        "S11E01 - Beyond Blunderdome",
        "S12E01 - Treehouse of Horror XI",
        "S13E01 - Treehouse of Horror XII",
        "S14E01 - Treehouse of Horror XIII",
        "S15E01 - Treehouse of Horror XIV",
        "S16E01 - Treehouse of Horror XV",
        "S17E01 - Treehouse of Horror XVI",
        "S18E01 - Treehouse of Horror XVII",
        "S19E01 - He Loves to Fly and He D'ohs",
        "S20E01 - Sex, Pies and Idiot Scrapes",
        "S21E01 - Homer the Whopper",
        "S22E01 - Elementary School Musical",
        "S23E01 - The Falcon and the D'ohman",
        "S24E01 - Moonshine River",
        "S25E01 - Homerland",
        "S26E01 - Clown in the Dumps",
        "S27E01 - Every Man's Dream",
        "S28E01 - Monty Burns' Fleeing Circus",
        "S29E01 - The Serfsons",
        "S30E01 - Bart's Not Dead",
        "S31E01 - The Winter of Our Monetized Content",
        "S32E01 - Undercover Burns",
        "S33E01 - The Star of the Backstage",
        "S34E01 - My Way or the Highway to Heaven",
        "S35E01 - Here's Looking at You, Kang",
        "S36E01 - The Road to Cincinnati",
        "S37E01 - The Star of the Show",
        "S38E01 - A Serious Flanders (Part 1)",
        "S39E01 - Moe's Day Off",
        "S40E01 - The Good, the Bart, and the Loki",
        "S41E01 - A Serious Flanders (Part 2)",
        "S42E01 - Springfield's Most Wanted",
        "S43E01 - The Last Traction Hero",
        "S44E01 - Bart's in Jail Again",
        "S45E01 - Springfield Dreams",
        "S46E01 - The Treehouse of Horror XXXV",
        "S47E01 - The Miseducation of Lisa Simpson",
        "S48E01 - A Made Maggie",
        "S49E01 - Homer's Christmas Carol",
        "S50E01 - Springfield is History"
    ];
    


    input.addEventListener('keydown', function (event) {
        input.setPointerCapture(event.pointerId);
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = '';
            handleCommand(command);
        }
    });

    function handleCommand(command) {
        switch (command) {
            case 'about':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'about: <i>I am a <b>designer, developer,</b> and <b>computer enthusiast,</b> based in Melbourne, Australia. My passion for design stems from audio. I studied a diploma of Sound Production when I first left high school in 2014. Through a journey of discovering ways to make interactive audio experiences, my passion for Interactive Design and Computers blossomed. After some self-learning and discovery, I decided to study Digital Media at RMIT, specialising in <b>frontend development, computer architecture,</b> and as a side subject in my final year, I elected to study <b>cybersecurity</b> as well as undertake a major project called DangerLine. Currently, I am actively creating projects while seeking opportunities to break into the IT or design industry.I am a designer, developer, and computer enthusiast based in Melbourne, Australia. My passion for design stems from audio. I studied a diploma of Sound Production when I first left high school in 2014. Through a journey of discovering ways to make interactive audio experiences, my passion for Interactive Design and Computers blossomed. After some self-learning and discovery, I decided to study Digital Media at RMIT, specialising in frontend development, computer architecture, and as a side subject in my final year, I elected to study cybersecurity as well as undertake a major project called DangerLine. Currently, I am actively creating projects while seeking opportunities to break into the IT or design industry.</i></div>';
                break;
            case 'projects':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'projects:</br><ul><li><a href="">DangerLine</a> | <a href="https://dangerline.deno.dev/">Blog</a>: A first person stealth game created using unity, that heavily focuses on sound as a source of navigation.</li></ul></div>';
                break;
            case 'services':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'services:</br><ul><li>Web Design and Development</li><li>Graphic Design</li><li>Game Design</li><li>Sound Design</li></ul></div>';
                break;
            case 'skills':
                output.innerHTML += '<div class="command-output">' + initialPrompt + 'skills:</br><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>C#</li><li>React</li><li>Bootstrap</li><li>Digital Media<li>Sound Design</li><li>Linux</li><li>Computer Architecture</div>';
                break;
            case 'contact':
                output.innerHTML += '<div class="command-output">' + prompt.outerHTML + 'contact: davislang303@gmail.com</div>';
                break;
            case 'help':
                output.innerHTML += '<div class="command-output">' + initialPrompt + 'list of available commands:</br><ul><li>about</li><li>services</li><li>skills</li><li>projects</li><li>contact</li><li>episode - random simpsons episode</li><li>clear</li></ul></div>';
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

