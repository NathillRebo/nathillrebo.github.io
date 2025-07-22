
const translations = {
  pl: {
    title: "Daniel Marcinowski",
    projects: "Projekty",
    personal: "Własna twórczość",
    about: "O mnie",
    contact: "Kontakt",
    content: {
      about: `Dzień dobry!<br>Jestem fanem gier wszelkiej maści - czy to komputerowych, czy planszowych, strategicznych czy platformowych. Już od dzieciństwa zajmowałem się rysowaniem poziomów oraz kreśleniem tabelek z parametrami danych elementów gry. W game design wszedłem, gdy poznałem Warcrafta III i razem z kolegami graliśmy w mapy, które namiętnie edytowałem. Skończyłem studia informatyczne na Zachodniopomorskim Uniwersytecie Technicznym. Obecnie najbardziej interesuje się game designem oraz sztuczną inteligencją. W wolnych chwilach lubię grać w gry i dodawać nową zawartość do tych gier, czasem zajmuje się projektowaniem nowych gier. Podczas swojej przygody z game designem udało mi się też zaprzjaźnić z kilkoma pro graczami, takimi jak what_you_got oraz Rajjix. Moje ulubione gry to gry taktyczne, turowe oraz takie, które można rozszerzać o dodatkową zawartość.`,
      contact: `
	  <div class="contact-card">
		<div class="contact-left">
		  <h2>Napisz do mnie</h2>
		  <p>Jeśli masz pytania, propozycje współpracy lub po prostu chcesz się przywitać – nie wahaj się napisać!</p>
		</div>
		<div class="contact-right">
		  <form action="mailto:dmarcinowski3@gmail.com" method="POST" enctype="text/plain">
			<input type="text" name="name" placeholder="Twoje imię" required>
			<input type="email" name="email" placeholder="Twój email" required>
			<textarea name="message" rows="5" placeholder="Wiadomość..." required></textarea>
			<button type="submit">Wyślij</button>
		  </form>
		</div>
	  </div>
	`,
			projects: [
        {
          img: "/img/project_kongor.png",
					name: "Project Kongor",
          desc: "Prywatny serwer do gry Heroes of Newerth, z ~760000 zarejestrowanymi kontami i ~10000 graczami online w szczytowym momencie.",
					link: "project_project_kongor_pl.html"
        },
        {
          img: "img/2.png",
					name: "Heroes of Newerth: Reborn",
          desc: "Heroes of Newerth: Reborn to remaster oryginalnego Heroes of Newerth (HoN), niegdyś rywala takich gier jak DotA czy League of Legends. Opracowana przez Kongor Studios - składającego się z byłych programistów S2 Games i członków społeczności - gra została zbudowana na nowym silniku Juvio Engine, oferując ulepszoną grafikę, wydajność i lepsze wrażenia z gry wieloosobowej w porównaniu do swojej poprzedniczki.",
					link: "project_hon_reborn_pl.html"
        },
        {
          img: "img/3.png",
					name: "Crash Bandicoot: Back in Time",
					desc: "Darmowa fanowska platformówka z kultowym jamrajem w roli głównej. Gra zawiera 25 poziomów - 10 klasycznych, 10 w stylu poziomów z kaset z Crash Bandicoot 4: It's About Time oraz 5 prób Uka-Uki, ponadto dostępny jest kreator poziomów 2D.",
					link: "project_crash_bandicoot_back_in_time_pl.html"
        }
      ],
      personal: [
				{
					img: "/img/griftlands.png",
					name: "Griftlands Content Pack",
					desc: "Zestaw nowych bossów, kart, wszczepów i talentów do wyboru do gry Griftlands.",
					link: "personal_griftlands_pl.html"
				},
				{
					img: "img/darkest_dungeon.png",
					name: "Darkest Dungeon Trinkets Pack",
					desc: "Zestaw ponad 300 nowych przedmiotów do gry Darkest Dungeon.",
					link: "personal_darkest_dungeon.html"
				},
				{
					img: "img/heroes_of_newerth.png",
					name: "Heroes of Newerth Custom Pack",
					desc: "Zestaw własnych bohaterów i przedmiotów do gry Heroes of Newerth.",
					link: "personal_heroes_of_newerth_pl.html"
				},
				{
					img: "img/happyland.png",
					name: "Happyland Adventures Map Pack",
					desc: "Zestaw poziomów do gry Happyland Adventures, ze zwiększającym się poziomem trudności.",
					link: "personal_happyland_adventures_pl.html"
				},
				{
					img: "img/warcraft_random_arena.png",
					name: "Warcraft III Random Arena",
					desc: "Mapa do gry Warcraft III, w której kierujesz losową jednostką i musisz pokonać wrogie losowe jednostki, żeby stać się najlepszą losową jednostką.",
					link: "personal_warcraft_random_arena.html"
				},
				{
					img: "img/cards_of_war.png",
					name: "Cards of War",
					desc: "Gra karciana, podobna do gry Hearthstone, ale z innym systemem many oraz planszą, po której jednostki się przemieszczają.",
					link: "personal_cards_of_war.html"
				},
				{
					img: "img/talisman.png",
					name: "Talisman Content Pack",
					desc: "Zestaw dodatkowych komponentów do gry, takich jak karty Poszukiwaczy, Zaklęć, Przedmiotów, Zakończeń, Przygody i innych.",
					link: "personal_talisman.html"
				},
				{
					img: "img/heroes_v.png",
					name: "Heroes of Might and Magic 5.5 Hero Pack",
					desc: "Zestaw dodatkowych bohaterów do gry Heroes of Might and Magic 5.5, większość z nich z unikalnymi specjalizacjami.",
					link: "personal_heroes_vv.html"
				},
				{
					img: "img/warhammer_dark_heresy_2nd.png",
					name: "Warhammer Dark Heresy 2nd Edition Extended Datasheet",
					desc: "Skoroszyt z tabelami do gry, z dodatkowymi opcjami do tworzenia postaci oraz nowymi przedmiotami.",
					link: "personal_warhammer_dark_heresy_2nd_pl.html"
				},
				{
					img: "img/my_rpg.png",
					name: "Custom Tabletop RPG System",
					desc: "Własny system RPG w świecie post-apo z magią, skupiony na broniach oraz tworzeniu przedmiotów.",
					link: "personal_my_rpg.html"
				}
			]
    }
  },
  en: {
    title: "Daniel Marcinowski",
    projects: "Projects",
    personal: "Personal",
    about: "About",
    contact: "Contact",
    content: {
      projects: [
        {
          img: "/img/project_kongor.png",
					name: "Project Kongor",
          desc: "Heroes of Newerth private server, with ~760000 registered accounts and ~10000 players online at peak moments.",
					link: "project_project_kongor_en.html"
        },
        {
          img: "img/2.png",
					name: "Heroes of Newerth: Reborn",
          desc: "Heroes of Newerth: Reborn is a remaster of the original Heroes of Newerth (HoN), once a rival to games like DotA and League of Legends. Developed by Kongor Studios - made up of former S2 Games developers and community members - the game is built on the new Juvio Engine, offering improved graphics, performance and a better multiplayer experience compared to its predecessor.",
					link: "project_hon_reborn_en.html"
        },
        {
          img: "img/3.png",
					name: "Crash Bandicoot: Back in Time",
          desc: "Free fan-made platform game with iconic bandicoot. The game has 25 levels - 10 classic, 10 flashback-style and 10 trials of Uka-Uka. The game also has a level editor.",
					link: "project_crash_bandicoot_back_in_time_en.html"
        }
      ],
      personal: [
				{
					img: "/img/griftlands.png",
					name: "Griftlands Content Pack",
					desc: "A pack of new bosses, grafts, perks, cards and upgrades.",
					link: "personal_griftlands_en.html"
				},
				{
					img: "img/darkest_dungeon.png",
					name: "Darkest Dungeon Trinkets Pack",
					desc: "A pack of over 300 custom trinkets.",
					link: "personal_darkest_dungeon.html"
				},
				{
					img: "img/heroes_of_newerth.png",
					name: "Heroes of Newerth Custom Pack",
					desc: "A pack of custom items and heroes.",
					link: "personal_heroes_of_newerth_en.html"
				},
				{
					img: "img/happyland.png",
					name: "Happyland Adventures Map Pack",
					desc: "A pack of several levels of increasing difficulty.",
					link: "personal_happyland_adventures_en.html"
				},
				{
					img: "img/warcraft_random_arena.png",
					name: "Warcraft III Random Arena",
					desc: "An arena where you fight as a random creep and kill other random creeps to evolve into the best creep.",
					link: "personal_warcraft_random_arena.html"
				},
				{
					img: "img/cards_of_war.png",
					name: "Cards of War",
					desc: "A card game for up to 6 players, where each player plays their units and moves them towards their enemies to defeat them. Hearthstone with board.",
					link: "personal_warcraft_random_arena.html"
				},
				{
					img: "img/talisman.png",
					name: "Talisman Content Pack",
					desc: "A pack of new characters, adventure cards, dungeon adventure cards, spells, items, endings and other in-game components.",
					link: "personal_warcraft_random_arena.html"
				},
				{
					img: "img/heroes_v.png",
					name: "Heroes of Might and Magic 5.5 Hero Pack",
					desc: "A pack ofcustom heroes, many of them with unique specialties.",
					link: "personal_warcraft_random_arena.html"
				},
				{
					img: "img/warhammer_dark_heresy_2nd.png",
					name: "Warhammer Dark Heresy 2nd Edition Extended Datasheet",
					desc: "A spreadsheet with multiple additional character creation options and items.",
					link: "personal_warhammer_dark_heresy_2nd_en.html"
				},
				{
					img: "img/my_rpg.png",
					name: "Custom Tabletop RPG System",
					desc: "A tabletop PRG for a magic post-apocalyptic setting with system focusing on unique weapons and creative crafting.",
					link: "personal_my_rpg.html"
				}
			],
      about: "Welcome!<br>I am a fan of games of all kinds - whether computer, board, strategy or platform games. Since childhood I have been involved in drawing levels and drawing tables with parameters of given game elements. I got into game design when I got acquainted with Warcraft III and together with my friends we played maps, which I passionately edited. I graduated from the West Pomeranian University of Technology with a degree in computer science. Currently, I am most interested in game design and artificial intelligence. In my free time I like to play games and add new content to these games, sometimes I am involved in designing new games. During my adventure with game design, I also managed to befriend some pro gamers, such as what_you_got and Rajjix. My favorite games are tactical games, turn-based games and games that can be expanded with additional content.",
      contact: `
	  <div class="contact-card">
		<div class="contact-left">
		  <h2>Contact Me</h2>
		  <p>If you have any questions, collaboration ideas, or just want to say hi – feel free to write!</p>
		</div>
		<div class="contact-right">
		  <form action="mailto:dmarcinowski3@gmail.com" method="POST" enctype="text/plain">
			<input type="text" name="name" placeholder="Your name" required>
			<input type="email" name="email" placeholder="Your email" required>
			<textarea name="message" rows="5" placeholder="Message..." required></textarea>
			<button type="submit">Send</button>
		  </form>
		</div>
	  </div>
	`
    }
  }
};
