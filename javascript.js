	
	/* QUICK SEARCH */

	var s3 = [

		['-b ', 'bing', 'https://www.bing.com/search?q='],
		['-f ', 'facebook', 'https://www.facebook.com/search/top/?q='],
		['-i ', 'google_img',	'https://www.google.com.br/search?hl=pt-BR&authuser=0&site=imghp&tbm=isch&source=hp&biw=1366&bih=576&q='],
		['-r ', 'reddit', 'https://www.reddit.com/search?q='],
		['-t ', 'twitter', 'https://twitter.com/search?q='],
		['-y ', 'youtube', 'https://www.youtube.com/results?search_query='],
	
	]

	var s4 = [

		['-dw ', 'distro_watch', 'https://distrowatch.com/table.php?distribution=',],
		['-im ', 'imgur', 'http://imgur.com/search?q=',],
		['-jw ', 'jw', 'https://www.jw.org/pt/busca/?q=',],
		['-me ', 'mercado_livre', 'http://lista.mercadolivre.com.br/',],
		['-sr ', 'subreddit', 'http://reddit.com/r/'],
		['-un ', 'unsplash', 'https://unsplash.com/search/photos/'],
		['-wa ', 'wolframalpha', 'https://www.wolframalpha.com/input/?i='],
		['-we ', 'wikipedia_en', 'https://en.wikipedia.org/wiki/'],
		['-wp ', 'wikipedia_pt', 'https://pt.wikipedia.org/wiki/'],
		
	]	

	var s5 = [

		['-gta ', 'translate', 'https://translate.google.com.br/#auto/pt/',],
		['-gte ', 'en_to_pt', 'https://translate.google.com.br/#en/pt/',],
		['-gtp ', 'pt_to_en', 'https://translate.google.com.br/#pt/en/',],
		['-ltv ', 'legendas_tv', 'http://legendas.tv/busca/',],
		['-mal ', 'myanimelist', 'https://myanimelist.net/search/all?q='],
		['-tpb ', 'thepiratebay', 'https://thepiratebay.org/search/'],
		['-url ', 'site', 'https://'],
		
	]

	var s6 = [

		['-eztv', 'eztv', 'https://eztv.ag/search/'],
		['-imdb', 'imdb', 'https://www.imdb.com/find?s=all&q=',],
	]
	
	var google = 'http://www.google.com/search?q=';
	var duckduckgo = 'https://duckduckgo.com/?q=';
	var defaultSearch = google;

	
	/* INPUT SEARCH */
	
	var input1 = document.getElementById('input1');
	var help = document.getElementById('help');
	
	input1.addEventListener('keypress', function(event){

	function clearInput(){
		input1.value = '';
		input1.focus();
		input1.blur();
		input1.focus();
		help.style.display = 'none';
		event.preventDefault();
	}

	if (event.keyCode == 13 || event.which == 13){
			var value = input1.value;
		
		
			if (value == ''){
				help.style.display = 'none';
				
				event.preventDefault();
				return false;
			}
			
			else {
			
				switch (value.substr(0,2)){
					case '?':
						clearInput();
						help.style.display = 'block';

						return false;
						break;
				}

				
				for (i=0; i<s3.length; i++){
					switch (value.substr(0,3)){
						case s3[i][0]:
							window.open(s3[i][2] + escape(input1.value.slice(3)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s4.length; i++){
					switch (value.substr(0,4)){
						case s4[i][0]:
							window.open(s4[i][2] + escape(input1.value.slice(4)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s5.length; i++){
					switch (value.substr(0,5)){
						case s5[i][0]:
							window.open(s5[i][2] + escape(input1.value.slice(5)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s6.length; i++){
					switch (value.substr(0,5)){
						case s6[i][0]:
							window.open(s6[i][2] + escape(input1.value.slice(6)));
							clearInput();
							return false;
							break;
					}
				}		

				window.open(defaultSearch + escape(input1.value));
				clearInput();
				return false;
			}
		}
	})

	/* HELP */
	
	displayHelp();

	function displayHelp(){
	
	
		var cmd = document.querySelectorAll('.cmd');
		var act = document.querySelectorAll('.act');
		
		var allSites = s3.concat(s4, s5, s6);
		allSites.sort();


		for (let i=0; i<allSites.length; i++){
			for (let j=0; j<allSites[i].length; j++){
				cmd[i].innerHTML = allSites[i][0]
			}
		}
		
		for (let i=0; i<allSites.length; i++){
			for (let j=0; j<allSites[i].length; j++){
				act[i].innerHTML = allSites[i][1]
			}
		}
	}


