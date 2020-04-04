Proof by Contradiction
=============

### The Milky Way Galaxy

![alt text](proofbycontradiction1.jpg "No, the contradiction is not who took this picture.")

I'm sure you've seen an image of the Milky Way before, with its magnificient spiral arms and Galactic bar. But something in this image doesn't make any sense, given the following information:

<ol>
	<li>
		<a id="ex1">Orbital speed is substantially faster as you move closer to the center</a>
		<img id="ex1a" title="Notice the yellow object moving much faster?" src="proofbycontradiction_ex1.gif"/>
	</li>
	<li>
		<a id="ex2">There has been enough time for most of the galaxy to complete many orbits</a>
		<blockquote id="ex2a">
			<a href="https://en.wikipedia.org/wiki/Galactic_year">https://en.wikipedia.org/wiki/Galactic_year</a>
			<br>
			Estimates of the length of one orbit [for the Sun] range from 225 to 250 million terrestrial years
		</blockquote>
	</li>
	<li>
		<a id="ex3">Spiral arms can be seen in many galaxies of varying age</a>
		<a id="ex3a" href="https://en.wikipedia.org/wiki/Spiral_galaxy">https://en.wikipedia.org/wiki/Spiral_galaxy</a>
	</li>
</ol>

<a id="ex4">There is a contradiction almost in plain sight here!</a><img title="This was taken off of wikipedia." id="ex4a" src="proofbycontradiction2.gif"/>
Those spiral arms should be getting wound around each other like a spool.

I find problems like this fascinating, not only because the right answer in this case turns out to be really cool, but because it shows how easily you can be suffering from cognitive dissonance without realizing it. The number of inferential steps required to spot the problem here was really low, and yet I did not spot it until I was in my twenties.

Human civilization and the beliefs within it are really complicated, <sup>[citation needed]</sup> and when we look at history, we see entire paradigms of thought sustained for centuries that have contradictions at every turn. We ask how they could have been that foolish. In reality, those time periods had the same kinds of people this time period does. People who must stamp out every contradiction in their minds like an addiction, and people who would rather think about other things. The former are the kinds of people that started the scientific revolution, and they didn't get much love for it.

Sometimes contradictions lead to minor corrections in a scientific theory. Othertimes, they dismantle them completely. Scientists invite questions because they want to make their theories as strong as possible. Their theory will go through more and more rigorous tests if it gains traction; it's better to catch mistakes early. More than anything though, most of them are [naturally curious](https://xkcd.com/356/).

Contradictions exist in all types of theories, not just scientific ones. Ideologies are a kind of theory, and most people hold one or another. Unfortunately though, people don't like having contradictions pointed out for that kind of thing. A contradiction could require a minor correction, or it turn out to be a death knell for what they believe in. As long as this is the case it will never be [fashonable](http://www.paulgraham.com/say.html) to question popular ideologies, but it's at least as important considering they run the world. When can we get an ideological revolution?





<script>
	setupExpandable("ex1");
	setupExpandable("ex2");
	setupExpandable("ex3");
	setupExpandable("ex4");

	function setupExpandable(id)
	{
		var ex = document.getElementById(id);
		var exa = document.getElementById(id+"a");

		exa.style.display="none";

		ex.onclick = exa.onclick = function()
		{
			if(exa.style.display == "block")
				exa.style.display = "none";
			else
				exa.style.display = "block"
		};
	}
</script>
