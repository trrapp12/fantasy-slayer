window.addEventListener('load', () => {
console.log('window event in footer.js fired')

const footerHTML = document.createElement('footer')
footerHTML.setAttribute('id', 'footer')
footerHTML.setAttribute('class', 'footer')
     footerHTML.innerHTML = `
    <div class="footer-contents-container">
      <h6 class="angars-ruins footer-logo">Fantasy + Slayer</h6>
    </div>
    <div class="footer-info">
      <p>
        <a href="mailto: trrapp@gmail.com">Contact me</a>
      </p>
    </div>
    <div class="footer-info">
      <p>
        <a href="https://github.com/trrapp12">More from the author</a>
      </p>
    </div>
    <div class="footer-info">
    
      <p class="history " id="history">
        The History of Fantasy Slayer
      </p>
      <div class="credits-modal-container" id="credit-modal-container">
        <!-- <p id="credits-default">Credits:<p> -->
    
        <section class="credits-modal display-none" id="credits-modal">
          <p id="exit-button" class="exit-button angars-ruins"> X </p>
          <h4 class="angars-ruins">The History and Vocabulary of Fantasy Slayer</h4>
          <ul>
            <li>
              <p><q>Choose not to be harmed—and you won't feel harmed. Don't feel harmed—and you haven't
                  been.</q> --original quote by Marcus Aurelius.</p>
            </li>
            <li>
              <p><q>Death may be the greatest of all human blessings.</q> --original quote by Socrates.</p>
            </li>
            <li>
              <p class="bold-underline">Naqualk</p>
              <p>The word 'Naqualk' is a Micmac word for 'leave.'</p>
            </li>
            <li>
              <p class="bold-underline">hæland (n.)</p>
              <blockquote>late Old English, "one who heals," especially "savior, Jesus," agent noun from heal (v.). As
                "a curative medicine" from late 14c. The usual Old English noun for Jesus as savior was hæland (Middle
                English healend), a noun use of a present participle, being a rough translation of the name (see
                Joshua) or of Latin salvator.
              </blockquote>
              <p>see <a href="https://www.etymonline.com/search?q=haeland">Healer</a>,
                on <a href="https://www.etymonline.com/">etymonline</a></p>
            </li>
            <li>
              <p class="bold-underline">ignis fatuus (n.)</p>
              <blockquote>"will o' the wisp, jack-o-lantern," 1560s, Medieval Latin, literally "foolish fire;" see
                igneous +
                fatuous. "It seems to have been formerly a common phenomenon; but is now exceedingly rare" [OED].
              </blockquote>
              <p>see <a href="https://www.etymonline.com/search?q=ignis%20fatuus&ref=searchbar_searchhint">ignis
                  fatuus</a>,
                on <a href="https://www.etymonline.com/">etymonline</a></p>
            </li>
            <li>
              <p class="bold-underline">Vliecke (n.)</p>
              <blockquote>"arrow-maker," early 14c. (as a surname attested from 1203), from Old French flechier "maker
                of
                arrows," from fleche "arrow," which is probably from Frankish, from Proto-Germanic *fleug-ika-
                (compare
                Old
                Low German fliuca, Middle Dutch vliecke), from PIE *pluk- "to fly," extended form of root *pleu- "to
                flow."
              </blockquote>
              <p>see <a href="https://www.etymonline.com/search?q=Vliecke">Vliecke</a>, on <a
                  href="https://www.etymonline.com/">etymonline</a></p>
            </li>
            <li>
              <p class="bold-underline">Dismorgrify</p>
              <blockquote>"To the commoner it is called 'soul-tearing' and 'soul-forging.' The first is the process
                that
                happened while yet alive.
                The dismorgrified must have commited an act so insidiously horrible the anatomy of their soul is
                literally ripped apart.
                The second part of the process is what most term as 'hell.' It is the absolutely solitary act of
                stitching together their own soul,
                one act of redemption at time. No one knows if it can actually be done, but everyone has a tale of the
                screams of the Soul Forge stalking the late hours."
              </blockquote>
              <p>As I was making this game I tried to create a few new vocabulary words as I have always loved words.
                Dismorgrify was one. In attempting to
                verify if I was the first to use it, I could not find the word in any dictionary. My search of the OED
                found 0 results, a search of ChapGPT found
                0 results. However, an obscure article <a
                  href="http://www.vincentstarrett.com/blog/2021/1/2/christopher-morley-goes-to-texas">
                  Studies in Starrett</a> quotes a Christopher Morley as using the term 'dismorgrified intuitions.' As
                there seems to be no
                official recognition of the word, I don't feel inclined to remove
                or change my use of it, however, I also unfortunately don't think I can now say that I invented it.
              </p>
    
            </li>
            <li>
              <p class="bold-underline">Goyathlay ("One who yawns")</p>
              <blockquote> (born June 1829, No-Doyohn Canyon, Mex.—died Feb. 17, 1909, Fort Sill, Okla., U.S.),
                Bedonkohe Apache leader of the Chiricahua Apache, who led his people’s defense of their homeland
                against the military might of the United States. . . .[At one time] no fewer than 5,000 white soldiers
                and 500 Indian auxiliaries were employed at various times in the apprehension of [Goyathlay's] small
                band.
                Five months and 1,645 miles later, Geronimo was tracked to his camp in the Sonora mountains.
              </blockquote>
              <p>You can learn more about his amazing story, entitled with one of his name's you may be more familiar
                with 'Geronimo: His Own Story.'</p>
              <p>see <a href="https://www.britannica.com/biography/Geronimo">Geronimo
                  Apache leader</a>, on <a href="https://www.britannica.com/">Britannica</a></p>
            </li>
            <li>
              <p class="bold-underline">Sydney, son of Slugabed</p>
              <br />
              <p>Sydney, is the long form of Sid. Slugabed is old English.</p>
              <blockquote>
                also slugabed, "one who lingers in bed through laziness, a sluggard," 1590s,
                with bed (n.) + a- (1) + obsolete slugge "lazy person" (c. 1400),
                which is perhaps from Scandinavian (see sluggard, and compare slug (n.1)).
              </blockquote>
              <p>...aka, slothful ;)</p>
              <p>see <a href='https://www.etymonline.com/search?q=slugabed'>slug-a-bed(n)</a>,
                on <a href="https://www.etymonline.com/">Online Etymology Dictionary</a></p>
            </li>
            <li>
              <p class="bold-underline">feohtende (v.)</p>
              <blockquote>'strong verb, class III; present participle of &lt;feohtan, feaht, fuhton, fohten&gt; fight'
              </blockquote>
              <p>an example illustrated by <a href="https://lrc.la.utexas.edu/eieol/engol/30">The University of Texas
                  at
                  Austin: Linguistics Research Center</a>can be found in an Anglo-Saxon Chronicle entry from 755,
                where
                King Cynewulf of Wessex battles with Prince Cyneheard</p>
              <q><em>ond hīe alle on þone cyning wǣrun feohtende oþ þæt hīe hine ofslægenne hæfdon.</em></q>
    
              <blockquote>ond -- conjunction; &lt;and&gt; and -- <strong>then</strong><br>
                hīe -- 3rd person pronoun; nominative plural of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>they</strong><br>
                alle -- adjective; nominative plural of &lt;eall&gt; all -- <strong>all</strong><br>
                on -- preposition; &lt;on&gt; on(to), upon -- <strong>against</strong><br>
                þone -- definite article; accusative singular masculine of &lt;se, sēo, ðæt&gt; the --
                <strong>the</strong><br>
                cyning -- strong noun, masculine; accusative singular of &lt;cyning&gt; king --
                <strong>king</strong><br>
                wǣrun -- anomalous verb; 3rd person plural preterite indicative of &lt;wesan&gt; be, happen --
                <strong>were</strong> # continued, kept on...<br>
                feohtende -- strong verb, class III; present participle of &lt;feohtan, feaht, fuhton,fohten&gt; fight
                -- <strong>fighting</strong><br>
                oþ þæt -- adverbial conjunction; &lt;oð þæt&gt; until -- <strong>until</strong><br>
                hīe -- 3rd person pronoun; nominative plural of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>they</strong><br>
                hine -- 3rd person pronoun; accusative singular masculine of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>him</strong><br>
                ofslægenne -- strong verb, class VI; past participle of &lt;ofslean, ofslōh, ofslōgon, ofslægen&gt;
                slay, destroy -- <strong>slain</strong> # <br>
                ofslōh or ofslōg<br>
                hæfdon -- weak verb, class III; 3rd person plural preterite indicative of&lt;habban, hæfde, hæfd&gt;
                have, possess -- <strong>had</strong><br>
              </blockquote>
              <p>see <a href="https://lrc.la.utexas.edu/eieol/engol/30">Old English Online: Lesson 3, Jonathan
                  Slocum</a>, on <a href="https://liberalarts.utexas.edu/lrc/">Linguistics Research Center: College of
                  Liberal Arts</a></p>
            </li>
            <li>
              <p class="bold-underline"> werede (v.)</p>
              <blockquote>'weak verb, class I; 3rd person singular preterite of &lt;werian, werede, wered&gt; wear;
                defend,
                protect --'
              </blockquote>
              <p>an example illustrated by <a href="https://lrc.la.utexas.edu/eieol/engol/30">The University of Texas
                  at
                  Austin: Linguistics Research Center</a>can be found in an Anglo-Saxon Chronicle entry from 755,
                where
                King Cynewulf of Wessex battles with Prince Cyneheard</p>
              <q><em>Ond þā ongeat se cyning þæt, ond hē on þā duru ēode,
                  ond þā unhēanlīce hine werede oþ hē on þone æþeling lōcude, ond þā ūt rǣsde on hine ond hine miclum
                  gewundode;</em></q>
    
              <blockquote>ond -- conjunction; &lt;and&gt; and -- ...<br>
                þā -- adverb; &lt;þā&gt; then, when -- <strong>when</strong><br>
                ongeat -- strong verb, class V; 3rd person singular preterite of &lt;ongietan, ongeat, ongēaton,
                ongieten&gt; grasp, understand -- <strong>grasped</strong><br>
                se -- definite article; nominative singular masculine of &lt;se, sēo, ðæt&gt; the --
                <strong>the</strong><br>
                cyning -- strong noun, masculine; nominative singular of &lt;cyning&gt; king --
                <strong>king</strong><br>
                þæt -- demonstrative pronoun; accusative singular neuter of &lt;sē, sēo, ðæt&gt; that --
                <strong>this</strong><br>
                ond -- conjunction; &lt;and&gt; and -- ...<br>
                hē -- 3rd person pronoun; nominative singular masculine of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>he</strong><br>
                on -- preposition; &lt;on&gt; on(to), upon -- <strong>to</strong><br>
                þā -- definite article; accusative singular feminine of &lt;se, sēo, ðæt&gt; the --
                <strong>the</strong><br>
                duru -- noun, feminine; accusative singular of &lt;duru&gt; door -- <strong>door</strong> # or "out of
                doors"<br>
                ēode -- anomalous verb; 3rd person singular preterite indicative of &lt;gān&gt; go, walk, move
                --<strong>went</strong><br>
                ond -- conjunction; &lt;and&gt; and -- <strong>and</strong><br>
                þā -- adverb; &lt;þā&gt; then, when -- ...<br>
                unhēanlīce -- adverb; &lt;unhēanlīce&gt; not disgracefully, not ignobly -- <strong>nobly</strong><br>
                hine -- 3rd person pronoun; used as reflexive &lt;hē, hēo, hit&gt; he, she, it --
                <strong>himself</strong><br>
                werede -- weak verb, class I; 3rd person singular preterite of &lt;werian, werede, wered&gt;
                wear;defend, protect -- <strong>protected</strong><br>
                oþ -- adverbial conjunction; &lt;oð&gt; until -- <strong>until</strong><br>
                hē -- 3rd person pronoun; nominative singular masculine of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>he</strong><br>
                on -- preposition; &lt;on&gt; on(to), upon -- <strong></strong>upon<br>
                þone -- definite article; accusative singular masculine of &lt;se, sēo, ðæt&gt; the --
                <strong>the</strong><br>
                æþeling -- strong noun, masculine; accusative singular of &lt;æðeling&gt; nobleman, prince
                --<strong>prince</strong><br>
                lōcude -- weak verb, class II; 3rd person singular preterite of &lt;locian, locode, locod&gt; look
                --<strong>looked</strong><br>
                ond -- conjunction; &lt;and&gt; and -- <strong>and</strong><br>
                þā -- adverb; &lt;þā&gt; then, when -- <strong>then</strong><br>
                ūt -- adverb; &lt;ūt&gt; out -- <strong>out</strong><br>
                rǣsde -- weak verb, class I; 3rd person singular preterite of &lt;rǣsan, rǣsde, rǣsed&gt; rush, hasten
                -- <strong>rushed</strong><br>
                on -- preposition; &lt;on&gt; on(to), upon -- <strong>to</strong><br>
                hine -- 3rd person pronoun; accusative singular masculine of &lt;hē, hēo, hit&gt; he, she, it
                --<strong>him</strong><br>
                ond -- conjunction; &lt;and&gt; and -- <strong>and</strong><br>
                hine -- 3rd person pronoun; accusative singular masculine of &lt;hē, hēo, hit&gt; he, she, it
                --<strong>him</strong><br>
                miclum -- adverb; &lt;micel&gt; much, very -- <strong>severely</strong><br>
                gewundode -- weak verb, class II; 3rd person singular preterite of &lt;gewundian, gewundode,
                gewundod&gt; wound -- <strong>wounded</strong><br>
              </blockquote>
              <p>see <a href="https://lrc.la.utexas.edu/eieol/engol/30">Old English Online: Lesson 3, Jonathan
                  Slocum</a>, on <a href="https://liberalarts.utexas.edu/lrc/">Linguistics Research Center: College of
                  Liberal Arts</a></p>
            </li>
            <li>
              <p class="bold-underline"> ofslægenne (v.)</p>
              <blockquote>strong verb, class VI; past participle of &lt;ofslean, ofslōh, ofslōgon, ofslægen&gt; slay,
                destroy -- slain #
              </blockquote>
              <p>an example illustrated by <a href="https://lrc.la.utexas.edu/eieol/engol/30">The University of Texas
                  at
                  Austin: Linguistics Research Center</a>can be found in an Anglo-Saxon Chronicle entry from 755,
                where
                King Cynewulf of Wessex battles with Prince Cyneheard</p>
              <q><em>ond hīe alle on þone cyning wǣrun feohtende oþ þæt hīe hine ofslægenne hæfdon.</em></q>
              </blockquote>
              <blockquote>ond -- conjunction; &lt;and&gt; and -- <strong>then</strong><br>
                hīe -- 3rd person pronoun; nominative plural of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>they</strong><br>
                alle -- adjective; nominative plural of &lt;eall&gt; all -- <strong>all</strong><br>
                on -- preposition; &lt;on&gt; on(to), upon -- <strong>against</strong><br>
                þone -- definite article; accusative singular masculine of &lt;se, sēo, ðæt&gt; the --
                <strong>the</strong><br>
                cyning -- strong noun, masculine; accusative singular of &lt;cyning&gt; king --
                <strong>king</strong><br>
                wǣrun -- anomalous verb; 3rd person plural preterite indicative of &lt;wesan&gt; be, happen --
                <strong>were</strong> # continued, kept on...<br>
                feohtende -- strong verb, class III; present participle of &lt;feohtan, feaht, fuhton,fohten&gt; fight
                -- <strong>fighting</strong><br>
                oþ þæt -- adverbial conjunction; &lt;oð þæt&gt; until -- <strong>until</strong><br>
                hīe -- 3rd person pronoun; nominative plural of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>they</strong><br>
                hine -- 3rd person pronoun; accusative singular masculine of &lt;hē, hēo, hit&gt; he, she, it --
                <strong>him</strong><br>
                ofslægenne -- strong verb, class VI; past participle of &lt;ofslean, ofslōh, ofslōgon, ofslægen&gt;
                slay, destroy -- <strong>slain</strong> # <br>
                ofslōh or ofslōg<br>
                hæfdon -- weak verb, class III; 3rd person plural preterite indicative of&lt;habban, hæfde, hæfd&gt;
                have, possess -- <strong>had</strong><br>
              </blockquote>
              <p>see <a href="https://lrc.la.utexas.edu/eieol/engol/30">Old English Online: Lesson 3, Jonathan
                  Slocum</a>, on <a href="https://liberalarts.utexas.edu/lrc/">Linguistics Research Center: College of
                  Liberal Arts</a></p>
            </li>
            <li>
              <p class="bold-underline"> Hatchala (התחלה) (verbal noun)</p>
              <blockquote>התחלה
                Hebrew
                Etymology
                Root
                ת־ח־ל‎ (t-ḥ-l)
                Verbal noun of הִתְחִיל‎ (“to begin”).
                Noun
                הַתְחָלָה • (hatkhalá) f (plural indefinite הַתְחָלוֹת‎, singular construct הַתְחָלַת־‎) [pattern:
                הַקְטָלָה]
                Start, beginning.
              </blockquote>
              <p>see <a href="https://en.wiktionary.org/wiki/%D7%94%D7%AA%D7%97%D7%9C%D7%94">התחלה</a>, on <a
                  href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page">Wiktionary</a></p>
            </li>
            <li>
              <p class="bold-underline"> anræd (adj)</p><br />
              <blockquote>
                resolute
              </blockquote>
              <p>see <a href="https://www.st-andrews.ac.uk/~cr30/vocabulary/">Old English Core Vocabulary</a>.</p>
            </li>
            <li>
              <p class="bold-underline"> The Spinner, the Giver, The Inflexible</p>
              <p>A reference to the Greek Fates, the women spinners who decided the fate of men and Gods alike.</p>
            </li>
            <li>
              <p class="bold-underline"> The Furies, The Fates, The Death Dainones, Thanatos</p>
              <p>All were Greek Gods of the underworld.</p>
            </li>
            <li>
              <p>Title font "Angars Ruins" created by <a href="http://www.mansgreback.com/">Mans Greback</a>. Used
                under
                non-profit license QF121285258G as this is a public facing site, but with no way nor desire of making
                a
                profit.</p>
            </li>
            <li>
              <p>File # 396656517, a video of Powerful Female in medieval armor by <a
                  href="https://stock.adobe.com/contributor/205110669/procinemastock?load_type=author&prev_url=detail">procinemastock</a>.
                Used under Adobe Stock license.</p>
            </li>
            <li>
              <p>File # 630909246, a faceless wraith lingers in the air, by <a
                  href="https://stock.adobe.com/contributor/207618192/justlight?load_type=author&prev_url=detail">justlight</a>.
                Used under Adobe Stock license.</p>
            </li>
            <li>
              <p>File # 199937353, realistic dry ice smoke, by <a
                  href="https://stock.adobe.com/contributor/206637170/mputsylo?load_type=author&prev_url=detail">myputsylo</a>.
                Used under Adobe Stock license.</p>
            </li>
            <li>
              <p>Character Images created by "Travel Dawn," licensed under Adobe Standard license.</p>
            </li>
            <li>
              <p>UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p>
            </li>
            <li>
              <p>
                Skull icons created by <a href="https://www.flaticon.com/free-icons/skull" title="skull icons">yut1655
                  - Flaticon</a>
              </p>
            </li>
            <li>
              <p>
                Hands icons created by <a href="https://www.flaticon.com/free-icons/hands" title="hands icons">surang
                  - Flaticon</a>
              </p>
            </li>
            <li>
              <p>
                Doctor icons created by <a href="https://www.flaticon.com/free-icons/doctor"
                  title="doctor icons">Freepik - Flaticon</a>
              </p>
            </li>
    
          </ul>
    
        </section>
      </div>
    </div>
    `
    document.getElementById('main-container').appendChild(footerHTML)
})
