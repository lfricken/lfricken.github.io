A Proof by Contradiction
=============

### The Milky Way Galaxy

![alt text](proofbycontradiction1.jpg "No, the contradiction is not who took this picture.")

I'm sure you've seen an image of the Milky Way before, with its magnificient spiral arms and Galactic bar. But something in this image doesn't make any sense, depending on how well you understand orbits:

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
</ol>

<a id="ex3">Do you see the problem yet?</a><img title="This was taken off of wikipedia." id="ex3a" src="proofbycontradiction2.gif"/>
There is a contradiction almost in plain sight here. Those spiral arms should be falling apart after just a few orbits.

I find problems like this fascinating, not only because the right answer in this case is really cool, but because it shows how easily you can be suffering from cognitive dissonance without realizing it. The number of inferential steps required to realize there was a problem here was very low and yet I did not spot the problem until I was in my twenties.

Human civilization and beliefs within it are really complicated <sup>[citation needed]</sup>




<script>
	setupExpandable("ex1");
	setupExpandable("ex2");
	setupExpandable("ex3");

	function setupExpandable(id)
	{
		var ex = document.getElementById(id);
		var exa = document.getElementById(id+"a");

		exa.style.display="none";

		ex.onclick = exa.onclick = function() {
			if(exa.style.display == "block")
				exa.style.display = "none";
			else
				exa.style.display = "block"
		};
	}
</script>
